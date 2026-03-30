import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <PremiumPageLayout 
      title="Contact Us | Touchpointe Digital"
      description="Get in touch with Touchpointe Digital for your digital marketing and web development needs. Contact our team for a free consultation."
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ready to discuss your project? Reach out to our team through any of the channels below.
          </p>
        </div>
      </div>
      <Contact />
    </PremiumPageLayout>
  );
};

export default ContactPage;
