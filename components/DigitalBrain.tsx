import React, { useRef, useEffect } from 'react';

const DigitalBrain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Node setup
    const nodeCount = 60;
    const nodes: any[] = [];
    const colors = ['#4f8ef7', '#a78bfa', '#22d3ee', '#34d399'];

    for (let i = 0; i < nodeCount; i++) {
      // Initialize in a sphere-like distribution (random but roughly centered)
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.random() * Math.PI;
      const radius = Math.random() * 120 + 30;

      nodes.push({
        x: width / 2 + Math.cos(angle1) * Math.sin(angle2) * radius,
        y: height / 2 + Math.sin(angle1) * Math.sin(angle2) * radius,
        z: Math.cos(angle2) * radius,
        ox: 0, // original offset for sphere math
        oy: 0,
        oz: 0,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 2 + 1,
        color: colors[i % colors.length],
        pulse: Math.random() * Math.PI * 2
      });
      
      // Store sphere coordinates relative to center
      nodes[i].ox = nodes[i].x - width/2;
      nodes[i].oy = nodes[i].y - height/2;
      nodes[i].oz = nodes[i].z;
    }

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.005;

      // Rotate sphere
      const cosT = Math.cos(t);
      const sinT = Math.sin(t);

      const projectedNodes = nodes.map(n => {
        // Simple 3D rotation around Y axis
        const x1 = n.ox * cosT - n.oz * sinT;
        const z1 = n.ox * sinT + n.oz * cosT;
        
        // Rotation around X axis
        const y2 = n.oy * cosT - z1 * sinT;
        const z2 = n.oy * sinT + z1 * cosT;

        // Perspective projection
        const perspective = 400 / (400 + z2);
        const px = width / 2 + x1 * perspective;
        const py = height / 2 + y2 * perspective;

        return { ...n, px, py, pz: z2, perspective };
      });

      // Sort by Z for depth
      projectedNodes.sort((a, b) => b.pz - a.pz);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dx = n1.px - n2.px;
          const dy = n1.py - n2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.2 * n1.perspective * n2.perspective;
            ctx.beginPath();
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw pulse core
      const corePulse = Math.sin(t * 4) * 0.1 + 0.9;
      const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 80 * corePulse);
      grad.addColorStop(0, 'rgba(79, 142, 247, 0.15)');
      grad.addColorStop(0.5, 'rgba(167, 139, 250, 0.05)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(width/2, height/2, 80 * corePulse, 0, Math.PI * 2);
      ctx.fill();

      // Draw nodes
      projectedNodes.forEach(n => {
        const pulse = Math.sin(t * 10 + n.pulse) * 0.3 + 0.7;
        const size = n.r * n.perspective * pulse;
        
        // Glow
        const nodeGrad = ctx.createRadialGradient(n.px, n.py, 0, n.px, n.py, size * 4);
        nodeGrad.addColorStop(0, n.color + '66');
        nodeGrad.addColorStop(1, n.color + '00');
        
        ctx.fillStyle = nodeGrad;
        ctx.beginPath();
        ctx.arc(n.px, n.py, size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Dot
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.px, n.py, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-30" />
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        style={{ filter: 'drop-shadow(0 0 20px rgba(79, 142, 247, 0.2))' }}
      />
    </div>
  );
};

export default DigitalBrain;
