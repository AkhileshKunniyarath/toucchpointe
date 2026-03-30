import React, { useEffect } from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { Share2, Search, Palette, Code, Building, BarChart, Target, TrendingUp, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-3 group overflow-hidden relative h-full shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="flex items-center mb-6 relative z-10">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="ml-5 text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6 relative z-10 leading-relaxed font-medium">{description}</p>
    </div>
  );
};

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all group shadow-2xl h-full">
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl font-black text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {number}
      </div>
      <h3 className="text-lg font-black mb-3 text-white uppercase tracking-widest">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed font-medium">{description}</p>
    </div>
  );
};

const CaseStudyCard = ({ title, industry, description }: { title: string, industry: string, description: string }) => {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all group shadow-2xl">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-[10px] font-black tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg">{industry}</span>
      </div>
      <h3 className="text-xl font-black mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm leading-relaxed font-medium">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <span className="text-xs text-emerald-500 font-black uppercase tracking-widest">Improved results</span>
        </div>
      </div>
    </div>
  );
};

const DigitalMarketingPage = () => {
  useEffect(() => {
    document.title = "Digital Marketing Services | Touchpointe Digital";
    
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
      icon: Share2,
      title: "Social Media Management and Advertising",
      description: "Build a strong social media presence and engage with your audience through strategic content planning, community management, and targeted paid social campaigns that drive real business results."
    },
    {
      icon: Search,
      title: "SEO and Search Advertising",
      description: "Improve your website's visibility on search engines with comprehensive SEO strategies and targeted paid search campaigns designed to drive qualified traffic and conversions."
    },
    {
      icon: Palette,
      title: "Branding Services",
      description: "Develop a strong brand identity with our comprehensive branding services, including logo design, brand guidelines, voice development, and consistent brand implementation across all touchpoints."
    },
    {
      icon: Code,
      title: "Content Design & Production",
      description: "Create engaging, high-quality content that resonates with your audience and drives action, from blog posts and articles to videos, infographics, and interactive experiences."
    },
    {
      icon: Building,
      title: "Business Profile on Search Engines",
      description: "Optimize your business presence on Google, Bing, and other search engines with accurate business information, reviews management, and local SEO strategies that drive foot traffic and leads."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "We begin by understanding your business, goals, target audience, and competitive landscape to develop an effective marketing strategy."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Based on research insights, we create a comprehensive digital marketing strategy tailored to your specific objectives and target audience."
    },
    {
      number: "03",
      title: "Campaign Setup & Optimization",
      description: "We set up and optimize your marketing campaigns across selected channels, ensuring proper tracking and measurement."
    },
    {
      number: "04",
      title: "Launch & Management",
      description: "We launch your campaigns and provide ongoing management, adjusting strategies based on performance data and emerging trends."
    },
    {
      number: "05",
      title: "Analysis & Reporting",
      description: "We continuously analyze campaign performance and provide detailed reports with actionable insights for improved results."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <PremiumPageLayout 
      title="Digital Marketing Services | Touchpointe Digital"
      description="Comprehensive digital marketing services including social media management, SEO, branding, content design, and business profiles on search engines."
    >
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase shadow-2xl"
            >
              Digital Marketing
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-tight leading-tight"
            >
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Growth</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium"
            >
              Drive growth, increase visibility, and connect with your audience through our comprehensive digital marketing solutions tailored to your business goals.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Comprehensive Marketing Solutions</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We offer a full suite of digital marketing services designed to help you achieve your business goals and stand out in a competitive landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Marketing Expertise</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Explore how our comprehensive digital marketing services can help your business succeed across different channels.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="social" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-12 bg-white/[0.03] border border-white/[0.08] p-1 rounded-2xl h-auto overflow-hidden">
                {['social', 'seo', 'content', 'ads', 'analytics'].map((val) => (
                  <TabsTrigger key={val} value={val} className="py-3 px-1 md:px-4 text-[10px] md:text-xs font-black uppercase tracking-widest data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl transition-all">
                    {val === 'social' ? 'Social' : val === 'seo' ? 'SEO' : val === 'content' ? 'Content' : val === 'ads' ? 'Ads' : 'Stats'}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {['social', 'seo', 'content', 'ads', 'analytics'].map((val) => {
                const Icon = val === 'social' ? Share2 : val === 'seo' ? Search : val === 'content' ? Code : val === 'ads' ? Target : BarChart;
                const title = val === 'social' ? 'Social Media Marketing' : val === 'seo' ? 'Search Engine Optimization' : val === 'content' ? 'Content Marketing' : val === 'ads' ? 'Paid Advertising' : 'Analytics & Reporting';
                const desc = val === 'social' ? 'Our social media marketing strategies help you build brand awareness, engage with your audience, and drive conversions through targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and TikTok.' : val === 'seo' ? 'Our SEO services help improve your organic visibility and rankings on search engines, driving qualified traffic to your website through technical optimization, content strategy, and link building.' : val === 'content' ? 'Our content marketing services help you create valuable, relevant content that attracts and engages your target audience, establishes thought leadership, and drives conversions.' : val === 'ads' ? 'Our paid advertising services help you reach your target audience at the right time with the right message, maximizing your ROI through strategic campaigns on Google and social media.' : 'Our analytics and reporting services provide you with valuable insights into your marketing performance, helping you make data-driven decisions to improve your ROI.';
                const listItems = val === 'social' ? ['Platform-specific content strategies', 'Community management and engagement', 'Paid social advertising campaigns'] : val === 'seo' ? ['Keyword research and analysis', 'On-page and technical SEO', 'Backlink strategy and execution'] : val === 'content' ? ['Content strategy and planning', 'Blog posts, articles, and long-form content', 'Visual content: infographics and videos'] : val === 'ads' ? ['PPC campaign management', 'Display and remarketing campaigns', 'A/B testing and conversion optimization'] : ['Custom analytics dashboard setup', 'Regular performance reports', 'Insights and recommendations for improvement'];
                
                return (
                  <TabsContent key={val} value={val} className="p-1 md:p-10 bg-white/[0.02] border border-white/[0.06] rounded-3xl outline-none shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                      <div className="flex-1 order-2 md:order-1">
                        <h3 className="text-2xl md:text-4xl font-black mb-6 text-white tracking-tight">{title}</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed font-medium text-lg">{desc}</p>
                        <ul className="grid gap-4">
                          {listItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-4 group">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <ClipboardCheck className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-gray-300 font-semibold group-hover:text-white transition-colors uppercase tracking-widest text-[10px]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-shrink-0 w-full md:w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl border border-white/[0.08] flex items-center justify-center order-1 md:order-2 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <Icon className="w-32 h-32 text-blue-400/50 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-700" />
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Our Marketing Process</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We follow a proven methodology to ensure your marketing campaigns deliver measurable results.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
              {/* Process line for desktop */}
              <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-white/[0.06] -z-10"></div>
              
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-2xl font-black text-blue-400 mb-8 shadow-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 z-10">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-black mb-4 text-white uppercase tracking-widest leading-tight h-12 flex items-center">{step.title}</h3>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Client Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              See how our digital marketing strategies have helped businesses like yours achieve remarkable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <CaseStudyCard 
              title="300% Increase in Organic Traffic"
              industry="E-commerce"
              description="A retail brand achieved a 300% increase in organic traffic and 150% growth in online sales through our comprehensive SEO strategy."
            />
            <CaseStudyCard 
              title="10x Social Media Engagement"
              industry="B2C Services"
              description="A service provider saw a 10x increase in social media engagement and a 45% increase in qualified leads."
            />
            <CaseStudyCard 
              title="68% Reduction in Cost Per Lead"
              industry="B2B Technology"
              description="A B2B tech company reduced their cost per lead by 68% while increasing lead quality significantly."
            />
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
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Expert Insights</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Get answers to common questions about our digital marketing services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">How long does it take to see results?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Results vary depending on your goals. Some tactics like paid advertising can show results almost immediately, while SEO typically take 3-6 months to show significant growth.</p>
            </div>
            
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">How do you measure success?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">We establish clear KPIs aligned with your business goals before launching any campaign, including metrics like traffic, conversion rates, leads, and ROI.</p>
            </div>
            
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">Do you offer custom packages?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Yes, we create customized marketing strategies tailored to your specific business goals, target audience, and budget. We don't believe in one-size-fits-all approaches.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </PremiumPageLayout>
  );
};

export default DigitalMarketingPage;
