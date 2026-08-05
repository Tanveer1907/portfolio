"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { PageStack } from "./elements/PageStack";
import { BookmarkRibbon } from "./elements/BookmarkRibbon";
import { useJournalNavigation } from "@/hooks/useJournalNavigation";
import { useJournalStore } from "@/lib/store/useJournalStore";

export interface JournalProps {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  coverColor?: string;
  paperColor?: string;
  className?: string;
  ribbonColor?: string;
}

export const Journal: React.FC<JournalProps> = ({
  width = "100%",
  height = "100%",
  children,
  coverColor = "#26211C",
  paperColor = "#F7F4EC",
  className,
  ribbonColor = "#C2410C",
}) => {
  const { activeChapter } = useJournalNavigation();
  const isPageTurning = useJournalStore((state) => state.isPageTurning);
  const formattedWidth = typeof width === "number" ? `${width}px` : width;
  const formattedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <motion.article
      role="region"
      aria-label="Engineering Journal"
      animate={
        isPageTurning
          ? {
              y: [0, -3, 2, -1, 0],
              rotate: [-2.2, -2.4, -2.0, -2.25, -2.2],
              scale: [1, 1.002, 0.998, 1],
            }
          : {
              y: [0, -1.5, 0],
              rotate: [-2.2, -2.1, -2.2],
              scale: 1,
            }
      }
      transition={
        isPageTurning
          ? { duration: 0.74, ease: [0.22, 1, 0.36, 1] }
          : { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
      className={cn(
        "relative mx-auto flex flex-col justify-center select-none [transform-style:preserve-3d]",
        className
      )}
      style={{
        width: formattedWidth,
        height: formattedHeight,
      }}
    >
      {/* Outer Hardcover Frame — Rich dark leather cover with pore texture & heavy desk drop shadow */}
      <div
        className="relative h-full w-full rounded-r-[12px] rounded-l-[8px] notebook-desk-shadow leather-cover-texture transition-shadow duration-300"
        style={{
          backgroundColor: coverColor,
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Leather Bevel Shadow on Outer Edges */}
        <div
          className="absolute inset-0 rounded-r-[12px] rounded-l-[8px] pointer-events-none"
          style={{
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.1), inset -2px -2px 6px rgba(0,0,0,0.6)",
          }}
        />

        {/* Hardcover Spine — left edge with deep shadow, double crease and hand-stitched detail */}
        <div className="absolute top-0 bottom-0 left-0 w-10 rounded-l-[8px] bg-gradient-to-r from-black/65 via-black/45 to-transparent">
          {/* Stitched line detail with realistic thread shadows */}
          <div
            className="absolute top-4 bottom-4 left-5 w-[1px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(200,180,140,0.35) 0px, rgba(200,180,140,0.35) 3px, transparent 3px, transparent 8px)",
              filter: "drop-shadow(1px 0 1px rgba(0,0,0,0.7))",
            }}
          />
        </div>

        {/* Spine crease line (Deep indented seam) */}
        <div className="absolute top-0 bottom-0 left-10 w-[2px] bg-black/50 shadow-[1px_0_4px_rgba(0,0,0,0.5),-1px_0_2px_rgba(255,255,255,0.06)]" />

        {/* Outer Cover Right Edge Bevel (Catching warm top-left key light) */}
        <div className="absolute top-0 bottom-0 right-0 w-[1.5px] rounded-r-[12px] bg-gradient-to-b from-amber-100/15 via-white/8 to-black/40" />

        {/* Visible Page Stack Layering — thicker page edges with multi-sheet depth */}
        <div className="absolute top-[6px] right-[6px] bottom-[6px] left-[14px]">
          <PageStack paperColor={paperColor} activeChapter={activeChapter} />

          {/* Primary Top Paper Surface (Graph paper canvas with aged wear & spine curves) */}
          <div
            className="relative h-full w-full rounded-r-[9px] rounded-l-[4px] bg-graph-paper paper-texture paper-worn-edge overflow-hidden"
            style={{
              backgroundColor: paperColor,
              border: "1px solid #dcd4c4",
              boxShadow:
                "0 2px 6px rgba(0,0,0,0.08), inset 0 0 25px rgba(160,135,90,0.08)",
            }}
          >
            {/* Organic Page Discoloration & Aging Vignette */}
            <div
              className="pointer-events-none absolute inset-0 rounded-r-[9px] rounded-l-[4px]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(185,160,115,0.1) 85%, rgba(160,130,85,0.18) 100%)",
              }}
            />

            {/* Left Page Spine Curve Shadow (Pages curve down into center binding seam) */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-1/2 page-spine-curve-left z-25" />

            {/* Right Page Spine Curve Shadow */}
            <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-1/2 page-spine-curve-right z-25" />

            {/* Center Book Spine Crease & Deep Indented Seam */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-30 w-24 -translate-x-1/2 spine-shadow" />
            <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-30 w-[2px] -translate-x-1/2 bg-black/30 shadow-[0_0_12px_rgba(0,0,0,0.4)]" />

            {/* Double spine crease fold shadows */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-[calc(50%-12px)] z-30 w-[8px] bg-gradient-to-r from-transparent to-black/8" />
            <div className="pointer-events-none absolute top-0 bottom-0 left-[calc(50%+4px)] z-30 w-[8px] bg-gradient-to-l from-transparent to-black/8" />

            {/* Idle Curled Bottom-Right Page Corner (Lifted with physical shadow) */}
            <div className="pointer-events-none absolute bottom-0 right-0 z-40 w-8 h-8 group overflow-hidden">
              <div
                className="absolute bottom-0 right-0 w-7 h-7 bg-[#EFE8D8] border-t border-l border-[#D5CDBA] rounded-tl-sm transition-transform duration-300 shadow-[-2px_-2px_5px_rgba(0,0,0,0.15)]"
                style={{
                  clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  transform: "rotate(45deg) translate(28%, 28%)",
                }}
              />
            </div>

            {/* Corner Lift Shadows on Left & Right Page Margins */}
            <div
              className="pointer-events-none absolute bottom-1 left-1 w-20 h-20 z-25 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.08), transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute bottom-1 right-1 w-20 h-20 z-25 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.08), transparent 70%)",
              }}
            />

            {/* Bookmark Ribbon */}
            <BookmarkRibbon color={ribbonColor} />

            {/* Inner Content Surface Slot */}
            <div className="relative z-20 h-full w-full overflow-hidden p-6 sm:p-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Journal;

