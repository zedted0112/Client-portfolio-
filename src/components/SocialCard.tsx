import React from 'react';
import { SocialPostData } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Linkedin, ArrowUpRight, Share2 } from 'lucide-react';

interface SocialCardProps {
  post: SocialPostData;
}

export const SocialCard: React.FC<SocialCardProps> = ({ post }) => {
  return (
    <div className="bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#c5a880]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group">
      <div>
        <ImagePlaceholder
          src={post.image}
          alt={post.title}
          title={post.title}
          category={post.platform}
          iconType="news"
          aspectRatio="aspect-[16/9]"
        />

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#0077b5]">
              <Linkedin className="w-4 h-4" />
              <span>{post.platform} Insight</span>
            </div>
            {post.date && (
              <span className="text-[11px] font-mono text-[#8c92a0]">
                {post.date}
              </span>
            )}
          </div>

          <h3 className="text-xl font-serif-title font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#a2a8b8] font-sans-body font-light leading-relaxed">
            {post.description}
          </p>

          {post.tags && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono text-[#8c92a0] px-2 py-0.5 bg-[#1a1e27] rounded-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-3 bg-[#101218] border-t border-[#202532] flex items-center justify-between text-xs font-mono">
        <span className="text-[#8c92a0]">LinkedIn Article</span>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#c5a880] hover:underline"
        >
          <span>View Post</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
