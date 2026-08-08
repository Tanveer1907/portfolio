"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDetailModalProps {
  projectId: string | null;
  onClose: () => void;
}

const PROJECTS_DATA: Record<
  string,
  {
    title: string;
    category: string;
    techStack: string[];
    problem: string;
    approach: string;
    architecture: string[];
    interfaceImage: string;
    learnings: string[];
    githubUrl: string;
    liveUrl: string;
  }
> = {
  "chitkara-diaries": {
    title: "CHITKARA DIARIES",
    category: "Campus Information System",
    techStack: ["React", "Node.js", "MySQL", "Tailwind CSS", "Express"],
    problem:
      "Campus events, student clubs, circulars, and academic resources were fragmented across unstructured WhatsApp channels, physical notice boards, and outdated web portals, causing missed opportunities and low student engagement.",
    approach:
      "Engineered a centralized, highly intuitive web application featuring curated event feeds, interactive club discovery modules, resource repositories with instant search, and real-time announcement notifications.",
    architecture: [
      "Client Layer: React Single Page Application with optimized state management and custom CSS components.",
      "API Gateway: Node.js / Express REST API handling authentication, request validation, and caching.",
      "Database Layer: MySQL Relational DB with indexed tables for events, users, subscriptions, and logs.",
      "Storage Layer: Cloud object storage for media attachments and campus event banners.",
    ],
    interfaceImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGd8LQRwpkhbwbW98Zz9D-HWZFHvw3um73nBfMDo3cxOjX8p7TQoFTktkEd8yjKAeMZgKzZvLUIwT7rIIXJ_QSze3qVT7TtRsbtF7HAPPcd5MxFEh1-s2Psdyab31Heq_dq6VXLXNfCsJ_oqNz_9xORvMDFXdqVwXyTvfITzAL-hXXIS-3D9iivIwK7twHHwq-1OBIDVAehgc2qX6BrBeGoOAVY3n6MyAXpf6YfEB50DBEBYrdh1Iu",
    learnings: [
      "Optimized MySQL relational schema with index strategies that reduced event search latency by over 60%.",
      "Implemented clean client-side state architecture to handle complex multi-attribute filtering (category, date, host club).",
      "Designed responsive, accessible dark-mode UI keeping readability and performance paramount.",
    ],
    githubUrl: "https://github.com/Tanveer1907/Chitkara-Diaries",
    liveUrl: "https://chitkaradiaries.vercel.app",
  },
  hackconnect: {
    title: "HACKCONNECT",
    category: "Full Stack Platform",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    problem:
      "Students struggle to find compatible teammates and domain experts for competitive hackathons within short timelines.",
    approach:
      "Created a real-time matchmaking platform for hackathons with skill tagging, team formation rooms, and project showcase feeds.",
    architecture: [
      "Frontend: Next.js App Router with Server-Side Rendering for dynamic profiles.",
      "Backend: Node.js micro-services for live team chat and request routing.",
      "Database: MongoDB document store for flexible user skill matrices.",
    ],
    interfaceImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGd8LQRwpkhbwbW98Zz9D-HWZFHvw3um73nBfMDo3cxOjX8p7TQoFTktkEd8yjKAeMZgKzZvLUIwT7rIIXJ_QSze3qVT7TtRsbtF7HAPPcd5MxFEh1-s2Psdyab31Heq_dq6VXLXNfCsJ_oqNz_9xORvMDFXdqVwXyTvfITzAL-hXXIS-3D9iivIwK7twHHwq-1OBIDVAehgc2qX6BrBeGoOAVY3n6MyAXpf6YfEB50DBEBYrdh1Iu",
    learnings: [
      "Mastered WebSocket protocol for instant teammate messaging.",
      "Designed algorithmic match scoring based on complementary tech stacks.",
    ],
    githubUrl: "https://github.com/Tanveer1907/HackConnect",
    liveUrl: "https://hackconnect.vercel.app",
  },
  taskflow: {
    title: "TASKFLOW",
    category: "Productivity Application",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    problem:
      "Overly cluttered task managers reduce focus and add management overhead for solo developers.",
    approach:
      "Built a ultra-minimalist, keyboard-first task flow tool with local storage persistence and workflow metrics.",
    architecture: [
      "State Management: Zustand reactive store with atomic selectors.",
      "Persistence: IndexedDB browser storage with instant sync fallback.",
    ],
    interfaceImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGd8LQRwpkhbwbW98Zz9D-HWZFHvw3um73nBfMDo3cxOjX8p7TQoFTktkEd8yjKAeMZgKzZvLUIwT7rIIXJ_QSze3qVT7TtRsbtF7HAPPcd5MxFEh1-s2Psdyab31Heq_dq6VXLXNfCsJ_oqNz_9xORvMDFXdqVwXyTvfITzAL-hXXIS-3D9iivIwK7twHHwq-1OBIDVAehgc2qX6BrBeGoOAVY3n6MyAXpf6YfEB50DBEBYrdh1Iu",
    learnings: [
      "Deep understanding of client-side caching and offline-first PWA techniques.",
    ],
    githubUrl: "https://github.com/Tanveer1907/TaskFlow",
    liveUrl: "https://taskflow.vercel.app",
  },
};

