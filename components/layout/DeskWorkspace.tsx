"use client";

import React from "react";
import { useJournalNavigation } from "@/hooks/useJournalNavigation";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { JournalSpread } from "../journal/JournalSpread";
import { ChapterId } from "@/types/chapter.types";

const chapters: { id: ChapterId; label: string }[] = [
  { id: "cover", label: "Cover" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const DeskWorkspace: React.FC = () => {
  // Lock scroll-driven page navigation
  useScrollNavigation();
  const { activeChapter, setActiveChapter } = useJournalNavigation();

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#2b1f15] text-[#1d1c15] font-body-main selection:bg-[#fed488] selection:text-[#785a1a] select-none bg-wood-desk">
      {/* Secondary Top State Indicator Header */}
      <header className="hidden md:flex justify-between items-center w-full px-8 sm:px-16 py-5 max-w-screen-2xl mx-auto absolute top-0 left-0 right-0 z-50 pointer-events-auto">
        <div className="font-display-lg text-2xl font-semibold text-[#e9e1dc] tracking-tight">
          The Build Log
        </div>
        <nav className="flex items-center gap-8">
          {chapters.map((chap) => {
            const isActive = activeChapter === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => setActiveChapter(chap.id)}
                className={`font-medium transition-all duration-300 cursor-pointer text-sm ${
                  isActive
                    ? "text-[#e9e1dc] border-b-2 border-[#775a19] font-bold scale-95"
                    : "text-[#96908b] hover:text-[#e9c176]"
                }`}
              >
                {chap.label}
              </button>
            );
          })}
        </nav>
        <button
          aria-label="Settings"
          className="text-[#e9e1dc] hover:text-[#e9c176] transition-colors duration-300 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">settings</span>
        </button>
      </header>

      {/* Mobile Secondary Header */}
      <header className="md:hidden flex justify-between items-center w-full px-6 py-4 z-50 absolute top-0 left-0 right-0">
        <span className="font-display-lg text-xl font-semibold text-[#e9e1dc]">
          The Build Log
        </span>
        <div className="flex items-center gap-3">
          {chapters.map((chap) => (
            <button
              key={chap.id}
              onClick={() => setActiveChapter(chap.id)}
              className={`text-xs font-meta-technical ${
                activeChapter === chap.id ? "text-[#e9c176] font-bold" : "text-gray-400"
              }`}
            >
              {chap.label}
            </button>
          ))}
        </div>
      </header>

      {/* PERSISTENT FIXED HERO NOTEBOOK STAGE — NEVER UNMOUNTS, NEVER MOVES */}
      <main className="fixed inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 pointer-events-none z-10">
        <div className="pointer-events-auto w-full max-w-[1220px] h-[calc(100vh-110px)] max-h-[820px] aspect-[16/10.5] relative shadow-[0_25px_70px_rgba(0,0,0,0.7)] rounded-sm overflow-hidden flex items-center justify-center bg-[#fef9ed]">
          <JournalSpread />
        </div>
      </main>

      {/* Global Lighting Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(ellipse_at_top_left,rgba(255,245,230,0.06),transparent_60%)]" />
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
};

export default DeskWorkspace;
