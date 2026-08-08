import React from 'react';
import { AwardData } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Award, Calendar, Building2 } from 'lucide-react';

interface AwardCardProps {
  award: AwardData;
}

export const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  return (
    <div className="bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#c5a880]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group">
      <div>
        <ImagePlaceholder
          src={award.image}
          alt={award.title}
          title={award.title}
          category={award.organization}
          iconType="award"
          aspectRatio="aspect-[16/10]"
        />

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#c5a880] uppercase tracking-wider">
              {award.organization}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 bg-[#1e232e] text-[#8c92a0] border border-[#2c3344] rounded-xs">
              {award.year}
            </span>
          </div>

          <h3 className="text-xl font-serif-title font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors leading-snug">
            {award.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#a2a8b8] font-sans-body font-light leading-relaxed">
            {award.description}
          </p>
        </div>
      </div>

      <div className="px-6 py-3 bg-[#101218] border-t border-[#202532] flex items-center justify-between text-[11px] font-mono text-[#8c92a0]">
        <div className="flex items-center gap-1.5 text-[#c5a880]">
          <Award className="w-3.5 h-3.5" />
          <span>Industry Recognition</span>
        </div>
      </div>
    </div>
  );
};
