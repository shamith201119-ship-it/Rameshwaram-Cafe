import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, Sparkles, Flame } from 'lucide-react';
import { CursorMode } from '../types';
import { soundFX } from '../utils/audioSynth';
import { ASSETS } from '../data/assets';

interface SizzleSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const SizzleSection: React.FC<SizzleSectionProps> = ({ onCursorChange, isGheeMode }) => {
  const [isSizzling, setIsSizzling] = useState(false);

  const handleSizzleTrigger = () => {
    setIsSizzling(true);
    soundFX.triggerClickSizzle();
    setTimeout(() => setIsSizzling(false), 2000);
  };

  return (
    <section
      id="sizzle"
      className="relative min-h-screen w-full bg-[#070605] text-[#f4efe8] flex flex-col justify-center items-center py-24 px-4 sm:px-8 md:px-16 overflow-hidden select-none bg-noise"
    >
      {/* Background Animated Sound Wave Bars */}
      <div className="absolute inset-0 flex items-center justify-center gap-1 sm:gap-2 opacity-20 pointer-events-none">
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: isSizzling ? [20, 180, 40, 220, 30] : [10, 80, 20, 100, 15],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.04,
            }}
            className={`w-1 sm:w-2 rounded-full ${isGheeMode ? 'bg-[#f1ca63]' : 'bg-[#d4973b]'}`}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2d2218] bg-[#14100c] text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-8"
        >
          <Flame className="w-4 h-4 text-[#d4973b] animate-pulse" />
          <span>AUDIO-VISUAL SYNESTHESIA</span>
        </motion.div>

        {/* Large Typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#f4efe8] mb-6 leading-tight"
        >
          HEAR THAT? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4973b] via-[#f1ca63] to-[#e5a83b]">
            THAT'S THE SIZZLE.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-editorial text-lg sm:text-2xl text-[#c4b5a3] max-w-2xl mx-auto mb-12 italic"
        >
          At 450°F on seasoned cast iron, pure ghee meets rice-lentil batter. The sound of authentic South Indian perfection.
        </motion.p>

        {/* Emergence Visual of Rotating Dosa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleSizzleTrigger}
          onMouseEnter={() => onCursorChange('SIZZLE')}
          onMouseLeave={() => onCursorChange('DEFAULT')}
          className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-2 border-2 border-[#d4973b]/40 bg-[#16120e] shadow-[0_0_80px_rgba(212,151,59,0.25)] cursor-pointer group flex items-center justify-center overflow-hidden"
        >
          <img
            src={ASSETS.hero.dosaMain}
            alt="Crispy Dosa Sizzle"
            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Glowing Ghee Ring & Ripple */}
          <div className="absolute inset-0 rounded-full border-4 border-[#f1ca63]/30 group-hover:border-[#f1ca63] transition-colors duration-500" />

          {/* Center Play Sizzle Prompt */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4 opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-[#d4973b] text-[#0b0908] flex items-center justify-center mb-3 shadow-xl group-hover:scale-110 transition-transform">
              <Volume2 className="w-8 h-8" />
            </div>
            <span className="font-serif-title text-xs font-bold tracking-widest text-[#f4efe8] uppercase">
              CLICK TO TRIGGER SIZZLE
            </span>
            <span className="text-[10px] font-mono text-[#d4973b] mt-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> 450°F TAWA FLAME
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
