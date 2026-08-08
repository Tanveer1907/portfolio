"use client";

import React from "react";

interface TopHeaderProps {
  onOpenMenu: () => void;
}

export default function TopHeader({ onOpenMenu }: TopHeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-gradient-to-b from-[#0A0A09] via-[#0A0A09]/80 to-transparent pointer-events-none">
      <div className="font-label-caps text-[#F1F0EB] tracking-widest pointer-events-auto mix-blend-difference text-xs">
        TANVEER SINGH
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
