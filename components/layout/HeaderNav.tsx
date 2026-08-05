import React from "react";
import { cn } from "@/utils/cn";

interface HeaderNavProps {
  className?: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  return (
    <header
      className={cn(
        "flex items-center justify-between text-zinc-400 select-none",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        <span className="font-mono text-xs tracking-widest text-zinc-300 uppercase font-bold">
          THE BUILD LOG
        </span>
        <span className="text-zinc-600">/</span>
        <span className="font-script text-sm text-zinc-400">
          An Engineer&apos;s Journal
        </span>
      </div>
    </header>
  );
};
