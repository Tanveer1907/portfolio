"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FocusCards, FocusCardData } from "@/components/ui/focus-cards";

export const PROJECTS_LIST: FocusCardData[] = [
  {
    id: "chitkara-diaries",
    title: "Chitkara Diaries",
    category: "Campus Information System",
    description:
      "Campus information system built to help students discover events, clubs, circulars, and academic resources in one place.",
    techStack: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Tanveer1907/Chitkara-Diaries",
    liveUrl: "https://chitkaradiaries.vercel.app",
  },
  {
    id: "hackconnect",
    title: "HackConnect",
    category: "Full Stack Platform",
    description:
      "Real-time teammate discovery and matchmaking platform for competitive hackathons with skill tagging and chat rooms.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Tanveer1907/HackConnect",
    liveUrl: "https://hackconnect.vercel.app",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    category: "Productivity Application",
    description:
      "Ultra-minimalist, keyboard-first developer task management application with local storage persistence and metrics.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "IndexedDB"],
    src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Tanveer1907/TaskFlow",
    liveUrl: "https://taskflow.vercel.app",
  },
  {
    id: "stitch-editorial",
    title: "Stitch Editorial",
    category: "Design System & Web Engine",
    description:
      "High-performance editorial web engine with custom GSAP scroll locks, WebGL shaders, and typography components.",
    techStack: ["React", "GSAP", "Three.js", "Tailwind CSS", "Framer Motion"],
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Tanveer1907/Stitch-Editorial",
    liveUrl: "https://stitcheditorial.vercel.app",
  },
];

export default function ProjectsSection() {

  const [selectedProject, setSelectedProject] = useState<FocusCardData | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCardClick = (card: FocusCardData) => {
    setSelectedProject(card);
  };


  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-transparent text-[#F1F0EB] py-20 px-6 sm:px-12 md:px-20 xl:px-28 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto w-full mb-12 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#39C3EF]" />
          <span className="font-label-caps text-[#cac6bf] text-xs tracking-[0.25em] uppercase">
            04 // SELECTED WORKS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F1F0EB] uppercase">
          FEATURED PROJECTS
        </h2>
        <p className="text-[#cac6bf] text-sm sm:text-base max-w-xl">
          Hover over cards to focus. Click any project to open detailed view & links.
        </p>
      </div>

      {/* FocusCards Component Grid */}
      <FocusCards cards={PROJECTS_LIST} onSelect={handleCardClick} />

      {/* Non-scrollable Compact Subwindow Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[80vh] md:h-[460px] bg-[#141413] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-[#F1F0EB] hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>

              {/* Left Side: Summary & Actions */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-[#141413] z-10 overflow-hidden">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono tracking-widest text-[#39C3EF] uppercase font-bold">
                    {selectedProject.category || "PROJECT SUMMARY"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F0EB] tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[#cac6bf] text-sm sm:text-base leading-relaxed mt-2 line-clamp-4">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack Pills */}
                  {selectedProject.techStack && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-900 border border-neutral-800 text-[#cac6bf]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action Buttons: Live Demo & GitHub Repo */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-11 rounded-xl bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <span>LIVE DEMO</span>
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>

                  <a
                    href={selectedProject.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-11 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-white text-[#F1F0EB] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>GITHUB REPO</span>
                    <span className="material-symbols-outlined text-base">code</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Project Screenshot */}
              <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden bg-[#0A0A09] border-t md:border-t-0 md:border-l border-white/10 flex-shrink-0">
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
