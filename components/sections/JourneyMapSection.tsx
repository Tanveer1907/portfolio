"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const MILESTONES = [
  {
    year: "2022",
    title: "STARTED PROGRAMMING",
    details:
      "C++ and Data Structures. Focused on understanding algorithms, memory and problem solving.",
    scrollRange: [0.12, 0.28] as [number, number],
  },
  {
    year: "2023",
    title: "EXPLORED WEB DEVELOPMENT",
    details:
      "Built my first full-stack projects. Started understanding client-server architecture, APIs and databases.",
    scrollRange: [0.28, 0.44] as [number, number],
  },
  {
    year: "2024",
    title: "BUILDING & LEARNING",
    details:
      "Working on real projects with React, Node.js, MySQL and modern web tooling.",
    scrollRange: [0.44, 0.60] as [number, number],
  },
  {
    year: "2025",
    title: "BUILDING SYSTEMS",
    details:
      "Turning ideas and academic projects into things people can actually use.",
    scrollRange: [0.60, 0.76] as [number, number],
  },
  {
    year: "2026",
    title: "GOING DEEPER",
    details:
      "Learning how systems work underneath the interface — from algorithms to architecture.",
    scrollRange: [0.76, 0.92] as [number, number],
  },
];

export default function JourneyMapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 80%"],
  });

  // SVG Path progress line mapping
  const pathHeight = useTransform(scrollYProgress, [0.08, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="w-full border-b border-subtle bg-[#0A0A09] py-32 px-6 md:px-24 xl:px-48 relative overflow-hidden"
    >
      <span className="font-mono-data text-[#949087] mb-12 block">
        04 / THE JOURNEY
      </span>

      {/* Header */}
      <Reveal className="flex flex-col lg:flex-row justify-between mb-32 gap-12">
        <h2 className="font-headline-lg text-[#F1F0EB] uppercase tracking-wide text-5xl md:text-6xl">
          The<br />Journey
        </h2>
        <p className="font-body-md text-[#cac6bf] max-w-md lg:text-right self-end text-lg">
          A timeline of learning, building, and exploring systems architecture.
        </p>
      </Reveal>

      {/* Scroll-Driven Timeline Map */}
      <div className="relative w-full max-w-3xl mx-auto py-12 pl-6 md:pl-16">
        {/* Base Static Line */}
        <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-[1px] bg-subtle" />

        {/* Scroll-Animated Active Line */}
        <motion.div
          style={{ height: reduced ? "100%" : pathHeight }}
          className="absolute left-[11px] md:left-[19px] top-0 w-[2px] bg-[#F1F0EB] origin-top shadow-[0_0_10px_rgba(241,240,235,0.3)] z-10"
        />

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-24 md:gap-32">
          {MILESTONES.map((item) => {
            return (
              <MilestoneItem
                key={item.year}
                item={item}
                scrollYProgress={scrollYProgress}
                reduced={reduced ?? false}
              />
            );
          })}
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
  // Compute active status dynamically based on scroll progress
  const opacityVal = useTransform(
    scrollYProgress,
    [item.scrollRange[0] - 0.05, item.scrollRange[0], item.scrollRange[1]],
    [0.35, 1, 0.75]
  );

  return (
    <motion.div
      style={{ opacity: reduced ? 1 : opacityVal }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start pl-8 md:pl-16 group"
    >
      {/* Interactive Node Marker */}
      <div className="absolute -left-[3px] md:left-[11px] top-2 flex items-center justify-center z-20">
        <motion.div
          animate={reduced ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 rotate-45 border border-[#F1F0EB] bg-[#0A0A09] group-hover:bg-[#F1F0EB] group-hover:shadow-[0_0_12px_rgba(241,240,235,0.8)] transition-all duration-300"
        />
      </div>

      {/* Year Label */}
      <div className="font-mono-data text-xl text-[#F1F0EB] w-24 flex-shrink-0 pt-0.5 tracking-wider font-semibold">
        {item.year}
      </div>

      {/* Title & Details */}
      <div className="flex flex-col gap-3 max-w-lg">
        <h3 className="font-headline-md text-[#F1F0EB] text-2xl uppercase tracking-wide group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="font-body-md text-[#cac6bf] text-base leading-relaxed">
          {item.details}
        </p>
      </div>
    </motion.div>
  );
}
