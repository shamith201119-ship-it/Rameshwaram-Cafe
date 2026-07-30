import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Volume2, VolumeX, Sparkles, MapPin } from 'lucide-react';
import { CursorMode } from '../types';
import { soundFX } from '../utils/audioSynth';

interface NavbarProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
  onToggleGheeMode: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onCursorChange,
  isGheeMode,
  onToggleGheeMode,
  cartCount,
  onOpenCart,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.getMutedState());

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 60);

      if (currentY > 200 && currentY > lastY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { label: 'EXPERIENCE', href: '#sizzle' },
    { label: 'MENU', href: '#menu' },
    { label: 'DETAILS', href: '#details' },
    { label: 'COFFEE', href: '#coffee' },
    { label: 'STORY', href: '#story' },
    { label: 'LOCATIONS', href: '#locations' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090807]/80 backdrop-blur-xl border-b border-[#2d2218]/50 py-3 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onMouseEnter={() => onCursorChange('ENTER')}
            onMouseLeave={() => onCursorChange('DEFAULT')}
            className="flex items-center gap-3 group text-left"
          >
            <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isGheeMode
                ? 'border-[#f1ca63] bg-[#f1ca63]/20 text-[#f1ca63] shadow-[0_0_15px_rgba(241,202,99,0.5)]'
                : 'border-[#d4973b]/60 bg-[#16120e] text-[#d4973b] group-hover:border-[#d4973b]'
            }`}>
              <span className="font-serif-title font-bold text-sm">RC</span>
            </div>
            <div>
              <span className="block font-serif-title text-sm md:text-base font-bold tracking-[0.2em] text-[#f4efe8] uppercase leading-tight">
                RAMESHWARAM
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-[#a89b8d] uppercase">
                CAFE • BENGALURU
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => onCursorChange('DISCOVER')}
                onMouseLeave={() => onCursorChange('DEFAULT')}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c4b5a3] hover:text-[#f1ca63] transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4973b] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions: Audio, Ghee Mode, Order / Cart & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleSound}
              onMouseEnter={() => onCursorChange('SIZZLE')}
              onMouseLeave={() => onCursorChange('DEFAULT')}
              className="p-2 rounded-full border border-[#382b20] bg-[#16120e]/60 text-[#c4b5a3] hover:text-[#f4efe8] hover:border-[#d4973b] transition-all text-xs flex items-center gap-1.5"
              title={isMuted ? 'Unmute Tawa Sizzle FX' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d4973b] animate-pulse" />}
            </button>

            {/* Ghee Mode Toggle */}
            <button
              onClick={onToggleGheeMode}
              onMouseEnter={() => onCursorChange('GHEE')}
              onMouseLeave={() => onCursorChange('DEFAULT')}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 border transition-all duration-300 ${
                isGheeMode
                  ? 'bg-[#f1ca63] text-[#0b0908] border-[#f1ca63] shadow-[0_0_20px_rgba(241,202,99,0.8)] animate-pulse'
                  : 'border-[#382b20] bg-[#16120e]/80 text-[#d4973b] hover:border-[#d4973b] hover:bg-[#d4973b]/10'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>GHEE MODE</span>
            </button>

            {/* Order Bag / Cart Button */}
            <button
              onClick={onOpenCart}
              onMouseEnter={() => onCursorChange('MENU')}
              onMouseLeave={() => onCursorChange('DEFAULT')}
              className="relative px-4 py-2 rounded-full bg-[#d4973b] text-[#0b0908] hover:bg-[#e5a83b] transition-all font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-[#d4973b]/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">ORDER ONLINE</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#0b0908] text-[#f1ca63] text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#382b20] bg-[#16120e] text-[#f4efe8]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#090807]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-widest text-[#d4973b] uppercase">
                // NAVIGATION MENU
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="font-serif-title text-3xl font-bold tracking-wider uppercase text-[#f4efe8] hover:text-[#d4973b] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#2d2218] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-[#a89b8d]">
                <MapPin className="w-4 h-4 text-[#d4973b]" />
                <span>Indiranagar • JP Nagar • Whitefield • Hyderabad • Dubai</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-4 rounded-xl bg-[#d4973b] text-[#0b0908] font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                EXPLORE ONLINE MENU & ORDER ({cartCount})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
