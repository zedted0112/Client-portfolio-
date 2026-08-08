import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectData } from '../types';

interface ProjectGridProps {
  projects: ProjectData[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="PORTFOLIO & LANDMARKS"
          title="Shaping Skylines and Infrastructure"
          subtitle="A track record of mega-scale infrastructure, diplomatic civic landmarks, and luxury residential developments delivered across Dubai and India."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#202532]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-xs transition-all ${
                selectedCategory === cat
                  ? 'bg-[#c5a880] text-[#0d0f12] font-semibold shadow-md shadow-[#c5a880]/10'
                  : 'bg-[#14171f] text-[#8c92a0] hover:text-[#f3f2ee] border border-[#232835]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
