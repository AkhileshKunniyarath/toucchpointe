
import React, { useEffect } from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Palette, PenTool, ImageIcon, Video, FilmIcon, Share2, FileText, LucideIcon, CheckCircle, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const ServiceCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-3 group overflow-hidden relative h-full shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="flex items-center mb-6 relative z-10">
        <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="ml-5 text-xl font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6 relative z-10 leading-relaxed font-medium">{description}</p>
    </div>
  );
};

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all group shadow-2xl h-full">
      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl font-black text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
        {number}
      </div>
      <h3 className="text-lg font-black mb-3 text-white uppercase tracking-widest">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed font-medium">{description}</p>
    </div>
  );
};

const CreativeBrandingPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Creative & Branding | Touchpointe Digital";
    
    // Smooth scroll effect for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && closestAnchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        const targetElement = document.querySelector(closestAnchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Apply animations
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
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const services = [
    {
      icon: Palette,
      title: "Brand Strategy & Identity",
      description: "Develop a cohesive brand identity with logo design, brand guidelines, positioning strategy, and visual elements that reflect your brand's values and resonate with your target audience."
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Eye-catching visuals including social media graphics, marketing collateral, presentations, and digital assets to enhance your brand presence and create lasting impressions."
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Engaging blog posts, articles, whitepapers, and other content formats designed to inform, entertain, and convert your target audience while establishing your brand as an authority."
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content including explainer videos, testimonials, product demos, and social media clips to boost engagement and conversions across multiple platforms."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "We dive deep into understanding your brand, audience, competitors, and market position to inform our creative strategy."
    },
    {
      number: "02",
      title: "Creative Strategy",
      description: "We develop a comprehensive creative strategy that aligns with your business goals and resonates with your target audience."
    },
    {
      number: "03",
      title: "Concept Development",
      description: "Our team creates initial concepts for your approval, refining them based on your feedback until we achieve the perfect solution."
    },
    {
      number: "04",
      title: "Production & Implementation",
      description: "We bring the approved concepts to life through professional production and implementation across all relevant channels."
    },
    {
      number: "05",
      title: "Review & Optimization",
      description: "We continuously monitor performance, gather feedback, and optimize creative assets to ensure maximum impact and ROI."
    }
  ];

  return (
    <PremiumPageLayout 
      title="Creative & Branding | Touchpointe Digital"
      description="Brand development, content creation, and creative marketing solutions to help your business stand out in the digital landscape."
    >
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase shadow-2xl"
            >
              Creative
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-tight leading-tight"
            >
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Iconic Identities</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium"
            >
              Develop a distinctive brand identity and captivating content that resonates with your target audience and helps your business stand out.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Our Creative Services</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We offer a comprehensive suite of creative and branding services designed to help your business communicate effectively and stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Creative Expertise</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Explore our creative expertise and how we can help elevate your brand and content.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="branding" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white/[0.03] border border-white/[0.08] p-1 rounded-2xl h-auto overflow-hidden">
                {['branding', 'design', 'content', 'video'].map((val) => (
                  <TabsTrigger key={val} value={val} className="py-3 px-1 md:px-4 text-[10px] md:text-xs font-black uppercase tracking-widest data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-xl transition-all">
                    {val === 'branding' ? 'Branding' : val === 'design' ? 'Graphic Design' : val === 'content' ? 'Content' : 'Video'}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {['branding', 'design', 'content', 'video'].map((val) => {
                const Icon = val === 'branding' ? Palette : val === 'design' ? PenTool : val === 'content' ? FileText : Video;
                const title = val === 'branding' ? 'Brand Development' : val === 'design' ? 'Graphic Design Services' : val === 'content' ? 'Content Creation' : 'Video Production';
                const desc = val === 'branding' ? 'Our brand development services help you create a strong, consistent brand identity that resonates with your audience and differentiates you from competitors.' : val === 'design' ? 'Our graphic design services create visually compelling assets that strengthen your brand identity and communicate your message effectively.' : val === 'content' ? 'Our content creation services produce engaging, relevant content that attracts and retains your target audience while driving conversions.' : 'Our video production services create compelling visual stories that engage your audience and effectively communicate your brand message.';
                const listItems = val === 'branding' ? ['Brand strategy and positioning', 'Logo design and visual identity', 'Brand guidelines and style documentation'] : val === 'design' ? ['Print and digital marketing materials', 'Social media graphics and templates', 'Packaging and merchandise design'] : val === 'content' ? ['Blog posts and articles', 'Whitepapers and ebooks', 'Website copy and product descriptions'] : ['Explainer and promotional videos', 'Social media video content', 'Customer testimonials and case studies'];
                
                return (
                  <TabsContent key={val} value={val} className="p-1 md:p-10 bg-white/[0.02] border border-white/[0.06] rounded-3xl outline-none shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                      <div className="flex-1 order-2 md:order-1">
                        <h3 className="text-2xl md:text-4xl font-black mb-6 text-white tracking-tight">{title}</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed font-medium text-lg">{desc}</p>
                        <ul className="grid gap-4">
                          {listItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-4 group">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <CheckCircle className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-gray-300 font-semibold group-hover:text-white transition-colors uppercase tracking-widest text-[10px]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-shrink-0 w-full md:w-80 h-80 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl border border-white/[0.08] flex items-center justify-center order-1 md:order-2 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <Icon className="w-32 h-32 text-purple-400/50 group-hover:text-purple-400/40 group-hover:scale-110 transition-all duration-700" />
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Our Creative Process</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We follow a proven methodology to ensure your brand and creative assets deliver measurable results.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
              {/* Process line for desktop */}
              <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 bg-white/[0.06] -z-10"></div>
              
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-xl font-black text-purple-400 mb-6 shadow-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 z-10">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-black mb-3 text-white uppercase tracking-widest leading-tight">{step.title.split(' & ')[0]}</h3>
                  <p className="text-gray-500 text-[10px] font-bold leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Get answers to common questions about our creative and branding services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-purple-400">How long does branding take?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Identity redesigns take 3-4 weeks, while comprehensive brand development can span 2-3 months. We'll provide a custom timeline during consultation.</p>
            </div>
            
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-purple-400">What information is needed to start?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">We require your business goals, target audience insights, existing brand assets, and competitor profiles to build our initial strategy.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Our Creative Portfolio</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Explore samples of our creative work across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {['Retail Brand Refresh', 'Tech Startup Launch', 'Restaurant Campaign'].map((title, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.05] transition-all group shadow-2xl">
                <div className="aspect-video bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.04] transition-all">
                  <ImageIcon className="w-16 h-16 text-purple-400/20 group-hover:text-purple-400/40 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-3 text-white uppercase tracking-widest group-hover:text-purple-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 text-sm font-bold leading-relaxed">A comprehensive project that transformed the client's visual presence and drove measurable growth.</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/case-studies">
              <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/[0.1] bg-white/[0.03] text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Contact />
    </PremiumPageLayout>
  );
};

export default CreativeBrandingPage;
