import React from 'react';
import { SectionHeading } from './SectionHeading';
import { MediaCard } from './MediaCard';
import { MediaArticleData } from '../types';

interface MediaSectionProps {
  articles: MediaArticleData[];
}

export const MediaSection: React.FC<MediaSectionProps> = ({ articles }) => {
  return (
    <section id="media" className="py-20 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="PRESS & MEDIA"
          title="In the Press"
          subtitle="Coverage, features, and thought leadership articles across national business dailies, real estate journals, and news portals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <MediaCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
};
