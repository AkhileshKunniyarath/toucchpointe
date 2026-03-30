import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Package,
  Database,
  GitBranch,
  Terminal,
  ShieldCheck,
  Cpu,
  Globe,
} from "lucide-react";

import PremiumPageLayout from "@/components/layouts/PremiumPageLayout";
import Contact from "@/components/Contact";

const DynamiteFrameworkPage = () => {
  const [activeTab] = useState(0);

  const theme = {
    sky: "#38bdf8",
    blue: "#60a5fa",
    indigo: "#818cf8",
    slate: "#94a3b8",
    bg: "#020617",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <PremiumPageLayout
      title="Dynamite Framework | Engineering Excellence"
      description="The high-performance blueprint for modern software architecture."
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-8 uppercase"
            >
              <Terminal className="w-3 h-3" /> System Status: Operational
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black text-white mb-6"
            >
              Build at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-500">
                Speed of Thought
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
            >
              Dynamite is a modular framework designed for high-concurrency
              environments.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-sky-500 text-white font-bold rounded-sm hover:bg-sky-400 transition">
                <span className="flex items-center gap-2">
                  Initialize Project <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button className="px-8 py-4 border border-white/10 text-slate-300 rounded-sm hover:bg-white/5">
                npm install @dynamite/core
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#020617] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Type-Safe by Default.
            </h2>

            <p className="text-slate-400 mb-8">
              Catch errors at compile time and ship confidently.
            </p>

            <ul className="space-y-4">
              {[
                { icon: <ShieldCheck />, text: "Zero-config security headers" },
                { icon: <Cpu />, text: "Automatic memory optimization" },
                { icon: <Globe />, text: "Edge-ready deployment" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="text-sky-500">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CODE BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#0f172a] rounded-xl border border-white/10 p-6 font-mono text-sm text-slate-300"
          >
            <p className="text-sky-400">
              import {"{ Dynamite }"} from "@dynamite/core";
            </p>
            <p className="mt-2 text-pink-400">
              const app = new Dynamite.Server();
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="py-24 bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[600px]">
            <BentoCard
              className="md:col-span-2 md:row-span-2"
              icon={<Database />}
              title="State Engine"
              desc="Instant updates."
              color="border-sky-500/20"
            />
            <BentoCard
              className="md:col-span-2"
              icon={<Zap />}
              title="Turbo Pipeline"
              desc="Fast builds."
              color="border-purple-500/20"
            />
            <BentoCard
              icon={<GitBranch />}
              title="Atomic Versioning"
              desc="Safe rollbacks."
              color="border-emerald-500/20"
            />
            <BentoCard
              icon={<Package />}
              title="Modular Plug-ins"
              desc="Scale infinitely."
              color="border-pink-500/20"
            />
          </div>
        </div>
      </section>

      <Contact />
    </PremiumPageLayout>
  );
};

type BentoCardProps = {
  icon: React.ReactElement;
  title: string;
  desc: string;
  className?: string;
  color?: string;
};

const BentoCard: React.FC<BentoCardProps> = ({
  icon,
  title,
  desc,
  className = "",
  color = "",
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.97 }}
      className={`relative bg-[#0f172a]/40 border ${color} rounded-lg p-6 transition ${className}`}
    >
      <div className="mb-4 text-sky-400">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </motion.div>
  );
};

export default DynamiteFrameworkPage;
