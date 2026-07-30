import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Flame, Shield, Clock } from 'lucide-react';
import { CursorMode } from '../types';
import { INGREDIENTS_HIGHLIGHT } from '../data/restaurantData';

interface SecretDetailsSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const SecretDetailsSection: React.FC<SecretDetailsSectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const activeItem = INGREDIENTS_HIGHLIGHT[activeWordIndex];

  return (
    <section id="details" className="relative min-h-screen w-full bg-[#080706] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 flex flex-col justify-center overflow-hidden select-none bg-noise">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-[#d4973b] uppercase block mb-2">
            // THE SECRET IS IN THE DETAILS
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f4efe8]">
            FOUR SACRED ELEMENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Enormous Words Selection */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {INGREDIENTS_HIGHLIGHT.map((item, idx) => {
              const isActive = idx === activeWordIndex;
              return (
                <button
                  key={item.word}
                  onClick={() => setActiveWordIndex(idx)}
                  onMouseEnter={() => onCursorChange('DISCOVER')}
                  onMouseLeave={() => onCursorChange('DEFAULT')}
                  className="text-left group cursor-pointer"
                >
                  <h3
                    className={`font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter transition-all duration-500 ${
                      isActive
                        ? isGheeMode
                          ? 'text-[#f1ca63] translate-x-4'
                          : 'text-[#d4973b] translate-x-4'
                        : 'text-[#2b221b] hover:text-[#524135]'
                    }`}
                  >
                    {item.word}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Macro Visual Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.word}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl border border-[#382b20] bg-[#14100c] p-8 sm:p-12 overflow-hidden shadow-2xl"
              >
                {/* Background Macro Image */}
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={activeItem.image}
                    alt={activeItem.word}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-transparent to-black/30" />
                </div>

                {/* Subtitle & Description */}
                <span className="text-xs font-mono font-bold tracking-widest text-[#d4973b] uppercase block mb-2">
                  {activeItem.subtitle}
                </span>
                <p className="font-editorial text-lg sm:text-xl text-[#c4b5a3] leading-relaxed italic">
                  “{activeItem.description}”
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
