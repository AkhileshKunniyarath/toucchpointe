import React, { useState, useEffect, useRef } from "react";
import PremiumPageLayout from "@/components/layouts/PremiumPageLayout";
import Contact from "@/components/Contact";
// ← place TechArc.jsx in components/
import {
  BarChart3,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  LineChart,
  PieChart,
  Activity,
  Database,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import TechArc from "@/components/ui/Techarc";

/* ─── Design tokens ──────────────────────────────────────────── */
const B = {
  sky: "#38bdf8",
  blue: "#60a5fa",
  indigo: "#818cf8",
  border: "rgba(56,189,248,0.18)",
  borderH: "rgba(56,189,248,0.55)",
  glow: "rgba(56,189,248,0.15)",
  bg: "rgb(2,6,26)",
};

/* ─── Animation presets ─────────────────────────────────────── */
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};
const rise = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Reusable primitives ───────────────────────────────────── */
const Eyebrow = ({ children }) => (
  <div className="flex items-center justify-center gap-3 mb-5">
    <span
      style={{
        height: 1,
        width: 36,
        background: `linear-gradient(to right,transparent,${B.sky})`,
      }}
    />
    <span
      className="text-xs font-semibold uppercase tracking-widest font-mono"
      style={{
        color: B.sky,
      }}
    >
      {children}
    </span>
    <span
      style={{
        height: 1,
        width: 36,
        background: `linear-gradient(to left,transparent,${B.sky})`,
      }}
    />
  </div>
);

