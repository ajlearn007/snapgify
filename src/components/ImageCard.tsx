
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  src: string;
  alt?: string;
  title?: string;
  onClick?: () => void;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
  isLoading?: boolean;
}

const ImageCard = ({
  src,
  alt = 'Image',
  title,
  onClick,
  className,
  aspectRatio = 'square',
  isLoading = false,
}: ImageCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-[9/16]',
    wide: 'aspect-[16/9]',
  };

  return (
    <div 
      className={cn(
        "overflow-hidden rounded-xl border bg-white/20 backdrop-blur-sm shadow-sm transition-all duration-200 ease-in-out hover:shadow-md",
        onClick && "cursor-pointer hover:scale-[1.02]",
        className
      )}
      onClick={onClick}
    >
      <div className={cn("relative overflow-hidden", aspectRatioClasses[aspectRatio])}>
        {/* Placeholder/skeleton while loading */}
        {(!isImageLoaded || isLoading) && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
        )}
        
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsImageLoaded(true)}
          className={cn(
            "object-cover w-full h-full transition-opacity duration-500",
            isImageLoaded && !isLoading ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Overlay on hover for clickable cards */}
        {onClick && (
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200"></div>
        )}
      </div>
      
      {title && (
        <div className="p-3">
          <h3 className="font-medium text-sm text-gray-800 truncate">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
