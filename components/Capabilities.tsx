import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Layers,
  Server,
  BarChart3,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import siteDefaults from '@/lib/site-defaults.json';

const cardBase =
  'relative rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm overflow-hidden transition-all duration-500 group';

const defaultCaps = siteDefaults.home_page.capabilitiesSection.cards;
const caps = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'High-performance React & Next.js applications built for infinite scalability and speed.',
    href: '/services/web-development',
    accent: '#4f8ef7',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
    tag: 'Core Service',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native-feel cross-platform experiences that users love to keep in their pockets.',
    href: '/services/web-development',
    accent: '#a78bfa',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
    tag: 'iOS & Android',
  },
  {
    icon: Layers,
    title: 'SaaS Products',
    desc: 'Multi-tenant architecture design for subscription-based software products.',
    href: '/services',
    accent: '#22d3ee',
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-cyan-400',
    tag: 'B2B',
  },
  {
    icon: Server,
    title: 'Enterprise Platforms',
    desc: 'Architecture-first web applications designed for high availability and enterprise security compliance.',
    href: '/services',
    accent: '#34d399',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    tag: 'B2B',
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence',
    desc: 'Transform raw data into actionable strategic insights through advanced analytics dashboards.',
    href: '/services/digital-marketing',
    accent: '#fb923c',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    tag: 'Analytics',
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Reduce operational overhead with intelligent workflow automation and AI integration.',
    href: '/services/marketing-automation',
    accent: '#f472b6',
    iconBg: 'bg-pink-500/15',
    iconColor: 'text-pink-400',
    tag: 'AI-Powered',
  },
];

const iconMap = {
  Globe,
  Smartphone,
  Layers,
  Server,
  BarChart3,
  Zap,
};

/* ── featured card ── */
const FeaturedCard = ({ cap }: { cap: (typeof caps)[0] }) => {
  const Icon = cap.icon;
  return (
    <Link
      to={cap.href}
      className={`${cardBase} flex flex-col justify-between p-8 h-full hover:border-white/15 hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${cap.accent}80, transparent)` }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-56 rounded-full blur-[100px] opacity-20 pointer-events-none group-hover:opacity-35 transition-opacity duration-700"
        style={{ background: cap.accent }} />

      <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
        style={{ background: `${cap.accent}18`, color: cap.accent, border: `1px solid ${cap.accent}30` }}>
        {cap.tag}
      </span>

      <div className={`w-16 h-16 rounded-2xl ${cap.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105`}
        style={{ border: `1px solid ${cap.accent}25` }}>
        <Icon className={`w-7 h-7 ${cap.iconColor}`} strokeWidth={1.5} />
      </div>

      <div className="flex-1">
        <h3 className="text-white text-2xl font-bold tracking-tight mb-3">{cap.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: cap.accent }}>Learn More</span>
        <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: `${cap.accent}18`, border: `1px solid ${cap.accent}30` }}>
          <ArrowUpRight className="w-4 h-4" style={{ color: cap.accent }} />
        </div>
      </div>
    </Link>
  );
};

/* ── small card ── */
const SmallCard = ({ cap }: { cap: (typeof caps)[0] }) => {
  const Icon = cap.icon;
  return (
    <Link to={cap.href}
      className={`${cardBase} flex flex-col p-6 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-xl`}>
      <div className="absolute inset-x-0 top-0 h-px opacity-40"
        style={{ background: `linear-gradient(90deg, transparent, ${cap.accent}70, transparent)` }} />
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl ${cap.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
          style={{ border: `1px solid ${cap.accent}25` }}>
          <Icon className={`w-5 h-5 ${cap.iconColor}`} strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: `${cap.accent}15`, color: cap.accent }}>{cap.tag}</span>
      </div>
      <h3 className="text-white text-base font-semibold tracking-tight mb-2">{cap.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed flex-1">{cap.desc}</p>
      <div className="mt-5 flex items-center gap-1.5">
        <span className="text-[11px] font-semibold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ color: cap.accent }}>Learn More</span>
        <ArrowRight className="w-3 h-3 transition-all duration-300 group-hover:translate-x-1" style={{ color: cap.accent }} />
      </div>
    </Link>
  );
};

/* ── stat card ── */
const StatCard = ({ value, label, accent }: { value: string; label: string; accent: string }) => (
  <div className={`${cardBase} flex flex-col justify-center items-center p-6 hover:border-white/15`}>
    <div className="absolute inset-x-0 top-0 h-px opacity-30"
      style={{ background: `linear-gradient(90deg, transparent, ${accent}70, transparent)` }} />
    <p className="text-4xl font-extrabold mb-1 tracking-tighter" style={{ color: accent }}>{value}</p>
    <p className="text-gray-400 text-xs text-center leading-tight">{label}</p>
  </div>
);

