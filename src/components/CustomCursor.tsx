import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CursorMode } from '../types';

interface CustomCursorProps {
  cursorMode: CursorMode;
  isGheeMode?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorMode, isGheeMode }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorMode !== 'DEFAULT';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer Glow Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-colors duration-300 flex items-center justify-center text-[10px] font-bold tracking-widest uppercase ${
          isGheeMode 
            ? 'border-[#f1ca63] bg-[#f1ca63]/15 text-[#f1ca63] shadow-[0_0_20px_rgba(241,202,99,0.5)]' 
            : 'border-[#d4973b] bg-[#0b0908]/80 text-[#f4efe8] backdrop-blur-md shadow-[0_0_15px_rgba(212,151,59,0.3)]'
        }`}
        animate={{
          x: mousePos.x - (isExpanded ? 40 : 16),
          y: mousePos.y - (isExpanded ? 40 : 16),
          width: isExpanded ? 80 : 32,
          height: isExpanded ? 80 : 32,
          scale: isExpanded ? 1.1 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.3,
        }}
      >
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-2 text-center select-none font-display text-[10px]"
          >
            {cursorMode}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none ${
          isGheeMode ? 'bg-[#f1ca63]' : 'bg-[#d4973b]'
        }`}
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isExpanded ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 600,
        }}
      />
    </div>
  );
};
