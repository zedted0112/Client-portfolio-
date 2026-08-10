import React, { useState } from 'react';
import { Building2, Award, User, Newspaper, Video, Layers, Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  category?: string;
  title?: string;
  iconType?: 'building' | 'award' | 'user' | 'news' | 'video' | 'gallery' | 'default';
  aspectRatio?: string;
  fit?: 'cover' | 'contain';
  objectPosition?: string;
  className?: string;
  onClick?: () => void;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt = "Placeholder image",
  category,
  title,
  iconType = 'default',
  aspectRatio = "aspect-video",
  fit = 'cover',
  objectPosition = 'center',
  className = "",
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  // Choose icon based on type
  const renderIcon = () => {
    switch (iconType) {
      case 'building':
        return <Building2 className="w-8 h-8 text-[#c5a880]/80" />;
      case 'award':
        return <Award className="w-8 h-8 text-[#c5a880]/80" />;
      case 'user':
        return <User className="w-8 h-8 text-[#c5a880]/80" />;
      case 'news':
        return <Newspaper className="w-8 h-8 text-[#c5a880]/80" />;
      case 'video':
        return <Video className="w-8 h-8 text-[#c5a880]/80" />;
      case 'gallery':
        return <ImageIcon className="w-8 h-8 text-[#c5a880]/80" />;
      default:
        return <Layers className="w-8 h-8 text-[#c5a880]/80" />;
    }
  };

  const hasValidSrc = src && src.trim() !== '' && !imageError;

  if (hasValidSrc) {
    const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover';
    const hoverScaleClass = fit === 'contain' ? '' : 'group-hover:scale-105';

    return (
      <div
        className={`relative overflow-hidden ${aspectRatio} ${fit === 'contain' ? 'bg-[#10131a]' : ''} ${className} group`}
        onClick={onClick}
      >
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className={`w-full h-full ${fitClass} transition-transform duration-700 ease-out ${hoverScaleClass}`}
          style={{ objectPosition }}
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#0d0f12]/80 via-transparent to-transparent pointer-events-none ${
            fit === 'contain' ? 'opacity-30' : 'opacity-60'
          }`}
        />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative w-full ${aspectRatio} bg-gradient-to-br from-[#181b22] via-[#12141a] to-[#0e1014] border border-[#262b38] rounded-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none ${className} ${onClick ? 'cursor-pointer hover:border-[#c5a880]/50 transition-colors' : ''}`}
    >
      {/* Architectural Background Line Patterns */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Subtle corner ticks for architectural feel */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#c5a880]/40" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#c5a880]/40" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#c5a880]/40" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#c5a880]/40" />

      {/* Center Icon & Badge */}
      <div className="relative z-10 flex flex-col items-center gap-3 max-w-[85%]">
        <div className="p-3.5 rounded-full bg-[#1e232d]/80 border border-[#c5a880]/30 shadow-inner">
          {renderIcon()}
        </div>

        {category && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-mono px-2.5 py-0.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20">
            {category}
          </span>
        )}

        {title && (
          <p className="text-xs font-serif-title text-[#e8e6e1] line-clamp-2 italic tracking-wide">
            {title}
          </p>
        )}

        <div className="flex items-center gap-1.5 text-[10px] text-[#7a8190] font-mono uppercase tracking-wider pt-1">
          <ImageIcon className="w-3 h-3 text-[#c5a880]/60" />
          <span>Image Placeholder</span>
        </div>
      </div>
    </div>
  );
};
