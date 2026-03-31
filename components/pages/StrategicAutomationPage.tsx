import React from "react";
import PremiumPageLayout from "@/components/layouts/PremiumPageLayout";
import Contact from "@/components/Contact";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock,
  Workflow,
  Brain,
  Users,
  Settings,
  Cpu,
  Layers,
  Gauge,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const StrategicAutomationPage = () => {
  const B = {
    sky: "#38bdf8",
    blue: "#60a5fa",
    indigo: "#818cf8",
    border: "rgba(56,189,248,0.18)",
    borderH: "rgba(56,189,248,0.55)",
    glow: "rgba(56,189,248,0.15)",
    bg: "rgb(2,6,26)",
  };

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 },
    }),
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const S: Record<string, React.CSSProperties> = {
    root: {
      background: B.bg,
      color: "#e0e7ff",
      fontFamily: "'Inter', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden",
    },
    wrap: { maxWidth: 1200, margin: "0 auto", padding: "0 48px" },
    playfair: { fontFamily: "'Inter', sans-serif" },
    label: {
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase" as const,
      color: "rgba(147,200,255,0.4)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 20,
    },
    labelLine: {
      width: 32,
      height: 1,
      background: B.sky,
      display: "inline-block" as const,
    },
    sectionHead: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 40,
      borderBottom: `1px solid ${B.border}`,
      paddingBottom: 20,
    },
    accent: { color: B.sky },
  };

  return (
    <PremiumPageLayout
      title="Strategic Automation | Touchpointe Digital"
      description="Intelligent process automation for enterprise efficiency and digital transformation."
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        .sa-card:hover { background: ${B.sky}08 !important; border-color: ${B.border} !important; }
        .sa-step:hover { border-color: ${B.sky}44 !important; background: ${B.sky}08 !important; }
        .sa-btn-primary:hover { background: ${B.blue} !important; }
        .sa-btn-ghost:hover { background: ${B.sky}08 !important; border-color: ${B.border} !important; color: #fff !important; }
        .sa-metric:hover .sa-metric-bar { width: 100% !important; }
        .sa-metric-bar { transition: width 1.2s cubic-bezier(.4,0,.2,1); }
        .sa-area-card:hover { border-color: ${B.sky}44 !important; background: ${B.sky}08 !important; }
        .sa-area-card:hover .sa-area-icon { color: ${B.sky} !important; }
        .sa-pulse { animation: saPulse 3s ease-in-out infinite; }
        .sa-pulse2 { animation: saPulse 3s ease-in-out infinite 1s; }
        .sa-pulse3 { animation: saPulse 3s ease-in-out infinite 2s; }
        @keyframes saPulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.7;transform:scale(1.06)} }
        .sa-orbit { animation: saOrbit 8s linear infinite; transform-origin: center; }
        @keyframes saOrbit { from{transform:rotate(0deg) translateX(80px) rotate(0deg)} to{transform:rotate(360deg) translateX(80px) rotate(-360deg)} }
        .sa-spin { animation: saSpin 20s linear infinite; }
        @keyframes saSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .sa-counter { font-variant-numeric: tabular-nums; }
      `}</style>

      <div style={S.root}>
        {/* ── Hero ── */}
        <motion.div style={{ y: heroY }}>
          <div
            style={{
              position: "relative",
              minHeight: "88vh",
              display: "flex",
              alignItems: "center",
              paddingTop: 120,
              borderBottom: `1px solid ${B.border}`,
            }}
          >
            {/* Animated background rings */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                pointerEvents: "none",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 480,
                  height: 480,
                  marginRight: -60,
                  opacity: 0.18,
                }}
              >
                {[480, 360, 240, 120].map((size, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: size,
                      height: size,
                      borderRadius: "50%",
                      border: `1px solid ${B.sky}`,
                      transform: "translate(-50%,-50%)",
                      animationDelay: `${i * 0.5}s`,
                    }}
                    className={i % 2 === 0 ? "sa-pulse" : "sa-pulse2"}
                  />
                ))}
                <div
                  className="sa-spin"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 360,
                    height: 360,
                    borderRadius: "50%",
                    border: `1px dashed ${B.sky}66`,
                    transform: "translate(-50%,-50%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `${B.sky}12`,
                    border: `1px solid ${B.sky}66`,
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Cpu size={24} color={B.sky} />
                </div>
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: B.sky,
                      transform: `translate(-50%,-50%) rotate(${deg}deg) translateX(120px)`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ ...S.wrap, position: "relative", zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div style={S.label}>
                  <span style={S.labelLine} />
                  Strategic Automation
                </div>
                <h1
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(44px, 6vw, 80px)",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1.06,
                    marginBottom: 28,
                    maxWidth: 720,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Eliminate Repetition.
                  <br />
                  <span style={{ color: B.sky }}>Multiply Output.</span>
                </h1>
                <p
                  style={{
                    fontSize: 18,
                    color: "rgba(147,200,255,0.6)",
                    lineHeight: 1.75,
                    maxWidth: 520,
                    fontWeight: 300,
                    marginBottom: 48,
                  }}
                >
                  Automate complex business processes. Reduce costs and
                  accelerate growth through intelligent workflow automation that
                  never sleeps.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap" as const,
                  }}
                >
                  <button
                    className="sa-btn-primary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: B.sky,
                      color: B.bg,
                      border: "none",
                      borderRadius: 10,
                      padding: "15px 28px",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.3s",
                      boxShadow: `0 0 20px ${B.sky}40`,
                    }}
                  >
                    Explore Solutions <ArrowRight size={16} />
                  </button>
                  <button
                    className="sa-btn-ghost"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "transparent",
                      color: "rgba(147,200,255,0.6)",
                      border: `1px solid ${B.border}`,
                      borderRadius: 10,
                      padding: "15px 28px",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.3s",
                    }}
                  >
                    Request Consultation
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── Quick Stats Bar ── */}
        <div
          style={{
            borderBottom: `1px solid ${B.border}`,
            background: `${B.sky}05`,
          }}
        >
          <div
            style={{
              ...S.wrap,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: B.border,
            }}
          >
            {[
              { val: "70%", label: "Faster Process Execution" },
              { val: "50%", label: "Cost Savings" },
              { val: "99%", label: "Error Reduction" },
              { val: "10×", label: "Faster ROI" },
            ].map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  background: B.bg,
                  padding: "32px 28px",
                  textAlign: "center" as const,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 38,
                    fontWeight: 900,
                    color: B.sky,
                    lineHeight: 1,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(147,200,255,0.4)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Key Features ── */}
        <div style={{ ...S.wrap, paddingTop: 72, paddingBottom: 72 }}>
          <div style={S.sectionHead}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Platform Capabilities
            </h2>
            <span
              style={{
                fontSize: 12,
                color: "rgba(147,200,255,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
              }}
            >
              4 Core Features
            </span>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: B.border,
              border: `1px solid ${B.border}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {[
              {
                icon: Zap,
                title: "Instant Deployment",
                desc: "Set up automation workflows in minutes, not weeks",
                num: "01",
              },
              {
                icon: Brain,
                title: "AI-Powered",
                desc: "Machine learning-driven process optimization",
                num: "02",
              },
              {
                icon: Clock,
                title: "24/7 Operation",
                desc: "Continuous process execution without manual intervention",
                num: "03",
              },
              {
                icon: Settings,
                title: "Zero Configuration",
                desc: "Pre-built templates for the most common scenarios",
                num: "04",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="sa-card"
                  style={{
                    background: B.bg,
                    padding: "36px 28px",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    borderRight: i < 3 ? `1px solid ${B.border}` : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(147,200,255,0.3)",
                      letterSpacing: "0.15em",
                      marginBottom: 24,
                      fontWeight: 500,
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${B.sky}12`,
                      border: `1px solid ${B.sky}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={20} color={B.sky} />
                  </div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: 10,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "rgba(147,200,255,0.5)",
                      lineHeight: 1.65,
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Automation Areas ── */}
        <div
          style={{
            background: `${B.sky}05`,
            borderTop: `1px solid ${B.border}`,
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <div style={{ ...S.wrap, paddingTop: 72, paddingBottom: 72 }}>
            <div style={S.sectionHead}>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Automation Areas
              </h2>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(147,200,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                3 Domains
              </span>
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
              }}
            >
              {[
                {
                  icon: Workflow,
                  title: "Business Process",
                  sub: "End-to-end workflow automation",
                  accent: B.sky,
                  accentBg: `${B.sky}12`,
                  accentBorder: `${B.sky}33`,
                  items: [
                    "Invoice processing & approval",
                    "Customer onboarding workflows",
                    "Document management",
                    "Contract lifecycle management",
                  ],
                },
                {
                  icon: Users,
                  title: "Lead & Sales",
                  sub: "Streamline your sales pipeline",
                  accent: B.blue,
                  accentBg: `${B.blue}12`,
                  accentBorder: `${B.blue}33`,
                  items: [
                    "Lead scoring & qualification",
                    "Automated follow-ups",
                    "Proposal generation",
                    "Pipeline management",
                  ],
                },
                {
                  icon: Layers,
                  title: "Marketing",
                  sub: "Scale marketing with automation",
                  accent: B.indigo,
                  accentBg: `${B.indigo}12`,
                  accentBorder: `${B.indigo}33`,
                  items: [
                    "Email campaign orchestration",
                    "Social media posting",
                    "Lead nurturing sequences",
                    "Personalized customer journeys",
                  ],
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55 },
                      },
                    }}
                    className="sa-area-card"
                    style={{
                      border: `1px solid ${item.accentBorder}`,
                      borderRadius: 16,
                      padding: 32,
                      background: item.accentBg,
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: `${item.accent}12`,
                        border: `1px solid ${item.accentBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Icon
                        size={22}
                        color={item.accent}
                        className="sa-area-icon"
                        style={{ transition: "color 0.2s" }}
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 6,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        color: "rgba(147,200,255,0.4)",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.08em",
                        marginBottom: 24,
                      }}
                    >
                      {item.sub}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column" as const,
                        gap: 12,
                      }}
                    >
                      {item.items.map((ex, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            paddingBottom: 12,
                            borderBottom:
                              j < item.items.length - 1
                                ? `1px solid ${B.border}`
                                : "none",
                          }}
                        >
                          <CheckCircle2
                            size={14}
                            color={item.accent}
                            style={{ marginTop: 2, flexShrink: 0 }}
                          />
                          <span
                            style={{
                              fontSize: 13.5,
                              color: "rgba(147,200,255,0.6)",
                              fontWeight: 300,
                            }}
                          >
                            {ex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ── Measurable Impact ── */}
        <div style={{ ...S.wrap, paddingTop: 72, paddingBottom: 72 }}>
          <div style={S.sectionHead}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Measurable Impact
            </h2>
            <span
              style={{
                fontSize: 12,
                color: "rgba(147,200,255,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
              }}
            >
              Proven Results
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left: animated metric bars */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: 28,
              }}
            >
              {[
                {
                  metric: "70%",
                  label: "Faster Process Execution",
                  pct: 70,
                  color: B.sky,
                },
                {
                  metric: "50%",
                  label: "Cost Savings Through Automation",
                  pct: 50,
                  color: B.blue,
                },
                {
                  metric: "99%",
                  label: "Error Reduction vs Manual Processes",
                  pct: 99,
                  color: "#10b981",
                },
                {
                  metric: "10×",
                  label: "Faster ROI vs Traditional Solutions",
                  pct: 85,
                  color: B.indigo,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="sa-metric"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13.5,
                        color: "rgba(147,200,255,0.6)",
                        fontWeight: 300,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 22,
                        fontWeight: 900,
                        color: item.color,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.metric}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: B.border,
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: i * 0.1 + 0.2,
                      }}
                      viewport={{ once: true }}
                      style={{
                        height: "100%",
                        background: item.color,
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: animated CPU viz */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative", width: 320, height: 320 }}>
                {/* Outer rings */}
                {[320, 240, 160].map((size, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: size,
                      height: size,
                      borderRadius: "50%",
                      border: `1px solid ${B.sky}${["22", "11", "08"][i]}`,
                      transform: "translate(-50%,-50%)",
                    }}
                    className={["sa-pulse", "sa-pulse2", "sa-pulse3"][i]}
                  />
                ))}
                {/* Orbiting dots */}
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 6 + i,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 120,
                      height: 120,
                      transform: `translate(-50%,-50%) rotate(${deg}deg)`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: B.sky,
                        transform: "translate(-50%,-50%)",
                        opacity: 0.7,
                      }}
                    />
                  </motion.div>
                ))}
                {/* Center */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: `${B.sky}12`,
                    border: `1px solid ${B.sky}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Cpu size={32} color={B.sky} />
                </div>
                {/* Labels */}
                {[
                  { label: "AI Engine", top: "8%", left: "50%", tx: "-50%" },
                  { label: "24/7 Ops", top: "50%", left: "92%", tx: "0" },
                  { label: "Zero Error", top: "88%", left: "50%", tx: "-50%" },
                  { label: "Auto Scale", top: "50%", left: "-8%", tx: "-100%" },
                ].map((l, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: l.top,
                      left: l.left,
                      transform: `translate(${l.tx}, -50%)`,
                      fontSize: 10,
                      color: "#5a596b",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      whiteSpace: "nowrap" as const,
                    }}
                  >
                    {l.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Implementation Process ── */}
        <div
          style={{
            background: `${B.sky}05`,
            borderTop: `1px solid ${B.border}`,
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <div style={{ ...S.wrap, paddingTop: 72, paddingBottom: 72 }}>
            <div style={S.sectionHead}>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Implementation Process
              </h2>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(147,200,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                4 Steps
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20,
              }}
            >
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Analyze your current processes and identify automation opportunities with precision.",
                  icon: Brain,
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "Build optimized workflows tailored to your specific operational needs.",
                  icon: Layers,
                },
                {
                  step: "03",
                  title: "Deploy",
                  desc: "Launch automation workflows with zero disruption to live operations.",
                  icon: Zap,
                },
                {
                  step: "04",
                  title: "Optimize",
                  desc: "Continuously improve and expand automation with ongoing support.",
                  icon: Gauge,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="sa-step"
                    style={{
                      border: `1px solid ${B.border}`,
                      borderRadius: 14,
                      padding: "32px 28px",
                      background: `${B.sky}05`,
                      transition: "all 0.3s",
                      cursor: "pointer",
                      position: "relative" as const,
                    }}
                  >
                    {/* Connector line */}
                    {i < 3 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 44,
                          right: -11,
                          width: 22,
                          height: 1,
                          background: B.sky,
                          zIndex: 1,
                        }}
                      />
                    )}
                    <div
                      style={{
                        fontSize: 11,
                        color: B.sky,
                        letterSpacing: "0.18em",
                        marginBottom: 20,
                        fontWeight: 600,
                      }}
                    >
                      {item.step}
                    </div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `${B.sky}12`,
                        border: `1px solid ${B.sky}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Icon size={18} color={B.sky} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "rgba(147,200,255,0.5)",
                        lineHeight: 1.65,
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          style={{ ...S.wrap, paddingTop: 80, paddingBottom: 96 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 64,
              alignItems: "center",
              border: `1px solid ${B.border}`,
              borderRadius: 20,
              padding: "56px 56px",
              background: `${B.sky}08`,
            }}
          >
            <div>
              <div style={S.label}>
                <span
                  style={{
                    width: 32,
                    height: 1,
                    background: B.sky,
                    display: "inline-block",
                  }}
                />
                <span style={{ color: B.sky }}>Get Started</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 36,
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 14,
                  letterSpacing: "-0.02em",
                }}
              >
                Transform Your Processes Today
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(147,200,255,0.6)",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  maxWidth: 460,
                }}
              >
                Join hundreds of enterprises automating their workflows and
                achieving exponential growth with zero manual overhead.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: 12,
                flexShrink: 0,
              }}
            >
              <button
                className="sa-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: B.sky,
                  color: B.bg,
                  border: "none",
                  borderRadius: 10,
                  padding: "15px 28px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap" as const,
                  transition: "all 0.3s",
                  boxShadow: `0 0 20px ${B.sky}40`,
                }}
              >
                Get Your Automation Plan <ArrowRight size={16} />
              </button>
              <button
                className="sa-btn-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "transparent",
                  color: "rgba(147,200,255,0.6)",
                  border: `1px solid ${B.border}`,
                  borderRadius: 10,
                  padding: "15px 28px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap" as const,
                  transition: "all 0.3s",
                }}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>

        <Contact />
      </div>
    </PremiumPageLayout>
  );
};

export default StrategicAutomationPage;
