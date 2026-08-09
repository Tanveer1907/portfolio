"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DepthCarousel from "@/components/ui/DepthCarousel";
import { EASING, DURATION } from "@/lib/animations/tokens";

const clamp = (v: number, min: number, max: number) => (v < min ? min : v > max ? max : v);

interface ProjectsSectionProps {
  onOpenProjectDetail: (projectId: string) => void;
}

const PROJECTS_LIST = [
  {
    id: "chitkara-diaries",
    num: "01",
    title: "CHITKARA DIARIES",
    category: "Campus Information System",
    description:
      "Campus information system built to help students discover events, clubs, circulars, and academic resources in one place.",
    techStack: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGd8LQRwpkhbwbW98Zz9D-HWZFHvw3um73nBfMDo3cxOjX8p7TQoFTktkEd8yjKAeMZgKzZvLUIwT7rIIXJ_QSze3qVT7TtRsbtF7HAPPcd5MxFEh1-s2Psdyab31Heq_dq6VXLXNfCsJ_oqNz_9xORvMDFXdqVwXyTvfITzAL-hXXIS-3D9iivIwK7twHHwq-1OBIDVAehgc2qX6BrBeGoOAVY3n6MyAXpf6YfEB50DBEBYrdh1Iu",
    githubUrl: "https://github.com/Tanveer1907/Chitkara-Diaries",
    liveUrl: "https://chitkaradiaries.vercel.app",
  },
  {
    id: "hackconnect",
    num: "02",
    title: "HACKCONNECT",
    category: "Full Stack Platform",
    description:
      "Real-time teammate discovery and matchmaking platform for competitive hackathons with skill tagging and chat rooms.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    image: "/stitch_screens/screen1_landing.png",
    githubUrl: "https://github.com/Tanveer1907/HackConnect",
    liveUrl: "https://hackconnect.vercel.app",
  },
  {
    id: "taskflow",
    num: "03",
    title: "TASKFLOW",
    category: "Productivity Application",
    description:
      "Ultra-minimalist, keyboard-first developer task management application with local storage persistence and metrics.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "IndexedDB"],
    image: "/stitch_screens/screen3_skills_checkpoint.png",
    githubUrl: "https://github.com/Tanveer1907/TaskFlow",
    liveUrl: "https://taskflow.vercel.app",
  },
  {
    id: "stitch-ai-ui",
    num: "04",
    title: "STITCH EDITORIAL",
    category: "Design System & Web Engine",
    description:
      "High-performance editorial web engine with custom GSAP scroll locks, WebGL shaders, and typography components.",
    techStack: ["React", "GSAP", "Three.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
    githubUrl: "https://github.com/Tanveer1907/portfolio",
    liveUrl: "https://tanveersingh.vercel.app",
  },
];

export default function ProjectsSection({
  onOpenProjectDetail,
}: ProjectsSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const count = PROJECTS_LIST.length;
  const activeProject = PROJECTS_LIST[activeIndex] || PROJECTS_LIST[0];

  const depthCarouselItems = PROJECTS_LIST.map((item) => ({
    image: item.image,
    alt: item.title,
  }));

  // Scroll Progress -> Active Project Index Sync
  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const progress = clamp(-rect.top / scrollableDistance, 0, 1);
    const targetIdx = clamp(Math.floor(progress * count), 0, count - 1);

    setActiveIndex((prev) => (prev !== targetIdx ? targetIdx : prev));
  }, [count]);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          updateProgress();
          rafId = 0;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateProgress]);

  return (
    <section id="projects" ref={trackRef} className="w-full relative bg-[#0A0A09]" style={{ height: "300vh" }}>
      {/* Sticky Stage Container (Pins in place while scrolling through all projects) */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between overflow-hidden border-b border-subtle">
        {/* Header Bar */}
        <div className="w-full px-6 md:px-24 xl:px-48 pt-10 pb-4 border-b border-subtle flex justify-between items-center bg-[#0A0A09] z-20">
          <span className="font-mono-data text-xs text-[#949087]">
            03 / SELECTED WORKS
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono-data text-xs text-[#F1F0EB]">
              0{activeIndex + 1} {"//"} 0{count}
            </span>
            <span className="font-label-caps text-xs text-[#949087] hidden md:inline">
              SCROLL DOWN TO ADVANCE
            </span>
          </div>
        </div>

        {/* 2-Column 3D Depth Carousel Showcase Area */}
        <div className="w-full flex-1 flex flex-col lg:flex-row bg-[#0A0A09]">
          {/* Left Side: Dynamic Project Summary & Action Buttons */}
          <div className="w-full lg:w-1/2 p-6 md:p-16 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-subtle bg-[#0A0A09]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: DURATION.FAST, ease: EASING.editorial }}
                className="flex flex-col gap-6"
              >
                {/* Category Badge & Step */}
                <div className="flex items-center justify-between border-b border-subtle pb-4">
                  <span className="font-mono-data text-xs text-[#949087]">
                    PROJECT 0{activeIndex + 1} {"//"} 0{count}
                  </span>
                  <span className="font-label-caps text-xs text-[#F1F0EB] bg-[#121110] border border-subtle px-3 py-1 rounded">
                    {activeProject.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline-lg text-4xl sm:text-5xl md:text-6xl text-[#F1F0EB] uppercase tracking-wide">
                  {activeProject.title}
                </h3>

                {/* Description Summary */}
                <p className="font-body-lg text-[#cac6bf] text-lg leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-subtle rounded font-mono-data text-xs text-[#cac6bf] bg-[#121110]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons: View Case Study, Live Demo, GitHub */}
            <div className="flex flex-wrap items-center gap-4 pt-8 mt-6 border-t border-subtle">
              <button
                onClick={() => onOpenProjectDetail(activeProject.id)}
                className="group flex items-center gap-3 px-6 py-3 bg-[#F1F0EB] text-[#0A0A09] font-label-caps text-xs tracking-widest rounded hover:bg-white transition-colors cursor-pointer"
              >
                <span>VIEW CASE STUDY</span>
                <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-3 border border-subtle text-[#F1F0EB] font-label-caps text-xs tracking-widest rounded hover:border-[#F1F0EB] transition-colors"
                >
                  <span>LIVE DEMO</span>
                  <span className="material-symbols-outlined text-sm transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                    north_east
                  </span>
                </a>
              )}

              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-3 border border-subtle text-[#cac6bf] font-label-caps text-xs tracking-widest rounded hover:text-[#F1F0EB] hover:border-[#F1F0EB] transition-colors"
                >
                  <span>GITHUB</span>
                  <span className="material-symbols-outlined text-sm transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                    open_in_new
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Right Side: 3D DepthCarousel from React Bits */}
          <div className="w-full lg:w-1/2 min-h-[480px] lg:min-h-[100%] relative bg-[#0C0C0B] flex items-center justify-center p-6 overflow-hidden">
            <div className="w-full h-full min-h-[420px] relative flex items-center justify-center">
              <DepthCarousel
                items={depthCarouselItems}
                activeIndex={activeIndex}
                cardWidth={340}
                cardHeight={420}
                radius={16}
                tint="#05060a"
                depth={220}
                spread={85}
                tilt={22}
                tiltDirection="right"
                perspective={1400}
                visibleCards={4}
                falloff={0.2}
                blur={6}
                duration={700}
                ease="power3.out"
                autoplay={false}
                loop={true}
                showControls={true}
                showIndicators={true}
                onChange={(idx) => setActiveIndex(idx)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
