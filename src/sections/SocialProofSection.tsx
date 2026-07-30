import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Instagram, Twitter } from 'lucide-react';
import { CursorMode } from '../types';
import { SOCIAL_POSTS } from '../data/restaurantData';

interface SocialProofSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0807] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 flex flex-col justify-center overflow-hidden select-none bg-noise">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#382b20] bg-[#14100c] text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY LOVE & CULT REACTION WALL</span>
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f4efe8] mb-3">
            THE <span className="text-[#d4973b]">RAMESHWARAM</span> FEVER
          </h2>
          <p className="font-editorial text-lg text-[#c4b5a3] italic">
            Over 50,000+ daily foodies, travelers, and South Indian breakfast fanatics sharing their love.
          </p>
        </div>

        {/* Asymmetric Social Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOCIAL_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onMouseEnter={() => onCursorChange('VIEW')}
              onMouseLeave={() => onCursorChange('DEFAULT')}
              className="group relative rounded-3xl border border-[#2d2218] bg-[#14100c] p-6 flex flex-col justify-between hover:border-[#d4973b] transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.user}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-transparent to-black/20" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0b0908]/80 backdrop-blur-md text-[#d4973b] font-mono text-[10px] uppercase">
                  {post.dishTag}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-editorial text-base text-[#f4efe8] italic leading-relaxed">
                  “{post.comment}”
                </p>

                <div className="pt-4 border-t border-[#2d2218] flex items-center justify-between">
                  <div>
                    <span className="block font-serif-title font-bold text-xs text-[#f4efe8]">
                      {post.user}
                    </span>
                    <span className="block text-[10px] font-mono text-[#a89b8d]">
                      {post.handle}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-[#d4973b]">
                    <Heart className="w-3.5 h-3.5 fill-[#d4973b]" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