/* ── motion graphics card ── */
const MotionCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Node setup
    const colors = ['#4f8ef7', '#a78bfa', '#22d3ee', '#f472b6', '#34d399', '#fb923c'];
    const nodes = Array.from({ length: 28 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1.2,
      color: colors[i % colors.length],
      pulse: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;

      // Move nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.04;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 110;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, nodes[i].color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
            grad.addColorStop(1, nodes[j].color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulse = 0.7 + 0.3 * Math.sin(n.pulse);
        // Outer glow
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5 * pulse);
        glow.addColorStop(0, n.color + '55');
        glow.addColorStop(1, n.color + '00');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
      });

      // Flowing data pulses along connections
      nodes.forEach((n, i) => {
        const target = nodes[(i + 3) % nodes.length];
        const p = (t * 0.6 + i * 0.3) % 1;
        const px = n.x + (target.x - n.x) * p;
        const py = n.y + (target.y - n.y) * p;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = n.color + 'cc';
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`${cardBase} relative flex flex-col items-center justify-end h-full min-h-[320px] md:min-h-[280px] overflow-hidden`}>
      {/* Top-edge gradient */}
      <div className="absolute inset-x-0 top-0 h-px opacity-60 z-10"
        style={{ background: 'linear-gradient(90deg, transparent, #a78bfa90, #4f8ef790, transparent)' }} />

      {/* Deep background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080820] via-[#0c0c28] to-[#0a0a1c]" />

      {/* Central radial bloom */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, #3b82f6 40%, transparent 70%)',
            animation: 'bloom-pulse 4s ease-in-out infinite',
          }} />
      </div>

      {/* Canvas neural network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Orbiting rings – layered on canvas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '-15%', md: { top: '-10%' } } as any}>
        {/* Ring 1 — tight, fast */}
        <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full"
          style={{ border: '1px solid rgba(99,102,241,0.45)', animation: 'orbit1 6s linear infinite' }}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            style={{ background: '#818cf8', boxShadow: '0 0 8px 3px #818cf8aa' }} />
        </div>
        {/* Ring 2 — medium, reverse */}
        <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full"
          style={{ border: '1px solid rgba(139,92,246,0.30)', animation: 'orbit2 10s linear infinite reverse' }}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
            style={{ background: '#a78bfa', boxShadow: '0 0 8px 3px #a78bfaaa' }} />
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
            style={{ background: '#22d3ee', boxShadow: '0 0 6px 2px #22d3eeaa' }} />
        </div>
        {/* Ring 3 — wide, slow */}
        <div className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full"
          style={{ border: '1px solid rgba(34,211,238,0.18)', animation: 'orbit3 16s linear infinite' }}>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
            style={{ background: '#22d3ee', boxShadow: '0 0 6px 2px #22d3eeaa' }} />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
            style={{ background: '#f472b6', boxShadow: '0 0 5px 2px #f472b6aa' }} />
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
            style={{ background: '#34d399', boxShadow: '0 0 5px 2px #34d399aa' }} />
        </div>
        {/* Ring 4 — outermost, very slow */}
        <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full"
          style={{ border: '1px solid rgba(244,114,182,0.12)', animation: 'orbit1 22s linear infinite reverse' }}>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
            style={{ background: '#fb923c', boxShadow: '0 0 4px 2px #fb923caa' }} />
        </div>

        {/* Core orb */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full blur-xl opacity-80"
            style={{ background: 'radial-gradient(#7c3aed, #3b82f6)', animation: 'bloom-pulse 3s ease-in-out infinite' }} />
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full z-10"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 0 20px 6px #6366f155',
              animation: 'bloom-pulse 3s ease-in-out infinite',
            }} />
        </div>
      </div>

      {/* Floating service-label chips */}
      {[
        { label: 'Web Dev', color: '#4f8ef7', top: '10%', left: '8%', delay: '0s' },
        { label: 'AI/ML', color: '#a78bfa', top: '6%', right: '10%', delay: '0.6s' },
        { label: 'SaaS', color: '#22d3ee', bottom: '42%', left: '6%', delay: '1.1s' },
        { label: 'Mobile', color: '#f472b6', bottom: '42%', right: '6%', delay: '1.6s' },
      ].map((chip) => (
        <div key={chip.label}
          className="absolute z-20 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-[8px] md:text-[9px] font-bold tracking-widest uppercase"
          style={{
            top: chip.top, left: (chip as any).left, right: (chip as any).right, bottom: chip.bottom,
            color: chip.color,
            background: chip.color + '18',
            border: `1px solid ${chip.color}40`,
            animation: `chip-float 4s ease-in-out infinite`,
            animationDelay: chip.delay,
          }}>
          {chip.label}
        </div>
      ))}

      {/* Bottom overlay — text */}
      <div className="relative z-20 w-full px-6 md:px-8 pb-6 md:pb-8 pt-4 flex flex-col items-center text-center"
        style={{ background: 'linear-gradient(to top, #0a0a1c 80%, transparent)' }}>
        <p className="text-white font-bold text-lg md:text-xl tracking-tight mb-1">
          Powered by Intelligence
        </p>
        <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed max-w-[240px]">
          AI-driven systems that evolve with your business needs
        </p>
        {/* Scanning line */}
        <div className="mt-4 w-full max-w-[160px] h-px relative overflow-hidden rounded-full bg-white/5">
          <div className="absolute h-px"
            style={{
              width: '50%',
              background: 'linear-gradient(90deg, transparent, #818cf8, transparent)',
              animation: 'scan-line 2s ease-in-out infinite',
            }} />
        </div>
      </div>

      <style>{`
        @keyframes orbit1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit2 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit3 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bloom-pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.18); opacity: 0.8; }
        }
        @keyframes chip-float {
          0%,100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes scan-line {
          0% { left: -50%; }
          100% { left: 150%; }
        }
      `}</style>
    </div>
  );
};

