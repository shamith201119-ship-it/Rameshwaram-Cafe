import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Sparkles, RefreshCw } from 'lucide-react';
import { CursorMode } from '../types';
import { ASSETS } from '../data/assets';

interface FinalCTASectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#070605] text-[#f4efe8] py-32 px-4 sm:px-8 md:px-16 flex flex-col justify-between items-center text-center overflow-hidden select-none bg-noise">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#d4973b]/10 blur-[150px] pointer-events-none" />

      {/* Top Statement */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#382b20] bg-[#14100c] text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AUTHENTIC SOUTH INDIAN HOSPITALITY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif-title text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-[#f4efe8] mb-8 leading-[0.9]"
        >
          COME HUNGRY. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4973b] via-[#f1ca63] to-[#e5a83b]">
            LEAVE HAPPY.
          </span>
        </motion.h2>

        {/* Final Visual Banner */}
        <div className="relative w-full max-w-2xl h-64 mx-auto rounded-3xl overflow-hidden border border-[#382b20] shadow-2xl mb-12">
          <img
            src={ASSETS.coffee.brassTumbler}
            alt="Filter Coffee Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center font-editorial text-2xl italic text-[#f4efe8]">
            “The Rameshwaram Promise”
          </div>
        </div>
      </div>

      {/* "ONE MORE BITE?" Infinite Loop Section (Section 37 requirement) */}
      <div className="relative z-10 pt-12 border-t border-[#2d2218] w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <span className="block font-serif-title font-bold text-xl uppercase text-[#f4efe8]">
            ONE MORE BITE?
          </span>
          <span className="block text-xs font-mono text-[#a89b8d]">
            RELIVE THE CINEMATIC EXPERIENCE FROM THE TOP
          </span>
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={() => onCursorChange('ENTER')}
          onMouseLeave={() => onCursorChange('DEFAULT')}
          className="px-8 py-4 rounded-full bg-[#d4973b] text-[#0b0908] font-serif-title text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#e5a83b] transition-all shadow-xl shadow-[#d4973b]/20 hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          <span>SCROLL TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
