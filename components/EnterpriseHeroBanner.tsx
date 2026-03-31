import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnterpriseHeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#06060f]">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(100, 200, 255, 0.1) 25%, rgba(100, 200, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(100, 200, 255, 0.1) 75%, rgba(100, 200, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(100, 200, 255, 0.1) 25%, rgba(100, 200, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(100, 200, 255, 0.1) 75%, rgba(100, 200, 255, 0.1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-to-tl from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Star-like glow effects */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full blur-sm"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full blur-sm"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 1,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-6 w-fit"
            >
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-sm">
                <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  ENTERPRISE PLATFORM
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                Enterprise Infrastructure
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-xl"
            >
              Build{" "}
              <span className="text-cyan-300 font-semibold">scalable</span>,{" "}
              <span className="text-blue-300 font-semibold">intelligent</span>,
              and{" "}
              <span className="text-purple-300 font-semibold">
                future-ready
              </span>{" "}
              platforms designed for high-performance business ecosystems.
            </motion.p>

            {/* Supporting text */}
            <motion.div
              variants={itemVariants}
              className="mb-10 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors"
            >
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">
                  Enterprise-grade capabilities include:
                </span>{" "}
                Unified systems architecture, AI-driven automation engines,
                real-time data integration, multi-tenant scalability, advanced
                security compliance, and seamless operational continuity across
                your entire business ecosystem.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 rounded-lg gap-2 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 group h-auto">
                  Explore Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-6 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-md h-auto">
                Request Demo
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.99% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span>Real-Time Analytics</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-full min-h-[500px] md:min-h-[600px] hidden lg:flex items-center justify-center"
          >
            {/* Floating glassmorphic cards */}

            {/* Card 1 - Data Analytics */}
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="absolute top-0 right-0 w-80 h-64 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-xl p-6 shadow-2xl shadow-blue-500/20"
              style={{
                boxShadow:
                  "0 0 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/30">
                  <BarChart3 className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  Data Analytics
                </h3>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-2 w-3/4 bg-gradient-to-r from-blue-400 to-transparent rounded" />
                <div className="h-2 w-1/2 bg-gradient-to-r from-cyan-400 to-transparent rounded" />
                <div className="h-2 w-2/3 bg-gradient-to-r from-purple-400 to-transparent rounded" />
              </div>
              <p className="text-xs text-gray-400">
                Real-time insights across your enterprise
              </p>
            </motion.div>

            {/* Card 2 - Automation */}
            <motion.div
              variants={floatingVariants}
              animate="float"
              transition={{
                duration: 4.5,
                delay: 0.8,
              }}
              className="absolute top-40 left-0 w-72 h-56 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-xl p-6 shadow-2xl shadow-purple-500/20"
              style={{
                boxShadow:
                  "0 0 40px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-purple-500/30">
                  <Zap className="w-5 h-5 text-purple-300" />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  AI Automation
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs text-gray-400">
                    Workflow optimization
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span className="text-xs text-gray-400">
                    Process automation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Security */}
            <motion.div
              variants={floatingVariants}
              animate="float"
              transition={{
                duration: 4,
                delay: 1.6,
              }}
              className="absolute bottom-20 right-10 w-72 h-56 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-xl p-6 shadow-2xl shadow-cyan-500/20"
              style={{
                boxShadow:
                  "0 0 40px rgba(34, 211, 238, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-cyan-500/30">
                  <Shield className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  Enterprise Security
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-4">
                End-to-end encryption and compliance management
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded text-xs bg-cyan-500/20 text-cyan-300">
                  SOC2
                </span>
                <span className="px-2 py-1 rounded text-xs bg-cyan-500/20 text-cyan-300">
                  ISO27001
                </span>
              </div>
            </motion.div>

            {/* Glow lines connecting elements */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ pointerEvents: "none", opacity: 0.3 }}
            >
              <motion.line
                x1="20%"
                y1="50%"
                x2="75%"
                y2="20%"
                stroke="url(#gradient1)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(59, 130, 246)"
                    stopOpacity="0.5"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(34, 211, 238)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06060f] via-[#06060f]/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default EnterpriseHeroBanner;
