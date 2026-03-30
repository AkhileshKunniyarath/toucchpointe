
import React, { useEffect } from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  FileCode, 
  ClipboardCheck, 
  ArrowRight, 
  CheckCircle,
  Rocket,
  TrendingUp,
  Laptop
} from 'lucide-react';

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

const WebDevelopmentPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Web & App Development | Touchpointe Digital";
    
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
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built with the latest technologies to deliver fast, responsive, and engaging experiences that convert visitors into customers."
    },
    {
      icon: Laptop,
      title: "E-commerce Solutions",
      description: "Scalable and secure online stores with seamless checkout experiences, inventory management, and payment gateway integration."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications designed to provide seamless user experiences across iOS and Android devices."
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Custom web applications with robust functionality to streamline business processes and enhance user engagement."
    },
    {
      icon: Database,
      title: "CMS Development",
      description: "Powerful content management systems that make it easy to update and manage your website content without technical knowledge."
    },
    {
      icon: Server,
      title: "API Integration & Development",
      description: "Custom API development and third-party integrations to connect your systems and create seamless workflows."
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
      title="Web & App Development | Touchpointe Digital"
      description="Custom web and mobile application development services designed to create engaging, functional, and responsive digital experiences."
    >
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase shadow-2xl"
            >
              Development
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-tight leading-tight"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Engines</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium"
            >
              Create powerful digital experiences with our custom web and mobile application development services tailored to your business needs.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Comprehensive Development Solutions</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We offer a full suite of web and app development services designed to help you achieve your business goals in the digital landscape.
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Development Expertise</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Explore our specialized development services that help businesses create powerful digital experiences.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="websites" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white/[0.03] border border-white/[0.08] p-1 rounded-2xl h-auto overflow-hidden">
                {['websites', 'ecommerce', 'mobile', 'webapps'].map((val) => (
                  <TabsTrigger key={val} value={val} className="py-3 px-1 md:px-4 text-[10px] md:text-xs font-black uppercase tracking-widest data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl transition-all">
                    {val === 'websites' ? 'Websites' : val === 'ecommerce' ? 'E-Commerce' : val === 'mobile' ? 'Mobile' : 'Web Apps'}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {['websites', 'ecommerce', 'mobile', 'webapps'].map((val) => {
                const Icon = val === 'websites' ? Globe : val === 'ecommerce' ? Laptop : val === 'mobile' ? Smartphone : Code;
                const title = val === 'websites' ? 'Website Development' : val === 'ecommerce' ? 'E-commerce Solutions' : val === 'mobile' ? 'Mobile App Development' : 'Web Application Development';
                const desc = val === 'websites' ? 'Our website development services create beautiful, functional websites that engage visitors and drive conversions. We focus on user experience, performance, and SEO-friendly code.' : val === 'ecommerce' ? 'Our e-commerce solutions help businesses sell products and services online with secure, user-friendly platforms that drive sales and customer satisfaction.' : val === 'mobile' ? 'Our mobile app development services create native and cross-platform applications that provide seamless experiences across iOS and Android devices.' : 'Our web application development services create powerful, interactive applications that help businesses streamline processes and enhance user engagement.';
                const listItems = val === 'websites' ? ['Responsive design for all devices', 'SEO-optimized code structure', 'Fast loading speeds and optimization'] : val === 'ecommerce' ? ['Seamless checkout experiences', 'Inventory and order management', 'Secure payment gateway integration'] : val === 'mobile' ? ['Native iOS and Android development', 'Cross-platform solutions (React Native, Flutter)', 'App Store optimization and submission'] : ['Custom business applications', 'Progressive Web Apps (PWAs)', 'Interactive dashboards and portals'];
                
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Our Development Process</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We follow a proven methodology to ensure your digital projects are delivered on time and exceed expectations.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 relative">
              {/* Process line for desktop */}
              <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 bg-white/[0.06] -z-10"></div>
              
              {[
                { n: "1", t: "Discovery", d: "Understanding your goals and project requirements." },
                { n: "2", t: "Design", d: "Creating wireframes and prototypes for visualization." },
                { n: "3", t: "Build", d: "Developing the solution with modern technologies." },
                { n: "4", t: "QA", d: "Testing across all devices for flawless performance." },
                { n: "5", t: "Launch", d: "Seamless deployment to production environments." },
                { n: "6", t: "Support", d: "Ongoing maintenance and optimization services." }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-xl font-black text-blue-400 mb-6 shadow-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 z-10">
                    {step.n}
                  </div>
                  <h3 className="text-sm font-black mb-3 text-white uppercase tracking-widest leading-tight">{step.t}</h3>
                  <p className="text-gray-500 text-[10px] font-bold leading-relaxed">{step.d}</p>
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
              See how our development solutions have helped businesses achieve their digital goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <CaseStudyCard 
              title="E-commerce Sales Increase"
              industry="Retail"
              description="A retail brand achieved a 200% increase in online sales after launching their new e-commerce website with improved UX."
            />
            <CaseStudyCard 
              title="Mobile App Engagement"
              industry="Healthcare"
              description="A healthcare provider saw 5x user engagement with their new patient portal app, improving outcomes."
            />
            <CaseStudyCard 
              title="Process Automation"
              industry="Professional Services"
              description="A professional services firm reduced operational costs by 40% through a custom web application."
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
      
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Technologies We Use</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              We leverage the latest technologies to build powerful, scalable, and maintainable solutions.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: 'Frontend', d: 'React, Angular, Next.js' },
              { t: 'Backend', d: 'Node.js, PHP, Python' },
              { t: 'Mobile', d: 'React Native, Flutter' },
              { t: 'Database', d: 'MySQL, MongoDB, PostgreSQL' },
              { t: 'CMS', d: 'WordPress, Shopify' },
              { t: 'Cloud', d: 'AWS, Google Cloud' },
              { t: 'DevOps', d: 'Docker, CI/CD' },
              { t: 'E-commerce', d: 'Shopify, Magento' }
            ].map((tech, i) => (
              <div key={i} className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.06] text-center hover:bg-white/[0.04] transition-all group">
                <h3 className="font-black text-white uppercase tracking-widest text-sm mb-3 group-hover:text-blue-400 transition-colors">{tech.t}</h3>
                <p className="text-xs text-gray-500 font-bold">{tech.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              Get answers to common questions about our development services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">How long does development take?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Timeline depends on complexity. A simple site takes 4-6 weeks, while complex apps can take 3-6 months. We provide detailed timelines after consultation.</p>
            </div>
            
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">Is everything mobile-friendly?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Yes, we build with a mobile-first approach, ensuring perfect performance across all devices and browsers.</p>
            </div>
            
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/[0.06] shadow-2xl group hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-widest text-sm text-blue-400">Do you offer ongoing support?</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Yes, we provide maintenance and support packages to ensure your solution remains secure, up-to-date, and optimized.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </PremiumPageLayout>
  );
};

export default WebDevelopmentPage;

