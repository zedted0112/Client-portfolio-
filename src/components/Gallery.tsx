import React, { useCallback, useEffect, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { GalleryModal } from './GalleryModal';
import { GalleryItemData } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface GalleryProps {
  gallery: GalleryItemData[];
}

const AUTOPLAY_MS = 3000;

export const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const activeItem = gallery[activeIndex];
  const selectedItem = activeModalIndex !== null ? gallery[activeModalIndex] : null;

  const goTo = useCallback((idx: number) => {
    setDirection(idx > activeIndex ? 1 : idx < activeIndex ? -1 : 0);
    setActiveIndex(idx);
    setProgress(0);
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
    setProgress(0);
  }, [gallery.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
    setProgress(0);
  }, [gallery.length]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x < -30 || info.velocity.x < -300) handleNext();
    else if (info.offset.x > 30 || info.velocity.x > 300) handlePrev();
  };

  useEffect(() => {
    if (!isPlaying || gallery.length <= 1 || activeModalIndex !== null) return;

    setProgress(0);
    let elapsed = 0;
    const tick = 50;

    const interval = window.setInterval(() => {
      elapsed += tick;
      setProgress(Math.min(100, (elapsed / AUTOPLAY_MS) * 100));
      if (elapsed >= AUTOPLAY_MS) handleNext();
    }, tick);

    return () => window.clearInterval(interval);
  }, [isPlaying, activeIndex, gallery.length, handleNext, activeModalIndex]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 100 : -100, opacity: 0, scale: 0.98 }),
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="EXECUTIVE VISUAL ARCHIVE"
          title="Visual Journey"
          subtitle="Moments on active construction sites, award ceremonies, architectural renders, and keynote industry engagements."
        />

        <div className="mt-10 sm:mt-12">
          {/* Controls row */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="text-xs font-mono text-[#c5a880] font-semibold">
              {activeIndex + 1} / {gallery.length}
              <span className="text-[#6b7280] font-normal ml-2 hidden sm:inline">• {activeItem.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="p-2 rounded-sm border border-[#232835] text-[#9fa4b0] hover:text-[#c5a880] hover:border-[#c5a880]/40 transition-colors"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button type="button" onClick={handlePrev} className="p-2 rounded-sm border border-[#232835] text-[#9fa4b0] hover:text-[#c5a880] hover:border-[#c5a880]/40 transition-colors" aria-label="Previous image">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button type="button" onClick={handleNext} className="p-2 rounded-sm border border-[#232835] text-[#9fa4b0] hover:text-[#c5a880] hover:border-[#c5a880]/40 transition-colors" aria-label="Next image">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-0.5 bg-[#232835] rounded-full mb-6 overflow-hidden">
            <motion.div className="h-full bg-[#c5a880]" animate={{ width: `${isPlaying ? progress : 0}%` }} transition={{ duration: 0.05, ease: 'linear' }} />
          </div>

          {/* Main slideshow — fixed frame so slide changes never resize the UI */}
          <div
            className="relative"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="relative aspect-[16/10] w-full bg-[#0e1116] border border-[#232835] rounded-sm shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={activeItem.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0"
                >
                  <div
                    className="relative w-full h-full group cursor-pointer"
                    onClick={() => setActiveModalIndex(activeIndex)}
                  >
                    {activeItem.src ? (
                      <img
                        src={activeItem.src}
                        alt={activeItem.caption}
                        className="absolute inset-0 w-full h-full object-contain object-center bg-[#0e1116]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#0e1116]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/90 via-transparent to-transparent pointer-events-none" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalIndex(activeIndex);
                      }}
                      className="absolute top-4 right-4 p-2.5 bg-[#1a1e28]/90 text-[#c5a880] rounded-full border border-[#c5a880]/40 hover:scale-110 transition-transform z-10"
                      aria-label="Expand image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 pointer-events-none min-h-[7.5rem] flex flex-col justify-end">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a880] mb-2 block font-semibold">
                        {activeItem.category}
                      </span>
                      <p className="text-lg sm:text-xl font-serif-title font-medium text-[#f3f2ee] leading-snug max-w-3xl line-clamp-2">
                        {activeItem.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side arrows desktop */}
            <button
              type="button"
              onClick={handlePrev}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-[#14171f] border border-[#c5a880]/40 text-[#c5a880] shadow-xl hover:bg-[#c5a880] hover:text-[#0d0f12] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-[#14171f] border border-[#c5a880]/40 text-[#c5a880] shadow-xl hover:bg-[#c5a880] hover:text-[#0d0f12] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {gallery.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(idx)}
                className={`relative shrink-0 w-24 sm:w-28 rounded-sm overflow-hidden border-2 transition-all ${
                  activeIndex === idx
                    ? 'border-[#c5a880] shadow-lg shadow-[#c5a880]/20 scale-105'
                    : 'border-[#232835] opacity-70 hover:opacity-100 hover:border-[#c5a880]/40'
                }`}
                aria-label={`View ${item.caption}`}
                aria-current={activeIndex === idx ? 'true' : undefined}
              >
                <ImagePlaceholder
                  src={item.src}
                  alt={item.caption}
                  title={item.caption}
                  category={item.category}
                  iconType="gallery"
                  aspectRatio="aspect-square"
                  fit="cover"
                />
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {gallery.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === idx ? 'w-8 bg-[#c5a880]' : 'w-2 bg-[#2a3040] hover:bg-[#8c92a0]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <GalleryModal
        item={selectedItem}
        onClose={() => setActiveModalIndex(null)}
        onNext={() => {
          if (activeModalIndex !== null) {
            const next = (activeModalIndex + 1) % gallery.length;
            setActiveModalIndex(next);
            goTo(next);
          }
        }}
        onPrev={() => {
          if (activeModalIndex !== null) {
            const prev = (activeModalIndex - 1 + gallery.length) % gallery.length;
            setActiveModalIndex(prev);
            goTo(prev);
          }
        }}
      />
    </section>
  );
};