const GlassCard = ({ children, style = {}, className = "" }) => (
  <div
    className={`relative rounded-2xl overflow-hidden transition-all duration-500 group ${className}`}
    style={{
      background: "rgba(8,16,48,0.6)",
      border: `1px solid ${B.border}`,
      backdropFilter: "blur(20px)",
      ...style,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.border = `1px solid ${B.borderH}`;
      e.currentTarget.style.boxShadow = `0 0 48px -12px ${B.glow}, inset 0 0 30px -18px rgba(56,189,248,0.07)`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.border = `1px solid ${B.border}`;
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    {/* shimmer top */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background:
          "linear-gradient(to right,transparent,rgba(56,189,248,0.7),transparent)",
        pointerEvents: "none",
      }}
    />
    {children}
  </div>
);

const StatPill = ({ val, label }) => (
  <div
    className="flex flex-col items-center px-5.5 py-2.5 rounded-2xl"
    style={{
      background: "rgba(56,189,248,0.06)",
      border: `1px solid rgba(56,189,248,0.18)`,
    }}
  >
    <span
      className="text-2xl font-black leading-tight"
      style={{ color: B.sky }}
    >
      {val}
    </span>
    <span
      className="text-xs font-mono tracking-wider mt-0.75"
      style={{
        color: "rgba(147,210,255,0.5)",
      }}
    >
      {label}
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
const DataIntelligencePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Listen to scroll progress
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <PremiumPageLayout
      title="Data Intelligence | Touchpointe Digital"
      description="Advanced analytics and real-time performance intelligence for enterprise decision-making."
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #38bdf8, #60a5fa, #818cf8)",
          transformOrigin: "left",
          zIndex: 1000,
          scaleX: scrollYProgress,
        }}
      />

      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-24 pb-20">
        {/* Stars */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,130,255,0.07) 0%, transparent 70%)",
          }}
        />

        {/* ═══ TECH ARC (TOP) ═══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: false, amount: 0.6 }}
          className="relative w-full max-w-6xl h-96 flex items-center justify-center z-20 mx-auto pointer-events-none"
          style={{
            margin: "20px 0 -20px 0",
            width: "110%",
          }}
        >
          <TechArc width={1400} height={560} />
        </motion.div>

        {/* ═══ HEADING SECTION (MIDDLE) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-6 max-w-3xl mx-auto z-30 relative"
          style={{
            margin: "-350px auto 0 auto",
          }}
          viewport={{ once: false, amount: 0.5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-7 px-4.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest"
            style={{
              background: "transparent",
              border: `1px solid rgba(56,189,248,0.3)`,
              color: B.sky,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: B.sky,
                boxShadow: `0 0 8px ${B.sky}`,
              }}
            />
            Enterprise Analytics Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-7"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
            }}
          >
            Data{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage: `linear-gradient(135deg, ${B.sky} 0%, ${B.blue} 45%, ${B.indigo} 100%)`,
              }}
            >
              Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl max-w-sm mx-auto leading-relaxed font-light tracking-tight"
            style={{
              color: "rgba(180,215,255,0.6)",
              fontSize: "clamp(1rem,2vw,1.2rem)",
            }}
          >
            Transform raw data into actionable insights. Real-time analytics and
            intelligence for decisions that move at the speed of business.
          </motion.p>
        </motion.div>

        {/* ═══ CONTENT SECTION (BOTTOM) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2 },
          }}
          viewport={{ once: false, amount: 0.8 }}
          className="flex flex-col items-center gap-8 z-30 relative"
        >
          <div className="flex gap-3.5 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-2xl border-0 cursor-pointer text-white font-bold text-sm tracking-wider flex items-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #0369a1, #2563eb 55%, #4f46e5)",
                boxShadow: "0 0 50px -10px rgba(56,189,248,0.65)",
              }}
            >
              Get Started <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-2xl cursor-pointer font-semibold text-sm tracking-wider"
              style={{
                background: "rgba(56,189,248,0.07)",
                border: `1px solid rgba(56,189,248,0.32)`,
                color: B.sky,
              }}
            >
              View Demo
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center flex-wrap gap-3"
          >
            {[
              ["1M+", "Events / sec"],
              ["<100ms", "Latency"],
              ["99.9%", "Uptime"],
              ["95%", "Forecast acc."],
            ].map(([v, l]) => (
              <StatPill key={l} val={v} label={l} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ KEY FEATURES ══════ */}
      <section className="py-28 relative">
        {/* grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-8"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.35) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />

        <div className="max-w-5xl mx-auto px-6">
          <Eyebrow>Core Capabilities</Eyebrow>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4.5"
          >
            {[
              {
                Icon: Zap,
                title: "Real-Time Processing",
                desc: "Process 1M+ events/sec with sub-100ms latency across distributed clusters.",
                accent: B.sky,
              },
              {
                Icon: BarChart3,
                title: "Advanced Analytics",
                desc: "ML-powered insights and forward-looking predictions at enterprise scale.",
                accent: B.blue,
              },
              {
                Icon: Database,
                title: "Data Integration",
                desc: "Connect every data source — cloud, on-prem, or hybrid with zero friction.",
                accent: B.indigo,
              },
              {
                Icon: Shield,
                title: "Enterprise Security",
                desc: "SOC 2 compliance, bank-level encryption, and zero-trust architecture.",
                accent: B.sky,
              },
            ].map(({ Icon, title, desc, accent }, i) => (
              <motion.div
                key={i}
                variants={rise}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <GlassCard className="h-full" style={{ padding: "28px 24px" }}>
                  <div
                    className="w-12 h-12 rounded-xl mb-4.5 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${accent}18`,
                      border: `1px solid ${accent}44`,
                    }}
                  >
                    <Icon size={22} style={{ color: accent }} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2.5 tracking-tight">
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(147,200,255,0.55)",
                    }}
                  >
                    {desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ ANALYTICS CAPABILITIES + embedded mini-arc accent ══════ */}
      <section className="py-28 relative overflow-hidden">
        {/* side orbs */}
        <div
          className="absolute -left-40 top-16 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute -right-40 bottom-16 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6">
          <Eyebrow>Intelligence Suite</Eyebrow>
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
              }}
            >
              Intelligence{" "}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundImage: `linear-gradient(135deg, ${B.sky}, ${B.indigo})`,
                }}
              >
                Capabilities
              </span>
            </h2>
            <p
              className="text-base max-w-md mx-auto leading-relaxed"
              style={{
                color: "rgba(147,200,255,0.5)",
              }}
            >
              Unlock the power of your data with our comprehensive analytics
              platform.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                Icon: LineChart,
                title: "Predictive Analytics",
                color: B.sky,
                features: [
                  "Forecast trends with 95%+ accuracy",
                  "Anomaly detection in real-time",
                  "Customer behavior prediction",
                  "Revenue forecasting",
                ],
              },
              {
                Icon: PieChart,
                title: "Business Intelligence",
                color: B.blue,
                features: [
                  "Custom dashboard builder",
                  "Automated reporting",
                  "Drill-down analytics",
                  "Executive summaries",
                ],
              },
              {
                Icon: Activity,
                title: "Performance Monitoring",
                color: B.indigo,
                features: [
                  "Real-time KPI tracking",
                  "Custom alerts & notifications",
                  "Historical trend analysis",
                  "Benchmark comparisons",
                ],
              },
            ].map(({ Icon, title, color, features }, i) => (
              <motion.div key={i} variants={rise}>
                <GlassCard className="h-full" style={{ padding: "30px 26px" }}>
                  <div className="flex items-center gap-3.5 mb-5.5">
                    <div
                      className="w-11 h-11 rounded-2.5 flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: `${color}18`,
                        border: `1px solid ${color}44`,
                      }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <h3 className="text-white font-bold text-base">{title}</h3>
                  </div>
                  <div
                    className="h-px mb-5"
                    style={{
                      background: `linear-gradient(to right,${color}55,transparent)`,
                    }}
                  />
                  <ul className="list-none p-0 m-0 flex flex-col gap-3">
                    {features.map((f, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 items-start text-sm leading-relaxed"
                        style={{
                          color: "rgba(180,215,255,0.6)",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color, marginTop: 2, flexShrink: 0 }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ USE CASES ══════ */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Eyebrow>Real-World Impact</Eyebrow>
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
              }}
            >
              Use{" "}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundImage: `linear-gradient(135deg, ${B.sky}, ${B.indigo})`,
                }}
              >
                Cases
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "E-Commerce",
                tag: "Conversion",
                color: B.sky,
                desc: "Increase conversion rates with predictive personalisation and customer journey analytics that adapt in real time.",
                metrics: [
                  "35% higher conversion rate",
                  "40% less cart abandonment",
                  "2.5× improvement in AOV",
                ],
              },
              {
                title: "Marketing",
                tag: "ROI",
                color: B.blue,
                desc: "Optimise campaign performance with real-time analytics and multi-touch attribution across every channel.",
                metrics: [
                  "3× better campaign ROI",
                  "50% faster optimisation",
                  "360° customer view",
                ],
              },
              {
                title: "Operations",
                tag: "Efficiency",
                color: B.indigo,
                desc: "Streamline operations with real-time monitoring and predictive maintenance before issues arise.",
                metrics: [
                  "45% operational cost reduction",
                  "99.9% uptime guaranteed",
                  "Real-time anomaly insights",
                ],
              },
              {
                title: "Finance",
                tag: "Forecast",
                color: B.sky,
                desc: "Make better financial decisions with advanced forecasting, risk modelling, and automatic compliance.",
                metrics: [
                  "95% forecast accuracy",
                  "Real-time financial reporting",
                  "Automated compliance",
                ],
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
              >
                <GlassCard 
                  className="h-full relative group transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]" 
                  style={{ 
                    padding: "32px 28px",
                    overflow: "hidden",
                  }}
                >
                  {/* Accent line on top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${c.color}ff, transparent)`,
                    }}
                  />

                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${c.color}08, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-white font-black text-2xl tracking-tight leading-tight">
                        {c.title}
                      </h3>
                      <motion.span
                        className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wider border flex-shrink-0 ml-3 whitespace-nowrap"
                        style={{
                          background: `${c.color}12`,
                          border: `1px solid ${c.color}55`,
                          color: c.color,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: `${c.color}1a`,
                        }}
                      >
                        {c.tag}
                      </motion.span>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{
                        color: "rgba(147,200,255,0.65)",
                      }}
                    >
                      {c.desc}
                    </p>

                    <div
                      className="h-px mb-6"
                      style={{
                        background: `linear-gradient(to right, ${c.color}66, transparent)`,
                      }}
                    />

                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                      {c.metrics.map((m, j) => (
                        <motion.li
                          key={j}
                          className="flex gap-3 items-start text-sm transition-transform duration-200"
                          whileHover={{
                            x: 4,
                          }}
                          style={{
                            color: "rgba(200,228,255,0.8)",
                          }}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              rotate: 12,
                            }}
                            className="flex-shrink-0 mt-0.5"
                          >
                            <TrendingUp
                              size={15}
                              style={{ color: c.color }}
                            />
                          </motion.div>
                          <span className="leading-relaxed">{m}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA — TechArc as background ══════ */}
      <section className="py-28 relative overflow-hidden">
        {/* arc behind the CTA card */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0 opacity-55"
          style={{
            width: "130%",
            maxWidth: "1600px",
            top: "-80px",
          }}
        >
          {/* <TechArc width={1600} height={500} /> */}
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <GlassCard className="text-center" style={{ padding: "72px 48px" }}>
              {/* inner radial highlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(56,189,248,0.07) 0%, transparent 70%)",
                }}
              />

              <Eyebrow>Get Started Today</Eyebrow>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight mb-5"
                style={{
                  fontSize: "clamp(2rem,5vw,3.8rem)",
                }}
              >
                Ready for{" "}
                <span
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundImage: `linear-gradient(135deg,${B.sky} 0%,${B.blue} 50%,${B.indigo} 100%)`,
                  }}
                >
                  Data-Driven
                </span>{" "}
                Growth?
              </h2>

              <p
                className="text-base max-w-xs mx-auto leading-relaxed"
                style={{
                  color: "rgba(147,200,255,0.5)",
                  marginBottom: "44px",
                }}
              >
                Start leveraging your data for better decisions and faster
                growth today. No setup fees. Cancel anytime.
              </p>

              <div className="flex gap-3.5 justify-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-bold text-sm tracking-wider text-white rounded-2xl border-0 cursor-pointer"
                  style={{
                    padding: "15px 36px",
                    background:
                      "linear-gradient(135deg,#0369a1,#2563eb 55%,#4f46e5)",
                    boxShadow: "0 0 56px -10px rgba(56,189,248,0.6)",
                  }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-semibold text-sm tracking-wider rounded-2xl border cursor-pointer"
                  style={{
                    padding: "15px 36px",
                    background: "rgba(56,189,248,0.07)",
                    border: `1px solid rgba(56,189,248,0.32)`,
                    color: B.sky,
                  }}
                >
                  Schedule Demo
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Contact />
    </PremiumPageLayout>
  );
};

export default DataIntelligencePage;
