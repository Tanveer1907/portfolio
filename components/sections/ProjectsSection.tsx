"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface ProjectsSectionProps {
  onOpenProjectDetail: (projectId: string) => void;
  onOpenAllProjects: () => void;
}

const PROJECT_INDEX_ITEMS = [
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

export default function ProjectsSection({
  onOpenProjectDetail,
  onOpenAllProjects,
}: ProjectsSectionProps) {
  const reduced = useReducedMotion();

  // Featured Project Mouse Parallax State
  const [featuredMousePos, setFeaturedMousePos] = useState({ x: 0, y: 0 });

  // Project Index Floating Cursor Preview State
  const [hoveredProject, setHoveredProject] = useState<(typeof PROJECT_INDEX_ITEMS)[0] | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleFeaturedMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setFeaturedMousePos({ x, y });
  };

  const handleFeaturedMouseLeave = () => {
    setFeaturedMousePos({ x: 0, y: 0 });
  };

  const handleIndexMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="projects" className="w-full flex flex-col border-b border-subtle bg-[#0A0A09] relative">
      {/* Section Header */}
      <Reveal className="w-full p-6 md:px-24 xl:px-48 pt-32 pb-16 border-b border-subtle">
        <span className="font-mono-data text-[#949087] mb-8 block">
          02 / PROJECTS
        </span>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-12">
          <div>
            <h2 className="font-headline-lg text-[#F1F0EB] uppercase tracking-wide text-5xl md:text-6xl">
              Selected<br />Works
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
            <p className="font-body-md text-[#cac6bf] text-lg">
              Things I&apos;ve built that solve real problems or were fun to experiment with. Focus on systems and architecture.
            </p>
            <button
              onClick={onOpenAllProjects}
              className="group flex items-center gap-2 text-xs font-label-caps text-[#cac6bf] hover:text-[#F1F0EB] transition-colors cursor-pointer"
            >
              <span>VIEW DETAILED INDEX</span>
              <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Featured Project: Chitkara Diaries */}
      <div className="w-full flex flex-col lg:flex-row min-h-[85vh] group border-b border-subtle">
        {/* Large Preview Area with Cursor Parallax */}
        <div
          onMouseMove={handleFeaturedMouseMove}
          onMouseLeave={handleFeaturedMouseLeave}
          onClick={() => onOpenProjectDetail("chitkara-diaries")}
          className="w-full lg:w-2/3 p-6 md:p-16 lg:p-24 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-subtle bg-[#0C0C0B] relative overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F1F0EB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div
            animate={{
              x: featuredMousePos.x,
              y: featuredMousePos.y,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-subtle shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          >
            <img
              alt="Chitkara Diaries Dashboard"
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGd8LQRwpkhbwbW98Zz9D-HWZFHvw3um73nBfMDo3cxOjX8p7TQoFTktkEd8yjKAeMZgKzZvLUIwT7rIIXJ_QSze3qVT7TtRsbtF7HAPPcd5MxFEh1-s2Psdyab31Heq_dq6VXLXNfCsJ_oqNz_9xORvMDFXdqVwXyTvfITzAL-hXXIS-3D9iivIwK7twHHwq-1OBIDVAehgc2qX6BrBeGoOAVY3n6MyAXpf6YfEB50DBEBYrdh1Iu"
            />
          </motion.div>
        </div>

        {/* Info Area */}
        <div className="w-full lg:w-1/3 p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-[#0A0A09]">
          <span className="font-label-caps text-[#949087] mb-6 tracking-widest text-xs">
            FEATURED PROJECT
          </span>
          <h3
            onClick={() => onOpenProjectDetail("chitkara-diaries")}
            className="font-headline-md text-[#F1F0EB] group-hover:text-white transition-colors mb-8 text-4xl uppercase tracking-wide cursor-pointer"
          >
            CHITKARA DIARIES
          </h3>
          <p className="font-body-md text-[#cac6bf] mb-12 text-lg leading-relaxed">
            Campus information system built to help students discover events, clubs and resources in one place. Engineered with a scalable microservices architecture.
          </p>

          <div className="flex flex-col gap-6 mb-16 border-l border-subtle pl-8">
            <div>
              <span className="font-label-caps text-[#949087] block mb-2 tracking-widest text-xs">
                ROLE
              </span>
              <span className="font-body-md text-[#F1F0EB] text-lg">
                Full Stack Developer
              </span>
            </div>
            <div>
              <span className="font-label-caps text-[#949087] block mb-2 tracking-widest text-xs">
                TECH STACK
              </span>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="font-mono-data text-[#cac6bf]">React</span>
                <span className="text-[#949087]">/</span>
                <span className="font-mono-data text-[#cac6bf]">Node.js</span>
                <span className="text-[#949087]">/</span>
                <span className="font-mono-data text-[#cac6bf]">MySQL</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenProjectDetail("chitkara-diaries")}
            className="group/btn flex items-center gap-4 w-fit border-b border-transparent hover:border-[#F1F0EB] pb-2 transition-all cursor-pointer"
          >
            <span className="font-label-caps text-[#cac6bf] group-hover/btn:text-[#F1F0EB] transition-colors tracking-widest text-xs">
              VIEW CASE STUDY
            </span>
            <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover/btn:text-[#F1F0EB] transition-all transform group-hover/btn:translate-x-2">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Project Index Gallery Rows */}
      <Reveal className="w-full px-6 md:px-24 xl:px-48 py-24 bg-[#0A0A09]">
        <div onMouseMove={handleIndexMouseMove}>
        <div className="flex justify-between items-center border-b border-subtle pb-6 mb-8">
          <span className="font-mono-data text-xs text-[#949087]">
            02.1 // ALL WORKS INDEX
          </span>
          <span className="font-label-caps text-xs text-[#949087]">
            HOVER TO PREVIEW
          </span>
        </div>

        <div className="flex flex-col divide-y divide-subtle border-b border-subtle relative">
          {PROJECT_INDEX_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredProject(item)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => {
                if (item.id !== "more-experiments") {
                  onOpenProjectDetail(item.id);
                }
              }}
              className="py-8 px-4 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors cursor-pointer group hover:bg-[#121110]/60"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono-data text-sm text-[#949087] group-hover:text-[#F1F0EB] transition-colors">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-[#cac6bf] group-hover:text-[#F1F0EB] uppercase group-hover:translate-x-2 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-[#949087] group-hover:text-[#cac6bf] text-sm mt-1 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <span className="font-label-caps text-xs text-[#949087] group-hover:text-[#cac6bf] transition-colors">
                  {item.category}
                </span>
                <span className="material-symbols-outlined text-[#949087] group-hover:text-[#F1F0EB] transform group-hover:translate-x-2 transition-all text-xl">
                  arrow_forward
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </Reveal>

      {/* Floating Editorial Cursor Follower Image Preview */}
      {!reduced && (
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: cursorPos.x + 24,
                y: cursorPos.y - 120,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                opacity: { duration: 0.2 },
              }}
              className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block w-72 h-44 rounded-lg overflow-hidden border border-subtle bg-[#121110] shadow-2xl"
            >
              {hoveredProject.image ? (
                <img
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center p-6 text-center bg-[#0C0C0B]">
                  <span className="material-symbols-outlined text-3xl text-[#949087] mb-2">
                    code_blocks
                  </span>
                  <span className="font-mono-data text-xs text-[#cac6bf]">
                    PROTOTYPE EXPERIMENTS
                  </span>
                  <span className="font-label-caps text-[10px] text-[#949087] mt-1">
                    CLI &amp; ALGORITHM SCRIPTS
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
