"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { useJournalNavigation } from "@/hooks/useJournalNavigation";
import { useJournalStore } from "@/lib/store/useJournalStore";
import { ChapterId } from "@/types/chapter.types";

interface DeskChecklistProps {
  className?: string;
}

const CHAPTER_LABELS: Record<ChapterId, { label: string; subtitle: string }> = {
  cover: { label: "Cover", subtitle: "The Build Log" },
  about: { label: "About", subtitle: "The Engineer" },
  journey: { label: "Journey", subtitle: "The Path" },
  projects: { label: "Projects", subtitle: "The Work" },
  skills: { label: "Skills", subtitle: "The Tools" },
  contact: { label: "Contact", subtitle: "Let's Connect" },
};

const CHAPTER_SEQUENCE: ChapterId[] = ["cover", "about", "journey", "projects", "skills", "contact"];

export const DeskChecklist: React.FC<DeskChecklistProps> = ({ className }) => {
  const { activeChapter, completedChapters } = useJournalNavigation();
  const startPageTurn = useJournalStore((state) => state.startPageTurn);

  // High watermark index for discovered items in the checklist
  const [maxVisitedIndex, setMaxVisitedIndex] = useState<number>(0);

  useEffect(() => {
    const currentIndex = CHAPTER_SEQUENCE.indexOf(activeChapter);
    if (currentIndex > maxVisitedIndex) {
      setMaxVisitedIndex(currentIndex);
    }
  }, [activeChapter, maxVisitedIndex]);

  // Revealed items in checklist: from index 0 up to maxVisitedIndex
  const visibleChapters = CHAPTER_SEQUENCE.slice(0, maxVisitedIndex + 1);

  const handleClick = (id: ChapterId) => {
    if (id !== activeChapter) {
      startPageTurn(id);
    }
  };

  return (
    <aside
      className={cn(
        "relative z-40 w-48 sm:w-54 p-4 rounded-[2px] bg-[#F2EDE2] border border-[#DDD5C5] desk-ao rotate-[-2deg] select-none shadow-md",
        className
      )}
      aria-label="Handwritten Build Checklist"
    >
      {/* Masking Tape Strip */}
      <div className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 tape-strip border-x border-[#CFC5A5]/70 rotate-[1.5deg]" />

      {/* Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ded6c8_1px,transparent_1px),linear-gradient(to_bottom,#ded6c8_1px,transparent_1px)] bg-[size:16px_16px] opacity-35 rounded-[2px]" />

      {/* Header */}
      <div className="relative mb-3 border-b-2 border-[#D6CDBC] pb-1.5 flex items-center justify-between">
        <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.18em] text-stone-800 uppercase block">
          TODAY&apos;S BUILD
        </span>
        <span className="font-mono text-[9px] text-[#C2410C] font-bold">LOG #001</span>
      </div>

      {/* Living Checklist Items */}
      <ul className="relative space-y-2">
        <AnimatePresence initial={false}>
          {visibleChapters.map((id, idx) => {
            const { label, subtitle } = CHAPTER_LABELS[id];
            const isActive = activeChapter === id;
            const isChecked = completedChapters.includes(id) || idx < CHAPTER_SEQUENCE.indexOf(activeChapter);
            const isNewlyRevealed = idx === maxVisitedIndex;

            return (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-start gap-2.5 cursor-pointer group relative"
                onClick={() => handleClick(id)}
              >
                {/* Hand-Drawn SVG Checkbox */}
                <div className="relative mt-0.5 shrink-0 w-4 h-4 flex items-center justify-center">
                  <svg className="w-4 h-4 text-stone-700" viewBox="0 0 20 20" fill="none">
                    {/* Hand-drawn box frame */}
                    <path
                      d="M 3,3 L 17,2 L 16,17 L 2,16 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Animated Checkmark Stroke */}
                    {isChecked && (
                      <motion.path
                        d="M 5,10 L 9,14 L 16,5"
                        stroke="#C2410C"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    )}
                  </svg>
                </div>

                {/* Handwritten Chapter Label & Subtitle */}
                <div className="flex flex-col leading-tight relative overflow-hidden">
                  <motion.span
                    initial={isNewlyRevealed ? { clipPath: "inset(0 100% 0 0)" } : false}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={cn(
                      "font-script text-base sm:text-lg leading-tight transition-colors ink-bleed",
                      isActive
                        ? "text-[#1C1917] font-bold"
                        : isChecked
                        ? "text-stone-700 font-medium"
                        : "text-stone-500"
                    )}
                  >
                    {label}
                  </motion.span>
                  <span
                    className={cn(
                      "font-mono text-[9px] leading-tight tracking-wide",
                      isActive ? "text-[#C2410C] font-semibold" : "text-stone-500"
                    )}
                  >
                    {subtitle}
                  </span>
                </div>

                {/* Animated Pencil Tip moving while text reveals */}
                {isNewlyRevealed && (
                  <motion.div
                    className="absolute -right-3 top-1 pointer-events-none z-50"
                    initial={{ opacity: 1, x: -40 }}
                    animate={{ opacity: [1, 1, 0], x: [ -40, 20, 25 ] }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <div className="relative h-2 w-5 bg-gradient-to-r from-amber-700 to-[#1C1917] rounded-r-xs rotate-[-15deg] shadow-xs">
                      <div className="absolute -left-1 top-0.5 h-1 w-1 bg-zinc-400 rounded-full" />
                    </div>
                  </motion.div>
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {/* Living Pencil Status Note */}
      <div className="mt-3 pt-2 border-t border-dashed border-[#D6CDBC] flex items-center justify-between text-[9px] font-mono text-stone-500">
        <span>STATUS:</span>
        <span className="text-[#C2410C] font-bold">
          {completedChapters.length} / {CHAPTER_SEQUENCE.length} DISCOVERED
        </span>
      </div>
    </aside>
  );
};

export default DeskChecklist;
