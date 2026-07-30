import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#090807] text-[#f4efe8] flex flex-col items-center justify-between p-8 md:p-16 select-none bg-noise"
        >
          {/* Top Tag */}
          <div className="w-full flex justify-between items-center text-xs tracking-widest text-[#a89b8d] uppercase font-sans">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4973b] animate-ping" />
              EST. BENGALURU
            </span>
            <span>100% PURE DESI GHEE</span>
          </div>

          {/* Central Logo & Radial Progress */}
          <div className="flex flex-col items-center text-center max-w-lg mx-auto">
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              {/* Circular SVG Progress Ring */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="text-[#251d16] stroke-current"
                  strokeWidth="3"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="text-[#d4973b] stroke-current"
                  strokeWidth="3"
                  strokeDasharray={276}
                  strokeDashoffset={276 - (276 * progress) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  style={{ transition: 'stroke-dashoffset 0.2s ease-out' }}
                />
              </svg>

              {/* Flame Center Symbol */}
              <motion.div
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center text-[#d4973b]"
              >
                <Flame className="w-10 h-10 stroke-[1.5]" />
              </motion.div>
            </div>

            <h1 className="font-serif-title text-2xl md:text-4xl tracking-[0.2em] font-bold uppercase text-[#f4efe8] mb-3">
              THE RAMESHWARAM CAFE
            </h1>
            <p className="font-editorial text-sm md:text-base text-[#c4b5a3] italic">
              South Indian Soul. Served with Fire.
            </p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="w-full flex flex-col md:flex-row justify-between items-end gap-4 text-xs font-mono text-[#a89b8d]">
            <div className="flex items-center gap-2 text-[#d4973b]">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>IGNITING TAWAS & DESSERT FLAMES...</span>
            </div>
            <div className="text-4xl md:text-6xl font-serif-title font-bold text-[#f4efe8]">
              {progress}<span className="text-sm font-sans text-[#d4973b] ml-1">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
