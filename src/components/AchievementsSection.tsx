import React from 'react';
import { SectionHeading } from './SectionHeading';
import { AwardCard } from './AwardCard';
import { AwardData } from '../types';

interface AchievementsSectionProps {
  awards: AwardData[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ awards }) => {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="RECOGNITION & HONORS"
          title="Milestones of Excellence"
          subtitle="Honors conferred by leading international publications, government organizations, and industry bodies for execution leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>

      </div>
    </section>
  );
};
