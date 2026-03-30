import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Check, Star, Sparkles, Zap, Package, Mail, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import siteDefaults from '@/lib/site-defaults.json';

/* ─── Types ─────────────────────────────────────────── */
type PlanFeature = { text: string };
type CtaStyle = 'outline' | 'gradient' | 'dark';

type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  rawPrice: number;
  period: string;
  features: PlanFeature[];
  bestFor: string;
  popular?: boolean;
  cta: string;
  ctaStyle: CtaStyle;
  iconBg: string;
  glowColor: string;
  borderColor: string;
  icon: React.ReactNode;
};

/* ─── Data ───────────────────────────────────────────── */
const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    tagline: 'Essential digital presence. Social media basics. SEO essentials.',
    price: '₹15,000',
    rawPrice: 15000,
    period: '/month',
    features: [
      { text: 'Social Media Management – 2-3 posts/month' },
      { text: 'Social Media Advertising – Basic ad setup & management' },
      { text: 'SEO Essentials – On-page optimization + 1 blog post/month' },
      { text: 'Google Business Profile Optimization' },
      { text: 'Website Maintenance – 1 minor update per month' },
      { text: 'Basic Branding Support – Logo tweaks & minor graphics' },
      { text: 'Marketing Automation – Lead capture form setup' },
    ],
    bestFor: 'Small businesses & startups looking to establish their brand.',
    cta: 'Choose this plan',
    ctaStyle: 'outline',
    iconBg: 'from-blue-500/20 to-cyan-500/20',
    glowColor: 'rgba(59,130,246,0.25)',
    borderColor: 'rgba(59,130,246,0.25)',
    icon: <Package className="h-7 w-7 text-blue-400" />,
  },
  {
    id: 'growth',
    name: 'Growth Plan',
    tagline: 'Scale your marketing. Advanced SEO. Conversion tracking.',
    price: '₹30,000',
    rawPrice: 30000,
    period: '/month',
    features: [
      { text: 'Social Media Management – 3-6 posts/month' },
      { text: 'Social Media Advertising – Conversion tracking' },
      { text: 'SEO Growth – On-page + off-page, 2 blogs/month' },
      { text: 'Google Business Profile – Engagement strategy' },
      { text: 'Website Maintenance – 2 updates per month' },
      { text: 'Creative Branding – Custom graphics & assets' },
      { text: 'Marketing Automation & CRM Support' },
      { text: 'RPA & MarTech Support – Basic integrations' },
    ],
    bestFor: 'Growing brands needing regular content and lead generation.',
    popular: true,
    cta: 'Choose this plan',
    ctaStyle: 'gradient',
    iconBg: 'from-purple-500/20 to-pink-500/20',
    glowColor: 'rgba(147,51,234,0.30)',
    borderColor: 'rgba(147,51,234,0.35)',
    icon: <Zap className="h-7 w-7 text-purple-400" />,
  },
  {
    id: 'scale',
    name: 'Scale Plan',
    tagline: 'Full-fledged marketing & automation. Video production.',
    price: '₹50,000',
    rawPrice: 50000,
    period: '/month',
    features: [
      { text: 'Social Media Management – 6-10 posts/month' },
      { text: 'Social Media Advertising – Full-funnel management' },
      { text: 'SEO Dominance – Link building, 3-4 blogs/month' },
      { text: 'Google Business Profile – Local SEO boost' },
      { text: 'Website Maintenance – 4 updates per month' },
      { text: 'Advanced Branding & Video Content' },
      { text: 'Marketing Automation & RPA – Chatbot setup' },
      { text: 'Creative Video – 1 promo video/quarter' },
      { text: 'Web & App Support – Landing pages & updates' },
    ],
    bestFor: 'Businesses that want a full-fledged solution.',
    cta: 'Contact us',
    ctaStyle: 'dark',
    iconBg: 'from-amber-500/20 to-orange-500/20',
    glowColor: 'rgba(245,158,11,0.20)',
    borderColor: 'rgba(245,158,11,0.25)',
    icon: <Sparkles className="h-7 w-7 text-amber-400" />,
  },
];

