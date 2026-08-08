import React from 'react';
import { PhilosophyItem } from '../types';
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Briefcase,
  Users,
  CheckCircle2,
  HardHat,
  Leaf,
  Sparkles
} from 'lucide-react';

interface PhilosophyCardProps {
  item: PhilosophyItem;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ item }) => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#c5a880]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#c5a880]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#c5a880]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#c5a880]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#c5a880]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#c5a880]" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-[#c5a880]" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-[#c5a880]" />;
      default: return <Sparkles className="w-6 h-6 text-[#c5a880]" />;
    }
  };

  return (
    <div className="bg-[#14171f] p-6 sm:p-8 rounded-sm border border-[#232835] hover:border-[#c5a880]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-[#1c212c] rounded-sm border border-[#c5a880]/30 group-hover:border-[#c5a880] transition-colors">
            {getIcon(item.iconName)}
          </div>
          <span className="text-2xl font-serif-title font-bold text-[#c5a880]/40 font-mono">
            0{item.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif-title font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#a2a8b8] font-sans-body font-light leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#202532] flex items-center gap-1.5 text-[10px] font-mono text-[#8c92a0] uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
        <span>Leadership Pillar 0{item.number}</span>
      </div>
    </div>
  );
};
