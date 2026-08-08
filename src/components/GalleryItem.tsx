import React from 'react';
import { GalleryItemData } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Maximize2, Sparkles } from 'lucide-react';

interface GalleryItemProps {
  item: GalleryItemData;
  onClick: () => void;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#c5a880] transition-all duration-300 overflow-hidden cursor-pointer shadow-lg"
    >
      <ImagePlaceholder
        src={item.src}
        alt={item.caption}
        title={item.caption}
        category={item.category}
        iconType="gallery"
        aspectRatio={item.aspectRatio || "aspect-[4/3]"}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between pointer-events-none">
        
        <div className="flex justify-end">
          <div className="p-2 bg-[#1a1e28] text-[#c5a880] rounded-full border border-[#c5a880]/40 group-hover:scale-110 transition-transform">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a880] mb-1 block">
            {item.category}
          </span>
          <p className="text-sm font-serif-title font-medium text-[#f3f2ee] line-clamp-2 leading-snug">
            {item.caption}
          </p>
        </div>

      </div>
    </div>
  );
};
