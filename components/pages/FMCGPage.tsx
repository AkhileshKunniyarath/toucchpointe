import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { Box, BarChart3, Globe, Zap, CheckCircle2, ShoppingCart, Target, PieChart } from 'lucide-react';

const FMCGPage = () => {
  const features = [
    {
      title: "Consumer Brand Campaigns",
      description: "Atmospheric digital narratives engineered to forge deep emotional resonance with diverse consumer demographics across all touchpoints.",
      icon: <Target className="w-6 h-6 text-blue-400" />
    },
    {
      title: "E-retail Acceleration",
      description: "Optimizing the digital shelf Presence across top-tier e-commerce platforms to maximize visibility and high-velocity conversions.",
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Social Commerce Hub",
      description: "Frictionless transactional ecosystems within social architectures that turn inspiration into immediate commercial reality.",
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Predictive Consumer Insights",
      description: "Advanced behavioral analytics and data synthesis to anticipate market shifts and inform high-stakes product architectural decisions.",
      icon: <PieChart className="w-6 h-6 text-purple-400" />
    }
  ];

  const stats = [
    { label: "Market Penetration", value: "+45%", icon: <Globe className="w-5 h-5" /> },
    { label: "Brand Recall", value: "92%", icon: <Target className="w-5 h-5" /> },
    { label: "Sales Velocity", value: "+75%", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Supply Optimization", value: "x2.5", icon: <Box className="w-5 h-5" /> },
  ];

  return (
    <PremiumPageLayout 
      title="FMCG Marketing Solutions | Touchpointe Digital"
      description="Digital marketing strategies for Fast-Moving Consumer Goods brands to increase visibility, engagement, and sales."
    >
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Retail Dynamics</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] mb-8">
              FMCG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Unleashed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Accelerate brand velocity, dominate the digital shelf, and engineer seamless consumer journeys through behavioral commerce.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 rounded-[2rem] group hover:bg-white/[0.05] transition-all duration-500">
                <div className="text-blue-400 mb-4 bg-blue-500/10 w-10 h-10 rounded-xl flex items-center justify-center border border-blue-500/20 transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em] mb-4">Market Leadership</div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-8">
                High-Velocity <span className="text-gray-500">Consumer</span> Brands
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                In the relentless FMCG sector, attention is the primary currency. We deploy high-impact digital frameworks that capture intent and drive immediate commercial action.
              </p>
              <div className="space-y-4">
                {["Algorithmic Inventory Alignment", "Cross-Platform Loyalty Synthesis", "Immersive Brand Storytelling"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                    </div>
                    <span className="text-gray-300 font-bold uppercase tracking-wide text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl hover:bg-white/[0.06] transition-all duration-500 group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </PremiumPageLayout>
  );
};

export default FMCGPage;
