"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TopHeaderProps {
  onOpenMenu: () => void;
  activeSection?: string;
}

const SECTION_LABELS: Record<string, string> = {
  about: "02 / ABOUT",
  projects: "03 / SELECTED WORKS",
  skills: "04 / ENGINEERING TOOLKIT",
  journey: "05 / THE JOURNEY",
  connect: "06 / CONNECT",
};

export default function TopHeader({ onOpenMenu, activeSection = "home" }: TopHeaderProps) {
  const currentContextLabel = SECTION_LABELS[activeSection];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-gradient-to-b from-[#0A0A09] via-[#0A0A09]/80 to-transparent pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto mix-blend-difference">
        <span className="font-label-caps text-[#F1F0EB] tracking-widest text-xs">
          TANVEER SINGH
        </span>

        <AnimatePresence mode="wait">
          {currentContextLabel && (
            <motion.div
              key={currentContextLabel}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:flex items-center gap-3"
            >
              <span className="text-[#949087] text-xs">/</span>
              <span className="font-mono-data text-[11px] text-[#cac6bf] uppercase tracking-wider">
                {currentContextLabel}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={onOpenMenu}
        className="flex items-center gap-2 pointer-events-auto group mix-blend-difference cursor-pointer"
        aria-label="Open menu"
      >
        <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors duration-300 text-xs">
          MENU
        </span>
        <span className="material-symbols-outlined text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors duration-300 text-lg">
          menu
        </span>
      </button>
    </header>
  );
}
