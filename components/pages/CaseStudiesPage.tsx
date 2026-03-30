
import React, { useEffect, useState } from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getContentByCategory, ContentItem } from '@/lib/services/contentService';
import { useToast } from '@/components/ui/use-toast';

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch case studies from Supabase
  useEffect(() => {
    const fetchCaseStudies = async () => {
      setIsLoading(true);
      try {
        const studies = await getContentByCategory('case-study');
        setCaseStudies(studies);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        toast({
          title: "Error loading case studies",
          description: "Unable to load case studies. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, [toast]);

  // Function to extract metrics from case study content
  const extractMetrics = (study: ContentItem) => {
    // Default metrics if we can't extract any
    const defaultMetrics = [
      { label: "Results", value: "Positive" },
      { label: "ROI", value: "Significant" }
    ];
    
    try {
      // Try to find metrics from client industry and a guess from content
      // This is a simple implementation - you may want to create a more structured format
      if (study.clientIndustry) {
        return [
          { label: study.clientIndustry, value: "Success" },
          { label: "Client", value: study.clientName || "Client" }
        ];
      }
      return defaultMetrics;
    } catch (error) {
      return defaultMetrics;
    }
  };

  return (
    <PremiumPageLayout 
      title="Case Studies | Touchpointe Digital"
      description="Explore real-world success stories and results we've achieved for our clients through strategic digital marketing solutions."
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Studies</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Real-world examples of how we've helped businesses across Kerala achieve measurable results.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.length > 0 ? caseStudies.map((study) => {
              const metrics = extractMetrics(study);
              
              return (
                <div key={study.id} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] reveal-on-scroll">
                  <div className="h-48 bg-white/[0.02] relative overflow-hidden">
                    <img 
                      src={study.featuredImage || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full">
                      {study.clientIndustry || (study.tags && study.tags.length > 0 ? study.tags[0] : "Case Study")}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{study.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-semibold">Client: {study.clientName || "Client"}</p>
                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">{study.subtitle}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white/[0.04] p-3 rounded-xl border border-white/[0.05] text-center">
                          <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{metric.value}</div>
                          <div className="text-[10px] uppercase tracking-widest mt-1 text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={`/case-studies/${study.slug || study.id}`} className="inline-flex items-center text-sm font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors uppercase">
                      Read Case Study 
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            }) : (
              <div className="col-span-3 text-center py-16">
                <h3 className="text-xl font-bold text-white mb-2">No case studies found</h3>
                <p className="text-gray-400">Check back soon for new case studies</p>
              </div>
            )}
          </div>
        )}
        
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/[0.08] backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white relative z-10">Ready to achieve similar results?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg relative z-10">
            Our team of digital marketing experts is ready to help your business grow. 
            Let's discuss how we can customize a strategy for your specific needs.
          </p>
          <a href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1">
            Request a Free Consultation
          </a>
        </div>
      </div>
      <Contact />
    </PremiumPageLayout>
  );
};

export default CaseStudiesPage;
