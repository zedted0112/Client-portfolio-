import React from 'react';
import { MediaArticleData } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Newspaper, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface MediaCardProps {
  article: MediaArticleData;
}

export const MediaCard: React.FC<MediaCardProps> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#c5a880]/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#c5a880]/10 overflow-hidden flex flex-col justify-between group h-full"
    >
      <div>
        <ImagePlaceholder
          src={article.image}
          alt={article.title}
          title={article.title}
          category={article.publication}
          iconType="news"
          aspectRatio="aspect-[16/9]"
          className="transition-transform duration-700 group-hover:scale-105"
        />

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#c5a880] uppercase tracking-wider font-semibold">
              {article.publication}
            </span>
            <span className="text-xs font-mono text-[#8c92a0]">
              {article.date}
            </span>
          </div>

          <h3 className="text-xl font-serif-title font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#a2a8b8] font-sans-body font-light leading-relaxed">
            {article.description}
          </p>
        </div>
      </div>

      <div className="px-6 py-4 bg-[#101218] border-t border-[#202532] flex items-center justify-between text-xs font-mono">
        <span className="text-[#8c92a0]">{article.category || 'Press Coverage'}</span>
        {article.url && article.url !== '#' ? (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#c5a880] hover:underline"
          >
            <span>Read Article</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-[#8c92a0]/60 italic">Featured Media</span>
        )}
      </div>
    </motion.div>
  );
};

