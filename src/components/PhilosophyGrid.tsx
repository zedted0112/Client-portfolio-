import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { PhilosophyCard } from './PhilosophyCard';
import { PhilosophyItem } from '../types';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PhilosophyGridProps {
  philosophy: PhilosophyItem[];
}

export const PhilosophyGrid: React.FC<PhilosophyGridProps> = ({ philosophy }) => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const activeItem = philosophy[mobileIndex];

  const handlePrev = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : philosophy.length - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev < philosophy.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="philosophy" className="py-16 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="LEADERSHIP CULTURE"
          title="The 8 Es of Business"
          subtitle="My personal strength and leadership philosophy grow from a distinct culture founded on core values:"
        />

        {/* --- MOBILE VIEW: TAB BAR + CAROUSEL (Visible on < sm) --- */}
        <div className="block sm:hidden">
          
          {/* Number Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none px-0.5">
            {philosophy.map((item, idx) => (
              <button
                key={item.number}
                onClick={() => setMobileIndex(idx)}
                className={`px-3 py-1.5 text-xs font-mono rounded-full shrink-0 transition-all flex items-center gap-1 ${
                  mobileIndex === idx
                    ? 'bg-[#c5a880] text-[#0d0f12] font-bold shadow-md scale-105'
                    : 'bg-[#141822] text-[#8c92a0] border border-[#232938]'
                }`}
              >
                <span>E{idx + 1}: {item.title}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#c5a880]">
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> Principle {mobileIndex + 1} of 8
              </span>
              <span className="text-[#6b7280]">Swipe or tap pill</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <PhilosophyCard item={activeItem} />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#232835]">
              <button
                onClick={handlePrev}
                className="p-2 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] text-xs font-mono flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <div className="flex items-center gap-1">
                {philosophy.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMobileIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      mobileIndex === idx ? 'w-5 bg-[#c5a880]' : 'w-1.5 bg-[#2c3344]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] text-xs font-mono flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* --- DESKTOP GRID (Visible on sm+ screens) --- */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((item) => (
            <PhilosophyCard key={item.number} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

