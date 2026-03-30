import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DigitalBrain from './DigitalBrain';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import siteDefaults from '@/lib/site-defaults.json';

const KeralaMarketingExcellence = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data } = useSiteSettings('home_page', siteDefaults.home_page);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  const sectionData = data.excellenceSection || siteDefaults.home_page.excellenceSection;
  const keyPoints = sectionData.keyPoints || [];
  const stats = sectionData.stats || [];

  return (
    <section 
      id="kerala-excellence" 
      className="relative bg-[#06060f] py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[5%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-[5%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div 
            ref={sectionRef} 
            className="opacity-0 translate-y-12 transition-all duration-1000 ease-out"
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase">
              {sectionData.badge}
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-white">
              {sectionData.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                {sectionData.highlight}
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed max-w-xl">
              <p className="text-lg">
                {sectionData.descriptionOne}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{point}</span>
                  </div>
                ))}
              </div>
              
              <p>
                {sectionData.descriptionTwo}
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link 
                to={sectionData.primaryCtaHref || "/about"} 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_25px_rgba(79,142,247,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                {sectionData.primaryCtaLabel || "Learn more about us"}
              </Link>
              <Link 
                to={sectionData.secondaryCtaHref || "/contact"} 
                className="flex items-center text-gray-400 hover:text-white font-semibold text-sm tracking-widest uppercase transition-colors group"
              >
                {sectionData.secondaryCtaLabel || "Get in touch"}
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Visual (Interactive Canvas Brain) */}
          <div className="relative group perspective-1000">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 p-4 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
               <DigitalBrain />
            </div>
          </div>
        </div>

        {/* Bottom Glassmorphic Stats Strip */}
        <div className="mt-20 md:mt-24 rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md px-4 md:px-0 py-10 md:py-12 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 items-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center text-center px-6 ${
                  index !== stats.length - 1 ? 'lg:border-r border-white/10' : ''
                }`}
              >
                <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4 h-8 flex items-center">{stat.label}</div>
                <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1 select-none">
                   {stat.value}
                </div>
                <div className="w-12 h-1 bg-blue-500/30 rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeralaMarketingExcellence;
