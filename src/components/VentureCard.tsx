import React from 'react';
import { VentureData } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ArrowUpRight, Building2, Target, Eye, Globe } from 'lucide-react';
import { Button } from './Button';

interface VentureCardProps {
  venture: VentureData;
}

export const VentureCard: React.FC<VentureCardProps> = ({ venture }) => {
  return (
    <div className="bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#c5a880]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group">
      
      <div>
        {/* Top Image Banner */}
        <div className="relative">
          <ImagePlaceholder
            src={venture.image}
            alt={venture.company}
            title={venture.company}
            category={venture.role}
            iconType="building"
            aspectRatio="aspect-[16/9]"
          />
          
          <div className="absolute top-4 left-4 bg-[#0d0f12]/80 backdrop-blur-md px-3 py-1 rounded-xs border border-[#c5a880]/30 text-xs font-mono text-[#c5a880]">
            {venture.role}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors mb-2">
              {venture.company}
            </h3>
            <p className="text-xs font-mono text-[#8c92a0] uppercase tracking-wider">
              {venture.role}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {venture.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-[#a2a8b8] px-2.5 py-1 bg-[#1a1e27] border border-[#272d3c] rounded-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Focus Block */}
          <div className="space-y-2 pt-2 border-t border-[#202532]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c5a880]">
              <Target className="w-4 h-4 text-[#c5a880]" />
              <span>Core Strategic Focus</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a2a8b8] font-sans-body font-light leading-relaxed">
              {venture.focus}
            </p>
          </div>

          {/* Vision Block */}
          <div className="space-y-2 pt-2 border-t border-[#202532]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c5a880]">
              <Eye className="w-4 h-4 text-[#c5a880]" />
              <span>Corporate Vision</span>
            </div>
            <p className="text-xs sm:text-sm text-[#e8e6e1] font-serif-title italic leading-relaxed">
              "{venture.vision}"
            </p>
          </div>

        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-6 pt-0 border-t border-transparent">
        <Button
          href={venture.websiteUrl}
          variant="outline"
          size="md"
          className="w-full justify-between group-hover:bg-[#c5a880] group-hover:text-[#0d0f12] group-hover:border-[#c5a880]"
          showIcon
        >
          <span>Visit {venture.company} Website</span>
        </Button>
      </div>

    </div>
  );
};
