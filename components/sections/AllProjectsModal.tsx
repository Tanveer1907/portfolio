"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

const ALL_PROJECTS = [
  {
    id: "hackconnect",
    num: "01",
    title: "HACKCONNECT",
    category: "Full Stack Platform",
    description: "Hackathon teammate discovery and collaboration hub.",
    image: "/stitch_screens/screen1_landing.png",
  },
  {
    id: "chitkara-diaries",
    num: "02",
    title: "CHITKARA DIARIES",
    category: "Campus Information System",
    description: "Campus information system for events, clubs and student resources.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGd8LQRwpkhbwbW98Zz9D-HWZFHvw3um73nBfMDo3cxOjX8p7TQoFTktkEd8yjKAeMZgKzZvLUIwT7rIIXJ_QSze3qVT7TtRsbtF7HAPPcd5MxFEh1-s2Psdyab31Heq_dq6VXLXNfCsJ_oqNz_9xORvMDFXdqVwXyTvfITzAL-hXXIS-3D9iivIwK7twHHwq-1OBIDVAehgc2qX6BrBeGoOAVY3n6MyAXpf6YfEB50DBEBYrdh1Iu",
  },
  {
    id: "taskflow",
    num: "03",
    title: "TASKFLOW",
    category: "Productivity Application",
    description: "Keyboard-first minimalist developer task management app.",
    image: "/stitch_screens/screen3_skills_checkpoint.png",
  },
  {
    id: "more-experiments",
    num: "04",
    title: "MORE EXPERIMENTS",
    category: "Ongoing Engineering Works",
    description: "Smaller experiments, CLI scripts, and ongoing prototype studies.",
    image: null,
  },
];

export default function AllProjectsModal({
  isOpen,
  onClose,
  onSelectProject,
}: AllProjectsModalProps) {
  const [hoveredProject, setHoveredProject] = useState<(typeof ALL_PROJECTS)[0] | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const handleProjectClick = (id: string) => {
    if (id === "more-experiments") return;
    onClose();
    onSelectProject(id);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-50 bg-[#0A0A09]/95 backdrop-blur-md text-[#e6e2df] overflow-y-auto p-6 md:p-16 flex flex-col justify-between"
        >
          <div className="max-w-4xl mx-auto w-full">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-subtle pb-6 mb-12">
              <div className="flex items-center gap-3">
                <span className="font-mono-data text-xs text-[#949087]">
                  02 // INDEX
                </span>
                <span className="text-[#49473f]">•</span>
                <span className="font-label-caps text-xs text-[#f5eee0]">
                  ALL PROJECTS &amp; EXPERIMENTS
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex items-center gap-2 group cursor-pointer"
                aria-label="Close index"
              >
                <span className="font-label-caps text-xs text-[#cac6bf] group-hover:text-[#f5eee0]">
                  CLOSE
                </span>
                <span className="material-symbols-outlined text-[#cac6bf] group-hover:text-[#f5eee0] text-xl">
                  close
                </span>
              </button>
            </div>

            {/* Typography-driven Project Index */}
            <div className="flex flex-col border-t border-subtle divide-y divide-subtle">
              {ALL_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  onMouseEnter={() => setHoveredProject(proj)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(proj.id)}
                  className={`py-8 px-4 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors cursor-pointer group ${
                    hoveredProject?.id === proj.id ? "bg-[#121110]" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono-data text-sm text-[#949087] group-hover:text-[#f5eee0] transition-colors">
                      {proj.num}
                    </span>
                    <div>
                      <h3 className="font-headline-lg text-2xl md:text-3xl text-[#f5eee0] uppercase group-hover:translate-x-2 transition-transform duration-300">
                        {proj.title}
                      </h3>
                      <p className="font-body-md text-[#cac6bf] text-sm mt-1">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <span className="font-label-caps text-xs text-[#949087]">
                      {proj.category}
                    </span>
                    <span className="material-symbols-outlined text-[#cac6bf] group-hover:text-[#f5eee0] transform group-hover:translate-x-1 transition-all text-xl">
                      arrow_forward
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom info */}
            <div className="mt-16 border-t border-subtle pt-8 flex justify-between items-center">
              <span className="font-mono-data text-xs text-[#949087]">
                SELECT A PROJECT TO OPEN ITS TECHNICAL CASE STUDY
              </span>
              <button
                onClick={onClose}
                className="font-label-caps text-xs text-[#f5eee0] border-b border-[#f5eee0] pb-1 hover:text-[#cac6bf] hover:border-[#cac6bf] transition-colors cursor-pointer"
              >
                RETURN TO MAIN VIEW →
              </button>
            </div>
          </div>

          {/* Floating Image Preview inside Modal */}
          {!reduced && (
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: cursorPos.x + 20,
                    y: cursorPos.y - 100,
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    opacity: { duration: 0.18 },
                  }}
                  className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block w-64 h-40 rounded-lg overflow-hidden border border-subtle bg-[#121110] shadow-2xl"
                >
                  {hoveredProject.image ? (
                    <img
                      src={hoveredProject.image}
                      alt={hoveredProject.title}
                      className="w-full h-full object-cover grayscale opacity-90"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center p-4 text-center bg-[#0C0C0B]">
                      <span className="material-symbols-outlined text-2xl text-[#949087] mb-1">
                        code_blocks
                      </span>
                      <span className="font-mono-data text-xs text-[#cac6bf]">
                        PROTOTYPE EXPERIMENTS
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
