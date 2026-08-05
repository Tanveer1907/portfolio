"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useJournalNavigation } from "@/hooks/useJournalNavigation";
import { ribbonSwayVariants } from "@/lib/animations/journalVariants";

interface BookmarkRibbonProps {
  color?: string;
  className?: string;
}

export const BookmarkRibbon: React.FC<BookmarkRibbonProps> = ({
  color = "#C2410C",
  className,
}) => {
  const { activeChapter } = useJournalNavigation();

  return (
    <motion.div
      key={activeChapter}
      variants={ribbonSwayVariants}
      initial="rest"
      animate="react"
      className={cn(
        "pointer-events-none absolute top-0 z-40 flex flex-col items-center select-none origin-top",
        className
      )}
      style={{ left: "calc(50% - 11px)" }}
      aria-hidden="true"
    >
      {/* Top Anchor Crease Fold — tucked into spine */}
      <div
        className="h-3 w-[22px] shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)]"
        style={{ backgroundColor: color }}
      />

      {/* Main Satin Ribbon Body */}
      <div
        className="relative h-[calc(100%+36px)] w-[22px]"
        style={{
          backgroundColor: color,
          boxShadow:
            "3px 6px 14px rgba(0,0,0,0.4), 1px 1px_4px rgba(0,0,0,0.25)",
        }}
      >
        {/* Satin Fabric Weave & Specular Gradient Shading */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-white/15 to-black/35" />

        {/* Subtle vertical thread lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 3px)",
          }}
        />

        {/* Notched Ribbon Tail */}
        <div
          className="absolute -bottom-3.5 left-0 h-3.5 w-[22px]"
          style={{
            backgroundColor: color,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.35)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-white/15 to-black/35" />
        </div>
      </div>
    </motion.div>
  );
};
