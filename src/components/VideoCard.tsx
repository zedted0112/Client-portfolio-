import React, { useState } from 'react';
import { VideoItemData } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Play, Youtube, Clock, X } from 'lucide-react';

interface VideoCardProps {
  video: VideoItemData;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube ID if valid URL
  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : null;
  };

  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);

  return (
    <div className="bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#ff0000]/50 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-between group h-full">
      <div>
        {/* Video Player or Thumbnail */}
        <div className="relative">
          {isPlaying && embedUrl ? (
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={embedUrl}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-2 right-2 p-1.5 bg-black/80 text-white rounded-full hover:bg-red-600 transition-colors z-10"
                aria-label="Close video"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div
              className="relative cursor-pointer group/thumb"
              onClick={() => {
                if (embedUrl) {
                  setIsPlaying(true);
                }
              }}
            >
              <ImagePlaceholder
                src={video.thumbnail}
                alt={video.title}
                title={video.title}
                category="YouTube Video"
                iconType="video"
                aspectRatio="aspect-video"
              />

              {/* Central Play Overlay Button */}
              <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/thumb:scale-110">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
              </div>

              {/* Duration Badge */}
              {video.duration && (
                <div className="absolute bottom-2.5 right-2.5 bg-[#0d0f12]/90 px-2 py-0.5 rounded-xs text-[10px] font-mono text-[#f3f2ee] flex items-center gap-1 border border-[#2c3344]">
                  <Clock className="w-2.5 h-2.5 text-[#ff0000]" />
                  <span>{video.duration}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#ff0000] font-semibold">
            <Youtube className="w-3.5 h-3.5" />
            <span>Site Visit / Keynote</span>
          </div>

          <h3 className="text-base font-serif-title font-semibold text-[#f3f2ee] group-hover:text-[#ff0000] transition-colors leading-snug line-clamp-2">
            {video.title}
          </h3>

          <p className="text-xs text-[#a2a8b8] font-sans-body font-light leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>

      <div className="px-4 py-2.5 bg-[#101218] border-t border-[#202532] flex items-center justify-between text-[11px] font-mono text-[#8c92a0]">
        <span>Ground Realities</span>
        <span className="text-[#ff0000] font-medium">{embedUrl ? "Watch Video" : "Preview"}</span>
      </div>
    </div>
  );
};

