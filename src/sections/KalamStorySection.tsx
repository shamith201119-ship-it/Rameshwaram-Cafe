import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass } from 'lucide-react';
import { CursorMode } from '../types';
import { ASSETS } from '../data/assets';

interface KalamStorySectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const KalamStorySection: React.FC<KalamStorySectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  return (
    <section className="relative w-full bg-[#080706] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 overflow-hidden select-none bg-noise">
      <div className="max-w-6xl mx-auto border border-[#2d2218] rounded-3xl bg-[#120f0c] p-8 sm:p-16 relative">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-8">
          <Compass className="w-4 h-4" />
          <span>RESPECTFUL TRIBUTE & HERITAGE INSPIRED</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-serif-title text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f4efe8]">
              DREAM. <br />
              BUILD. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4973b] to-[#f1ca63]">
                SERVE.
              </span>
            </h2>

            <p className="font-editorial text-lg sm:text-xl text-[#c4b5a3] leading-relaxed italic">
              Inspired by the humility, dedication, and visionary spirit of Rameshwaram’s most famous son, Dr. A.P.J. Abdul Kalam.
            </p>

            <p className="font-sans text-sm text-[#a89b8d] leading-relaxed">
              The Rameshwaram Cafe was founded on the unyielding principle that true greatness lies in serving people with absolute integrity, highest standards of cleanliness, and relentless quality. Every dish served carries the spirit of hard work and South Indian heritage.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-[#382b20]">
            <img
              src={ASSETS.story.kalamLegacy}
              alt="Rameshwaram Knowledge Heritage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f0c] via-transparent to-black/40" />
            <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-[#d4973b] uppercase">
              // RAMESHWARAM HERITAGE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
