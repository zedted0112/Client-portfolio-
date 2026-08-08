import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align];

  return (
    <div className={`flex flex-col ${alignmentClass} max-w-3xl mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[1px] w-6 bg-[#c5a880]" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            {eyebrow}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-normal tracking-tight text-[#f3f2ee] leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[#9fa4b0] font-sans-body font-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
