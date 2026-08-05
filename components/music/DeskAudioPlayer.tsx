import React from "react";
import { cn } from "@/utils/cn";

interface DeskAudioPlayerProps {
  className?: string;
}

export const DeskAudioPlayer: React.FC<DeskAudioPlayerProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "relative z-40 flex items-center gap-3 rounded-md border border-zinc-700/80 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-3 text-zinc-300 shadow-[4px_8px_16px_rgba(0,0,0,0.5)] select-none",
        className
      )}
      aria-label="Desk Ambient Audio Control"
    >
      {/* Tape Reel Indicator Icon */}
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-600 bg-zinc-950 shadow-inner">
        <div className="h-2 w-2 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
      </div>

      {/* Track Label */}
      <div className="flex flex-col">
        <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase">
          AMBIENT LOG AUDIO
        </span>
        <span className="font-script text-xs text-zinc-200">
          Focus Ambient — Offline
        </span>
      </div>

      {/* Static Play Icon Indicator */}
      <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-xs border border-zinc-700 bg-zinc-800 text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-3 w-3"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
};
