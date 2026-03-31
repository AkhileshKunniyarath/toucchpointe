import React, { useState } from "react";
import PremiumPageLayout from "@/components/layouts/PremiumPageLayout";
import Contact from "@/components/Contact";
import EnterpriseHeroBanner from "@/components/EnterpriseHeroBanner";
import {
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Code,
  Lock,
  Globe,
  Cog,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const EnterprisePlatformsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("crm");

  const platforms = [
    {
      id: "crm",
      name: "Enterprise CRM Solutions",
      icon: Users,
      description:
        "Powerful customer relationship management for large-scale operations",
      features: [
        "Multi-team collaboration and workflow automation",
        "Advanced customer segmentation and analytics",
        "Real-time reporting and dashboards",
        "API integrations with 1000+ third-party apps",
      ],
      benefits: [
        "Increase sales by up to 45%",
        "Reduce customer churn by 30%",
        "Improve team productivity by 35%",
        "Cut operational costs by 25%",
      ],
      image: "CRM Platform",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "ecommerce",
      name: "E-Commerce Platform",
      icon: Globe,
      description: "Enterprise-grade e-commerce solutions for global retailers",
      features: [
        "Multi-store, multi-currency management",
        "Inventory synchronization across channels",
        "Advanced order management system",
        "AI-powered product recommendations",
      ],
      benefits: [
        "120% faster order processing",
        "40% reduction in cart abandonment",
        "50% increase in average order value",
        "99.99% platform uptime guarantee",
      ],
      image: "E-Commerce Platform",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "analytics",
      name: "Advanced Analytics Engine",
      icon: BarChart3,
      description:
        "Real-time data analytics and business intelligence platform",
      features: [
        "Process 100+ million data points per second",
        "Custom dashboard builder with drag-and-drop",
        "Predictive analytics with machine learning",
        "Automated reporting and insights generation",
      ],
      benefits: [
        "Make decisions 10x faster with data insights",
        "Identify opportunities 60 days earlier",
        "Reduce costs by 35% through optimization",
        "Real-time competitive intelligence",
      ],
      image: "Analytics Platform",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "security",
      name: "Security & Compliance Hub",
      icon: Lock,
      description:
        "Comprehensive security and regulatory compliance management",
      features: [
        "End-to-end encryption and data protection",
        "GDPR, HIPAA, and SOC 2 compliance",
        "Automated vulnerability scanning",
        "24/7 threat monitoring and response",
      ],
      benefits: [
        "Eliminate 99% of security breaches",
        "Ensure 100% compliance with regulations",
        "Reduce incident response time to minutes",
        "Save millions on security incidents",
      ],
      image: "Security Platform",
      color: "from-red-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const activePlatform = platforms.find((p) => p.id === selectedPlatform);

  return (
    <>
      <EnterpriseHeroBanner />
      <PremiumPageLayout
        title="Enterprise Platforms | Touchpointe Digital"
        description="Comprehensive enterprise-grade platform solutions for large-scale digital transformation and business operations."
      >
        {/* Key Features Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "99.99% uptime and sub-100ms response times",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  desc: "Bank-level encryption and compliance",
                },
                {
                  icon: Cloud,
                  title: "Global Scale",
                  desc: "Multi-region deployment and failover",
                },
                {
                  icon: Code,
                  title: "Developer Friendly",
                  desc: "RESTful APIs and comprehensive documentation",
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="h-full bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group">
                    <CardHeader>
                      <item.icon className="w-12 h-12 mb-4 text-blue-400 group-hover:text-purple-400 transition-colors" />
                      <CardTitle className="text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Platform Selection Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Integrated{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Platform Suite
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the platforms that best fit your enterprise needs, or
                integrate them all for complete operational excellence.
              </p>
            </div>

            {/* Platform Selector */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <motion.button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedPlatform === platform.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                        : "bg-white/5 border border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">
                      {platform.name.split(" ")[0]}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Platform Details */}
            {activePlatform && (
              <motion.div
                key={activePlatform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Features */}
                  <div>
                    <div
                      className={`text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${activePlatform.color}`}
                    >
                      {activePlatform.name}
                    </div>
                    <p className="text-gray-400 text-lg mb-8">
                      {activePlatform.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-white font-bold text-lg mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {activePlatform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Right side - Benefits */}
                  <div>
                    <div
                      className={`w-full h-64 md:h-80 rounded-xl bg-gradient-to-br ${activePlatform.color} opacity-20 mb-8 flex items-center justify-center`}
                    >
                      <span className="text-white/40 text-center text-lg font-semibold">
                        {activePlatform.image}
                      </span>
                    </div>

                    <h4 className="text-white font-bold text-lg mb-4">
                      Business Benefits:
                    </h4>
                    <ul className="space-y-3">
                      {activePlatform.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Cog,
                  title: "Seamless Integration",
                  desc: "Connect all platforms with a single click. Our unified API ensures real-time data synchronization across all enterprise modules.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile & Web",
                  desc: "Access your enterprise platforms from any device. Native Apps and Progressive Web Apps ensure productivity on the go.",
                },
                {
                  icon: Shield,
                  title: "Security First",
                  desc: "Multi-factor authentication, role-based access control, and end-to-end encryption protect your business-critical data.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group">
                    <CardHeader>
                      <item.icon className="w-12 h-12 mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
                      <CardTitle className="text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Platform{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Comparison
                </span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-white font-bold">Feature</th>
                    {platforms.map((p) => (
                      <th
                        key={p.id}
                        className="px-6 py-4 text-center text-white font-bold"
                      >
                        {p.name.split(" ")[0]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Scalability",
                    "Security",
                    "Analytics",
                    "Automation",
                    "Integration",
                    "Support",
                  ].map((feature) => (
                    <tr
                      key={feature}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-300 font-medium">
                        {feature}
                      </td>
                      {platforms.map((p) => (
                        <td key={p.id} className="px-6 py-4 text-center">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  Ready to Transform Your Enterprise?
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Let our platform experts help you choose the right solution
                  for your organization's unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50"
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
                  >
                    Request Custom Plan
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Contact />
      </PremiumPageLayout>
    </>
  );
};

export default EnterprisePlatformsPage;
