"use client";

import React from "react";
import { motion } from "framer-motion";

interface SideSectionIndicatorProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

const SECTIONS = [
  { id: "home", label: "01", name: "HOME" },
  { id: "about", label: "02", name: "ABOUT" },
  { id: "projects", label: "03", name: "PROJECTS" },
  { id: "skills", label: "04", name: "SKILLS" },
  { id: "journey", label: "05", name: "JOURNEY" },
  { id: "connect", label: "06", name: "CONNECT" },
];

export default function SideSectionIndicator({
  activeSection,
  onSelectSection,
}: SideSectionIndicatorProps) {
  return (
    <>
      {/* Desktop Vertical Left Indicator Bar */}
      <nav className="hidden xl:flex fixed left-10 z-30 flex-col gap-6 items-center top-1/2 -translate-y-1/2 h-auto pointer-events-auto mix-blend-difference">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <motion.button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-4 group transition-all cursor-pointer relative p-1.5 focus:outline-none"
              aria-label={`Jump to section ${sec.label} - ${sec.name}`}
            >
              {/* Dot Marker */}
              <motion.span
                animate={{
                  scale: isActive ? 1.35 : 1,
                  backgroundColor: isActive ? "#F1F0EB" : "#555249",
                }}
                transition={{ duration: 0.25 }}
                className="w-2.5 h-2.5 rounded-full group-hover:bg-[#F1F0EB] transition-colors shadow-sm"
              />

              {/* Hover & Active Floating Label */}
              <span
                className={`font-mono-data text-[11px] tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0 text-[#F1F0EB] font-semibold"
                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#cac6bf]"
                } absolute left-7 bg-[#0A0A09]/90 px-2 py-0.5 rounded border border-subtle backdrop-blur-sm pointer-events-none`}
              >
                {sec.label} {"//"} {sec.name}
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* Mobile/Tablet Real-Time Floating Indicator Pill */}
      <div className="xl:hidden fixed bottom-6 left-6 z-30 pointer-events-auto mix-blend-difference">
        <div className="flex items-center gap-2 bg-[#0A0A09]/90 border border-subtle px-3 py-1.5 rounded-full backdrop-blur-md">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <motion.button
                key={sec.id}
                onClick={() => onSelectSection(sec.id)}
                whileTap={{ scale: 0.8 }}
                className="p-1 focus:outline-none"
                aria-label={`Jump to section ${sec.name}`}
              >
                <motion.span
                  animate={{
                    scale: isActive ? 1.4 : 1,
                    backgroundColor: isActive ? "#F1F0EB" : "#49473f",
                  }}
                  transition={{ duration: 0.2 }}
                  className="block w-2 h-2 rounded-full"
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}
