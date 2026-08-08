import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectData } from '../types';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectGridProps {
  projects: ProjectData[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [mobileProjectIndex, setMobileProjectIndex] = useState<number>(0);

  // Extract unique categories
  const categories: string[] = ['All', ...Array.from(new Set<string>(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const safeMobileIndex = Math.min(mobileProjectIndex, filteredProjects.length - 1);
  const activeMobileProject = filteredProjects[safeMobileIndex] || filteredProjects[0];

  const handleMobilePrev = () => {
    setMobileProjectIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const handleMobileNext = () => {
    setMobileProjectIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setMobileProjectIndex(0);
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
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-xs transition-all shrink-0 ${
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
                <span className="flex items-center gap-1 text-[#c5a880]">
                  <Layers className="w-3.5 h-3.5" /> Project {safeMobileIndex + 1} of {filteredProjects.length}
                </span>
                <span>Swipe or tap controls</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMobileProject.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectCard project={activeMobileProject} />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Bar */}
              <div className="flex items-center justify-between bg-[#131720] border border-[#232835] rounded-sm p-3 mt-4">
                <button
                  onClick={handleMobilePrev}
                  className="p-2 rounded-xs bg-[#1a1e2a] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0d0f12] transition-colors flex items-center gap-1 text-xs font-mono"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {filteredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMobileProjectIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        safeMobileIndex === idx ? 'w-5 bg-[#c5a880]' : 'w-1.5 bg-[#2c3344]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleMobileNext}
                  className="p-2 rounded-xs bg-[#1a1e2a] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0d0f12] transition-colors flex items-center gap-1 text-xs font-mono"
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

