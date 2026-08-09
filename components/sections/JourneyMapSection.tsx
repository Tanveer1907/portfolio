"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const MILESTONES = [
  {
    year: "2022",
    title: "STARTED PROGRAMMING",
    details:
      "C++ and Data Structures. Focused on understanding algorithms, memory management and computational problem solving.",
    scrollRange: [0.10, 0.26] as [number, number],
  },
  {
    year: "2023",
    title: "EXPLORED WEB DEVELOPMENT",
    details:
      "Built my first full-stack applications. Developed deep understanding of client-server architecture, REST APIs and relational databases.",
    scrollRange: [0.26, 0.42] as [number, number],
  },
  {
    year: "2024",
    title: "BUILDING & LEARNING",
    details:
      "Engaged in real production projects with React, Node.js, Express, MySQL and modern frontend & backend web tooling.",
    scrollRange: [0.42, 0.58] as [number, number],
  },
  {
    year: "2025",
    title: "BUILDING SYSTEMS",
    details:
      "Transforming complex requirements and academic projects into highly performant, accessible applications people can actually use.",
    scrollRange: [0.58, 0.74] as [number, number],
  },
  {
    year: "2026",
    title: "GOING DEEPER",
    details:
      "Mastering core engineering depth — from low-level systems algorithms and state synchronization to scalable cloud micro-architectures.",
    scrollRange: [0.74, 0.90] as [number, number],
  },
];

export default function JourneyMapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 80%"],
  });

  // SVG Path progress line height mapping
  const pathHeight = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="w-full border-b border-subtle bg-[#0A0A09] py-32 px-6 md:px-24 xl:px-48 relative overflow-hidden"
    >
      <span className="font-mono-data text-[#949087] mb-12 block">
        05 / THE JOURNEY
      </span>

      {/* Header */}
      <Reveal className="flex flex-col lg:flex-row justify-between mb-32 gap-12">
        <h2 className="font-headline-lg text-[#F1F0EB] uppercase tracking-wide text-5xl md:text-6xl">
          The<br />Journey
        </h2>
        <p className="font-body-md text-[#cac6bf] max-w-md lg:text-right self-end text-lg leading-relaxed">
          A real-time timeline of continuous growth, engineering milestones, and systems exploration.
        </p>
      </Reveal>

      {/* Scroll-Driven Timeline Map */}
      <div className="relative w-full max-w-3xl mx-auto py-12 pl-6 md:pl-16">
        {/* Base Static Line */}
        <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-[1px] bg-subtle" />

        {/* Scroll-Animated Active Line */}
        <motion.div
          style={{ height: reduced ? "100%" : pathHeight }}
          className="absolute left-[11px] md:left-[19px] top-0 w-[2px] bg-[#F1F0EB] origin-top z-10"
        />

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-20 md:gap-28">
          {MILESTONES.map((item) => (
            <MilestoneItem
              key={item.year}
              item={item}
              scrollYProgress={scrollYProgress}
              reduced={reduced ?? false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MilestoneItem({
  item,
  scrollYProgress,
  reduced,
}: {
  item: (typeof MILESTONES)[0];
  scrollYProgress: MotionValue<number>;
  reduced: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Compute active status dynamically based on scroll progress
  const opacityVal = useTransform(
    scrollYProgress,
    [item.scrollRange[0] - 0.05, item.scrollRange[0], item.scrollRange[1]],
    [0.35, 1, 0.75]
  );

  const markerBg = useTransform(
    scrollYProgress,
    [item.scrollRange[0] - 0.02, item.scrollRange[0]],
    ["#0A0A09", "#F1F0EB"]
  );

  return (
    <motion.div
      style={{ opacity: reduced ? 1 : opacityVal }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start pl-8 md:pl-16 group p-4 md:p-6 rounded-lg border border-transparent hover:border-subtle hover:bg-[#121110]/60 transition-all duration-300 cursor-pointer"
    >
      {/* Interactive Node Marker */}
      <div className="absolute -left-[3px] md:left-[11px] top-6 flex items-center justify-center z-20">
        <motion.div
          animate={{
            scale: isHovered ? 1.35 : 1,
            backgroundColor: isHovered ? "#F1F0EB" : undefined,
          }}
          transition={{ duration: 0.2 }}
          style={{ backgroundColor: reduced ? "#F1F0EB" : markerBg }}
          className="w-4 h-4 rotate-45 border border-[#F1F0EB] group-hover:bg-[#F1F0EB] transition-colors duration-300 shadow-md"
        />
      </div>

      {/* Year Label */}
      <div className="font-mono-data text-xl text-[#F1F0EB] w-24 flex-shrink-0 pt-0.5 tracking-wider font-semibold group-hover:text-white transition-colors">
        {item.year}
      </div>

      {/* Title & Details */}
      <div className="flex flex-col gap-3 max-w-lg">
        <h3 className="font-headline-md text-[#F1F0EB] text-2xl uppercase tracking-wide group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="font-body-md text-[#cac6bf] text-base leading-relaxed group-hover:text-[#F1F0EB] transition-colors">
          {item.details}
        </p>
      </div>
    </motion.div>
  );
}
