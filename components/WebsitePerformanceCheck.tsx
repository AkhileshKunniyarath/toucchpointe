import React, { useState, useEffect, useRef } from 'react';
import {
  Rocket, Check, AlertTriangle, ArrowRight, Gauge, Zap, Globe,
  Mail, X, Search, TrendingUp, Smartphone, ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

/* ─── Types ─────────────────────────────────────────── */
interface ScoreResult {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  overall: number;
}

/* ─── Feature cards data ─────────────────────────────── */
const features = [
  { icon: <TrendingUp className="h-5 w-5 text-blue-400" />, stat: 32, suffix: '%', title: 'More Conversions', desc: 'On fast websites.' },
  { icon: <Search className="h-5 w-5 text-cyan-400" />, stat: 1, suffix: 'st', title: 'Page Rankings', desc: 'Prioritized by Google.' },
  { icon: <Smartphone className="h-5 w-5 text-blue-400" />, stat: 60, suffix: '%', title: 'Mobile Browsers', desc: 'Exclusive device base.' },
  { icon: <ShieldCheck className="h-5 w-5 text-cyan-400" />, stat: 50, suffix: '%', title: 'Longer Sessions', desc: 'Due to optimized UX.' },
];

/* ─── Score helpers ──────────────────────────────────── */
const getScoreColor = (s: number) =>
  s >= 90 ? 'text-emerald-400' : s >= 70 ? 'text-amber-400' : 'text-red-400';

const getProgressColor = (s: number) =>
  s >= 90 ? 'bg-emerald-500' : s >= 70 ? 'bg-amber-500' : 'bg-red-500';

const getRatingText = (s: number) =>
  s >= 90 ? 'Excellent' : s >= 70 ? 'Good' : s >= 50 ? 'Average' : 'Needs Improvement';

/* ─── Circular progress ring ─────────────────────────── */
const ScoreRing = ({ score, colour }: { score: number; colour: string }) => {
  const r = 42;
  const C = 2 * Math.PI * r;
  const offset = C - (score / 100) * C;
  return (
    <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
      <circle
        cx="50" cy="50" r={r}
        fill="none"
        stroke={colour}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.2s ease' }}
      />
    </svg>
  );
};

/* ─── Mini score bar ─────────────────────────────────── */
const ScoreBar = ({ label, score }: { label: string; score: number }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs text-gray-400">{label}</span>
      <span className={cn('text-xs font-bold', getScoreColor(score))}>{score}</span>
    </div>
    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
      <div
        className={cn('h-full rounded-full transition-all duration-1000', getProgressColor(score))}
        style={{ width: `${score}%` }}
      />
    </div>
  </div>
);

/* ─── Animated Number Component ──────────────────────── */
const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let raf: number;
    let startTime: number;
    const duration = 2000;
    const step = (now: number) => {
      if (!startTime) startTime = now;
      const p = Math.min((now - startTime) / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.floor(ease * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, visible]);

  return <span ref={ref}>{count}</span>;
};

/* ─── Glow Card Wrapper ──────────────────────────────── */
const GlowWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !glowRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(59,130,246,0.15), transparent 60%)`;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.background = 'transparent';
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cn("relative overflow-hidden", className)}>
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-all duration-300 z-0" />
      <div className="relative z-10 w-full h-full text-left">
        {children}
      </div>
    </div>
  );
};

/* ─── Motion Graphics Canvas ─────────────────────────── */
const PerformanceCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let raf: number;
    let particles: { angle: number, speed: number, rOffset: number, size: number, alpha: number }[] = [];
    
    for (let i = 0; i < 200; i++) {
      particles.push({
        angle: Math.random() * Math.PI,
        speed: 0.0005 + Math.random() * 0.0015,
        rOffset: (Math.random() - 0.5) * 40,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random()
      });
    }

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 700;
    };
    resize();
    window.addEventListener('resize', resize);

    let t = 0;
    const draw = () => {
      t += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = -150;
      const baseR = 500;

      [baseR, baseR - 20, baseR + 30].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI);
        ctx.strokeStyle = i === 1 ? 'rgba(6,182,212,0.15)' : 'rgba(59,130,246,0.08)';
        ctx.lineWidth = i === 1 ? 2 : 1;
        if (i === 2) ctx.setLineDash([4, 8]);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      particles.forEach(p => {
        p.angle += p.speed;
        if (p.angle > Math.PI) p.angle = 0;
        
        const r = baseR + p.rOffset;
        const px = cx + Math.cos(p.angle) * r;
        const py = cy + Math.sin(p.angle) * r;
        const edgeFade = Math.sin(p.angle);
        const currentAlpha = p.alpha * edgeFade;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${currentAlpha})`;
        ctx.fill();

        const trailX = cx + Math.cos(p.angle - p.speed * 15) * r;
        const trailY = cy + Math.sin(p.angle - p.speed * 15) * r;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(trailX, trailY);
        ctx.strokeStyle = `rgba(59,130,246,${currentAlpha * 0.5})`;
        ctx.lineWidth = p.size;
        ctx.stroke();
      });

      const g = ctx.createRadialGradient(cx, cy + baseR, 0, cx, cy + baseR, 600);
      g.addColorStop(0, `rgba(30,64,175,${0.15 + Math.sin(t) * 0.05})`);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-x-0 top-0 w-full h-[700px] pointer-events-none z-0" />;
};

