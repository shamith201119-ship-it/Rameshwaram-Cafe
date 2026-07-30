import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Waves, Building2, Sparkles } from 'lucide-react';
import { CursorMode } from '../types';
import { ASSETS } from '../data/assets';

interface RameshwaramToBengaluruSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const RameshwaramToBengaluruSection: React.FC<RameshwaramToBengaluruSectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="story" className="relative min-h-screen w-full bg-[#0a0807] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 flex flex-col justify-center overflow-hidden select-none bg-noise">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4973b] uppercase block mb-3">
            // THE ORIGIN & EVOLUTION
          </span>
          <h2 className="font-serif-title text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f4efe8] mb-4">
            RAMESHWARAM <span className="text-[#d4973b]">→</span> BENGALURU
          </h2>
          <p className="font-editorial text-lg text-[#c4b5a3] italic">
            “ROOTED IN TRADITION. BUILT FOR TODAY.”
          </p>
        </div>

        {/* Interactive Dual-Origin Image Slider */}
        <div
          onMouseEnter={() => onCursorChange('DRAG')}
          onMouseLeave={() => onCursorChange('DEFAULT')}
          className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-[#382b20] shadow-2xl"
        >
          {/* Left Image: Rameshwaram Sea & Temple Coast */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={ASSETS.story.rameshwaramCoast}
              alt="Rameshwaram Coastal Origins"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#090807]/80 backdrop-blur-md border border-[#382b20] text-xs font-mono text-[#d4973b] flex items-center gap-2">
              <Waves className="w-4 h-4" />
              <span>RAMESHWARAM: COASTAL HERITAGE & FAITH</span>
            </div>
          </div>

          {/* Right Image Overlay: Bengaluru Modern Urban Food Energy */}
          <div
            className="absolute inset-y-0 right-0 h-full overflow-hidden transition-all duration-75"
            style={{ width: `${100 - sliderPos}%` }}
          >
            <img
              src={ASSETS.story.bengaluruCity}
              alt="Bengaluru High Energy Outlets"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: '100vw', maxWidth: 'none' }}
            />
            <div className="absolute top-6 right-6 p-4 rounded-2xl bg-[#090807]/80 backdrop-blur-md border border-[#382b20] text-xs font-mono text-[#f1ca63] flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>BENGALURU: HIGH-SPEED TAWA ENERGY</span>
            </div>
          </div>

          {/* Interactive Drag Handle Divider */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          <div
            className="absolute top-0 bottom-0 w-1 bg-[#d4973b] z-20 pointer-events-none shadow-[0_0_20px_#d4973b]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#d4973b] text-[#0b0908] font-bold flex items-center justify-center text-xs shadow-xl">
              ↔
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