const projectBasedServices = [
  { service: 'Website Design & Development', pricing: 'Starting at ₹40,000 (Basic) / ₹80,000 (E-commerce)' },
  { service: 'SEO Audit & Strategy', pricing: '₹15,000 per audit' },
  { service: 'Social Media Ad Campaign Setup', pricing: '₹10,000 per campaign' },
  { service: 'Branding & Logo Design', pricing: '₹20,000 for full branding package' },
  { service: 'Creative Video Production', pricing: 'Starting at ₹30,000' },
  { service: 'Marketing Automation & CRM Setup', pricing: '₹25,000 for standard setup' },
  { service: 'MarTech & RPA Implementation', pricing: 'Custom pricing based on tools & complexity' },
];

const pricingIconMap = {
  Package: <Package className="h-7 w-7 text-blue-400" />,
  Zap: <Zap className="h-7 w-7 text-purple-400" />,
  Sparkles: <Sparkles className="h-7 w-7 text-amber-400" />,
};

/* ─── Canvas background ─────────────────────────────── */
const PricingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Energy flow particles
    type Particle = {
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; size: number;
      hue: number;
    };

    const particles: Particle[] = [];
    const MAX_P = 120;

    const spawn = () => {
      const edge = Math.floor(Math.random() * 4);
      let x = 0, y = 0;
      if (edge === 0) { x = Math.random() * W; y = 0; }
      else if (edge === 1) { x = W; y = Math.random() * H; }
      else if (edge === 2) { x = Math.random() * W; y = H; }
      else { x = 0; y = Math.random() * H; }

      const angle = Math.atan2(H / 2 - y, W / 2 - x) + (Math.random() - 0.5) * 1.5;
      const speed = 0.3 + Math.random() * 0.7;
      const hue = [260, 300, 30][Math.floor(Math.random() * 3)]; // purple / pink / amber
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 180 + Math.random() * 240,
        size: 0.8 + Math.random() * 1.6,
        hue,
      });
    };

    // Flowing lines that connect nearby particles
    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      // Fill with very faint dark overlay for trail effect
      ctx.fillStyle = 'rgba(6,6,15,0.25)';
      ctx.fillRect(0, 0, W, H);

      // Spawn new particles
      if (particles.length < MAX_P && Math.random() < 0.6) spawn();

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${particles[i].hue},80%,65%,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update + draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = progress < 0.15
          ? progress / 0.15
          : progress > 0.75
          ? 1 - (progress - 0.75) / 0.25
          : 1;

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        grd.addColorStop(0, `hsla(${p.hue},80%,65%,${alpha * 0.25})`);
        grd.addColorStop(1, `hsla(${p.hue},80%,65%,0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `hsla(${p.hue},90%,75%,${alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      // Large slow nebula pulses
      [
        { cx: W * 0.2, cy: H * 0.3, hue: 260 },
        { cx: W * 0.8, cy: H * 0.7, hue: 30 },
        { cx: W * 0.5, cy: H * 0.1, hue: 300 },
      ].forEach(({ cx, cy, hue }) => {
        const pulse = Math.sin(t * 0.012 + hue) * 0.5 + 0.5;
        const r = 150 + pulse * 80;
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grd.addColorStop(0, `hsla(${hue},70%,55%,${0.04 + pulse * 0.03})`);
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
    />
  );
};

/* ─── Animated counter ──────────────────────────────── */
const AnimatedPrice = ({ target, prefix }: { target: number; prefix: string }) => {
  const [displayed, setDisplayed] = useState(0);
  const elRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1200;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setDisplayed(Math.round(target * ease));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const formatted = displayed.toLocaleString('en-IN');
  return (
    <span ref={elRef} className="tabular-nums">
      {prefix}{formatted}
    </span>
  );
};

/* ─── Mouse-tracking glow card ──────────────────────── */
const GlowCard = ({
  plan,
  index,
}: {
  plan: PricingPlan;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Entrance animation
  useEffect(() => {
    const delay = index * 160;
    const t = setTimeout(() => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      }, { threshold: 0.15 });
      if (cardRef.current) obs.observe(cardRef.current);
      return () => obs.disconnect();
    }, delay);
    return () => clearTimeout(t);
  }, [index]);

  // Mouse-follow glow
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, ${plan.glowColor}, transparent 70%)`;
  }, [plan.glowColor]);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.background = 'transparent';
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col h-full rounded-2xl border
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        ${plan.popular
          ? 'bg-[#0d0d1a] border-purple-500/30 md:-mx-1 md:scale-105 z-10 shadow-[0_0_80px_-15px_rgba(147,51,234,0.25)]'
          : 'bg-[#0a0a14]/90 border-white/[0.06] hover:border-white/[0.14]'}
        ${index === 0 ? 'md:rounded-r-none' : ''}
        ${index === 2 ? 'md:rounded-l-none' : ''}
        group cursor-default`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Mouse-track glow overlay */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-all duration-150 rounded-2xl z-0" />

      {/* Animated gradient top border */}
      {plan.popular && (
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      )}

      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 right-6 z-20">
          <div className="relative px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] font-black tracking-widest uppercase rounded-full shadow-lg">
            Most popular
            {/* shimmer sweep */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2.5s_infinite]" />
            </span>
          </div>
        </div>
      )}

      <div className="relative z-10 p-6 md:p-8 flex-1 flex flex-col">
        {/* Icon with pulse ring */}
        <div className="relative mb-5 w-fit">
          <div className={`w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br ${plan.iconBg} flex items-center justify-center border border-white/5`}>
            {plan.icon}
          </div>
          {plan.popular && (
            <span className="absolute -inset-1 rounded-xl bg-purple-500/20 animate-ping opacity-30" />
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-gray-500 text-sm mb-5 leading-relaxed">{plan.tagline}</p>

        {/* Price — animated counter */}
        <div className="flex items-baseline mb-6">
          <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
            <AnimatedPrice target={plan.rawPrice} prefix="₹" />
          </span>
          <span className="text-gray-500 ml-1.5 text-sm">{plan.period}</span>
        </div>

        {/* CTA with shimmer */}
        <Link
          to="/contact"
          className={`relative overflow-hidden w-full py-3.5 rounded-full text-center font-bold text-sm tracking-wider uppercase transition-all duration-300 mb-8 block group/btn
            ${plan.ctaStyle === 'gradient'
              ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-0.5'
              : plan.ctaStyle === 'dark'
              ? 'bg-white/[0.06] border border-white/[0.1] text-gray-300 hover:bg-white/[0.1] hover:text-white hover:border-white/20'
              : 'bg-transparent border border-white/[0.15] text-gray-300 hover:bg-white/[0.05] hover:text-white hover:border-white/30'}`}
        >
          <span className="relative z-10">{plan.cta}</span>
          {/* Shimmer sweep on hover */}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-0 group-hover/btn:translate-x-[400%] transition-transform duration-700 ease-in-out" />
          </span>
        </Link>

        {/* Features */}
        <ul className="space-y-2.5 flex-1">
          {plan.features.map((feature, fi) => (
            <li
              key={fi}
              className="flex items-start group/item"
              style={{ transitionDelay: `${fi * 40}ms` }}
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 transition-colors
                ${plan.popular ? 'bg-purple-500/15 group-hover/item:bg-purple-500/25' : 'bg-white/[0.06] group-hover/item:bg-white/[0.1]'}`}>
                <Check className={`h-3 w-3 ${plan.popular ? 'text-purple-400' : 'text-gray-500'}`} />
              </div>
              <span className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors">{feature.text}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-6 pt-5 border-t ${plan.popular ? 'border-purple-500/20' : 'border-white/[0.06]'}`}>
          <p className="text-xs text-gray-500"><span className="font-semibold text-gray-400">Best for:</span> {plan.bestFor}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Pricing component ─────────────────────────── */
const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const { data } = useSiteSettings('home_page', siteDefaults.home_page);
  const sectionData = data.pricingSection || siteDefaults.home_page.pricingSection;
  const plans = (sectionData.plans || pricingPlans).map((plan: any) => ({
    ...plan,
    icon: pricingIconMap[plan.iconName as keyof typeof pricingIconMap] || pricingIconMap.Package,
  }));

  useEffect(() => {
    const refs: [React.RefObject<HTMLElement | null | undefined>, React.Dispatch<React.SetStateAction<boolean>>][] = [
      [{ current: sectionRef.current?.querySelector('#pricing-header') as HTMLElement }, setHeaderVisible],
      [{ current: sectionRef.current?.querySelector('#project-pricing') as HTMLElement }, setProjectVisible],
    ];

    const observers = refs.map(([ref, setter]) => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setter(true); obs.disconnect(); }
      }, { threshold: 0.1 });
      if (ref.current) obs.observe(ref.current);
      return obs;
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Observe after mount
  useEffect(() => {
    if (!sectionRef.current) return;
    const header = sectionRef.current.querySelector<HTMLElement>('#pricing-header');
    const project = sectionRef.current.querySelector<HTMLElement>('#project-pricing');

    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs1.disconnect(); } }, { threshold: 0.1 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setProjectVisible(true); obs2.disconnect(); } }, { threshold: 0.05 });

    if (header) obs1.observe(header);
    if (project) obs2.observe(project);

    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#05051a] via-[#06060f] to-[#100d28] py-24 md:py-32 overflow-hidden"
    >
      {/* Canvas motion graphics */}
      <PricingCanvas />

      {/* Static dark overlay so content stays readable */}
      <div className="absolute inset-0 bg-[#06060f]/50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* ── Section Header ── */}
        <div
          id="pricing-header"
          className={`max-w-3xl mx-auto text-center mb-16 md:mb-20 transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-widest uppercase">
            {sectionData.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white">
            {sectionData.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              {sectionData.highlight}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {sectionData.subtitle}
          </p>
        </div>

        {/* ── Pricing Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-stretch mb-20 pt-10">
          {plans.map((plan: PricingPlan, i: number) => (
            <div key={plan.id} className="flex flex-col h-full">
              <GlowCard plan={plan} index={i} />
            </div>
          ))}
        </div>

        {/* ── Project-Based Pricing ── */}
        <div
          id="project-pricing"
          className={`max-w-5xl mx-auto transition-all duration-1000 ease-out
            ${projectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-md p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            {/* Animated top-line gradient */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
            {/* Hover bottom sweep */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />

            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left: Services */}
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-white/5">
                    <Star className="h-6 w-6 text-amber-400" />
                    <span className="absolute -inset-1 rounded-xl bg-amber-500/10 animate-ping opacity-40" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{sectionData.projectPricingTitle}</h3>
                    <p className="text-gray-500 text-sm">{sectionData.projectPricingSubtitle}</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {(sectionData.projectBasedServices || projectBasedServices).map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]
                        hover:bg-white/[0.06] hover:border-amber-500/20 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.1)]
                        transition-all duration-300 group/row"
                      style={{ transitionDelay: `${idx * 30}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-amber-400 flex-shrink-0 group-hover/row:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-gray-300 group-hover/row:text-white transition-colors">{item.service}</span>
                      </div>
                      <span className="text-xs font-semibold text-amber-400/80 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 whitespace-nowrap ml-7 sm:ml-0 w-fit">
                        {item.pricing}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Notes */}
              <div className="lg:w-1/3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col">
                <h4 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-5 flex items-center gap-2">
                  <Info className="h-4 w-4 text-amber-400" />
                  Important Notes
                </h4>
                <ul className="space-y-4 flex-1">
                  {(sectionData.pricingNotes || []).map((note: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 group/note">
                      <span className="text-amber-400 mt-0.5 text-base flex-shrink-0">📌</span>
                      <span className="text-sm text-gray-400 group-hover/note:text-gray-300 transition-colors">{note}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="relative overflow-hidden mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-full
                    bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm tracking-wider uppercase
                    hover:shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all duration-300 hover:-translate-y-0.5 group/cta"
                >
                  <Mail className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Get Custom Quote</span>
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/cta:translate-x-[400%] transition-transform duration-700" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
