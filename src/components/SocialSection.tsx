import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SocialCard } from './SocialCard';
import { VideoCard } from './VideoCard';
import { SocialPostData, VideoItemData } from '../types';

interface SocialSectionProps {
  posts: SocialPostData[];
  videos: VideoItemData[];
}

export const SocialSection: React.FC<SocialSectionProps> = ({ posts, videos }) => {
  return (
    <section id="insights" className="py-20 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="THOUGHT LEADERSHIP & FIELD VISITS"
          title="Perspectives & Ground Realities"
          subtitle="Regular insights on urban planning, real estate investment trends, construction technology, and behind-the-scenes site walkthroughs."
        />

        {/* Subsection 1: Latest Insights (LinkedIn) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8 pb-3 border-b border-[#202532]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0077b5]" />
            <h3 className="text-xl font-serif-title font-semibold text-[#f3f2ee]">
              Latest Strategic Insights (LinkedIn Articles)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <SocialCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Subsection 2: On The Ground (YouTube) */}
        <div>
          <div className="flex items-center gap-2 mb-8 pb-3 border-b border-[#202532]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff0000]" />
            <h3 className="text-xl font-serif-title font-semibold text-[#f3f2ee]">
              On The Ground (Site Visits & Keynotes)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
