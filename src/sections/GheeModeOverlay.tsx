import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Droplet } from 'lucide-react';

interface GheeModeOverlayProps {
  isGheeMode: boolean;
  onToggle: () => void;
}

export const GheeModeOverlay: React.FC<GheeModeOverlayProps> = ({ isGheeMode, onToggle }) => {
  return (
    <AnimatePresence>
      {isGheeMode && (
        <>
          {/* Subtle Golden Sheen Ripple Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[80] bg-gradient-to-tr from-[#f1ca63]/10 via-transparent to-[#e5a83b]/10 mix-blend-screen"
          />

          {/* Floating Toast Notification */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[90] p-4 rounded-2xl bg-[#f1ca63] text-[#0b0908] font-serif-title font-bold text-xs uppercase tracking-wider shadow-[0_0_40px_rgba(241,202,99,0.8)] flex items-center gap-3 border border-[#0b0908]"
          >
            <div className="w-8 h-8 rounded-full bg-[#0b0908] text-[#f1ca63] flex items-center justify-center animate-bounce">
              <Droplet className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-black text-sm">GHEE MODE ACTIVATED!</span>
              <span className="block text-[10px] font-mono text-[#261d12]">100% PURE DESI GHEE GLOW & TAWA HEAT ON</span>
            </div>
            <button
              onClick={onToggle}
              className="ml-2 text-[10px] underline font-mono text-[#0b0908] hover:opacity-75"
            >
              DISABLE
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
