
import React, { useEffect, useState } from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { 
  ScrollText, 
  GraduationCap, 
  Home, 
  ShoppingBag, 
  Building2, 
  ChevronRight,
  Globe,
  BarChart3,
  BrainCircuit,
  Users,
  CheckCircle2
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState("healthcare");

  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setActiveIndustry(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const industries = [
    {
      id: "healthcare",
      icon: ScrollText,
      title: "Healthcare",
      description: "Digital solutions tailored for hospitals, clinics, and healthcare providers to improve patient engagement and online presence.",
      challenges: [
        "Patient confidentiality and HIPAA compliance",
        "Building trust with potential patients",
        "Demonstrating expertise and specialties",
        "Appointment scheduling and management"
      ],
      solutions: [
        "HIPAA-compliant websites and marketing",
        "Patient testimonial campaigns",
        "Content marketing for health education",
        "Online booking and patient portal systems"
      ],
      services: [
        "HIPAA Compliant Marketing",
        "Patient-Centric Digital Approach",
        "Reputation Management",
        "Local SEO for Healthcare"
      ],
      caseStudies: [
        "Increased patient appointments by 43% for a dental clinic through targeted local SEO",
        "Reduced no-shows by 28% through automated appointment reminders",
        "Improved patient satisfaction scores by creating intuitive medical portal"
      ]
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      description: "Digital strategies for schools, colleges, and educational institutions to attract students and showcase programs.",
      challenges: [
        "Standing out in a competitive education market",
        "Reaching potential students effectively",
        "Showcasing campus culture and benefits",
        "Managing application processes"
      ],
      solutions: [
        "SEO strategies targeting prospective students",
        "Virtual campus tours and interactive content",
        "Social media engagement campaigns",
        "Application funnel optimization"
      ],
      services: [
        "Student Recruitment Campaigns",
        "Content Marketing for Education",
        "Virtual Tours & Interactive Media",
        "Alumni Engagement Strategies"
      ],
      caseStudies: [
        "Increased enrollment applications by A35% for a graduate program through targeted campaigns",
        "Improved engagement with 4K+ alumni through innovative digital outreach",
        "Developed interactive campus tour that reduced physical tour costs by 22%"
      ]
    },
    {
      id: "real-estate",
      icon: Home,
      title: "Real Estate",
      description: "Digital marketing solutions for real estate agencies, developers, and property managers to generate leads and showcase properties.",
      challenges: [
        "Generating quality leads for properties",
        "Showcasing property features effectively",
        "Managing multiple property listings",
        "Staying competitive in local markets"
      ],
      solutions: [
        "Property-specific landing pages",
        "Virtual tours and HD photography",
        "Local SEO optimization",
        "Lead capture and nurturing systems"
      ],
      services: [
        "Property Marketing Campaigns",
        "Virtual Property Tours",
        "Real Estate CRM Integration",
        "Local Market Analysis"
      ],
      caseStudies: [
        "Generated 128 qualified leads in 60 days for a luxury property development",
        "Increased property viewing requests by 67% through virtual tours",
        "Reduced average listing time by 14 days with optimized property marketing"
      ]
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-commerce",
      description: "Comprehensive digital solutions for online retailers to increase traffic, conversions, and customer loyalty.",
      challenges: [
        "Shopping cart abandonment",
        "Product visibility in crowded markets",
        "Building customer trust",
        "Streamlining the purchase journey"
      ],
      solutions: [
        "Conversion rate optimization",
        "Product-focused SEO and PPC",
        "Customer review strategies",
        "Personalized shopping experiences"
      ],
      services: [
        "Conversion Rate Optimization",
        "Shopping Feed Management",
        "Abandoned Cart Recovery",
        "E-commerce SEO"
      ],
      caseStudies: [
        "Increased conversion rate by 3.2% through checkout optimization for an apparel store",
        "Boosted average order value by 27% with personalized product recommendations",
        "Reduced cart abandonment rate by 19% through targeted email campaigns"
      ]
    },
    {
      id: "fmcg",
      icon: Building2,
      title: "FMCG",
      description: "Strategic digital marketing for fast-moving consumer goods companies to build brand awareness and drive product sales.",
      challenges: [
        "Building brand recognition",
        "Differentiating from competitors",
        "Driving offline purchases through online marketing",
        "Measuring campaign effectiveness"
      ],
      solutions: [
        "Brand awareness campaigns",
        "Influencer marketing partnerships",
        "Omnichannel promotion strategies",
        "Advanced analytics and attribution modeling"
      ],
      services: [
        "Consumer Brand Campaigns",
        "E-retail Strategy",
        "Social Commerce",
        "Consumer Insights & Analytics"
      ],
      caseStudies: [
        "Increased in-store product sales by 32% through geotargeted digital campaigns",
        "Generated 2.4 million impressions for new product launch using influencer marketing",
        "Achieved 41% higher engagement rate with targeted social media content"
      ]
    }
  ];

  const scrollToIndustry = (id) => {
    setActiveIndustry(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.pushState({}, '', `#${id}`);
  };

  return (
    <PremiumPageLayout 
      title="Industries We Serve | Touchpointe Digital"
      description="Industry-specific digital marketing solutions for healthcare, education, real estate, e-commerce, and FMCG sectors."
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight tracking-tight">
            Industry-Specific <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
            We develop tailored strategies for your industry's unique challenges and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => scrollToIndustry(industry.id)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-bold tracking-wider uppercase flex items-center border ${
                  activeIndustry === industry.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "bg-white/[0.03] text-gray-400 border-white/[0.08] hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <industry.icon className="h-4 w-4 mr-2" />
                {industry.title}
              </button>
            ))}
          </div>
        </div>

        {/* Industries Overview */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our team has deep expertise across various industries, allowing us to develop solutions that address the specific challenges and leverage the unique opportunities in your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card 
                key={industry.id} 
                className="bg-white/[0.02] border-white/[0.06] backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300 reveal-on-scroll"
                id={industry.id}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{industry.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6 mt-4">
                    {industry.services.map((service, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-3 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToIndustry(industry.id)}
                    className="text-blue-400 hover:text-blue-300 font-bold text-sm tracking-wider uppercase flex items-center mt-6 transition-colors"
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Industry Sections */}
        <div className="py-16">
          {industries.map((industry) => (
            <div 
              key={industry.id}
              id={`${industry.id}-detail`}
              className="max-w-5xl mx-auto mb-32 last:mb-0 reveal-on-scroll"
            >
              <div className="flex items-center mb-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/[0.1] flex items-center justify-center text-blue-300 mr-5 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                  <industry.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white">{industry.title} Solutions</h2>
              </div>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-8 bg-white/[0.04] border border-white/[0.08] p-1.5 rounded-xl flex overflow-x-auto custom-scrollbar">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-[#1a153a] data-[state=active]:text-white text-gray-400 rounded-lg px-6">Overview</TabsTrigger>
                  <TabsTrigger value="challenges" className="data-[state=active]:bg-[#1a153a] data-[state=active]:text-white text-gray-400 rounded-lg px-6">Challenges</TabsTrigger>
                  <TabsTrigger value="solutions" className="data-[state=active]:bg-[#1a153a] data-[state=active]:text-white text-gray-400 rounded-lg px-6">Our Solutions</TabsTrigger>
                  <TabsTrigger value="case-studies" className="data-[state=active]:bg-[#1a153a] data-[state=active]:text-white text-gray-400 rounded-lg px-6">Success Stories</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-5">Why Choose Us</h3>
                      <p className="text-gray-400 mb-8 leading-relaxed">
                        Our team brings specialized knowledge and experience in the {industry.title.toLowerCase()} sector, allowing us to create digital solutions that truly address your unique needs and opportunities.
                      </p>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-2.5 mr-4 flex-shrink-0">
                            <BrainCircuit className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">Industry Expertise</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Deep understanding of {industry.title.toLowerCase()} sector challenges and opportunities</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-2.5 mr-4 flex-shrink-0">
                            <BarChart3 className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">Data-Driven Strategies</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Solutions backed by industry-specific research and analytics</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-2.5 mr-4 flex-shrink-0">
                            <Globe className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">Comprehensive Solutions</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">End-to-end digital services tailored to {industry.title.toLowerCase()} needs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-5">Our Approach</h3>
                      <p className="text-gray-400 mb-8 leading-relaxed">
                        We develop custom strategies that align with the unique requirements and regulations of the {industry.title.toLowerCase()} industry.
                      </p>
                      <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-8">
                        <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Key Services</h4>
                        <ul className="space-y-4">
                          {industry.services.map((service, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 mr-3 text-purple-400 flex-shrink-0" />
                              <span className="text-gray-300 font-medium">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="challenges" className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6">Common Challenges in {industry.title}</h3>
                  <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                    The {industry.title.toLowerCase()} sector faces unique digital marketing challenges that require specialized solutions. We understand these pain points and develop strategies to address them.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industry.challenges.map((challenge, idx) => (
                      <div key={idx} className="bg-white/[0.03] rounded-xl p-6 border-l-4 border-l-purple-500 border-y border-r border-y-white/[0.05] border-r-white/[0.05] hover:bg-white/[0.05] transition-colors">
                        <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-xs text-purple-400">Challenge 0{idx + 1}</h4>
                        <p className="text-gray-300 font-medium">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="solutions" className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6">Our {industry.title} Solutions</h3>
                  <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                    We've developed specialized approaches to address the unique challenges of the {industry.title.toLowerCase()} industry, helping our clients achieve outstanding results.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.05] shadow-sm hover:border-white/[0.1] transition-all duration-300">
                        <div className="flex items-center mb-5">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mr-4">
                            <span className="font-bold">{idx + 1}</span>
                          </div>
                          <h4 className="font-bold text-white">Solution {idx + 1}</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="case-studies" className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6">{industry.title} Success Stories</h3>
                  <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                    We've helped numerous {industry.title.toLowerCase()} clients achieve significant results through our tailored digital strategies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {industry.caseStudies.map((caseStudy, idx) => (
                      <div key={idx} className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.05] shadow-sm hover:border-white/[0.1] hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                          <Users className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Case Study 0{idx + 1}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{caseStudy}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/[0.08] backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center mt-10 mb-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white relative z-10">Ready to Transform Your Industry Presence?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-400 relative z-10">
            Our industry-specific solutions can help you overcome challenges and seize opportunities unique to your sector.
          </p>
          <a 
            href="/contact" 
            className="relative z-10 inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      <Contact />
    </PremiumPageLayout>
  );
};

export default IndustriesPage;
