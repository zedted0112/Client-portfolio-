import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { SocialCard } from './SocialCard';
import { VideoCard } from './VideoCard';
import { SocialPostData, VideoItemData } from '../types';
import { ChevronLeft, ChevronRight, Share2, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SocialSectionProps {
  posts: SocialPostData[];
  videos: VideoItemData[];
}

export const SocialSection: React.FC<SocialSectionProps> = ({ posts, videos }) => {
  const [activePostIndex, setActivePostIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const activePost = posts[activePostIndex];
  const activeVideo = videos[activeVideoIndex];

  return (
    <section id="insights" className="py-16 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="THOUGHT LEADERSHIP & FIELD VISITS"
          title="Perspectives & Ground Realities"
          subtitle="Regular insights on urban planning, real estate investment trends, construction technology, and behind-the-scenes site walkthroughs."
        />

        {/* Subsection 1: Latest Insights (LinkedIn) */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between pb-3 border-b border-[#202532] mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0077b5]" />
              <h3 className="text-lg sm:text-xl font-serif-title font-semibold text-[#f3f2ee]">
                Strategic Insights (LinkedIn)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8c92a0] md:hidden">
              {activePostIndex + 1} / {posts.length}
            </span>
          </div>

          {/* MOBILE CAROUSEL FOR LINKEDIN POSTS */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePost.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <SocialCard post={activePost} />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#232835]">
              <button
                onClick={() => setActivePostIndex((prev) => (prev > 0 ? prev - 1 : posts.length - 1))}
                className="p-2 rounded bg-[#161a24] text-[#0077b5] border border-[#232835] text-xs font-mono flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <div className="flex items-center gap-1">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePostIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      activePostIndex === i ? 'w-5 bg-[#0077b5]' : 'w-1.5 bg-[#2a3040]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActivePostIndex((prev) => (prev < posts.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded bg-[#161a24] text-[#0077b5] border border-[#232835] text-xs font-mono flex items-center gap-1"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <SocialCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Subsection 2: On The Ground (YouTube) */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#202532] mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff0000]" />
              <h3 className="text-lg sm:text-xl font-serif-title font-semibold text-[#f3f2ee]">
                On The Ground (Site Visits & Keynotes)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8c92a0] md:hidden">
              {activeVideoIndex + 1} / {videos.length}
            </span>
          </div>

          {/* MOBILE CAROUSEL FOR VIDEOS */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <VideoCard video={activeVideo} />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#232835]">
              <button
                onClick={() => setActiveVideoIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1))}
                className="p-2 rounded bg-[#161a24] text-[#ff0000] border border-[#232835] text-xs font-mono flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <div className="flex items-center gap-1">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVideoIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeVideoIndex === i ? 'w-5 bg-[#ff0000]' : 'w-1.5 bg-[#2a3040]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveVideoIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded bg-[#161a24] text-[#ff0000] border border-[#232835] text-xs font-mono flex items-center gap-1"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