/* ── main section ── */
const Capabilities = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const { data } = useSiteSettings('home_page', siteDefaults.home_page);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0');
            e.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  const capabilitySection = data.capabilitiesSection || siteDefaults.home_page.capabilitiesSection;
  const mappedCaps = (capabilitySection.cards || defaultCaps).map((cap) => ({
    ...cap,
    icon: iconMap[cap.iconName as keyof typeof iconMap] || Globe,
  }));
  const [web, mobile, saas, enterprise, dataCard, automation] = mappedCaps;
  const capabilityStats = capabilitySection.stats || siteDefaults.home_page.capabilitiesSection.stats;

  return (
    <section className="relative bg-[#06060f] py-24 md:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-blue-900/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-purple-900/10 blur-[140px] rounded-full" />
      </div>
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(180,180,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(180,180,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">{capabilitySection.eyebrow}</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{capabilitySection.title}</h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              {capabilitySection.description}
            </p>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-blue-500/40 via-violet-500/20 to-transparent" />
        </div>

        {/* ── Bento grid (Stacked on mobile, 4 cols on desktop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Col 1 row 1: stat */}
          <div className="md:col-span-1 lg:col-start-1 lg:row-start-1">
            <StatCard value={capabilityStats[0]?.value || "200+"} label={capabilityStats[0]?.label || "Projects Delivered"} accent={capabilityStats[0]?.accent || "#4f8ef7"} />
          </div>

          {/* Col 1 row 2: mobile */}
          <div className="md:col-span-1 lg:col-start-1 lg:row-start-2">
            <SmallCard cap={mobile} />
          </div>

          {/* Col 1 row 3: enterprise */}
          <div className="md:col-span-1 lg:col-start-1 lg:row-start-3">
            <SmallCard cap={enterprise} />
          </div>

          {/* Col 1 row 4: stat */}
          <div className="md:col-span-1 lg:col-start-1 lg:row-start-4">
            <StatCard value={capabilityStats[1]?.value || "8+"} label={capabilityStats[1]?.label || "Years of Experience"} accent={capabilityStats[1]?.accent || "#34d399"} />
          </div>

          {/* Col 2+3 row 1+2: featured web dev */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1">
            <FeaturedCard cap={web} />
          </div>

          {/* Col 2+3 row 3+4: motion graphics */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-3">
            <MotionCard />
          </div>

          {/* Col 4 row 1: stat */}
          <div className="md:col-span-1 lg:col-start-4 lg:row-start-1">
            <StatCard value={capabilityStats[2]?.value || "98%"} label={capabilityStats[2]?.label || "Client Satisfaction"} accent={capabilityStats[2]?.accent || "#a78bfa"} />
          </div>

          {/* Col 4 row 2: saas */}
          <div className="md:col-span-1 lg:col-start-4 lg:row-start-2">
            <SmallCard cap={saas} />
          </div>

          {/* Col 4 row 3: data */}
          <div className="md:col-span-1 lg:col-start-4 lg:row-start-3">
            <SmallCard cap={dataCard} />
          </div>

          {/* Col 4 row 4: automation */}
          <div className="md:col-span-1 lg:col-start-4 lg:row-start-4">
            <SmallCard cap={automation} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 bg-white/5
                       text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20
                       transition-all duration-300 hover:-translate-y-0.5">
            {capabilitySection.ctaLabel || "View All Services"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
