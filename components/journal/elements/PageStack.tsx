import React from "react";
import { cn } from "@/utils/cn";
import { ChapterId } from "@/types/chapter.types";

interface PageStackProps {
  paperColor?: string;
  activeChapter?: ChapterId;
  className?: string;
}

const CHAPTER_ORDER: ChapterId[] = ["cover", "about", "journey", "projects", "skills", "contact"];

export const PageStack: React.FC<PageStackProps> = ({
  paperColor = "#F7F4EC",
  activeChapter = "cover",
  className,
}) => {
  const currentIndex = CHAPTER_ORDER.indexOf(activeChapter);
  const totalChapters = CHAPTER_ORDER.length - 1;
  const progressRatio = Math.max(0, Math.min(1, currentIndex / totalChapters));

  // Right stack thickness shrinks as chapters progress, left stack thickens
  const rightOffset = Math.max(2, Math.round(10 * (1 - progressRatio)));
  const leftOffset = Math.max(2, Math.round(10 * progressRatio));

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 select-none", className)}
      aria-hidden="true"
    >
      {/* Deepest Page Stack Foundation (Layer 4) */}
      <div
        className="absolute inset-0 rounded-r-[9px] rounded-l-[4px] border border-[#cfc7b5]/60 shadow-[2px_4px_8px_rgba(0,0,0,0.25)]"
        style={{
          backgroundColor: "#e5dec8",
          transform: `translate(${rightOffset}px, ${rightOffset}px)`,
        }}
      />

      {/* Layer 3 */}
      <div
        className="absolute inset-0 rounded-r-[9px] rounded-l-[4px] border border-[#d5cebc]/70"
        style={{
          backgroundColor: "#e9e2cc",
          transform: `translate(${rightOffset * 0.75}px, ${rightOffset * 0.75}px)`,
        }}
      />

      {/* Layer 2 */}
      <div
        className="absolute inset-0 rounded-r-[9px] rounded-l-[4px] border border-[#ded7c4]/75 shadow-[1px_3px_6px_rgba(0,0,0,0.18)]"
        style={{
          backgroundColor: "#ede6d0",
          transform: `translate(${rightOffset * 0.5}px, ${rightOffset * 0.5}px)`,
        }}
      />

      {/* Layer 1 (Directly underneath top active spread) */}
      <div
        className="absolute inset-0 rounded-r-[9px] rounded-l-[4px] border border-[#f0e9d6]"
        style={{
          backgroundColor: paperColor,
          transform: `translate(${rightOffset * 0.25}px, ${rightOffset * 0.25}px)`,
        }}
      />

      {/* Right Edge Stack Striping with subtle shadow bevels */}
      <div
        className="absolute top-[2px] right-0 bottom-[2px] rounded-r-[8px] page-edge-right opacity-90 shadow-[inset_-2px_0_4px_rgba(0,0,0,0.12),1px_0_2px_rgba(0,0,0,0.15)]"
        style={{ width: `${Math.max(4, rightOffset)}px` }}
      />

      {/* Bottom Edge Stack Striping */}
      <div
        className="absolute right-[2px] bottom-0 left-[12px] rounded-b-[8px] page-edge-bottom opacity-90 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.15)]"
        style={{ height: `${Math.max(4, rightOffset)}px` }}
      />

      {/* Left Edge Stack Thickness (accumulates as pages turn to the left) */}
      <div
        className="absolute top-[2px] left-0 bottom-[2px] rounded-l-[8px] bg-gradient-to-r from-[#d9d2c2] to-[#ece5d4] opacity-80 shadow-[inset_2px_0_4px_rgba(0,0,0,0.1)]"
        style={{ width: `${Math.max(2, leftOffset)}px` }}
      />
    </div>
  );
};

