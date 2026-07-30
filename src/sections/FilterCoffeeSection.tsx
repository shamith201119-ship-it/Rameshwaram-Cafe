import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, Sparkles, Flame, Droplet } from 'lucide-react';
import { CursorMode } from '../types';
import { ASSETS } from '../data/assets';

interface FilterCoffeeSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const FilterCoffeeSection: React.FC<FilterCoffeeSectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  const [pourLevel, setPourLevel] = useState(70);

  return (
    <section id="coffee" className="relative min-h-screen w-full bg-[#160d08] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 flex flex-col justify-center overflow-hidden select-none bg-noise">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#422718] bg-[#22140d] text-xs font-mono tracking-widest text-[#e5a83b] uppercase mb-4"
          >
            <Coffee className="w-3.5 h-3.5 text-[#e5a83b]" />
            <span>DEGREE FILTER BREW RITUAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-title text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f4efe8]"
          >
            FILTERED. FOAMED. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a83b] via-[#f1ca63] to-[#d4973b]">
              FINISHED. COFFEE.
            </span>
          </motion.h2>
        </div>

        {/* Central Brass Tumbler & Foam Pour Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Coffee Specs & Lore */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-3xl border border-[#3d2315] bg-[#1e120c] shadow-2xl">
              <span className="text-xs font-mono text-[#e5a83b] uppercase tracking-widest block mb-2">
                80/20 HERITAGE ROAST
              </span>
              <h3 className="font-serif-title text-2xl font-bold uppercase text-[#f4efe8] mb-4">
                THE SOUTH INDIAN DEGREE COFFEE
              </h3>
              <p className="font-editorial text-base text-[#c7b5a5] leading-relaxed mb-6 italic">
                First-pour decoction extracted overnight using traditional brass drip filters, aerated through a high-pour technique into a velvety golden foam in a traditional brass davarah.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#3d2315] text-xs font-mono">
                <div>
                  <span className="text-[#a89382] block">MILK TEMP</span>
                  <span className="text-[#e5a83b] font-bold text-sm">92°C Whole Milk</span>
                </div>
                <div>
                  <span className="text-[#a89382] block">DECOCTION</span>
                  <span className="text-[#e5a83b] font-bold text-sm">Pure Chicory Blend</span>
                </div>
              </div>
            </div>

            {/* Pour Slider Controller */}
            <div className="p-6 rounded-2xl border border-[#3d2315] bg-[#1e120c] flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs font-mono text-[#e5a83b]">
                <span>AERATION FOAM HEIGHT</span>
                <span>{pourLevel}% FROTH</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={pourLevel}
                onChange={(e) => setPourLevel(Number(e.target.value))}
                className="w-full accent-[#e5a83b] cursor-pointer"
              />
            </div>
          </div>

          {/* Right Side: High Res Brass Tumbler Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              onMouseEnter={() => onCursorChange('COFFEE')}
              onMouseLeave={() => onCursorChange('DEFAULT')}
              className="relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-[#e5a83b]/50 bg-[#22140d] shadow-[0_0_60px_rgba(229,168,59,0.2)] p-4 group"
            >
              <img
                src={ASSETS.coffee.brassTumbler}
                alt="South Indian Degree Filter Coffee"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dynamic Froth Layer Overlay */}
              <div
                className="absolute inset-x-4 bottom-4 rounded-b-2xl bg-gradient-to-t from-[#f1ca63]/90 via-[#e5a83b]/60 to-transparent transition-all duration-300 pointer-events-none flex items-end p-4 text-[#0b0908] font-bold font-serif-title text-xs uppercase"
                style={{ height: `${pourLevel}%` }}
              >
                <span>DEGREE FOAM RITUAL ACTIVE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
