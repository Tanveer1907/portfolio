"use client";

import React from "react";
import { motion } from "framer-motion";

const JOURNEY_ITEMS = [
  {
    year: "2022",
    title: "Started Programming",
    details: "C++ / Data Structures & Algorithms fundamentals.",
  },
  {
    year: "2023",
    title: "Explored Web Development",
    details: "Built first full-stack web applications and interactive UIs.",
  },
  {
    year: "2024",
    title: "Building & Learning",
    details: "React / Backend engineering / Database Systems (MySQL & MongoDB).",
  },
  {
    year: "2025–2026",
    title: "Becoming",
    details: "More complex systems, campus platforms, hackathons, and software experiments.",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="flex flex-col w-full border-b border-subtle">
      {/* Section Header */}
      <div className="p-6 md:p-12 pb-6">
        <span className="font-mono-data text-[#949087] block mb-2">04</span>
        <h2 className="font-headline-lg text-[#f5eee0] uppercase tracking-wide">
          JOURNEY
        </h2>
        <p className="font-body-md text-[#cac6bf] mt-4 max-w-md">
          A timeline of my learning, experiences and everything in between.
        </p>
      </div>

      {/* Minimal Vertical Timeline */}
      <div className="p-6 md:p-12 border-t border-subtle relative">
        <div className="absolute left-6 md:left-12 top-12 bottom-12 w-[1px] bg-subtle" />

        <div className="space-y-12 pl-8 md:pl-12 relative z-10">
          {JOURNEY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#0A0A09] border border-[#cac6bf] group-hover:border-[#f5eee0] group-hover:bg-[#f5eee0] transition-colors" />

              <span className="font-mono-data text-xs text-[#949087] block mb-1">
                {item.year}
              </span>
              <h3 className="font-headline-md text-[#f5eee0] group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="font-body-md text-[#cac6bf] mt-1 max-w-lg">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
