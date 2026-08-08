import React, { useState, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectData } from '../types';
import { ChevronLeft, ChevronRight, Layers, Hand, MoveHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectGridProps {
  projects: ProjectData[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [mobileProjectIndex, setMobileProjectIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  // Touch Swipe State
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Extract unique categories
  const categories: string[] = ['All', ...Array.from(new Set<string>(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const safeMobileIndex = Math.min(mobileProjectIndex, filteredProjects.length - 1);
  const activeMobileProject = filteredProjects[safeMobileIndex] || filteredProjects[0];

  const handleMobilePrev = () => {
    setDirection(-1);
    setMobileProjectIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const handleMobileNext = () => {
    setDirection(1);
    setMobileProjectIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setMobileProjectIndex(0);
    setDirection(0);
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
      handleMobileNext();
    } else if (isRightSwipe) {
      handleMobilePrev();
    }
  };

  // Framer Motion Drag Handler
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x < -40) {
      handleMobileNext();
    } else if (info.offset.x > 40) {
      handleMobilePrev();
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
    <section id="portfolio" className="py-16 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="PORTFOLIO & LANDMARKS"
          title="Shaping Skylines and Infrastructure"
          subtitle="A track record of mega-scale infrastructure, diplomatic civic landmarks, and luxury residential developments delivered across Dubai and India."
        />

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 mb-8 pb-3 overflow-x-auto scrollbar-none border-b border-[#202532]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-xs transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#c5a880] text-[#0d0f12] font-semibold shadow-md shadow-[#c5a880]/10'
                  : 'bg-[#14171f] text-[#8c92a0] hover:text-[#f3f2ee] border border-[#232835]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- MOBILE SWIPE CAROUSEL (Visible on mobile < md) --- */}
        <div className="block md:hidden">
          {filteredProjects.length > 0 && activeMobileProject && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#8c92a0]">
                <span className="flex items-center gap-1.5 font-semibold text-[#c5a880]">
                  <Layers className="w-3.5 h-3.5" /> Project {safeMobileIndex + 1} of {filteredProjects.length}
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
                    key={activeMobileProject.id}
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
                    <ProjectCard project={activeMobileProject} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Bar */}
              <div className="flex items-center justify-between bg-[#131720] border border-[#232835] rounded-sm p-3 mt-4">
                <button
                  onClick={handleMobilePrev}
                  aria-label="Previous project"
                  className="p-2.5 rounded bg-[#1a1e2a] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0d0f12] transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {filteredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > safeMobileIndex ? 1 : -1);
                        setMobileProjectIndex(idx);
                      }}
                      aria-label={`Go to project ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        safeMobileIndex === idx ? 'w-6 bg-[#c5a880]' : 'w-2 bg-[#2c3344] hover:bg-[#8c92a0]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleMobileNext}
                  aria-label="Next project"
                  className="p-2.5 rounded bg-[#1a1e2a] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0d0f12] transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer active:scale-95"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* --- DESKTOP GRID (Visible on md+ screens) --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

