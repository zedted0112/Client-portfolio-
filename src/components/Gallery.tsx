import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { GalleryItem } from './GalleryItem';
import { GalleryModal } from './GalleryModal';
import { GalleryItemData } from '../types';

interface GalleryProps {
  gallery: GalleryItemData[];
}

export const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const selectedItem = activeModalIndex !== null ? gallery[activeModalIndex] : null;

  const handleNext = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % gallery.length);
    }
  };

  const handlePrev = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="EXECUTIVE VISUAL ARCHIVE"
          title="Visual Journey"
          subtitle="Moments on active construction sites, award ceremonies, architectural renders, and keynote industry engagements."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <GalleryItem
              key={item.id}
              item={item}
              onClick={() => setActiveModalIndex(idx)}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        item={selectedItem}
        onClose={() => setActiveModalIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