export default function ProjectDetailModal({
  projectId,
  onClose,
}: ProjectDetailModalProps) {
  const project = projectId ? PROJECTS_DATA[projectId] || PROJECTS_DATA["chitkara-diaries"] : null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#0A0A09]/95 backdrop-blur-md text-[#e6e2df] overflow-y-auto p-6 md:p-16 flex flex-col justify-between"
        >
          <div className="max-w-4xl mx-auto w-full space-y-12">
            {/* Header Navigation */}
            <div className="flex justify-between items-center border-b border-subtle pb-6">
              <button
                onClick={onClose}
                className="group flex items-center gap-2 text-xs font-label-caps text-[#cac6bf] hover:text-[#f5eee0] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm transform group-hover:-translate-x-1 transition-transform">
                  arrow_back
                </span>
                <span>BACK TO WORK</span>
              </button>
              <div className="font-mono-data text-xs text-[#949087]">
                CASE STUDY // {project.title}
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <span className="font-label-caps text-xs text-[#949087] block mb-2">
                {project.category}
              </span>
              <h1 className="font-hero-display text-4xl sm:text-6xl text-[#f5eee0] uppercase mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-subtle rounded font-mono-data text-xs text-[#cac6bf]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Screenshot Visual */}
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-subtle bg-[#121110]">
              <img
                src={project.interfaceImage}
                alt={`${project.title} interface preview`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Section: The Problem */}
            <div className="border-t border-subtle pt-8 space-y-4">
              <span className="font-mono-data text-xs text-[#949087] block">
                01 // THE PROBLEM
              </span>
              <h2 className="font-headline-md text-[#f5eee0]">
                Identifying the Core Constraint
              </h2>
              <p className="font-body-lg text-[#cac6bf] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Section: My Approach */}
            <div className="border-t border-subtle pt-8 space-y-4">
              <span className="font-mono-data text-xs text-[#949087] block">
                02 // MY APPROACH
              </span>
              <h2 className="font-headline-md text-[#f5eee0]">
                Engineering the Solution
              </h2>
              <p className="font-body-lg text-[#cac6bf] leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Section: System Architecture */}
            <div className="border-t border-subtle pt-8 space-y-6">
              <span className="font-mono-data text-xs text-[#949087] block">
                03 // SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-headline-md text-[#f5eee0]">
                Architectural Breakdown
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-subtle rounded bg-[#121110] font-body-md text-[#cac6bf]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Section: What I Learned */}
            <div className="border-t border-subtle pt-8 space-y-4">
              <span className="font-mono-data text-xs text-[#949087] block">
                04 // WHAT I LEARNED
              </span>
              <h2 className="font-headline-md text-[#f5eee0]">
                Engineering Insights &amp; Takeaways
              </h2>
              <ul className="space-y-3 font-body-md text-[#cac6bf] list-disc list-inside">
                {project.learnings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Links & CTA */}
            <div className="border-t border-subtle pt-8 pb-12 flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-label-caps text-xs text-[#f5eee0] border-b border-[#f5eee0] pb-1 hover:text-[#cac6bf] hover:border-[#cac6bf] transition-colors"
                >
                  <span>GITHUB REPOSITORY</span>
                  <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-label-caps text-xs text-[#f5eee0] border-b border-[#f5eee0] pb-1 hover:text-[#cac6bf] hover:border-[#cac6bf] transition-colors"
                >
                  <span>LIVE PROJECT</span>
                  <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="font-label-caps text-xs text-[#949087] hover:text-[#f5eee0] transition-colors cursor-pointer"
              >
                CLOSE CASE STUDY ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
