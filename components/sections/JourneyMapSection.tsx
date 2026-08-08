"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MILESTONES = [
  {
    year: "2022",
    title: "Started Programming",
    details:
      "C++ and Data Structures. Focused on understanding memory management and algorithmic efficiency.",
    offsetClass: "pl-16 md:pl-24",
    nodeLeft: "left-8 md:left-16",
    active: false,
  },
  {
    year: "2023",
    title: "Explored Web Development",
    details:
      "Built my first full stack projects. Learned the mechanics of client-server architecture, APIs, and database design.",
    offsetClass: "pl-12 md:pl-16",
    nodeLeft: "left-4 md:left-8",
    active: false,
  },
  {
    year: "2024",
    title: "Building & Learning",
    details:
      "Working on real world projects and leveling up everyday. Deepening knowledge in system design and microservices.",
    offsetClass: "pl-20 md:pl-32",
    nodeLeft: "left-12 md:left-24",
    active: true,
  },
  {
    year: "2025",
    title: "Building Systems",
    details:
      "Focusing on distributed architecture, cloud infrastructure, and large-scale application design.",
    offsetClass: "pl-14 md:pl-20",
    nodeLeft: "left-6 md:left-12",
    active: false,
  },
  {
    year: "2026",
    title: "Becoming",
    details:
      "Mastering the craft. Designing resilient systems that scale elegantly.",
    offsetClass: "pl-18 md:pl-28",
    nodeLeft: "left-10 md:left-20",
    active: false,
  },
];

export default function JourneyMapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="w-full border-b border-subtle bg-[#0A0A09] py-32 px-6 md:px-24 xl:px-48"
    >
      <span className="font-mono-data text-[#949087] mb-12 block">
        04 / TIMELINE
      </span>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between mb-32 gap-12">
        <h2 className="font-headline-lg text-[#F1F0EB] uppercase tracking-wide text-5xl md:text-6xl">
          The<br />Journey
        </h2>
        <p className="font-body-md text-[#cac6bf] max-w-md lg:text-right self-end text-lg">
          A timeline of learning, building, and exploring systems architecture.
        </p>
      </div>

      {/* Timeline Map Container */}
      <div className="relative w-full mx-auto py-12 md:w-[60%] lg:w-[50%] md:ml-24">
        {/* Static Base Grid Lines */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-subtle" />
        <div className="absolute left-0 top-12 w-16 h-[1px] bg-subtle" />
        <div className="absolute left-0 top-64 w-8 h-[1px] bg-subtle" />
        <div className="absolute left-0 top-[32rem] w-24 h-[1px] bg-subtle" />
        <div className="absolute left-0 top-[48rem] w-12 h-[1px] bg-subtle" />
        <div className="absolute left-0 top-[64rem] w-20 h-[1px] bg-subtle" />

        {/* Scroll-Animated Path Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-[2px] bg-[#F1F0EB] origin-top timeline-line shadow-[0_0_12px_rgba(241,240,235,0.4)] z-10"
        />

        {/* Nodes List */}
        <div className="relative flex flex-col gap-32">
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-start group relative ${item.offsetClass}`}
            >
              {/* Diamond Node */}
              <div
                className={`absolute ${item.nodeLeft} top-3 w-3 h-3 rotate-45 border border-[#F1F0EB] ${
                  item.active
                    ? "bg-[#F1F0EB] shadow-[0_0_15px_rgba(241,240,235,0.8)]"
                    : "bg-[#0A0A09] group-hover:bg-[#F1F0EB]"
                } transition-all duration-300 timeline-node z-20`}
              />

              <div
                className={`font-mono-data text-lg text-[#949087] w-24 flex-shrink-0 group-hover:text-[#F1F0EB] transition-colors timeline-node pt-1 ${
                  item.active ? "text-[#F1F0EB] font-bold" : ""
                }`}
              >
                {item.year}
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-headline-md text-[#F1F0EB] text-2xl uppercase tracking-wide group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-body-md text-[#cac6bf] max-w-md text-base leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
