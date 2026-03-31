import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Shield,
  Globe,
  Cpu,
  MousePointer2,
} from "lucide-react";
import PremiumPageLayout from "@/components/layouts/PremiumPageLayout";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";

const TouchpointeOSPage = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const features = [
    {
      title: "Unified Interface",
      desc: "One command center for your entire enterprise ecosystem.",
      icon: <MousePointer2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400",
      className: "md:col-span-2",
    },
    {
      title: "Cross-Platform",
      desc: "Native performance on every device.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      className: "md:col-span-1",
    },
    {
      title: "AI Core",
      desc: "Neural-link automation that learns your workflow.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-400",
      className: "md:col-span-1",
    },
    {
      title: "Bank-Grade Security",
      desc: "End-to-end encryption with zero-trust architecture.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      className: "md:col-span-2",
    },
  ];

  return (
    <PremiumPageLayout
      title="Touchpointe OS | Next-Gen Enterprise"
      description="The future of enterprise operations, unified in one OS."
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y: yRange }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"
          />
          <motion.div
            style={{ y: yRange }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              variants={itemVariants}
              className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 inline-block backdrop-blur-xl"
            >
              v3.0 Now Available
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tighter leading-tight"
            >
              The OS for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                Modern Work
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Touchpointe OS eliminates tool fragmentation. A single,
              intelligent layer that connects your people, processes, and data.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-medium rounded-full transition-all backdrop-blur-sm">
                Watch Keynote
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-[#030712]">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Built for scale.
            </h2>
            <p className="text-gray-500">
              Engineered to handle the complexity of global enterprises.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={feature.className}
              >
                <Card className="group relative h-full bg-neutral-900/50 border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <CardContent className="p-8">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-16">
            {[
              { label: "Performance", value: "99.9%" },
              { label: "Deployment", value: "2mins" },
              { label: "Integration", value: "200+" },
              { label: "Cost Saving", value: "40%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </PremiumPageLayout>
  );
};

export default TouchpointeOSPage;
