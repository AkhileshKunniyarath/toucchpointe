import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Users,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import siteDefaults from "@/lib/site-defaults.json";

const iconMap = {
  Zap,
  Lightbulb,
  Heart,
  Shield,
  Target,
  Users,
};

const CompanyPage = () => {
  const { data: pageData } = useSiteSettings("company_page", siteDefaults.company_page);
  const B = {
    sky: "#38bdf8",
    blue: "#60a5fa",
    indigo: "#818cf8",
    border: "rgba(56,189,248,0.18)",
    borderH: "rgba(56,189,248,0.55)",
    glow: "rgba(56,189,248,0.15)",
    bg: "rgb(2,6,26)",
  };

  const coreValues = (pageData?.coreValues || siteDefaults.company_page.coreValues).map((value: any) => ({
    ...value,
    icon: iconMap[value.iconName as keyof typeof iconMap] || Zap,
  }));

  const stats = pageData?.stats || siteDefaults.company_page.stats;

  const team = pageData?.team || siteDefaults.company_page.team;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const S: Record<string, React.CSSProperties> = {
    root: {
      background: B.bg,
      color: "#e0e7ff",
      fontFamily: "'Inter', sans-serif",
      minHeight: "100vh",
    },
    container: { maxWidth: 1200, margin: "0 auto", padding: "0 48px" },
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
    sectionHeader: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 36,
      borderBottom: `1px solid ${B.border}`,
      paddingBottom: 20,
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: 700,
      color: "#fff",
      fontFamily: "'Inter', sans-serif",
    },
    sectionCount: {
      fontSize: 12,
      color: "rgba(147,200,255,0.4)",
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
    },
    divider: { borderTop: `1px solid ${B.border}` },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        .co-card-hover:hover { background: ${B.sky}08 !important; border-color: ${B.border} !important; }
        .co-team-hover:hover { border-color: ${B.sky}44 !important; background: ${B.sky}08 !important; }
        .co-team-hover:hover .co-avatar { transform: scale(1.08); }
        .co-avatar { transition: transform 0.2s; }
        .co-ghost:hover { background: ${B.sky}08 !important; color: #fff !important; border-color: ${B.border} !important; }
        .co-btn-blue:hover { background: ${B.blue} !important; }
        .co-btn-green:hover { background: ${B.sky} !important; color: ${B.bg} !important; }
        .co-focus-right:hover .co-arrow { transform: translateX(4px); }
        .co-arrow { transition: transform 0.2s; }
      `}</style>

      <Navbar />

      <div style={S.root}>
        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          style={{
            ...S.container,
            paddingTop: 100,
            paddingBottom: 72,
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <div style={S.label}>
            <span style={S.labelLine} />
            Touchpointe Digital
          </div>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(40px, 5.5vw, 68px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 28,
              maxWidth: 720,
              letterSpacing: "-0.02em",
            }}
            dangerouslySetInnerHTML={{ __html: pageData?.heroTitle || "Empowering Enterprises.<br />Accelerating Business." }}
          />
          <p
            style={{
              fontSize: 17,
              color: "rgba(147,200,255,0.6)",
              lineHeight: 1.75,
              maxWidth: 560,
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            {pageData?.heroSubtitle || "Born from engineering. Driven by results. A technology partner that delivers institutional-grade infrastructure and rapid growth solutions."}
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <div style={{ ...S.container, paddingTop: 64, paddingBottom: 64 }}>
          <motion.div
            variants={containerVariants}
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
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                style={{
                  background: B.bg,
                  padding: "36px 32px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 44,
                    fontWeight: 900,
                    color: B.sky,
                    lineHeight: 1,
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(147,200,255,0.4)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Mission ── */}
        <div
          style={{
            background: `${B.sky}08`,
            borderTop: `1px solid ${B.border}`,
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              ...S.container,
              paddingTop: 64,
              paddingBottom: 64,
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ ...S.label, marginBottom: 12 }}>
                <span style={S.labelLine} />
                Our Mission
              </div>
              <div
                style={{
                  width: 40,
                  height: 3,
                  background: B.sky,
                  borderRadius: 2,
                }}
              />
            </div>
            <p
              style={{
                fontSize: 19,
                color: "#e0e7ff",
                lineHeight: 1.8,
                fontWeight: 300,
                fontFamily: "'Inter', sans-serif",
                fontStyle: "italic",
              }}
            >
              {'"'}
              {pageData?.missionQuote || siteDefaults.company_page.missionQuote}
              {'"'}
            </p>
          </motion.div>
        </div>

        {/* ── Dual Focus ── */}
        <div style={{ ...S.container, paddingTop: 64, paddingBottom: 64 }}>
          <div style={S.sectionHeader}>
            <h2 style={S.sectionTitle}>Our Dual-Focus Approach</h2>
            <span style={S.sectionCount}>Two tracks</span>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {(pageData?.dualFocus || siteDefaults.company_page.dualFocus).map((f: any, i: number) => (
              <motion.div
                key={i}
                variants={itemVariants}
                style={{
                  border: f.accentBorder,
                  borderRadius: 16,
                  padding: 40,
                  background: f.accentBg,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase" as const,
                    color: f.accent,
                    border: f.accentBorder,
                    borderRadius: 4,
                    padding: "4px 10px",
                    display: "inline-block",
                    marginBottom: 20,
                  }}
                >
                  {f.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 28,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 16,
                  }}
                >
                  {f.items.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        paddingBottom: 16,
                        borderBottom:
                          j < f.items.length - 1
                            ? `1px solid ${B.border}`
                            : "none",
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: f.accent,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 14,
                          color: "rgba(147,200,255,0.7)",
                          fontWeight: 300,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Core Values ── */}
        <div
          style={{
            background: `${B.sky}05`,
            borderTop: `1px solid ${B.border}`,
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <div style={{ ...S.container, paddingTop: 64, paddingBottom: 64 }}>
            <div style={S.sectionHeader}>
              <h2 style={S.sectionTitle}>Our Core Values</h2>
              <span style={S.sectionCount}>6 Principles</span>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {coreValues.map((v: any, i: number) => {
                const Icon = v.icon || Zap;
                
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="co-card-hover"
                    style={{
                      border: `1px solid ${B.border}`,
                      borderRadius: 14,
                      padding: 28,
                      background: `${B.sky}05`,
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: v.accentBg,
                        border: v.accentBorder,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Icon size={18} color={v.accent} />
                    </div>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: 10,
                        lineHeight: 1.3,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {v.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "rgba(147,200,255,0.5)",
                        lineHeight: 1.7,
                        fontWeight: 300,
                      }}
                    >
                      {v.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ── Leadership ── */}
        <div style={{ ...S.container, paddingTop: 64, paddingBottom: 64 }}>
          <div style={S.sectionHeader}>
            <h2 style={S.sectionTitle}>Leadership Team</h2>
            <span style={S.sectionCount}>4 Members</span>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {team.map((m, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="co-team-hover"
                style={{
                  border: `1px solid ${B.border}`,
                  borderRadius: 14,
                  padding: 28,
                  background: `${B.sky}05`,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  textAlign: "center" as const,
                }}
              >
                <div
                  className="co-avatar"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `${B.sky}12`,
                    border: `1px solid ${B.sky}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: 15,
                    fontWeight: 600,
                    color: B.sky,
                  }}
                >
                  {m.initials}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 6,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {m.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: B.sky,
                    marginBottom: 8,
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                  }}
                >
                  {m.role}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(147,200,255,0.4)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                  }}
                >
                  {m.expertise}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Careers ── */}
        <div
          style={{
            background: `${B.blue}08`,
            borderTop: `1px solid ${B.border}`,
            borderBottom: `1px solid ${B.border}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              ...S.container,
              paddingTop: 72,
              paddingBottom: 72,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div style={S.label}>
                <span style={S.labelLine} />
                Careers
              </div>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 34,
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {pageData?.careersSection?.title || siteDefaults.company_page.careersSection.title}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(147,200,255,0.6)",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  maxWidth: 480,
                }}
              >
                {pageData?.careersSection?.description || siteDefaults.company_page.careersSection.description}
              </p>
            </div>
            <button
              className="co-btn-blue"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: `linear-gradient(135deg, ${B.sky}, ${B.blue})`,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "16px 28px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                whiteSpace: "nowrap" as const,
                transition: "all 0.3s",
                boxShadow: `0 0 20px ${B.sky}40`,
              }}
            >
              {(pageData?.careersSection?.buttonLabel || siteDefaults.company_page.careersSection.buttonLabel)} <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* ── Final CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            ...S.container,
            paddingTop: 80,
            paddingBottom: 96,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 40,
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 14,
                letterSpacing: "-0.02em",
              }}
            >
              {pageData?.finalCta?.title || siteDefaults.company_page.finalCta.title}
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(147,200,255,0.6)",
                fontWeight: 300,
                lineHeight: 1.65,
                maxWidth: 440,
              }}
            >
              {pageData?.finalCta?.description || siteDefaults.company_page.finalCta.description}
            </p>
          </div>
          <Link to="/contact">
            <button
              className="co-btn-green"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: B.sky,
                color: B.bg,
                border: "none",
                borderRadius: 10,
                padding: "18px 32px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                whiteSpace: "nowrap" as const,
                transition: "all 0.3s",
                boxShadow: `0 0 20px ${B.sky}40`,
              }}
            >
              {(pageData?.finalCta?.buttonLabel || siteDefaults.company_page.finalCta.buttonLabel)} <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default CompanyPage;
