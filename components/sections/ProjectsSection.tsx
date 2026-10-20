"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircularCarousel from "@/components/ui/CircularCarousel";
import { FocusCardData } from "@/components/ui/focus-cards";

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
  const [activeIdx, setActiveIdx] = useState(0);

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

  const carouselItems = useMemo(
    () =>
      PROJECTS_LIST.map((p) => ({
        src: p.src,
        alt: p.title,
        title: p.title,
        subtitle: p.category,
      })),
    []
  );

  const handleSelect = (index: number) => {
    const proj = PROJECTS_LIST[index % PROJECTS_LIST.length];
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const safeIndex = ((activeIdx % PROJECTS_LIST.length) + PROJECTS_LIST.length) % PROJECTS_LIST.length;
  const currentActiveProject = PROJECTS_LIST[safeIndex] || PROJECTS_LIST[0];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-transparent text-[#F1F0EB] py-12 sm:py-16 md:py-20 pl-24 sm:pl-28 md:pl-36 lg:pl-40 xl:pl-44 pr-6 sm:pr-10 md:pr-16 lg:pr-20 xl:pr-28 relative overflow-hidden flex flex-col justify-center scroll-mt-6"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto w-full mb-6 flex flex-col gap-2">
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
          Rotate the 3D cylinder or click any project to preview live links, tech stack &amp; repository details.
        </p>
      </div>

      {/* 3D Showcase Boundary Container */}
      <div className="w-full relative max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e0d]/60 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center min-h-[520px] lg:h-[570px]">
        {/* Left Side: 3D Circular Carousel shifted left */}
        <div className="w-full lg:w-[56%] xl:w-[57%] h-[360px] sm:h-[420px] lg:h-full relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-r from-black/40 via-transparent to-transparent">
          <CircularCarousel
            items={carouselItems}
            preset="cylinder"
            intro="rise"
            cardWidth={270}
            aspectRatio={1.22}
            gap={22}
            speed={10}
            cornerRadius={14}
            fadeColor="#0A0A09"
            captions={false}
            onChange={(index: number) => {
              const safe = ((index % PROJECTS_LIST.length) + PROJECTS_LIST.length) % PROJECTS_LIST.length;
              setActiveIdx(safe);
            }}
            onItemClick={(_item: unknown, index: number) => handleSelect(index)}
          />

          {/* Interactive Hint Pill on Bottom Left */}
          <div className="absolute bottom-4 left-6 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-[11px] font-mono text-[#cac6bf]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39C3EF] animate-pulse" />
            <span>DRAG &bull; ROTATE RING</span>
          </div>
        </div>

        {/* Right Side: Dynamic Seamless Quick Access Card */}
        <div className="w-full lg:w-[44%] xl:w-[43%] h-full flex flex-col justify-center p-6 sm:p-7 md:p-8 relative overflow-hidden bg-[#111110]/50">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#39C3EF]/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentActiveProject.id}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col justify-between h-full max-w-lg mx-auto w-full gap-5"
            >
              {/* Header: Category Badge + Counter */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39C3EF]" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#39C3EF] font-bold">
                    {currentActiveProject.category}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#949087] tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  {String(safeIndex + 1).padStart(2, "0")} / {String(PROJECTS_LIST.length).padStart(2, "0")}
                </div>
              </div>

              {/* Thumbnail Preview with subtle zoom & Click-to-view */}
              <div
                onClick={() => setSelectedProject(currentActiveProject)}
                className="group/thumb relative w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-white/15 bg-black/60 cursor-pointer shadow-lg transition-transform hover:scale-[1.01]"
              >
                <img
                  src={currentActiveProject.src}
                  alt={currentActiveProject.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/thumb:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3.5">
                  <span className="text-xs font-mono tracking-wider text-[#F1F0EB] flex items-center gap-1.5 opacity-90 group-hover/thumb:text-[#39C3EF] transition-colors">
                    <span className="material-symbols-outlined text-sm">fullscreen</span>
                    <span>CLICK TO EXPAND DETAILS</span>
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F0EB] tracking-tight">
                  {currentActiveProject.title}
                </h3>
                <p className="text-[#cac6bf] text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {currentActiveProject.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              {currentActiveProject.techStack && (
                <div className="flex flex-wrap gap-1.5">
                  {currentActiveProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/5 border border-white/10 text-[#cac6bf]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Quick Actions Bar */}
              <div className="flex items-center gap-3 pt-2">
                {currentActiveProject.liveUrl && (
                  <a
                    href={currentActiveProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 rounded-xl bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <span>LIVE DEMO</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                )}

                {currentActiveProject.githubUrl && (
                  <a
                    href={currentActiveProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 rounded-xl bg-white/5 border border-white/15 hover:border-white text-[#F1F0EB] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>GITHUB</span>
                    <span className="material-symbols-outlined text-sm">code</span>
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(currentActiveProject)}
                  title="Expand modal"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#cac6bf] hover:text-[#F1F0EB] flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
                >
                  <span className="material-symbols-outlined text-base">info</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

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
