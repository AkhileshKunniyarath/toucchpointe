import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-[#100d28] to-[#050410] text-white pt-20 pb-10 border-t border-white/[0.05] overflow-hidden">
      {/* Subtle ambient glow behind footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src="/lovable-uploads/40e1cbf6-8a11-4c6d-9513-32e74c66bc1d.png" 
                alt="Touchpointe Digital" 
                className="h-9 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
              />
            </Link>
            
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
              We bridge the gap between innovative ideas and impactful results. With expertise in digital marketing, web development, and automation, we create elite digital experiences.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-4 w-4" />, label: 'Facebook' },
                { icon: <Twitter className="h-4 w-4" />, label: 'Twitter' },
                { icon: <Instagram className="h-4 w-4" />, label: 'Instagram' },
                { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-3.5 flex flex-col">
              {[
                { name: 'Digital Marketing', path: '/services/digital-marketing' },
                { name: 'Web & App Development', path: '/services/web-app-development' },
                { name: 'Creative & Branding', path: '/services/creative-branding' },
                { name: 'Marketing Automation', path: '/services/marketing-automation' },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200 relative w-fit group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3.5 flex flex-col">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Case Studies', path: '/#case-studies' },
                { name: 'Blog', path: '/blog' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.path} 
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200 relative w-fit group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Stay Updated</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest digital insights and premium resources.
            </p>
            
            <form className="relative flex items-center w-full group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 text-sm outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all pr-14"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {currentYear} Touchpointe Digital. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-500 hover:text-white text-sm transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
