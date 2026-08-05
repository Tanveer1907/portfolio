import React from "react";
import { cn } from "@/utils/cn";

interface MechanicalPencilPropProps {
  className?: string;
}

export const MechanicalPencilProp: React.FC<MechanicalPencilPropProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative h-4 w-72 rotate-[-18deg] select-none [transform-style:preserve-3d]",
        className
      )}
      aria-hidden="true"
    >
      {/* Primary Key-Light Shadow Cast onto Desk & Paper Surface Below */}
      <div className="absolute top-3.5 left-2 h-4 w-[calc(100%-4px)] rounded-full bg-black/60 blur-[4px]" />

      {/* Tight Direct Contact Shadow */}
      <div className="absolute top-2 left-1 h-2 w-full rounded-full bg-black/45 blur-[1.5px]" />

      {/* Shadow section crossing onto the open notebook paper margin */}
      <div
        className="absolute top-1 left-28 h-3 w-36 rounded-full bg-black/35 blur-[2.5px]"
        style={{
          transform: "rotate(3deg) translateY(2px)",
        }}
      />

      {/* Main Mechanical Pencil Assembly */}
      <div className="relative flex h-3.5 w-full items-center">
        {/* Eraser / Lead Cap with metal sheen */}
        <div className="h-3.5 w-4 rounded-l-sm bg-gradient-to-b from-zinc-300 via-white to-zinc-500 border-r border-zinc-700 shadow-xs" />

        {/* Metal Pocket Clip casting shadow onto barrel */}
        <div className="absolute top-[-3px] left-3 z-10 h-1.5 w-12 rounded-t-sm bg-gradient-to-b from-zinc-200 via-white to-zinc-400 shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />

        {/* Hexagonal Matte Dark Metal Barrel with gold foil branding */}
        <div className="h-3.5 w-44 bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-900 border-y border-zinc-950 flex items-center justify-center shadow-inner">
          <span className="font-mono text-[6px] tracking-[0.2em] text-amber-200/80 uppercase select-none opacity-80 font-bold drop-shadow-xs">
            GRAPHITE 0.5MM // TANVEER S.
          </span>
        </div>

        {/* Knurled Metal Grip Zone */}
        <div className="h-3.5 w-16 bg-[repeating-linear-gradient(45deg,#4b4b52,#4b4b52_1px,#18181b_1px,#18181b_3px)] border-r border-zinc-800 shadow-inner" />

        {/* Brass Lead Cone Tip */}
        <div
          className="h-3.5 w-5 bg-gradient-to-b from-amber-200 via-yellow-100 to-amber-400"
          style={{ clipPath: "polygon(0 0, 100% 35%, 100% 65%, 0 100%)" }}
        />

        {/* Fine Lead Sleeve Pipe */}
        <div className="h-[1.5px] w-3 bg-zinc-300 shadow-xs" />

        {/* Exposed Graphite Lead Point */}
        <div className="h-[1px] w-2 bg-zinc-950 shadow-xs" />
      </div>
    </div>
  );
};
