"use client";

import React from "react";

interface SideSectionIndicatorProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

const SECTIONS = [
  { id: "home", label: "01" },
  { id: "about", label: "02" },
  { id: "projects", label: "03" },
  { id: "skills", label: "04" },
  { id: "journey", label: "05" },
];

export default function SideSectionIndicator({
  activeSection,
  onSelectSection,
}: SideSectionIndicatorProps) {
  return (
    <nav className="hidden xl:flex fixed left-12 z-40 flex-col gap-8 items-center top-1/2 -translate-y-1/2 h-auto pointer-events-auto mix-blend-difference">
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => onSelectSection(sec.id)}
            className="flex items-center gap-4 group transition-all cursor-pointer relative"
            aria-label={`Jump to section ${sec.label}`}
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "w-2.5 h-2.5 bg-[#F1F0EB] scale-125"
                  : "w-1.5 h-1.5 bg-[#49473f] group-hover:scale-150 group-hover:bg-[#F1F0EB]"
              }`}
            />
            <span
              className={`font-mono-data text-xs transition-opacity duration-300 ${
                isActive
                  ? "opacity-100 text-[#F1F0EB] font-bold"
                  : "opacity-0 group-hover:opacity-100 text-[#cac6bf]"
              } absolute left-6`}
            >
              {sec.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
