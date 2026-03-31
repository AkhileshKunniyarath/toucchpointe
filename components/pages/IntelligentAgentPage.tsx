import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Sparkles,
  Bot,
  Zap,
  Target,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Gauge,
} from "lucide-react";
import PremiumPageLayout from "@/components/layouts/PremiumPageLayout";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";

const IntelligentAgentPage = () => {
  // B Token Design System
  const B = {
    sky: "#38bdf8",
    blue: "#60a5fa",
    indigo: "#818cf8",
    border: "rgba(56,189,248,0.18)",
    borderH: "rgba(56,189,248,0.55)",
    glow: "rgba(56,189,248,0.15)",
    bg: "rgb(2,6,26)",
  };

  const S = {
    background: B.bg,
    fontFamily: "'Inter', sans-serif",
    labelColor: "rgba(147,200,255,0.4)",
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
    },
  };

  const features = [
    {
      title: "Neural Learning",
      desc: "Hattie evolves by analyzing your unique business DNA and operational patterns.",
      icon: Brain,
      accentColor: B.sky,
    },
    {
      title: "Autonomous Logic",
      desc: "Go beyond 'if-then' statements. Hattie makes contextual executive decisions.",
      icon: Cpu,
      accentColor: B.blue,
    },
    {
      title: "Predictive Edge",
      desc: "Identify market shifts before they happen with deep-pattern recognition.",
      icon: Target,
      accentColor: B.indigo,
    },
  ];

  return (
    <PremiumPageLayout
      title="Hattie AI | Intelligent Agent"
      description="The world's most intuitive autonomous business agent."
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        
        .ia-glow-card {
          background: ${B.bg};
          border: 1px solid ${B.border};
          box-shadow: 0 0 30px ${B.sky}25, inset 0 0 20px ${B.sky}10;
        }

        .ia-glow-card:hover {
          border-color: ${B.borderH};
          box-shadow: 0 0 50px ${B.sky}40, inset 0 0 30px ${B.sky}15;
        }

        .ia-shine {
          position: relative;
          overflow: hidden;
        }

        .ia-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, ${B.sky}20, transparent);
          transform: rotate(45deg);
          animation: ia-shine 3s infinite;
        }

        @keyframes ia-shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .ia-pulse-glow {
          animation: ia-pulse-glow 2s ease-in-out infinite;
        }

        @keyframes ia-pulse-glow {
          0%, 100% { box-shadow: 0 0 20px ${B.sky}40, inset 0 0 15px ${B.sky}10; }
          50% { box-shadow: 0 0 40px ${B.sky}60, inset 0 0 25px ${B.sky}15; }
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: B.bg }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Rotating orbs */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${B.sky}20, transparent)`,
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${B.blue}15, transparent)`,
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${B.indigo}15, transparent)`,
            }}
          />

          {/* Concentric rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border rounded-full"
            style={{ borderColor: B.border }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border rounded-full"
            style={{ borderColor: `${B.sky}30` }}
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
              style={{
                border: `1px solid ${B.border}`,
                background: `${B.sky}10`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" style={{ color: B.sky }} />
              </motion.div>
              <span
                style={{ color: B.sky, fontFamily: S.fontFamily }}
                className="text-sm font-medium"
              >
                Meet the Future of Autonomy
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1
              className="text-6xl md:text-8xl lg:text-8xl font-black mb-6 text-white tracking-tight"
              style={{ fontFamily: S.fontFamily }}
            >
              Hattie
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-transparent bg-clip-text block"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${B.sky}, ${B.blue}, ${B.indigo}, ${B.sky})`,
                  backgroundSize: "200% 200%",
                }}
              >
                AI
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                color: "rgba(147,200,255,0.7)",
                fontFamily: S.fontFamily,
              }}
            >
              More than a chatbot. Hattie is a{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>
                cognitive layer
              </span>{" "}
              that lives within your enterprise, automating complexity and
              synthesizing raw data into decisive action.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 text-black font-bold rounded-xl transition-all duration-300 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${B.sky}, ${B.blue})`,
                  boxShadow: `0 0 25px ${B.sky}40`,
                }}
              >
                Deploy Hattie
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
                style={{
                  border: `1px solid ${B.border}`,
                  background: `${B.sky}08`,
                }}
              >
                Watch Intelligence <Bot className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-32 relative" style={{ background: B.bg }}>
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <h2
                className="text-4xl md:text-5xl font-black mb-6 text-white"
                style={{ fontFamily: S.fontFamily }}
              >
                Autonomous by Design
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg italic"
                style={{
                  color: B.sky,
                  borderLeft: `2px solid ${B.sky}`,
                  paddingLeft: "1.5rem",
                  fontFamily: S.fontFamily,
                  fontStyle: "italic",
                }}
              >
                "Hattie doesn't just process information; she understands
                intent."
              </motion.p>
            </div>
            <motion.div
              animate={floatingVariants.animate}
              className="hidden md:block"
            >
              <Zap className="w-16 h-16" style={{ color: `${B.sky}40` }} />
            </motion.div>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  custom={idx}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <motion.div
                    className="ia-glow-card h-full p-8 rounded-2xl transition-all duration-300 ia-shine"
                    style={{
                      background: B.bg,
                      border: `1px solid ${B.border}`,
                    }}
                    whileHover={{
                      boxShadow: `0 0 50px ${feature.accentColor}40, inset 0 0 30px ${feature.accentColor}15`,
                    }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 100% 0%, ${feature.accentColor}20, transparent)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon Container */}
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
                        style={{
                          background: `${feature.accentColor}15`,
                          border: `1px solid ${feature.accentColor}40`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: feature.accentColor }}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-4 transition-all duration-300"
                        style={{
                          color: "#fff",
                          fontFamily: S.fontFamily,
                        }}
                      >
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-base leading-relaxed mb-6"
                        style={{
                          color: "rgba(147,200,255,0.6)",
                          fontFamily: S.fontFamily,
                        }}
                      >
                        {feature.desc}
                      </p>

                      {/* Learn More Link */}
                      <motion.div
                        className="flex items-center gap-2 font-semibold transition-all opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2"
                        style={{ color: feature.accentColor }}
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust Quote / Stats */}
      <section
        className="py-24 relative"
        style={{
          background: `linear-gradient(180deg, ${B.bg} 0%, rgb(0,3,10) 100%)`,
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
            style={{
              background: B.bg,
              border: `1px solid ${B.border}`,
            }}
          >
            {/* Animated background orbs */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 100%, ${B.sky}20, transparent 70%)`,
              }}
            />

            <div
              className="p-12 rounded-3xl relative z-10 text-center"
              style={{
                background: `linear-gradient(135deg, ${B.sky}08, ${B.blue}05)`,
              }}
            >
              {/* Animated stat number */}
              <motion.div
                initial={{ scale: 0, rotateZ: -180 }}
                whileInView={{ scale: 1, rotateZ: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2,
                }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-6xl md:text-7xl font-black mb-8"
                  style={{
                    background: `linear-gradient(135deg, ${B.sky}, ${B.blue})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: S.fontFamily,
                    fontWeight: 900,
                  }}
                >
                  90%
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl max-w-2xl mx-auto leading-relaxed"
                style={{
                  color: "rgba(147,200,255,0.7)",
                  fontFamily: S.fontFamily,
                }}
              >
                Reduction in manual operational overhead when Hattie AI is
                deployed across enterprise workflows.
              </motion.p>

              {/* Bottom decorative elements */}
              <motion.div
                className="mt-8 flex justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: B.sky }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 relative" style={{ background: B.bg }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-6 text-white"
              style={{ fontFamily: S.fontFamily }}
            >
              Hattie Capabilities
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{
                color: "rgba(147,200,255,0.6)",
                fontFamily: S.fontFamily,
              }}
            >
              Enterprise-grade AI that understands context and drives real
              business outcomes
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Real-Time Learning",
                desc: "Adapts to changing market conditions instantly",
                icon: Lightbulb,
              },
              {
                title: "Predictive Analytics",
                desc: "Anticipate trends before they emerge",
                icon: Gauge,
              },
              {
                title: "Cross-System Integration",
                desc: "Seamlessly connects with your existing tools",
                icon: Zap,
              },
              {
                title: "Decision Automation",
                desc: "Handles complex decisions at scale",
                icon: Cpu,
              },
            ].map((capability, idx) => {
              const Icon = capability.icon;
              const colors = [B.sky, B.blue, B.indigo, "#10b981"];
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className="p-8 rounded-2xl transition-all duration-300 group"
                    style={{
                      background: B.bg,
                      border: `1px solid ${B.border}`,
                    }}
                    whileHover={{
                      boxShadow: `0 0 40px ${colors[idx]}40, inset 0 0 20px ${colors[idx]}10`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: idx * 0.2,
                      }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `${colors[idx]}15`,
                        border: `1px solid ${colors[idx]}40`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: colors[idx] }}
                      />
                    </motion.div>

                    <h3
                      className="text-xl font-bold mb-3"
                      style={{
                        color: "#fff",
                        fontFamily: S.fontFamily,
                      }}
                    >
                      {capability.title}
                    </h3>

                    <p
                      className="text-sm"
                      style={{
                        color: "rgba(147,200,255,0.6)",
                        fontFamily: S.fontFamily,
                      }}
                    >
                      {capability.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Contact />
    </PremiumPageLayout>
  );
};

export default IntelligentAgentPage;
