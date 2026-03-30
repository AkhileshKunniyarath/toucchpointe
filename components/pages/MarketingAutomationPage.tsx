
import React, { useEffect } from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { BarChart, Mail, Users, LineChart, Database, Share2, CheckCircle, BellRing, Clock, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
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

const BenefitCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-2xl hover:bg-white/[0.05] transition-all group shadow-2xl h-full">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mr-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-sm font-black text-white uppercase tracking-widest leading-tight">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm font-medium leading-relaxed">{description}</p>
    </div>
  );
};

const MarketingAutomationPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Marketing Automation | Touchpointe Digital";
    
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
      icon: Mail,
      title: "Email Marketing Automation",
      description: "Automated email workflows, drip campaigns, and personalized messaging to nurture leads and drive conversions at scale while saving time and resources."
    },
    {
      icon: Users,
      title: "Lead Generation & Nurturing",
      description: "Automated lead capture, scoring, and nurturing systems to identify and engage high-value prospects throughout the customer journey with personalized content."
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and custom reporting dashboards to track performance and make data-driven marketing decisions that optimize your ROI."
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless integration with your existing CRM systems to provide a unified view of customer interactions and improve sales and marketing alignment."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Needs Assessment",
      description: "We evaluate your current marketing processes to identify automation opportunities and establish clear objectives."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "We develop a tailored automation strategy with workflows, trigger points, and content requirements aligned with your goals."
    },
    {
      number: "03",
      title: "Platform Selection",
      description: "We help select and implement the right marketing automation tools and technologies for your specific needs and budget."
    },
    {
      number: "04",
      title: "Implementation & Testing",
      description: "We set up automation workflows, integrate systems, create content, and thoroughly test all components before launch."
    },
    {
      number: "05",
      title: "Monitoring & Optimization",
      description: "We continuously monitor performance, analyze results, and optimize workflows to improve effectiveness and ROI."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Automate repetitive tasks to free up your team's time for more strategic activities."
    },
    {
      icon: BarChart,
      title: "Increased Conversion Rates",
      description: "Nurture leads with personalized content at the right time to improve conversion rates."
    },
    {
      icon: Users,
      title: "Improved Customer Experience",
      description: "Deliver relevant, timely communications that enhance the customer journey."
    },
    {
      icon: BellRing,
      title: "Scalability",
      description: "Handle growing volumes of leads and customers without proportionally increasing staff."
    }
  ];

  return (
    <PremiumPageLayout 
      title="Marketing Automation | Touchpointe Digital"
      description="Streamline your marketing efforts with automation tools and analytics that drive efficiency and provide actionable insights."
    >
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase shadow-2xl"
            >
              Automation
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-tight leading-tight"
            >
              Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Marketing ROI</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium"
            >
              Streamline your marketing processes and improve efficiency with intelligent automation solutions that deliver personalized experiences at scale.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Our Automation Services</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We offer comprehensive marketing automation solutions designed to streamline your processes, improve efficiency, and drive better results.
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Automation Solutions</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Explore our marketing automation solutions and how they can transform your marketing operations.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white/[0.03] border border-white/[0.08] p-1 rounded-2xl h-auto overflow-hidden">
                {['email', 'lead', 'crm', 'analytics'].map((val) => (
                  <TabsTrigger key={val} value={val} className="py-3 px-1 md:px-4 text-[10px] md:text-xs font-black uppercase tracking-widest data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl transition-all">
                    {val === 'email' ? 'Email' : val === 'lead' ? 'Lead Nurturing' : val === 'crm' ? 'CRM Integration' : 'Analytics'}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {['email', 'lead', 'crm', 'analytics'].map((val) => {
                const Icon = val === 'email' ? Mail : val === 'lead' ? Users : val === 'crm' ? Database : BarChart;
                const title = val === 'email' ? 'Email Automation' : val === 'lead' ? 'Lead Nurturing' : val === 'crm' ? 'CRM Integration' : 'Analytics & Reporting';
                const desc = val === 'email' ? 'Our email automation services help you deliver personalized, timely email campaigns that nurture leads, build relationships, and drive conversions without manual intervention.' : val === 'lead' ? 'Our lead nurturing automation helps you build relationships with prospects at every stage of the buying journey, delivering the right content at the right time.' : val === 'crm' ? 'Our CRM integration services connect your marketing automation platform with your customer relationship management system, creating a unified view of customer interactions.' : 'Our analytics and reporting solutions provide actionable insights into your marketing performance, helping you make data-driven decisions and optimize ROI.';
                const listItems = val === 'email' ? ['Triggered email sequences', 'Personalized drip campaigns', 'A/B testing and optimization'] : val === 'lead' ? ['Lead scoring and segmentation', 'Behavioral-based targeting', 'Progressive profiling'] : val === 'crm' ? ['Seamless data synchronization', 'Sales and marketing alignment', 'Automated lead handoff'] : ['Custom reporting dashboards', 'Campaign performance metrics', 'ROI and attribution modeling'];
                
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
                                <CheckCircle className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-gray-300 font-semibold group-hover:text-white transition-colors uppercase tracking-widest text-[10px]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-shrink-0 w-full md:w-80 h-80 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl border border-white/[0.08] flex items-center justify-center order-1 md:order-2 group relative overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Our Automation Process</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We follow a systematic approach to implementing marketing automation solutions that deliver measurable results.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
              {/* Process line for desktop */}
              <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 bg-white/[0.06] -z-10"></div>
              
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-xl font-black text-blue-400 mb-6 shadow-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 z-10">
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Strategic Benefits</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Discover how marketing automation can transform your business operations and effectiveness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              See how our automation solutions have helped businesses like yours achieve remarkable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {['E-commerce Email', 'B2B Lead Nurturing', 'CRM Integration'].map((title, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.05] transition-all group shadow-2xl">
                <div className="aspect-video bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.04] transition-all">
                  {i === 0 ? <Mail className="w-16 h-16 text-blue-400/20 group-hover:text-blue-400/40 group-hover:scale-110 transition-all duration-700" /> : i === 1 ? <Users className="w-16 h-16 text-blue-400/20 group-hover:text-blue-400/40 group-hover:scale-110 transition-all duration-700" /> : <Database className="w-16 h-16 text-blue-400/20 group-hover:text-blue-400/40 group-hover:scale-110 transition-all duration-700" />}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-3 text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">{title} Automation</h3>
                  <p className="text-gray-500 text-sm font-bold leading-relaxed">Integrated automation that increased repeat purchases and recovered significant revenue through behavioral triggers.</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/case-studies">
              <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/[0.1] bg-white/[0.03] text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
                Explore More Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Get answers to common questions about our marketing automation services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">How long for implementation?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Timeline varies by complexity. Basic setups take 2-4 weeks, while complex CRM integrations can take 2-3 months. We provide detailed roadmaps during consultation.</p>
            </div>
            
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">Which platforms do you support?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">We specialize in HubSpot, Marketo, Mailchimp, ActiveCampaign, and Salesforce Marketing Cloud. We help select the best fit for your stack and budget.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </PremiumPageLayout>
  );
};

export default MarketingAutomationPage;
