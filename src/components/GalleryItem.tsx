import React from 'react';
import { GalleryItemData } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface GalleryItemProps {
  item: GalleryItemData;
  onClick: () => void;
  compact?: boolean;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ item, onClick, compact = false }) => {
  if (compact) {
    return (
      <div onClick={onClick} className="w-full cursor-pointer">
        <ImagePlaceholder
          src={item.src}
          alt={item.caption}
          title={item.caption}
          category={item.category}
          iconType="gallery"
          aspectRatio="aspect-square"
          fit="cover"
        />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group relative bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#c5a880] transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#c5a880]/15"
    >
      <ImagePlaceholder
        src={item.src}
        alt={item.caption}
        title={item.caption}
        category={item.category}
        iconType="gallery"
        aspectRatio="aspect-[4/3]"
        fit="contain"
      />
    </div>
  );
};
