import React, { useState, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { PhilosophyCard } from './PhilosophyCard';
import { PhilosophyItem } from '../types';
import { ChevronLeft, ChevronRight, Compass, Hand, MoveHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PhilosophyGridProps {
  philosophy: PhilosophyItem[];
}

export const PhilosophyGrid: React.FC<PhilosophyGridProps> = ({ philosophy }) => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  // Touch Swipe State
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeItem = philosophy[mobileIndex];

  const handlePrev = () => {
    setDirection(-1);
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : philosophy.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setMobileIndex((prev) => (prev < philosophy.length - 1 ? prev + 1 : 0));
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
    <section id="philosophy" className="py-16 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="LEADERSHIP CULTURE"
          title="The 8 Es of Business"
          subtitle="My personal strength and leadership philosophy grow from a distinct culture founded on core values:"
        />

        {/* --- MOBILE & TOUCH CAROUSEL VIEW (< sm screens) --- */}
        <div className="block sm:hidden">
          
          {/* Scrollable Number Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none px-0.5">
            {philosophy.map((item, idx) => (
              <button
                key={item.number}
                onClick={() => {
                  setDirection(idx > mobileIndex ? 1 : -1);
                  setMobileIndex(idx);
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-full shrink-0 transition-all flex items-center gap-1 cursor-pointer ${
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
            {/* Header info & Hand Touch Hint */}
            <div className="flex items-center justify-between text-xs font-mono text-[#c5a880]">
              <span className="flex items-center gap-1.5 font-semibold">
                <Compass className="w-3.5 h-3.5" /> Principle {mobileIndex + 1} of 8
              </span>
              
              {/* Hand Touch Swipe Hint Indicator */}
              <div className="flex items-center gap-1 text-[11px] text-[#c5a880] bg-[#c5a880]/10 border border-[#c5a880]/30 px-2.5 py-0.5 rounded-full animate-pulse">
                <Hand className="w-3 h-3 text-[#c5a880]" />
                <span>Swipe left / right</span>
                <MoveHorizontal className="w-3 h-3 text-[#c5a880]" />
              </div>
            </div>

            {/* Touch Swipeable Card Wrapper */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="touch-pan-y cursor-grab active:cursor-grabbing select-none relative min-h-[320px]"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeItem.number}
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
                  <PhilosophyCard item={activeItem} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls & Progress Dots */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#232835]">
              <button
                onClick={handlePrev}
                aria-label="Previous Principle"
                className="p-2.5 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] hover:border-[#c5a880] text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-transform"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {philosophy.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > mobileIndex ? 1 : -1);
                      setMobileIndex(idx);
                    }}
                    aria-label={`Go to principle ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      mobileIndex === idx ? 'w-6 bg-[#c5a880]' : 'w-2 bg-[#2c3344] hover:bg-[#8c92a0]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next Principle"
                className="p-2.5 rounded bg-[#161a24] text-[#c5a880] border border-[#2d364a] hover:border-[#c5a880] text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-transform"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* --- DESKTOP GRID & TOUCH CAROUSEL OPTION (Visible on sm+ screens) --- */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((item) => (
            <PhilosophyCard key={item.number} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};


