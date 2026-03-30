
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WebsitePerformanceCheck from '@/components/WebsitePerformanceCheck';
import ToolsSection from '@/components/ToolsSection';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import KeralaMarketingExcellence from '@/components/KeralaMarketingExcellence';
import Capabilities from '@/components/Capabilities';
import { motion, useScroll, useSpring } from 'framer-motion';

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Update document title to match the company
    document.title = "Touchpointe Digital - Marketing Solutions in Kerala";

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

    // Target all elements with the reveal-on-scroll class
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Add event listener for anchor links
    document.addEventListener('click', handleAnchorClick);

    // Apply subtle parallax effect on scroll, but exclude the About section image
    const handleParallax = () => {
      const scrollY = window.scrollY;

      document.querySelectorAll('.parallax').forEach((element) => {
        // Skip elements in the About section
        if (element.closest('#about')) return;

        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.speed || '0.1');
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    // Add smooth page transition
    document.body.classList.add('fade-in-initial');

    window.addEventListener('scroll', handleParallax);

    // Create and add decorative shapes to the body
    const createShapes = () => {
      const shapes = [
        { className: 'shape shape-1 top-20 left-10 bg-blue-500/5' },
        { className: 'shape shape-2 bottom-20 right-10 bg-purple-500/5' },
        { className: 'shape shape-3 top-40 right-25 bg-blue-500/5' },
        { className: 'shape shape-4 bottom-35 left-20 bg-purple-500/10' }
      ];

      shapes.forEach(shape => {
        const div = document.createElement('div');
        div.className = shape.className;
        div.style.zIndex = '-1';
        document.body.appendChild(div);
      });
    };

    createShapes();

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleParallax);

      // Remove created shapes
      document.querySelectorAll('.shape').forEach(el => {
        if (el.parentNode === document.body) {
          document.body.removeChild(el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050410]" ref={mainRef}>
      <Helmet>
        <title>Touchpointe Digital - Marketing Solutions in Kerala</title>
        <meta name="description" content="Premier digital marketing agency in Kerala offering SEO, web development, social media, and comprehensive marketing solutions for businesses." />
      </Helmet>
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Capabilities />
        <KeralaMarketingExcellence />

        <WebsitePerformanceCheck />

        <ToolsSection />
        <Pricing />
        <Contact />
      </main>
      <Footer />

      {/* Animated cursor effect (purely CSS, no JS needed) */}
      <div className="cursor-effect"></div>
    </div>
  );
};

export default Index;
