import React from "react";
import { cn } from "@/utils/cn";
import { MaskingTape } from "./MaskingTape";

interface PhotoCardProps {
  src: string;
  alt: string;
  captionLeft?: string;
  captionRight?: string;
  className?: string;
  rotation?: string;
  showTape?: boolean;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  alt,
  captionLeft,
  captionRight,
  className,
  rotation = "rotate-[2deg]",
  showTape = true,
}) => {
  return (
    <div
      className={cn(
        "photo-card relative group cursor-pointer border border-[#e7e2d6]",
        rotation,
        className
      )}
    >
      {showTape && (
        <MaskingTape className="w-12 h-5 absolute -top-3 left-4 rotate-[2deg] z-20" />
      )}
      <div className="w-full aspect-square bg-stone-200 relative overflow-hidden">
        {/* eslint-disable-next-html-link, @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {(captionLeft || captionRight) && (
        <div className="mt-2 font-meta-technical text-[10px] text-[#7e756f] flex justify-between uppercase tracking-wider">
          <span>{captionLeft}</span>
          <span>{captionRight}</span>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
