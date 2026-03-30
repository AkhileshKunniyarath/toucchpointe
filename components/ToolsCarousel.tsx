import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Category {
  id: number;
  title: string;
  tools: string;
  icons: { name: string; url: string }[];
  bgGradient: string;
  glowColor: string;
  stat: string;
  likes: string;
  creator: string;
}

interface ToolsCarouselProps {
  categories: Category[];
}

const ToolsCarousel = ({ categories }: ToolsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start at middle
  const [isHovered, setIsHovered] = useState(false);

  // Auto progression
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, categories.length]);

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-[1200px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
        <AnimatePresence initial={false}>
          {categories.map((cat, index) => {
            const len = categories.length;
            let offset = (index - activeIndex) % len;
            if (offset < -Math.floor(len / 2)) offset += len;
            if (offset > Math.floor(len / 2)) offset -= len;

            const MathAbs = Math.abs(offset);
            const isActive = offset === 0;

            const xTranslate = offset * 280; 
            const zTranslate = -MathAbs * 120;
            const scale = isActive ? 1 : MathAbs === 1 ? 0.85 : 0.7;
            const opacity = isActive ? 1 : MathAbs === 1 ? 0.6 : 0.2;

            return (
              <motion.div
                key={cat.id}
                className={cn(
                  "absolute top-0 bottom-0 my-auto cursor-pointer rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] pointer-events-auto group",
                  isActive ? "border border-white/20 z-50 ring-2 ring-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]" : "border border-white/5 z-40 grayscale-[20%] blur-[1px]",
                  MathAbs > 1 && "z-30 blur-[3px] grayscale-[40%]"
                )}
                style={{ width: '340px', height: '480px' }}
                animate={{
                  x: xTranslate,
                  y: 0,
                  z: zTranslate,
                  scale: scale,
                  opacity: opacity,
                  zIndex: categories.length - MathAbs,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 30,
                  mass: 1.5
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Active Card Shimmer Effect */}
                {isActive && (
                   <div className="absolute inset-x-0 -top-1/2 h-[200%] w-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_4s_ease-in-out_infinite] z-20 pointer-events-none" />
                )}
                
                {/* Card Background Gradient */}
                <div className={cn("absolute inset-0 bg-gradient-to-br", cat.bgGradient)}>
                  
                  {/* Floating Logos Constellation */}
                  <div className={cn("absolute inset-0 flex flex-col items-center justify-center pb-24 transition-opacity duration-700", isActive ? "opacity-100" : "opacity-60")}>
                     {cat.icons.length > 0 && (
                       <div className="flex flex-col items-center gap-6 relative">
                         {/* Central ambient glow */}
                         <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[60px] opacity-40 animate-pulse", cat.glowColor)} />

                         {/* Main Top Logo */}
                         <motion.div 
                           className="w-28 h-28 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] relative z-10"
                           animate={{ y: [0, -10, 0] }}
                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         >
                            <img src={cat.icons[0].url} alt={cat.icons[0].name} className="w-14 h-14 object-contain" />
                         </motion.div>
                         
                         {/* Secondary Logos */}
                         <div className="flex gap-8">
                           {cat.icons.slice(1, 3).map((icon, idx) => (
                              <motion.div 
                                key={idx} 
                                className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-lg relative z-10"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                              >
                                  <img src={icon.url} alt={icon.name} className="w-8 h-8 object-contain opacity-90" />
                              </motion.div>
                           ))}
                         </div>
                       </div>
                     )}
                  </div>
                </div>
                
                {/* Vignette Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020210] via-black/20 to-transparent z-10 pointer-events-none" />
                
                {/* Holographic rim light on active */}
                {isActive && (
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl mix-blend-overlay z-20 pointer-events-none" />
                )}

                {/* Content Pane - matching reference image */}
                <div className="absolute bottom-0 inset-x-0 p-5 pt-8 z-30 transform-gpu">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-xl">
                    <h3 className="text-xl font-black text-white mb-0.5 tracking-tight group-hover:text-blue-300 transition-colors">{cat.title}</h3>
                    <p className="text-[11px] text-blue-200/70 mb-4 line-clamp-1 font-medium">by <span className="text-white">{cat.creator}</span> • {cat.tools}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="inline-flex gap-1.5 items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                          <span className="text-xs font-bold text-white relative z-10 tracking-widest">{cat.stat}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs text-blue-100 font-bold group/like px-2">
                        <Heart className="w-4 h-4 text-pink-500 fill-pink-500 group-hover/like:scale-110 transition-transform" />
                        {cat.likes}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ToolsCarousel;
