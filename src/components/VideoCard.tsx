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
    <div className="bg-[#14171f] rounded-sm border border-[#232835] hover:border-[#c5a880]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group">
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
                <X className="w-4 h-4" />
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
                <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0d0f12] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/thumb:scale-110">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>

              {/* Duration Badge */}
              {video.duration && (
                <div className="absolute bottom-3 right-3 bg-[#0d0f12]/90 px-2.5 py-1 rounded-xs text-[10px] font-mono text-[#f3f2ee] flex items-center gap-1 border border-[#2c3344]">
                  <Clock className="w-3 h-3 text-[#c5a880]" />
                  <span>{video.duration}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#ff0000]">
            <Youtube className="w-4 h-4" />
            <span>On The Ground Video</span>
          </div>

          <h3 className="text-lg font-serif-title font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors leading-snug">
            {video.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#a2a8b8] font-sans-body font-light leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>

      <div className="px-6 py-3 bg-[#101218] border-t border-[#202532] flex items-center justify-between text-xs font-mono text-[#8c92a0]">
        <span>Ground Realities</span>
        <span className="text-[#c5a880]">{embedUrl ? "Interactive Watch" : "Video Preview"}</span>
      </div>
    </div>
  );
};