/* ─── Main Component ─────────────────────────────────── */
const WebsitePerformanceCheck = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [error, setError] = useState('');
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  /* intersection reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* progress simulation */
  const startProgressSimulation = () => {
    setAnalysisProgress(0);
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        const next = prev + Math.random() * 10;
        if (prev < 90 && next >= 90) setShowEmailInput(true);
        if (next >= 95) { clearInterval(interval); return 95; }
        return next;
      });
    }, 300);
    setTimeout(() => clearInterval(interval), 30000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) { setError('Please enter a URL'); return; }
    let processedUrl = url;
    if (!processedUrl.startsWith('http://') && !processedUrl.startsWith('https://'))
      processedUrl = 'https://' + processedUrl;

    setIsLoading(true);
    setError('');
    setResult(null);
    startProgressSimulation();

    try {
      const response = await fetch(`${API_BASE}/api/pagespeed?url=${encodeURIComponent(processedUrl)}`);
      const apiData = await response.json();
      const categories = apiData?.lighthouseResult?.categories;
      if (!categories || !categories.performance?.score)
        throw new Error('Performance score missing from API response');

      const performance = parseFloat((categories.performance.score * 100).toFixed(2));
      const overall = performance;
      setResult({ performance, accessibility: 0, bestPractices: 0, seo: 0, overall });

      await fetch(`${API_BASE}/api/pagespeed/record`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: processedUrl, email: email || null, performance, accessibility: 0, bestPractices: 0, seo: 0 }),
      });

      toast({ title: 'Analysis Complete', description: 'Your performance report has been submitted!' });
    } catch (err) {
      setError('Failed to analyze website. Please try again later.');
      toast({ variant: 'destructive', title: 'Analysis Failed', description: 'An unexpected error occurred.' });
    } finally {
      setIsLoading(false);
      setAnalysisProgress(100);
    }
  };

  return (
    <section
      id="website-performance"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#06060f] to-[#05051a] py-24 md:py-36 overflow-hidden"
    >
      {/* ── Starfield background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() > 0.8 ? '2px' : '1px',
              height: Math.random() > 0.8 ? '2px' : '1px',
              opacity: 0.1 + Math.random() * 0.25,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* ── Large central glow arc ── */}
      <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
        <PerformanceCanvas />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ── */}
        <div className={`max-w-2xl mx-auto text-center mb-16 md:mb-20 transition-all duration-1000
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase">
            <Rocket className="h-3.5 w-3.5" />
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-[1.1] tracking-tight text-white">
            Optimize Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
              Digital Presence
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Your website is your digital storefront. Check how well it performs and discover how we can help you optimize it.
          </p>
        </div>

        {/* ── Feature pills row ── */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-5xl mx-auto transition-all duration-1000 delay-200
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]
                hover:bg-blue-500/[0.06] hover:border-blue-500/25 transition-all duration-500 cursor-default
                shadow-[0_0_0_rgba(59,130,246,0)] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  {f.icon}
                </div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-blue-400 group-hover:to-cyan-400 transition-colors duration-500">
                  <AnimatedNumber value={f.stat} />{f.suffix}
                </div>
              </div>
              <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{f.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom split: checker card + copy ── */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto
          transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* ── LEFT: Website checker glassmorphic card ── */}
          <GlowWrapper className="rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-md p-6 md:p-8 shadow-2xl group">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                <Globe className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Website Performance Checker</h3>
                <p className="text-xs text-gray-500">Free analysis in seconds</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* URL input */}
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="yourwebsite.com"
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08]
                    text-white placeholder-gray-600 text-sm outline-none
                    focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />
                {error && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5" /> {error}
                  </p>
                )}
              </div>

              {/* Email input (appears mid-analysis) */}
              {showEmailInput && isLoading && (
                <div className="rounded-xl bg-blue-500/[0.06] border border-blue-500/20 p-4 animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-semibold text-blue-300 flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" /> Want a detailed report?
                    </h4>
                    <button type="button" onClick={() => setShowEmailInput(false)}>
                      <X className="h-4 w-4 text-gray-500 hover:text-gray-300 transition-colors" />
                    </button>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com (optional)"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08]
                      text-white placeholder-gray-600 text-xs outline-none focus:border-blue-500/30 transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-1.5">Get optimization tips from our specialists.</p>
                </div>
              )}

              {/* Analyse button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative overflow-hidden w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest
                  bg-gradient-to-r from-blue-600 to-cyan-500 text-white
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-0.5
                  disabled:opacity-60 transition-all duration-300 group/btn"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <><Gauge className="h-4 w-4" /> Analyze Website</>
                  )}
                </span>
                {/* shimmer */}
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover/btn:translate-x-[500%] transition-transform duration-700" />
                </span>
              </button>
            </form>

            {/* Progress bar */}
            {isLoading && (
              <div className="mt-5 space-y-2">
                <p className="text-xs text-gray-500 text-center">Analyzing your website performance…</p>
                <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="relative inline-flex items-center justify-center">
                    <ScoreRing score={result.overall} colour={result.overall >= 90 ? '#10b981' : result.overall >= 70 ? '#f59e0b' : '#ef4444'} />
                    <div className="absolute flex flex-col items-center">
                      <span className={cn('text-2xl font-black', getScoreColor(result.overall))}>{result.overall}</span>
                      <span className="text-[10px] text-gray-500 -mt-0.5">/ 100</span>
                    </div>
                  </div>
                  <div>
                    <p className={cn('text-lg font-black', getScoreColor(result.overall))}>{getRatingText(result.overall)}</p>
                    <p className="text-xs text-gray-500">Performance Score</p>
                    <Link to="/contact" className="mt-2 text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                      Get a detailed analysis <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
                {result.accessibility > 0 && (
                  <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
                    <ScoreBar label="Performance" score={result.performance} />
                    <ScoreBar label="Accessibility" score={result.accessibility} />
                    <ScoreBar label="Best Practices" score={result.bestPractices} />
                    <ScoreBar label="SEO" score={result.seo} />
                  </div>
                )}
              </div>
            )}
          </GlowWrapper>

          {/* ── RIGHT: Emerging Frontiers copy ── */}
          <div className="flex flex-col justify-center gap-6 py-4">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
              <Zap className="h-3.5 w-3.5" />
              Discover Frontiers
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              Emerging Frontiers in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital Excellence
              </span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-base">
              Embark on a journey into the ever-expanding world of digital marketing. Discover the latest advancements and breakthroughs shaping the future of online business.
            </p>

            <ul className="space-y-3">
              {[
                'AI-powered marketing automation',
                'Real-time performance analytics',
                'Hyper-targeted ad campaigns',
                'Conversion rate optimisation',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/25 transition-colors">
                    <Check className="h-3 w-3 text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/services/web-development"
              className="relative overflow-hidden mt-2 inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full
                border border-blue-500/30 text-blue-300 text-sm font-bold tracking-wider uppercase
                hover:bg-blue-500/10 hover:border-blue-400/50 hover:text-white hover:-translate-y-0.5
                transition-all duration-300 group/link"
            >
              Explore Our Web Services
              <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade removed since section natively gradients to the next section's color */}
    </section>
  );
};

export default WebsitePerformanceCheck;
