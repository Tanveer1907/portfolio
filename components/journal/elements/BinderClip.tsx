"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useJournalNavigation } from "@/hooks/useJournalNavigation";
import { clipRecoilVariants } from "@/lib/animations/journalVariants";

interface BinderClipProps {
  className?: string;
}

export const BinderClip: React.FC<BinderClipProps> = ({ className }) => {
  const { activeChapter } = useJournalNavigation();

  return (
    <motion.div
      key={activeChapter}
      variants={clipRecoilVariants}
      initial="rest"
      animate="react"
      className={cn(
        "pointer-events-none relative z-50 flex flex-col items-center select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Paper Indentation Shadow Line (Shows clip physically clamping paper) */}
      <div className="absolute top-[34px] w-12 h-2 rounded-full clip-indent-shadow z-0" />

      {/* Silver Metal Handles / Wire Arms with metallic reflection & specular highlight */}
      <div className="relative h-6 w-9 rounded-t-md border-[2.5px] border-zinc-300 border-b-0 bg-transparent shadow-[0_3px_6px_rgba(0,0,0,0.45)]">
        {/* Specular sheen on top wire bend */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
      </div>

      {/* Main Matte Black Triangular Clamp Body with bevel edges */}
      <div
        className="relative z-10 h-7 w-11 rounded-[2px] bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border-t border-zinc-500/60"
        style={{
          boxShadow:
            "0 6px 14px rgba(0,0,0,0.65), 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        {/* Inner pivot bar detail */}
        <div className="mx-auto mt-1 h-1.5 w-[34px] rounded-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-900 border border-zinc-950/80 shadow-inner" />

        {/* Clamp lower jaw lip pressing onto paper */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 border-t border-zinc-950" />
      </div>

      {/* Cast Shadow of the clip extending bottom-right onto paper */}
      <div
        className="absolute top-4 left-2 w-12 h-8 rounded-md bg-black/40 blur-[4px] pointer-events-none -z-10"
        style={{
          transform: "rotate(4deg) translate(4px, 6px)",
        }}
      />
    </motion.div>
  );
};
