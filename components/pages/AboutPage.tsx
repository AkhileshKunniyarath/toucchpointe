import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import About from '@/components/About';
import Contact from '@/components/Contact';

const AboutPage = () => {
  return (
    <PremiumPageLayout 
      title="About Us | Touchpointe Digital"
      description="Learn about Touchpointe Digital's mission, vision, values, and our journey as Kerala's leading digital marketing agency since 2014."
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Founded in 2014, Touchpointe Digital has grown to become one of Kerala's leading digital marketing agencies, serving clients across India and beyond.
          </p>
        </div>
      </div>
      <About />
      <Contact />
    </PremiumPageLayout>
  );
};

export default AboutPage;
