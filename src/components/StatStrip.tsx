import React from 'react';
import { StatItem } from '../types';

interface StatStripProps {
  stats: StatItem[];
}

export const StatStrip: React.FC<StatStripProps> = ({ stats }) => {
  return (
    <section className="relative z-20 bg-[#12151b] border-y border-[#232834] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#232834]">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center p-4 transition-transform duration-300 hover:-translate-y-1 ${
                idx > 0 ? 'pt-6 lg:pt-4' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#c5a880] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-sans-body font-semibold text-[#f3f2ee] tracking-wide uppercase mb-1">
                {stat.label}
              </span>
              <p className="text-xs text-[#8c92a0] font-sans-body font-light max-w-[200px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
