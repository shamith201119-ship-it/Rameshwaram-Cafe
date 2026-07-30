import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Flame, Sparkles, Plus, Check } from 'lucide-react';
import { MenuItem, CursorMode } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';

interface InteractiveMenuSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
  onAddToCart: (item: MenuItem) => void;
}

const CATEGORIES = ['DOSA', 'IDLI', 'VADA', 'PONGAL', 'RICE', 'PADDU', 'BEVERAGES', 'DESSERTS'] as const;

export const InteractiveMenuSection: React.FC<InteractiveMenuSectionProps> = ({
  onCursorChange,
  isGheeMode,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('DOSA');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="relative min-h-screen w-full bg-[#090807] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 select-none bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#382b20] bg-[#14100c] text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CULINARY SELECTION • VERIFIED MENU</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-title text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#f4efe8] mb-4"
          >
            THE RAMESHWARAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4973b] via-[#f1ca63] to-[#e5a83b]">
              KITCHEN FEAST
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-editorial text-lg text-[#c4b5a3] italic"
          >
            Prepared fresh to order on screaming-hot tawas and traditional steam vats using 100% pure ghee.
          </motion.p>
        </div>

        {/* Horizontal Category Nav Pill Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                onMouseEnter={() => onCursorChange('MENU')}
                onMouseLeave={() => onCursorChange('DEFAULT')}
                className={`px-5 py-2.5 rounded-full font-serif-title text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap border shrink-0 ${
                  isActive
                    ? isGheeMode
                      ? 'bg-[#f1ca63] text-[#0b0908] border-[#f1ca63] shadow-[0_0_20px_rgba(241,202,99,0.5)]'
                      : 'bg-[#d4973b] text-[#0b0908] border-[#d4973b] shadow-lg shadow-[#d4973b]/20'
                    : 'border-[#2d2218] bg-[#14100c]/80 text-[#a89b8d] hover:text-[#f4efe8] hover:border-[#d4973b]/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => onCursorChange('VIEW')}
                  onMouseLeave={() => onCursorChange('DEFAULT')}
                  className="group relative rounded-3xl border border-[#2d2218] bg-[#120f0c] p-6 flex flex-col justify-between hover:border-[#d4973b]/80 transition-all duration-300 shadow-xl overflow-hidden"
                >
                  {/* Top Image Preview */}
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 bg-[#1a1510]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120f0c] via-transparent to-black/30" />

                    {/* Badge Tag */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0b0908]/90 text-[#d4973b] font-mono text-[10px] uppercase font-bold border border-[#382b20]">
                        {item.badge}
                      </span>
                    )}

                    {/* Price Tag */}
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#d4973b] text-[#0b0908] font-serif-title text-sm font-bold">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col mb-6">
                    <h3 className="font-serif-title font-bold text-lg text-[#f4efe8] uppercase mb-2 group-hover:text-[#d4973b] transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-[#a89b8d] leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Ingredient tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#1c1611] text-[10px] font-mono text-[#8c7b6b]"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleAdd(item)}
                    className={`w-full py-3 rounded-xl font-serif-title text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-[#3b5e40] text-[#f4efe8]'
                        : 'bg-[#1e1712] text-[#f4efe8] hover:bg-[#d4973b] hover:text-[#0b0908] border border-[#382b20]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" /> ADDED TO ORDER
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" /> ADD TO ORDER
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
