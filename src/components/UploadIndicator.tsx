
import React from 'react';
import { cn } from '@/lib/utils';

interface UploadIndicatorProps {
  progress: number;
  className?: string;
}

const UploadIndicator = ({ progress, className }: UploadIndicatorProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-1 text-xs text-gray-600">
        <span>Uploading...</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default UploadIndicator;
