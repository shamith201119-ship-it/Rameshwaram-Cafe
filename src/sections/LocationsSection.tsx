import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Star, Navigation, Compass } from 'lucide-react';
import { CursorMode, LocationItem } from '../types';
import { LOCATIONS_DATA } from '../data/restaurantData';

interface LocationsSectionProps {
  onCursorChange: (mode: CursorMode) => void;
  isGheeMode: boolean;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  onCursorChange,
  isGheeMode,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationItem>(LOCATIONS_DATA[0]);

  return (
    <section id="locations" className="relative min-h-screen w-full bg-[#080706] text-[#f4efe8] py-24 px-4 sm:px-8 md:px-16 flex flex-col justify-center overflow-hidden select-none bg-noise">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#382b20] bg-[#14100c] text-xs font-mono tracking-widest text-[#d4973b] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>GLOBAL OUTLETS • VERIFIED DIRECTORY</span>
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f4efe8] mb-3">
            FIND YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4973b] via-[#f1ca63] to-[#e5a83b]">
              RAMESHWARAM
            </span>
          </h2>
          <p className="font-editorial text-lg text-[#c4b5a3] italic">
            Experience authentic South Indian breakfast culture at our iconic destinations across Bengaluru, Hyderabad, and Dubai.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Outlet Selection Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {LOCATIONS_DATA.map((loc) => {
              const isSelected = loc.id === selectedLocation.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  onMouseEnter={() => onCursorChange('DISCOVER')}
                  onMouseLeave={() => onCursorChange('DEFAULT')}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 relative overflow-hidden ${
                    isSelected
                      ? 'border-[#d4973b] bg-[#16120e] text-[#f4efe8] shadow-2xl shadow-[#d4973b]/10'
                      : 'border-[#2a2017] bg-[#100d0a]/60 text-[#a89b8d] hover:border-[#382b20] hover:bg-[#14100c]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-serif-title font-bold text-base text-[#f4efe8] uppercase">
                        {loc.name}
                      </span>
                      {loc.isMainOutlet && (
                        <span className="px-2 py-0.5 rounded bg-[#d4973b] text-[#0b0908] text-[9px] font-bold uppercase">
                          FLAGSHIP
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-[#a89b8d] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#d4973b]" />
                      {loc.city} • {loc.area}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#d4973b]">
                    <Star className="w-3.5 h-3.5 fill-[#d4973b]" />
                    <span>{loc.rating}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Location Detail & Map Card */}
          <div className="lg:col-span-7 border border-[#382b20] bg-[#14100c] rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-[#382b20]">
              <img
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-transparent to-black/30" />

              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#090807]/90 text-xs font-mono text-[#d4973b] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>OPEN DAILY: {selectedLocation.timing}</span>
              </div>
            </div>

            <div>
              <h3 className="font-serif-title text-2xl font-bold uppercase text-[#f4efe8] mb-2">
                {selectedLocation.name}
              </h3>
              <p className="font-sans text-xs text-[#a89b8d] mb-4">
                {selectedLocation.address}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedLocation.features.map((feat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#1e1712] border border-[#382b20] text-xs font-mono text-[#d4973b]"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-[#2d2218] flex items-center justify-between">
                <div className="text-xs font-mono text-[#a89b8d]">
                  <span>PHONE: </span>
                  <span className="text-[#f4efe8] font-bold">{selectedLocation.phone}</span>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(selectedLocation.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#d4973b] text-[#0b0908] font-serif-title text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#e5a83b] transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
