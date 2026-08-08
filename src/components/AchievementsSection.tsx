import React, { useState, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { AwardCard } from './AwardCard';
import { AwardData } from '../types';
import { ChevronLeft, ChevronRight, Trophy, Hand, MoveHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AchievementsSectionProps {
  awards: AwardData[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ awards }) => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  // Touch Swipe State
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeAward = awards[mobileIndex];

  const handlePrev = () => {
    setDirection(-1);
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : awards.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setMobileIndex((prev) => (prev < awards.length - 1 ? prev + 1 : 0));
  };

  // Hand Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Framer Motion Drag Handler
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
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
              <span className="flex items-center gap-1.5 font-semibold">
                <Trophy className="w-3.5 h-3.5" /> Award {mobileIndex + 1} of {awards.length}
              </span>

              {/* Hand Touch Swipe Hint Indicator */}
              <div className="flex items-center gap-1 text-[11px] text-[#c5a880] bg-[#c5a880]/10 border border-[#c5a880]/30 px-2.5 py-0.5 rounded-full animate-pulse">
                <Hand className="w-3 h-3 text-[#c5a880]" />
                <span>Swipe left / right</span>
                <MoveHorizontal className="w-3 h-3 text-[#c5a880]" />
              </div>
            </div>

            {/* Touch & Drag Swipeable Card Wrapper */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="touch-pan-y cursor-grab active:cursor-grabbing select-none relative"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeAward.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  className="w-full"
                >
                  <AwardCard award={activeAward} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#232835]">
              <button
                onClick={handlePrev}
                aria-label="Previous award"
                className="p-2.5 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] hover:border-[#c5a880] text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-transform"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {awards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > mobileIndex ? 1 : -1);
                      setMobileIndex(idx);
                    }}
                    aria-label={`Go to award ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      mobileIndex === idx ? 'w-6 bg-[#c5a880]' : 'w-2 bg-[#2c3344] hover:bg-[#8c92a0]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next award"
                className="p-2.5 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] hover:border-[#c5a880] text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-transform"
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

