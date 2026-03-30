import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import WebsitePerformanceCheck from '@/components/WebsitePerformanceCheck';
import Contact from '@/components/Contact';

const ServicesPage = () => {
  return (
    <PremiumPageLayout 
      title="Services | Touchpointe Digital"
      description="Comprehensive digital marketing services including SEO, PPC, social media, and web development by Touchpointe Digital."
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Discover our comprehensive suite of digital marketing and web development services designed to elevate your brand and drive business growth.
          </p>
        </div>
      </div>
      <WebsitePerformanceCheck />
      <Contact />
    </PremiumPageLayout>
  );
};

export default ServicesPage;
