
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Target, Award, Sparkles, Globe, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const keyPoints = [
    "AI-Powered Operations",
    "Data-Driven Decision Making",
    "Global Design Standards",
    "Rapid Performance Optimization"
  ];

  const valueProps = [
    {
      icon: <Target className="h-10 w-10 text-blue-400" />,
      title: "Mission",
      description: "To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and deliver measurable results."
    },
    {
      icon: <Award className="h-10 w-10 text-cyan-400" />,
      title: "Vision",
      description: "To be the most trusted digital marketing partner, known for our expertise, integrity, and ability to transform businesses through technology and creativity."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-blue-400" />,
      title: "Values",
      description: "Excellence, innovation, integrity, collaboration, and customer-centricity guide everything we do, from strategy to execution."
    }
  ];
  
  const teamValues = [
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Expert Team",
      description: "Our certified specialists bring together diverse skills and extensive experience to deliver comprehensive digital solutions."
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      title: "Global Standards",
      description: "We implement international best practices while understanding the unique needs of the local market."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Innovative Approach",
      description: "We stay ahead of digital trends to provide cutting-edge strategies that deliver exceptional results."
    }
  ];

  return (
    <>
      <section 
        id="about" 
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={imageRef} className="reveal-on-scroll relative group">
              <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="rounded-3xl bg-white/[0.03] p-2 border border-white/[0.08] overflow-hidden transform transition-all duration-700 hover:scale-[1.02] shadow-2xl relative z-10">
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-white/[0.02]">
                  <img 
                    src="/images/kerala-office.jpg" 
                    alt="Touchpointe Digital office" 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase shadow-2xl reveal-on-scroll">
                Our Heritage
              </div>
              
              <h2 
                ref={headingRef}
                className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight leading-tight reveal-on-scroll"
              >
                Ten Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Excellence</span>
              </h2>
              
              <div className="space-y-6 text-gray-400 font-medium text-lg reveal-on-scroll animation-delay-200">
                <p>
                  Founded in 2014, Touchpointe Digital has evolved into a premier digital transformation agency. We combine innovative strategy with technical mastery to deliver high-performance solutions for the modern web.
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  {keyPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 animation-delay-400 reveal-on-scroll group" style={{ animationDelay: `${400 + (index * 100)}ms` }}>
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-base leading-relaxed">
                  With deep expertise in AI-driven marketing, premium web architecture, and creative brand identity, we empower global brands to dominate their digital landscape. Our focus remains on speed, precision, and measurable ROI.
                </p>
              </div>
              
              <div className="mt-10 reveal-on-scroll animation-delay-600">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl group"
                >
                  Join Our Journey
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Foundational Pillars
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl mx-auto">
              The vision and mission driving our pursuit of digital dominance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
            {valueProps.map((prop, index) => (
              <div 
                key={index}
                className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-10 border border-white/[0.08] flex flex-col items-center text-center transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-2 shadow-2xl reveal-on-scroll group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-8 p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{prop.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 reveal-on-scroll">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase shadow-2xl">
                Evolution
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight leading-tight">
                Crafting the Digital Future Since 2014
              </h2>
              
              <div className="space-y-6 text-gray-400 font-medium text-lg leading-relaxed">
                <p>
                  What started as a boutique agency has transformed into a global digital force. Over the last decade, we've navigated the complexities of the digital explosion to provide stable, scalable, and stunning results.
                </p>
                
                <p>
                  Our journey is defined by relentless innovation and a refusal to settle for mediocrity. From high-conversion SaaS architectures to disruptive mobile experiences, we've redefined what digital excellence looks like.
                </p>
                
                <p>
                  Today, we stand as Kerala's premier destination for high-end digital marketing and web technology, blending technical precision with artistic flair.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal-on-scroll relative group">
              <div className="absolute -inset-4 bg-cyan-500/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/[0.08] bg-white/[0.03] p-2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto rounded-2xl grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Performance DNA
            </h2>
            <p className="text-lg text-gray-400 font-medium max-w-3xl mx-auto">
              What sets us apart in a crowded digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
            {teamValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-10 border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-2 shadow-2xl reveal-on-scroll group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-8 p-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl inline-block group-hover:bg-blue-600 transition-all duration-500 shadow-xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{value.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 shadow-2xl reveal-on-scroll group" style={{ animationDelay: '0ms' }}>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-500">9+</div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Years Mastery</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 shadow-2xl reveal-on-scroll group" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-500">120+</div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Global Clients</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 shadow-2xl reveal-on-scroll group" style={{ animationDelay: '400ms' }}>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-500">250+</div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Architected Ops</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 shadow-2xl reveal-on-scroll group" style={{ animationDelay: '600ms' }}>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-500">15+</div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Elite Experts</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
