import React from 'react';
import { SectionHeading } from './SectionHeading';
import { JourneyItem } from './JourneyItem';
import { JourneyItemData } from '../types';

interface JourneyTimelineProps {
  items: JourneyItemData[];
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ items }) => {
  return (
    <section id="journey" className="py-20 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="CAREER EVOLUTION"
          title="Two Decades of Transformation"
          subtitle="From managing live site construction in Mumbai to scaling a top-5 developer in Dubai and establishing a ₹4,500 Cr order book across India."
          align="center"
        />

        <div className="relative mt-12 sm:mt-16">
          
          {/* Vertical Center Line for Desktop Timeline */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#c5a880]/20 via-[#c5a880]/50 to-[#c5a880]/20" />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-0">
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
