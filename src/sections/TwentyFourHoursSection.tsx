import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Sun, Moon, Sparkles, ShoppingBag } from 'lucide-react';
import { CursorMode, MenuItem } from '../types';
import { TIMELINE_HOURS, MENU_ITEMS } from '../data/restaurantData';

interface TwentyFourHoursSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
  onAddToCart: (item: MenuItem) => void;
}

export const TwentyFourHoursSection: React.FC<TwentyFourHoursSectionProps> = ({
  onCursorChange,
  isGheeMode,
  onAddToCart,
}) => {
  const [activeHourIdx, setActiveHourIdx] = useState(1);

  const activeTimeline = TIMELINE_HOURS[activeHourIdx];

  const matchedMenuItem = MENU_ITEMS.find((m) => m.name.includes(activeTimeline.recommendedItem.split(' ')[0])) || MENU_ITEMS[0];

  return (
    <section className="relative min-h-screen w-full bg-[#0a0807] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 flex flex-col justify-center overflow-hidden select-none bg-noise">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#382b20] bg-[#14100c] text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>INTERACTIVE ALL-DAY CHRONICLE</span>
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f4efe8] mb-3">
            THE <span className="text-[#d4973b]">24-HOUR</span> ENERGY
          </h2>
          <p className="font-editorial text-lg text-[#c4b5a3] italic">
            Select a hour to experience how our kitchens shift ambient lighting, tawa fires, and aromas from dawn till dusk.
          </p>
        </div>

        {/* Hour Dial Selector */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap mb-16">
          {TIMELINE_HOURS.map((t, idx) => {
            const isActive = idx === activeHourIdx;
            return (
              <button
                key={t.hour}
                onClick={() => setActiveHourIdx(idx)}
                onMouseEnter={() => onCursorChange('VIEW')}
                onMouseLeave={() => onCursorChange('DEFAULT')}
                className={`px-6 py-3 rounded-2xl font-mono text-xs font-bold tracking-wider uppercase transition-all border flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#d4973b] text-[#0b0908] border-[#d4973b] shadow-xl shadow-[#d4973b]/30 scale-105'
                    : 'border-[#382b20] bg-[#14100c] text-[#a89b8d] hover:border-[#d4973b] hover:text-[#f4efe8]'
                }`}
              >
                {t.period === 'MORNING' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{t.displayTime}</span>
              </button>
            );
          })}
        </div>

        {/* Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTimeline.hour}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#382b20] bg-[#14100c] rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            {/* Visual Image */}
            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#382b20]">
              <img
                src={activeTimeline.image}
                alt={activeTimeline.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-transparent to-black/30" />

              <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#090807]/90 backdrop-blur-md border border-[#382b20] text-xs font-mono text-[#d4973b]">
                {activeTimeline.period} RITUAL
              </div>
            </div>

            {/* Information */}
            <div className="lg:col-span-6 flex flex-col gap-4 text-left">
              <span className="text-xs font-mono tracking-widest text-[#d4973b] uppercase">
                {activeTimeline.displayTime} // {activeTimeline.period}
              </span>
              <h3 className="font-serif-title text-3xl font-bold uppercase text-[#f4efe8]">
                {activeTimeline.title}
              </h3>
              <p className="font-editorial text-lg text-[#c4b5a3] italic">
                “{activeTimeline.subtitle}”
              </p>

              <div className="p-4 rounded-xl bg-[#1c1611] border border-[#382b20] my-2">
                <span className="block text-[10px] font-mono text-[#a89b8d] uppercase mb-1">
                  AMBIENT KITCHEN EXPERIENCE
                </span>
                <p className="text-xs text-[#d4973b] font-mono">
                  {activeTimeline.ambientDescription}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#2d2218]">
                <div>
                  <span className="block text-[10px] font-mono text-[#a89b8d] uppercase">RECOMMENDED DISH</span>
                  <span className="font-serif-title font-bold text-sm text-[#f4efe8]">{activeTimeline.recommendedItem}</span>
                </div>
                <button
                  onClick={() => onAddToCart(matchedMenuItem)}
                  className="px-4 py-2 rounded-full bg-[#d4973b] text-[#0b0908] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#e5a83b] transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  ORDER ₹{activeTimeline.itemPrice}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
