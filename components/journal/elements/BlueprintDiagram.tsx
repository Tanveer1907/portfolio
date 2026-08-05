import React from "react";
import { cn } from "@/utils/cn";

interface BlueprintDiagramProps {
  title: string;
  scale?: string;
  src?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BlueprintDiagram: React.FC<BlueprintDiagramProps> = ({
  title,
  scale = "SCALE 1:1",
  src,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative w-full aspect-[4/3] bg-[#f8f3e7] border border-[#7e756f]/20 p-4 blueprint-overlay shadow-xs group",
        className
      )}
    >
      <div className="w-full h-full border-2 border-[#181512]/20 p-2 flex flex-col">
        <div className="flex justify-between border-b border-[#181512]/20 pb-1 mb-2">
          <span className="font-meta-technical text-meta-technical text-[#181512]/60 uppercase">
            {title}
          </span>
          <span className="font-meta-technical text-meta-technical text-[#181512]/60">
            {scale}
          </span>
        </div>
        <div className="flex-grow w-full h-full relative overflow-hidden bg-cover bg-center">
          {src ? (
            /* eslint-disable-next-html-link, @next/next/no-img-element */
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
          ) : (
            children
          )}
          {/* Crosshairs Accent */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#181512]" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-[#181512]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintDiagram;
