import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { ShoppingCart, TrendingUp, Search, Zap, CheckCircle2, ShoppingBag, BarChart3, Users } from 'lucide-react';

const EcommercePage = () => {
  const features = [
    {
      title: "Conversion Rate Optimization",
      description: "Analyze and improve your website's user experience to increase conversion rates and average order value through behavioral analytics.",
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Shopping Feed Management",
      description: "Optimize your product listings for Google Shopping, Amazon, and other marketplace platforms to maximize organic visibility.",
      icon: <Search className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Implement high-precision automation strategies to recover lost revenue and increase completed purchase frequency.",
      icon: <ShoppingCart className="w-6 h-6 text-blue-400" />
    },
    {
      title: "E-commerce SEO",
      description: "Specialized search engine optimization architecture for product nodes to dominate high-intent commercial SERPs.",
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  const stats = [
    { label: "Avg. ROI Increase", value: "3.5x", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Conversion Lift", value: "+42%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Revenue Growth", value: "+120%", icon: <ShoppingBag className="w-5 h-5" /> },
    { label: "Retention Rate", value: "85%", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <PremiumPageLayout 
      title="E-commerce Marketing Solutions | Touchpointe Digital"
      description="Specialized digital marketing strategies for online stores to increase traffic, conversions, and customer loyalty."
    >
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Retail Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] mb-8">
              E-commerce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Accelerated</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Drive high-intent traffic, maximize conversion velocity, and engineer absolute customer loyalty for your digital storefront.
            </p>
          </div>

          {/* Stats Grid */}
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

      {/* Strategy Section */}
      <section className="py-32 relative bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em] mb-4">Core Architecture</div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-8">
                Comprehensive <span className="text-gray-500">Market</span> Dominance
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                In the hyper-competitive digital retail landscape, a standard approach is obsolete. We deploy advanced growth frameworks designed to scale online brands through algorithmic precision and behavioral engineering.
              </p>
              <div className="space-y-4">
                {["Omnichannel Fulfillment Optimization", "Dynamic Pricing Intelligence", "Hyper-Personalized UX Design"].map((item, i) => (
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

export default EcommercePage;
