import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Lightbulb, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

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

const InsightsPage = () => {
  const insights = [
    {
      id: 1,
      category: "Strategy",
      title: "Digital Transformation: From Legacy to Modern Architecture",
      description:
        "A comprehensive guide on modernizing legacy systems while maintaining operational continuity. Learn how enterprises can accelerate their digital journey.",
      author: "Rahul Menon",
      readTime: "8 min",
      icon: TrendingUp,
      catClass: "cat-strategy",
    },
    {
      id: 2,
      category: "Technology",
      title: "Building Scalable APIs: Best Practices for 2026",
      description:
        "Explore modern API design patterns, rate limiting strategies, and deployment architectures that power high-velocity platforms.",
      author: "Priya Sharma",
      readTime: "6 min",
      icon: Zap,
      catClass: "cat-technology",
    },
    {
      id: 3,
      category: "Automation",
      title: "Automating Business Processes: ROI and Implementation",
      description:
        "Discover how strategic automation can reduce operational costs by up to 40% while improving accuracy and team productivity.",
      author: "Ajeesh Kumar",
      readTime: "10 min",
      icon: Lightbulb,
      catClass: "cat-automation",
    },
    {
      id: 4,
      category: "Data",
      title: "Data as Your Competitive Advantage",
      description:
        "Unlock insights from your data. Learn how to implement analytics platforms that drive real business decisions.",
      author: "Neha Desai",
      readTime: "7 min",
      icon: BookOpen,
      catClass: "cat-data",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Modernization",
      subtitle: "Monolith → Microservices",
      result: "60% Performance Gain",
      metrics: [
        { label: "Load Time", value: "-65%", color: B.sky },
        { label: "Uptime", value: "99.99%", color: B.blue },
        { label: "Cost Reduction", value: "-40%", color: B.sky },
      ],
    },
    {
      id: 2,
      title: "Enterprise Automation Suite",
      subtitle: "Streamlined Operations",
      result: "300+ Hours Saved / Mo",
      metrics: [
        { label: "Manual Tasks", value: "-85%", color: B.indigo },
        { label: "Processing Time", value: "-70%", color: B.sky },
        { label: "Error Rate", value: "-95%", color: B.sky },
      ],
    },
    {
      id: 3,
      title: "Data Intelligence Platform",
      subtitle: "Real-Time Analytics",
      result: "10M+ Events / Day",
      metrics: [
        { label: "Query Speed", value: "<100ms", color: B.indigo },
        { label: "Cost per GB", value: "-50%", color: B.blue },
        { label: "Insights / Day", value: "500+", color: B.sky },
      ],
    },
  ];

  const catStyles: Record<string, React.CSSProperties> = {
    Strategy: {
      color: B.sky,
      background: `${B.sky}18`,
      border: `1px solid ${B.sky}44`,
    },
    Technology: {
      color: B.blue,
      background: `${B.blue}18`,
      border: `1px solid ${B.blue}44`,
    },
    Automation: {
      color: B.indigo,
      background: `${B.indigo}18`,
      border: `1px solid ${B.indigo}44`,
    },
    Data: {
      color: B.sky,
      background: `${B.sky}18`,
      border: `1px solid ${B.sky}44`,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: B.bg,
          color: "#e0e7ff",
          fontFamily: "'Inter', sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 48px 64px",
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: B.sky,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 32,
                height: 1,
                background: `linear-gradient(to right, ${B.sky}, transparent)`,
                display: "inline-block",
              }}
            />
            Touchpointe Editorial
          </div>
          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: 24,
              maxWidth: 680,
              letterSpacing: "-0.02em",
            }}
          >
            Insights &amp;
            <br />
            Resources
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "rgba(147,200,255,0.6)",
              lineHeight: 1.7,
              maxWidth: 540,
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            Strategic guidance, technical deep dives, and real-world case
            studies from our engineering leaders — stay ahead of industry
            trends.
          </p>
        </motion.div>

        {/* ── Featured ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 48px 0" }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: B.sky,
              marginBottom: 20,
            }}
          >
            ■ Featured Article
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: `1px solid ${B.border}`,
              borderRadius: 16,
              overflow: "hidden",
              background: `linear-gradient(135deg, ${B.sky}08 0%, ${B.indigo}05 100%)`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Left */}
            <div style={{ padding: 48 }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: B.sky,
                  border: `1px solid ${B.sky}44`,
                  borderRadius: 4,
                  padding: "4px 10px",
                  marginBottom: 24,
                }}
              >
                Cover Story
              </span>
              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.25,
                  marginBottom: 16,
                }}
              >
                The Future of Enterprise Digital Engineering
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(147,200,255,0.6)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                  fontWeight: 300,
                }}
              >
                Exploring emerging technologies, architectural patterns, and
                organizational structures that define high-performance tech
                teams in 2026.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  fontSize: 13,
                  color: "rgba(147,200,255,0.4)",
                  marginBottom: 28,
                }}
              >
                <span>Touchpointe Editorial</span>
                <span>·</span>
                <span>12 min read</span>
              </div>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: `linear-gradient(135deg, ${B.sky}, ${B.blue})`,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.04em",
                  boxShadow: `0 0 20px ${B.sky}40`,
                  transition: "all 0.3s ease",
                }}
              >
                Read Article <ArrowRight size={16} />
              </button>
            </div>
            {/* Right */}
            <div
              style={{
                background: `linear-gradient(135deg, ${B.sky}12, ${B.indigo}12)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 32,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  width: "100%",
                }}
              >
                {[
                  { val: "4.2×", lbl: "Velocity Gain" },
                  { val: "99.9%", lbl: "Uptime SLA" },
                  { val: "-40%", lbl: "OpEx Reduction" },
                  { val: "2026", lbl: "Outlook" },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    style={{
                      background: "rgba(56,189,248,0.05)",
                      border: `1px solid ${B.border}`,
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 900,
                        color: "#fff",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(147,200,255,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Latest Articles ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 36,
              borderBottom: `1px solid ${B.border}`,
              paddingBottom: 20,
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>
              Latest Articles
            </h2>
            <span
              style={{
                fontSize: 12,
                color: "rgba(147,200,255,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              4 Articles
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: B.border,
              border: `1px solid ${B.border}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {insights.map((insight) => (
              <motion.div
                key={insight.id}
                variants={itemVariants}
                className="article-card-hover"
                style={{
                  background: B.bg,
                  padding: 36,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "background 0.3s, border-color 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 4,
                      fontWeight: 600,
                      ...catStyles[insight.category],
                    }}
                  >
                    {insight.category}
                  </span>
                  <span
                    style={{ fontSize: 12, color: "rgba(147,200,255,0.3)" }}
                  >
                    {insight.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#e0e7ff",
                    lineHeight: 1.35,
                    marginBottom: 12,
                  }}
                >
                  {insight.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "rgba(147,200,255,0.5)",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 24,
                    fontWeight: 300,
                  }}
                >
                  {insight.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 20,
                    borderTop: `1px solid ${B.border}`,
                  }}
                >
                  <span
                    style={{ fontSize: 12, color: "rgba(147,200,255,0.3)" }}
                  >
                    {insight.author}
                  </span>
                  <span
                    className="read-link-hidden"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      color: B.sky,
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  >
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Case Studies ── */}
        <div
          style={{
            background: `${B.sky}04`,
            borderTop: `1px solid ${B.border}`,
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <div
            style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: 36,
                borderBottom: `1px solid ${B.border}`,
                paddingBottom: 20,
              }}
            >
              <h2 style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>
                Case Studies
              </h2>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(147,200,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                3 Studies
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 24,
              }}
            >
              {caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  className="study-card-hover"
                  style={{
                    border: `1px solid ${B.border}`,
                    borderRadius: 14,
                    padding: 32,
                    background: `${B.sky}02`,
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "border-color 0.3s, background 0.3s",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#e0e7ff",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {study.title}
                  </h3>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(147,200,255,0.3)",
                      marginBottom: 24,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {study.subtitle}
                  </div>
                  <div
                    style={{
                      borderLeft: `3px solid ${B.sky}`,
                      padding: "12px 16px",
                      background: `${B.sky}08`,
                      borderRadius: "0 8px 8px 0",
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "rgba(147,200,255,0.3)",
                        marginBottom: 4,
                      }}
                    >
                      Key Result
                    </div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 900,
                        color: B.sky,
                      }}
                    >
                      {study.result}
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      marginBottom: 24,
                    }}
                  >
                    {study.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingBottom: 12,
                          borderBottom:
                            idx < study.metrics.length - 1
                              ? `1px solid ${B.border}`
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            color: "rgba(147,200,255,0.3)",
                          }}
                        >
                          {m.label}
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: m.color,
                          }}
                        >
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn-ghost-hover"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: `1px solid ${B.border}`,
                      borderRadius: 8,
                      color: "rgba(147,200,255,0.6)",
                      padding: "10px 16px",
                      fontSize: 13,
                      fontFamily: "'Inter', sans-serif",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      textAlign: "center",
                    }}
                  >
                    View Case Study
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", paddingTop: 40 }}
            >
              <Link to="/case-studies">
                <button
                  className="btn-accent-hover"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: `${B.indigo}15`,
                    color: B.indigo,
                    border: `1px solid ${B.indigo}44`,
                    borderRadius: 8,
                    padding: "14px 28px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    transition: "all 0.3s",
                    letterSpacing: "0.04em",
                  }}
                >
                  Explore All Case Studies <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 48px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Want to discuss your technical challenges?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "rgba(147,200,255,0.6)",
                fontWeight: 300,
                lineHeight: 1.6,
                letterSpacing: "0.01em",
              }}
            >
              Our engineering leaders are ready to explore solutions tailored to
              your unique business needs.
            </p>
          </div>
          <Link to="/contact">
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: `linear-gradient(135deg, ${B.sky}, ${B.blue})`,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "16px 32px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                whiteSpace: "nowrap",
                boxShadow: `0 0 20px ${B.sky}40`,
                transition: "all 0.3s",
                letterSpacing: "0.04em",
              }}
            >
              Schedule a Consultation <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InsightsPage;
