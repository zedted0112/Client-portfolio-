import React from 'react';
import { SectionHeading } from './SectionHeading';
import { VentureCard } from './VentureCard';
import { VentureData } from '../types';

interface VenturesSectionProps {
  ventures: VentureData[];
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({ ventures }) => {
  return (
    <section id="ventures" className="py-20 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="ACTIVE ENTERPRISES"
          title="What I'm Building Now"
          subtitle="Directing strategic expansion across urban redevelopment, commercial IT parks, and luxury co-living ecosystems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {ventures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
        </div>

      </div>
    </section>
  );
};
