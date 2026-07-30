import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, CheckCircle2, Flame, Droplets } from 'lucide-react';
import { CursorMode } from '../types';
import { ASSETS } from '../data/assets';

interface MainDosaHeroSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

const DOSA_LAYERS = [
  {
    id: 'shell',
    num: '01',
    title: 'THE CRISPY GOLDEN SHELL',
    subtitle: '18-Hour Stone Ground Batter',
    description: 'Fermented naturally in climate-controlled stone vats. Spread ultra-thin onto seasoned cast-iron tawas at 450°F to create micro-bubbles and signature crunch.',
    image: ASSETS.hero.dosaMain,
    spec: '0.8mm Thickness • Golden Amber Crisp'
  },
  {
    id: 'ghee',
    num: '02',
    title: '100% PURE DESI GHEE DRIZZLE',
    subtitle: 'Clarified Farm Butter',
    description: 'Ladles of sizzling hot, aromatic desi ghee are poured generously across every square inch, seeping into the crisp pores for unmatched richness.',
    image: ASSETS.hero.gheeDrizzle,
    spec: '35g Pure Clarified Butter per Dosa'
  },
  {
    id: 'podi',
    num: '03',
    title: 'FIERY GUNPOWDER PODI',
    subtitle: 'Hand-Milled Heritage Spice',
    description: 'Slow-roasted chana dal, urad dal, Kashmiri red chilies, roasted sesame, and asafoetida dusted over the bubbling ghee surface.',
    image: ASSETS.ingredients.podi,
    spec: 'Signature 12-Spice Secret Recipe'
  },
  {
    id: 'chutney',
    num: '04',
    title: 'CHUTNEY & SAMBAR COMPOSITION',
    subtitle: 'Made Fresh Every 30 Minutes',
    description: 'Accompanied by chilled creamy coconut chutney, tangy tomato-onion chutney, mint chutney, and piping-hot shallot drumstick sambar.',
    image: ASSETS.food.buttonIdliSambar,
    spec: '3 Signature Chutneys + Hot Sambar'
  }
];

export const MainDosaHeroSection: React.FC<MainDosaHeroSectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const activeLayer = DOSA_LAYERS[activeLayerIndex];

  return (
    <section className="relative min-h-screen w-full bg-[#0a0807] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 overflow-hidden select-none bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#2d2218] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>THE MAIN CHARACTER</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#f4efe8]">
              ANATOMY OF THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4973b] to-[#f1ca63]">
                PERFECT DOSA
              </span>
            </h2>
          </div>

          <p className="font-editorial text-base sm:text-lg text-[#c4b5a3] max-w-md italic">
            Select a layer to deconstruct the craftsmanship, heat, and ingredients behind Bengaluru’s most iconic dish.
          </p>
        </div>

        {/* Interactive Layer Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Layer Selection Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {DOSA_LAYERS.map((layer, idx) => {
              const isActive = idx === activeLayerIndex;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerIndex(idx)}
                  onMouseEnter={() => onCursorChange('DISCOVER')}
                  onMouseLeave={() => onCursorChange('DEFAULT')}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden ${
                    isActive
                      ? isGheeMode
                        ? 'border-[#f1ca63] bg-[#f1ca63]/10 text-[#f4efe8] shadow-[0_0_30px_rgba(241,202,99,0.2)]'
                        : 'border-[#d4973b] bg-[#16120e] text-[#f4efe8] shadow-2xl'
                      : 'border-[#2a2017] bg-[#100d0a]/60 text-[#a89b8d] hover:border-[#382b20] hover:bg-[#14100c]'
                  }`}
                >
                  <span className={`font-serif-title font-bold text-lg ${isActive ? 'text-[#d4973b]' : 'text-[#544537]'}`}>
                    {layer.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif-title font-bold text-sm sm:text-base uppercase tracking-wider mb-1">
                      {layer.title}
                    </h3>
                    <p className="text-xs font-mono text-[#a89b8d]">
                      {layer.subtitle}
                    </p>
                  </div>
                  {isActive && (
                    <Sparkles className="w-5 h-5 text-[#d4973b] shrink-0 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Visual & Detail Showcase */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden border border-[#382b20] bg-[#14100c] p-6 sm:p-10 shadow-2xl"
              >
                {/* Background Image Container with Overlay */}
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-8">
                  <img
                    src={activeLayer.image}
                    alt={activeLayer.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-transparent to-black/20" />

                  {/* Spec Tag */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#0a0807]/80 backdrop-blur-md border border-[#382b20] text-xs font-mono text-[#d4973b] flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>{activeLayer.spec}</span>
                  </div>
                </div>

                {/* Layer Description */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono tracking-widest text-[#d4973b] uppercase">
                    // LAYER DETAILS
                  </span>
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold uppercase text-[#f4efe8]">
                    {activeLayer.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                    {activeLayer.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
