import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface PremiumPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const PremiumPageLayout = ({ children, title, description }: PremiumPageLayoutProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll for anchors
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
    
    // Setup intersection observer for generic reveal animations inside child components
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.unobserve(el));
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0818] font-sans">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      {/* Page Content with Entrance Animation */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="overflow-hidden min-h-screen pt-24 pb-12"
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default PremiumPageLayout;
