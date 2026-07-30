import React from 'react';
import { motion } from 'motion/react';
import { Flame, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import { CursorMode } from '../types';
import { ASSETS } from '../data/assets';
import { FoodCanvas3D } from '../components/FoodCanvas3D';

interface HeroSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCursorChange, isGheeMode }) => {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0807] text-[#f4efe8] flex flex-col justify-between overflow-hidden pt-28 pb-12 px-4 sm:px-8 md:px-16 select-none bg-noise">
      {/* 3D WebGL Floating Steam & Podi Particles Canvas */}
      <FoodCanvas3D isGheeMode={isGheeMode} />

      {/* Background Ambient Radial Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
          isGheeMode ? 'bg-[#f1ca63]/25' : 'bg-[#d4973b]/15'
        }`}
      />

      {/* Top Meta Badges */}
      <div className="relative z-20 w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase text-[#a89b8d]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2d2218] bg-[#14100c]/80 backdrop-blur-md"
        >
          <Flame className="w-3.5 h-3.5 text-[#d4973b]" />
          <span className="text-[#f4efe8]">SOUTH INDIAN SOUL</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2d2218] bg-[#14100c]/80 backdrop-blur-md text-[#d4973b]"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>SERVED WITH FIRE • 100% PURE DESI GHEE</span>
        </motion.div>
      </div>

      {/* Main Enormous Typography & Cinematic Food Backdrop */}
      <div className="relative z-20 my-auto py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Huge Enormous Title */}
        <div className="w-full lg:w-3/5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-4 text-xs font-bold tracking-[0.3em] text-[#d4973b] uppercase"
          >
            <Sparkles className="w-4 h-4" />
            <span>AUTHENTIC BENGALURU LEGEND</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-hero text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#f4efe8]"
          >
            THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4efe8] via-[#e5a83b] to-[#d4973b]">
              RAMESHWARAM
            </span> <br />
            CAFE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 font-editorial text-xl sm:text-2xl text-[#c4b5a3] max-w-xl italic font-normal leading-relaxed"
          >
            “South Indian soul. Served with fire.”
          </motion.p>
        </div>

        {/* Right Column: Hero Dosa Close-up Visual Card with Parallax Depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          onMouseEnter={() => onCursorChange('SIZZLE')}
          onMouseLeave={() => onCursorChange('DEFAULT')}
          className="relative w-full lg:w-2/5 aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-[#382b20] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group"
        >
          {/* Main Dosa Image */}
          <img
            src={ASSETS.hero.dosaMain}
            alt="The Rameshwaram Cafe Ghee Podi Dosa"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Vignette Overlay & Steam Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-black/20" />

          {/* Floating Steam Visual Overlay */}
          <div className="absolute inset-x-0 bottom-12 h-32 pointer-events-none flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#f1ca63]/20 blur-xl animate-steam" />
          </div>

          {/* Bottom Card Tag */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#090807]/80 backdrop-blur-md border border-[#382b20] flex items-center justify-between">
            <div>
              <span className="block font-serif-title font-bold text-sm text-[#f4efe8] uppercase">
                Ghee Podi Masala Dosa
              </span>
              <span className="block text-xs font-mono text-[#d4973b]">
                ₹160 • Hot Off Cast Iron
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#d4973b] text-[#0b0908] flex items-center justify-center font-bold text-xs">
              ★
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-20 w-full flex items-center justify-between pt-6 border-t border-[#2d2218]"
      >
        <span className="text-xs font-mono tracking-widest text-[#a89b8d] uppercase">
          SCROLL TO FEEL THE SIZZLE
        </span>
        <a
          href="#sizzle"
          onMouseEnter={() => onCursorChange('EXPLORE')}
          onMouseLeave={() => onCursorChange('DEFAULT')}
          className="w-10 h-10 rounded-full border border-[#382b20] bg-[#16120e] text-[#d4973b] hover:border-[#d4973b] hover:bg-[#d4973b] hover:text-[#0b0908] transition-all flex items-center justify-center animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
