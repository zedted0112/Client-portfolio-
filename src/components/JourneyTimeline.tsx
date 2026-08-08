import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { JourneyItem } from './JourneyItem';
import { JourneyItemData } from '../types';
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface JourneyTimelineProps {
  items: JourneyItemData[];
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ items }) => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const activeItem = items[activeMobileIndex];

  const handlePrev = () => {
    setActiveMobileIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setActiveMobileIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="journey" className="py-16 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="CAREER EVOLUTION"
          title="Two Decades of Transformation"
          subtitle="From managing live site construction in Mumbai to scaling a top-5 developer in Dubai and establishing a ₹4,500 Cr order book across India."
          align="center"
        />

        {/* --- MOBILE CAROUSEL & YEAR SELECTOR DECK (Visible on mobile/tablet < lg) --- */}
        <div className="block lg:hidden mt-8">
          
          {/* Year Pills Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none px-1">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveMobileIndex(idx)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-full shrink-0 transition-all flex items-center gap-1.5 ${
                  activeMobileIndex === idx
                    ? 'bg-[#c5a880] text-[#0d0f12] font-bold shadow-lg shadow-[#c5a880]/20 scale-105'
                    : 'bg-[#141822] text-[#8c92a0] border border-[#232938] hover:text-[#e8e6e1]'
                }`}
              >
                <Calendar className="w-3 h-3" />
                <span>{item.year}</span>
              </button>
            ))}
          </div>

          {/* Active Career Phase Card with Motion */}
          <div className="relative bg-[#141822] border border-[#2a3040] rounded-lg p-6 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a880]/5 rounded-full blur-2xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#232835] pb-3">
                  <span className="text-xs font-mono text-[#c5a880] bg-[#c5a880]/10 border border-[#c5a880]/20 px-2.5 py-1 rounded-sm font-semibold">
                    PHASE {activeMobileIndex + 1} OF {items.length} • {activeItem.year}
                  </span>
                  <span className="text-[11px] font-mono text-[#6b7280]">
                    {activeItem.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif-title font-bold text-[#f3f2ee] mb-1">
                    {activeItem.role}
                  </h3>
                  <p className="text-sm font-mono text-[#c5a880]">
                    {activeItem.company}
                  </p>
                </div>

                <p className="text-xs text-[#a2a8b8] font-sans-body leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-[#1e2330]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#c5a880] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Strategic Milestones
                  </span>
                  <ul className="space-y-1.5">
                    {activeItem.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#d1d5db] font-sans-body flex items-start gap-2">
                        <span className="text-[#c5a880] text-sm leading-none mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#232835]">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-[#1c2230] text-[#c5a880] border border-[#2d364a] hover:bg-[#c5a880] hover:text-[#0a0c0f] transition-all flex items-center gap-1.5 text-xs font-mono"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMobileIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeMobileIndex === idx ? 'w-6 bg-[#c5a880]' : 'w-1.5 bg-[#2a3040]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-[#1c2230] text-[#c5a880] border border-[#2d364a] hover:bg-[#c5a880] hover:text-[#0a0c0f] transition-all flex items-center gap-1.5 text-xs font-mono"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* --- DESKTOP FULL TIMELINE GRID (Visible on lg screens) --- */}
        <div className="hidden lg:block relative mt-16">
          
          {/* Vertical Center Line for Desktop Timeline */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#c5a880]/20 via-[#c5a880]/50 to-[#c5a880]/20" />

          {/* Timeline Items */}
          <div className="space-y-0">
            {items.map((item, index) => (
              <JourneyItem
                key={item.id}
                item={item}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

