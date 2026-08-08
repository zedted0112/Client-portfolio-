import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ImagePlaceholder } from './ImagePlaceholder';
import { AboutData } from '../types';
import { GraduationCap, Award, HeartHandshake, Activity, Trophy, Sun, Heart, Quote } from 'lucide-react';

interface AboutSectionProps {
  about: AboutData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0d0f12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.sectionHeading}
          subtitle="A executive profile rooted in engineering rigor, strategic capital allocation, and a passion for creating enduring urban assets."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image & Academic Qualifications */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative">
              <div className="bg-[#14171f] p-3 rounded-sm border border-[#2a303f] shadow-2xl">
                <ImagePlaceholder
                  src={about.image}
                  alt="Nitesh M. Gangaramani - Biography Portrait"
                  title="Nitesh M. Gangaramani"
                  category="Managing Director"
                  iconType="user"
                  aspectRatio="aspect-[4/5]"
                  className="rounded-xs"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#1a1e28] border border-[#c5a880]/40 p-4 rounded-sm shadow-xl max-w-[240px]">
                <p className="text-xs font-serif-title italic text-[#c5a880]">
                  "Execution is taking absolute ownership of entrusted projects."
                </p>
              </div>
            </div>

            {/* Qualifications Card */}
            <div className="bg-[#14171f] p-6 rounded-sm border border-[#232835] shadow-lg">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#232835]">
                <GraduationCap className="w-5 h-5 text-[#c5a880]" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#f3f2ee] font-semibold">
                  Academic Credentials
                </h3>
              </div>
              <div className="space-y-4">
                {about.qualifications.map((qual, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans-body font-semibold text-[#f3f2ee]">
                        {qual.degree}
                      </span>
                      {qual.badge && (
                        <span className="text-[10px] font-mono text-[#c5a880] px-2 py-0.5 bg-[#c5a880]/10 border border-[#c5a880]/20 rounded-xs">
                          {qual.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#8c92a0]">
                      {qual.institution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Personal Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Quote banner */}
            <div className="bg-gradient-to-r from-[#171b24] to-[#13161d] p-6 rounded-sm border-l-4 border-[#c5a880] shadow-md relative">
              <Quote className="w-8 h-8 text-[#c5a880]/20 absolute top-4 right-4 pointer-events-none" />
              <p className="text-base sm:text-lg font-serif-title italic text-[#e8e6e1] leading-relaxed">
                "{about.quote}"
              </p>
            </div>

            {/* Main Biography Text */}
            <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#a2a8b8] font-sans-body font-light leading-relaxed space-y-5">
              {about.bioParagraphs.map((para, idx) => (
                <p key={idx} className="first-letter:text-2xl first-letter:font-serif-title first-letter:text-[#c5a880] first-letter:font-bold">
                  {para}
                </p>
              ))}
            </div>

            {/* Work-Life Balance & Personal Lifestyle Section */}
            <div className="pt-6 border-t border-[#232835]">
              <h3 className="text-lg font-serif-title text-[#f3f2ee] mb-3">
                Beyond the Boardroom & Construction Sites
              </h3>
              <div className="space-y-3 text-sm text-[#a2a8b8] font-sans-body font-light leading-relaxed mb-6">
                {about.lifestyleParagraph.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Personal Highlight Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {about.personalHighlights.map((item, idx) => (
                  <div key={idx} className="bg-[#14171f] p-3.5 rounded-sm border border-[#232835] flex flex-col gap-1.5 hover:border-[#c5a880]/40 transition-colors">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#c5a880]">
                      {item.title}
                    </span>
                    <span className="text-xs font-sans-body text-[#e8e6e1] font-medium leading-tight">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
