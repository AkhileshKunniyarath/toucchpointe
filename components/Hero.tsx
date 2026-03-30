import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import siteDefaults from '@/lib/site-defaults.json';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const { data } = useSiteSettings('home_page', siteDefaults.home_page);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#06060f]">

      {/* ── Full-section background video ── */}
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
      />

      {/* ── Dark overlay gradient so text is readable ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06060f]/95 via-[#06060f]/75 to-[#06060f]/40 z-[1]" />

      {/* ── Subtle color accents (on top of overlay, behind content) ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Bottom-left warm glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-indigo-900/30 blur-[120px] rounded-full" />
        {/* Right side cool glow */}
        <div className="absolute top-1/3 right-0 w-[350px] h-[400px] bg-purple-900/25 blur-[100px] rounded-full" />
        {/* Top center subtle teal */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-900/20 blur-[100px] rounded-full" />
      </div>

      {/* ── Animated grid lines ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120,120,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,120,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      {/* ── Content ── */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-28 pb-16">
        <div className="max-w-2xl">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-cyan-300 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {data.heroBadge}
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] text-white mb-6 tracking-tight">
            {data.heroTitleLine1}
            <br />
            <span className="text-white">{data.heroTitleLine2}</span>
            <br />
            <span className="text-white">{data.heroTitleLine3} </span>
            <span
              className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              {data.heroHighlight1}
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              {data.heroHighlight2}
            </span>
          </h1>

          {/* Sub-line */}
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            {data.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm
                         hover:from-blue-500 hover:to-violet-500 transition-all duration-300 hover:-translate-y-0.5
                         shadow-lg shadow-blue-700/30 hover:shadow-blue-600/50"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/80 font-medium text-sm
                         hover:bg-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-14 border-t border-white/10 pt-8">
            {data.stats.map((stat: { value: string; label: string }, index: number) => (
              <div key={index}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Video play/pause control ── */}
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 z-10 flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm text-white/70 text-xs hover:bg-black/50 hover:text-white transition-all duration-200"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Fallback background when no video */}
      {!videoLoaded && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(30,20,80,0.8) 0%, #06060f 70%)',
          }}
        />
      )}

      {/* Bottom fade to page */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#06060f] to-transparent z-[3]" />
    </section>
  );
};

export default Hero;
