import { useEffect, useRef } from "react";

/**
 * TechArc — animated glowing blue arc with particle streaks
 * Background removed — only arc energy and particles visible.
 *
 * Props:
 *  width  {number}  canvas logical width  (default 1200)
 *  height {number}  canvas logical height (default 520)
 *  style  {object}  extra inline styles on the wrapper div
 */
const TechArc = ({ width = 1200, height = 520, style = {} }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // ── arc geometry ──────────────────────────────────────────────
    const cx = width * 0.5;
    const cy = height * 1.08;
    const R = height * 1.02;
    const arcStartAngle = Math.PI * 1.18;
    const arcEndAngle = Math.PI * 1.82;

    // ── particle pool ────────────────────────────────────────────
    const PARTICLE_COUNT = 90;
    const particles = [];

    function randomOnArc() {
      const a = arcStartAngle + Math.random() * (arcEndAngle - arcStartAngle);
      const r = R + (Math.random() - 0.5) * 18;
      return { a, r };
    }

    function spawnParticle() {
      const { a, r } = randomOnArc();
      const speed =
        (Math.random() * 0.004 + 0.002) * (Math.random() < 0.5 ? 1 : -1);
      const life = Math.random() * 0.6 + 0.4;
      const colors = [
        `rgba(80,180,255,`,
        `rgba(120,200,255,`,
        `rgba(200,160,255,`,
        `rgba(60,140,255,`,
        `rgba(255,255,255,`,
      ];
      return {
        a,
        r,
        speed,
        life,
        maxLife: life,
        len: Math.random() * 0.06 + 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 2.5 + 0.5,
        radialOffset: (Math.random() - 0.5) * 30,
      };
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    // ── tick markers ─────────────────────────────────────────────
    const TICK_COUNT = 36;
    const ticks = Array.from({ length: TICK_COUNT }, (_, i) => {
      const t = i / TICK_COUNT;
      return {
        a: arcStartAngle + t * (arcEndAngle - arcStartAngle),
        len: Math.random() < 0.25 ? 18 : 7,
        opacity: Math.random() * 0.5 + 0.2,
        width: Math.random() < 0.25 ? 1.5 : 0.8,
      };
    });

    // ── render ────────────────────────────────────────────────────
    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // ── 1. outer glow halo (fat, soft) ──
      for (let pass = 0; pass < 3; pass++) {
        const spread = [80, 45, 16][pass];
        const alpha = [0.12, 0.18, 0.35][pass];
        ctx.beginPath();
        ctx.arc(cx, cy, R, arcStartAngle, arcEndAngle);
        ctx.strokeStyle = `rgba(60,160,255,${alpha})`;
        ctx.lineWidth = spread;
        ctx.stroke();
      }

      // ── 2. main arc — bright cyan-blue ──
      ctx.beginPath();
      ctx.arc(cx, cy, R, arcStartAngle, arcEndAngle);
      const arcGrad = ctx.createLinearGradient(
        cx + R * Math.cos(arcStartAngle),
        cy + R * Math.sin(arcStartAngle),
        cx + R * Math.cos(arcEndAngle),
        cy + R * Math.sin(arcEndAngle),
      );
      arcGrad.addColorStop(0.0, "rgba(40,100,200,0.0)");
      arcGrad.addColorStop(0.15, "rgba(80,180,255,1.0)");
      arcGrad.addColorStop(0.5, "rgba(150,220,255,1.0)");
      arcGrad.addColorStop(0.85, "rgba(200,170,255,1.0)");
      arcGrad.addColorStop(1.0, "rgba(140,100,240,0.0)");
      ctx.strokeStyle = arcGrad;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // ── 3. inner bright core ──
      ctx.beginPath();
      ctx.arc(cx, cy, R, arcStartAngle, arcEndAngle);
      ctx.strokeStyle = "rgba(220,250,255,0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // ── 4. tick marks ──
      ticks.forEach((tk) => {
        const px = cx + R * Math.cos(tk.a);
        const py = cy + R * Math.sin(tk.a);
        const nx = Math.cos(tk.a);
        const ny = Math.sin(tk.a);
        ctx.beginPath();
        ctx.moveTo(px - nx * tk.len * 0.4, py - ny * tk.len * 0.4);
        ctx.lineTo(px + nx * tk.len * 0.6, py + ny * tk.len * 0.6);
        ctx.strokeStyle = `rgba(120,200,255,${tk.opacity})`;
        ctx.lineWidth = tk.width;
        ctx.stroke();
      });

      // ── 5. particles (streaks along arc) ──
      const dt = 0.016;
      particles.forEach((p) => {
        p.a += p.speed;
        p.life -= dt * 0.4;

        if (p.life <= 0 || p.a < arcStartAngle || p.a > arcEndAngle) {
          const next = spawnParticle();
          Object.assign(p, next);
          return;
        }

        const alpha = p.life / p.maxLife;
        const r2 = p.r + p.radialOffset;

        const x1 = cx + r2 * Math.cos(p.a);
        const y1 = cy + r2 * Math.sin(p.a);
        const x2 = cx + r2 * Math.cos(p.a - p.len * Math.sign(p.speed));
        const y2 = cy + r2 * Math.sin(p.a - p.len * Math.sign(p.speed));

        const pg = ctx.createLinearGradient(x2, y2, x1, y1);
        pg.addColorStop(0, p.color + "0)");
        pg.addColorStop(1, p.color + alpha.toFixed(2) + ")");

        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = pg;
        ctx.lineWidth = p.width;
        ctx.stroke();
      });

      // ── 6. stray star dots ──
      if (frame % 4 === 0) {
        for (let i = 0; i < 3; i++) {
          const sx = Math.random() * width;
          const sy = Math.random() * height * 0.6;
          const sr = Math.random() * 1.2;
          ctx.beginPath();
          ctx.arc(sx, sy, sr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,230,255,${Math.random() * 0.5 + 0.1})`;
          ctx.fill();
        }
      }

      frame++;
      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [width, height]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default TechArc;
