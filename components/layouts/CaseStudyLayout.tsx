
import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { ArrowLeft, ArrowRight, Calendar, Building, Tag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyLayoutProps {
  title: string;
  subtitle?: string;
  category: string;
  clientName: string;
  clientIndustry: string;
  date: string;
  tags: string[];
  featuredImage: string;
  metrics: { label: string; value: string }[];
  children: React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  subtitle,
  category,
  clientName,
  clientIndustry,
  date,
  tags,
  featuredImage,
  metrics,
  children
}) => {
  return (
    <PremiumPageLayout 
      title={`${title} | Case Study | Touchpointe Digital`}
      description={subtitle || title}
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <div className="mb-10">
            <Link to="/case-studies" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to all case studies
            </Link>
          </div>
          
          {/* Hero section */}
          <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/[0.08] overflow-hidden mb-12 shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                  {category}
                </div>
                <h1 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {subtitle}
                  </p>
                )}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-400 text-sm font-semibold">
                    <Building className="h-4.5 w-4.5 mr-3 text-blue-400" />
                    <span className="text-white">{clientName}</span>
                    <span className="mx-3 text-white/20">|</span>
                    <span>{clientIndustry}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm font-semibold">
                    <Calendar className="h-4.5 w-4.5 mr-3 text-blue-400" />
                    {date}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 h-80 md:h-auto border-l border-white/[0.08]">
                <img 
                  src={featuredImage} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] p-8 text-center group hover:bg-white/[0.05] transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Content */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 md:p-12 mb-16 shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-a:text-blue-400 prose-strong:text-white prose-ul:text-gray-400">
              {children}
            </div>
            
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mt-12 pt-10 border-t border-white/[0.08]">
                <div className="flex items-center flex-wrap gap-3">
                  <Tag className="h-4 w-4 text-blue-400 mr-2" />
                  {tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center rounded-lg bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/10 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/[0.1] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-2xl md:text-4xl font-black mb-6 text-white relative z-10">Ready to achieve similar results?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed relative z-10 font-medium">
              Our team of digital marketing experts is ready to help your business grow. 
              Let's discuss how we can customize a strategy for your specific needs.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-black font-black hover:bg-blue-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] group relative z-10 hover:scale-105">
              Request a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </PremiumPageLayout>
  );
};

export default CaseStudyLayout;
