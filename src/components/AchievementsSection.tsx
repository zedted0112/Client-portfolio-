import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { AwardCard } from './AwardCard';
import { AwardData } from '../types';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AchievementsSectionProps {
  awards: AwardData[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ awards }) => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const activeAward = awards[mobileIndex];

  const handlePrev = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : awards.length - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev < awards.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="achievements" className="py-16 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="RECOGNITION & HONORS"
          title="Milestones of Excellence"
          subtitle="Honors conferred by leading international publications, government organizations, and industry bodies for execution leadership."
        />

        {/* --- MOBILE CAROUSEL (Visible on < md) --- */}
        <div className="block md:hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#c5a880]">
              <span className="flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5" /> Award {mobileIndex + 1} of {awards.length}
              </span>
              <span className="text-[#6b7280]">Swipe or tap</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeAward.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <AwardCard award={activeAward} />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#232835]">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] text-xs font-mono flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {awards.map((_, idx) => (
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
                className="p-2.5 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] text-xs font-mono flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* --- DESKTOP GRID (Visible on md+ screens) --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>

      </div>
    </section>
  );
};

