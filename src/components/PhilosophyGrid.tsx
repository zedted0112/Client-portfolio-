import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PhilosophyCard } from './PhilosophyCard';
import { PhilosophyItem } from '../types';

interface PhilosophyGridProps {
  philosophy: PhilosophyItem[];
}

export const PhilosophyGrid: React.FC<PhilosophyGridProps> = ({ philosophy }) => {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="LEADERSHIP CULTURE"
          title="The 8 Es of Business"
          subtitle="My personal strength and leadership philosophy grow from a distinct culture founded on core values:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((item) => (
            <PhilosophyCard key={item.number} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};
