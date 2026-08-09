"use client";

import React from "react";
import { HorizontalTimeline, TimelineEntry } from "@/components/ui/timeline";

const JOURNEY_TIMELINE: TimelineEntry[] = [
  {
    year: "2022",
    title: "Started Programming & Data Structures",
    content: (
      <div className="flex flex-col gap-3">
        <p>
          Initiated software engineering journey focusing on C++ and Data Structures. Focused on understanding algorithms, memory management, and computational problem solving.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            C++
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Data Structures
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Algorithms
          </span>
        </div>
      </div>
    ),
  },
  {
    year: "2023",
    title: "Explored Web Architecture & Full-Stack Development",
    content: (
      <div className="flex flex-col gap-3">
        <p>
          Built first full-stack applications. Developed deep understanding of client-server architecture, RESTful APIs, relational databases, and modern UI component patterns.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            React
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Node.js
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            MySQL
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Tailwind CSS
          </span>
        </div>
      </div>
    ),
  },
  {
    year: "2024",
    title: "Campus Platforms & Developer Tools",
    content: (
      <div className="flex flex-col gap-3">
        <p>
          Designed and built Chitkara Diaries, HackConnect, and TaskFlow. Engaged in production projects with React, Next.js, TypeScript, and state management tooling.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Next.js
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            TypeScript
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Express
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            MongoDB
          </span>
        </div>
      </div>
    ),
  },
  {
    year: "2025",
    title: "Systems Engineering & Design Systems",
    content: (
      <div className="flex flex-col gap-3">
        <p>
          Transforming complex engineering requirements into high-performance web engines, custom GSAP scroll locks, WebGL visual components, and accessible design systems.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Three.js
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            GSAP
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Framer Motion
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Design Systems
          </span>
        </div>
      </div>
    ),
  },
  {
    year: "2026",
    title: "Core Engineering & Autonomous AI Systems",
    content: (
      <div className="flex flex-col gap-3">
        <p>
          Mastering core engineering depth — from low-level systems algorithms and state synchronization to autonomous AI agent orchestration and cloud micro-architectures.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            AI SDKs
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Cloud Microservices
          </span>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
            Performance Optimization
          </span>
        </div>
      </div>
    ),
  },
];

export default function JourneyMapSection() {
  return (
    <section id="journey" className="w-full border-b border-subtle bg-[#0A0A09]">
      <HorizontalTimeline data={JOURNEY_TIMELINE} />
    </section>
  );
}
