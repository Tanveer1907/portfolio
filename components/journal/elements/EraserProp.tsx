import React from "react";
import { cn } from "@/utils/cn";

interface EraserPropProps {
  className?: string;
}

export const EraserProp: React.FC<EraserPropProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative h-10 w-24 rotate-[12deg] select-none [transform-style:preserve-3d]",
        className
      )}
      aria-hidden="true"
    >
      {/* Key-Light Cast Shadow onto Desk */}
      <div className="absolute top-2 left-2.5 h-10 w-24 rounded-xs bg-black/65 blur-[3.5px] transform rotate-[3deg] translate-x-1 translate-y-2" />

      {/* Direct Contact Shadow */}
      <div className="absolute top-1 left-1 h-9 w-23 rounded-xs bg-black/50 blur-[1px]" />

      {/* Main Staedtler Eraser Body */}
      <div
        className="relative flex h-8 w-22 items-center overflow-hidden rounded-[2px] bg-[#F8F8F6] border border-stone-300/80"
        style={{
          boxShadow:
            "3px 6px 14px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.9), inset -1px -1px 2px rgba(0,0,0,0.12)",
        }}
      >
        {/* Left Exposed White Plastic Eraser Block (Worn Edge) */}
        <div className="h-full w-5 bg-[#FAF9F5] border-r border-stone-300/40 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-400/10 via-transparent to-stone-400/20" />
        </div>

        {/* Classic Blue Cardboard Sleeve */}
        <div className="relative h-full flex-1 bg-[#1A365D] border-x border-[#0F2342] flex flex-col justify-center px-2 py-0.5 shadow-inner">
          {/* Blue sleeve inner subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/15 via-transparent to-black/35" />

          {/* Sleeve Branding */}
          <div className="relative z-10 flex items-center gap-1">
            <span className="font-sans text-[8px] font-bold text-white tracking-tighter">
              5
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-sans text-[7px] font-black text-white tracking-widest uppercase">
                STAEDTLER
              </span>
              <span className="font-sans text-[6px] font-medium text-blue-200 tracking-tight italic">
                Mars plastic
              </span>
            </div>
          </div>
        </div>

        {/* Right Exposed White Plastic Eraser Tip */}
        <div className="h-full w-3 bg-[#FAF9F5] relative">
          <div className="absolute inset-0 bg-gradient-to-l from-stone-400/15 via-transparent to-stone-300/10" />
        </div>
      </div>
    </div>
  );
};

export default EraserProp;
