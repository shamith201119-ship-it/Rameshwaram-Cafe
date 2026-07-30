import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050403] text-[#f4efe8] border-t border-[#2d2218] py-16 px-4 sm:px-8 md:px-16 select-none bg-noise">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Col 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d4973b] text-[#0b0908] font-bold font-serif-title flex items-center justify-center text-xs">
              RC
            </div>
            <span className="font-serif-title font-bold text-base uppercase tracking-widest text-[#f4efe8]">
              THE RAMESHWARAM CAFE
            </span>
          </div>
          <p className="font-editorial text-sm text-[#a89b8d] italic leading-relaxed">
            Authentic South Indian Soul, Served with Fire. 100% Pure Desi Ghee preparation across all outlets.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-serif-title font-bold text-xs tracking-widest uppercase text-[#d4973b] mb-4">
            EXPLORE
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs font-mono text-[#a89b8d]">
            <li><a href="#sizzle" className="hover:text-[#f4efe8] transition-colors">THE SIZZLE</a></li>
            <li><a href="#menu" className="hover:text-[#f4efe8] transition-colors">CULINARY MENU</a></li>
            <li><a href="#coffee" className="hover:text-[#f4efe8] transition-colors">FILTER COFFEE BREW</a></li>
            <li><a href="#story" className="hover:text-[#f4efe8] transition-colors">BRAND STORY</a></li>
            <li><a href="#locations" className="hover:text-[#f4efe8] transition-colors">OUTLET DIRECTORY</a></li>
          </ul>
        </div>

        {/* Col 3: Outlets */}
        <div>
          <h4 className="font-serif-title font-bold text-xs tracking-widest uppercase text-[#d4973b] mb-4">
            LOCATIONS
          </h4>
          <ul className="flex flex-col gap-2 text-xs font-mono text-[#a89b8d]">
            <li>• Indiranagar, Bengaluru</li>
            <li>• JP Nagar, Bengaluru</li>
            <li>• Whitefield, Bengaluru</li>
            <li>• Madhapur, Hyderabad</li>
            <li>• Dubai Mall, UAE</li>
          </ul>
        </div>

        {/* Col 4: Timings & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif-title font-bold text-xs tracking-widest uppercase text-[#d4973b]">
            TIMINGS
          </h4>
          <p className="text-xs font-mono text-[#a89b8d]">
            OPEN DAILY: 6:30 AM - 1:00 AM
          </p>
          <div className="flex items-center gap-3 pt-2 text-[#d4973b]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-[#382b20] hover:border-[#d4973b]">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-[#382b20] hover:border-[#d4973b]">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-[#382b20] hover:border-[#d4973b]">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#1c1611] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#786b5e]">
        <span>© {new Date().getFullYear()} THE RAMESHWARAM CAFE. ALL RIGHTS RESERVED.</span>
        <span>CRAFTED WITH SOUL & FIRE</span>
      </div>
    </footer>
  );
};
