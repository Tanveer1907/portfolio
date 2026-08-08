"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, BookOpen, Layers, Terminal } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building responsive web applications using React, Next.js, Node.js, and TypeScript.",
    },
    {
      icon: Layers,
      title: "System Thinking",
      description: "Focusing on clean architecture, maintainable codebases, and performant data structures.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Currently pursuing B.Tech in Computer Science and exploring system design & open source.",
    },
  ];

  const focusAreas = [
    "System Design Primitives",
    "DevOps & Containerization",
    "AI / ML Fundamentals",
    "Open Source Contributions",
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#F1EDE3]/12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between text-[11px] font-geist font-medium tracking-widest text-[#A6A197]">
              <span className="text-[#C86B4A] flex items-center gap-2">
                <span>01 // OBSERVATIONS</span>
              </span>
              <span className="opacity-60">[ LOG REF 01 ]</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair text-4xl sm:text-5xl font-medium text-[#F1EDE3] tracking-tight"
            >
              A developer driven by curiosity.
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="font-inter text-base text-[#A6A197] font-light leading-relaxed"
          >
            I&apos;m Tanveer Singh, a Computer Science student passionate about turning ideas into clean, functional software products. I enjoy understanding how software works under the hood and crafting intuitive interfaces for real users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="p-5 rounded-xl bg-[#181815] border border-[#F1EDE3]/12 space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-geist text-[#F1EDE3] font-semibold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-[#C86B4A]" />
              <span>Currently Exploring</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-geist text-[#F1EDE3]/90">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C86B4A]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Key Philosophy Cards */}
        <div className="lg:col-span-7 space-y-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 + 0.12 * idx, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-xl bg-[#181815] border border-[#F1EDE3]/12 hover:border-[#F1EDE3]/18 transition-colors flex items-start gap-5 group"
            >
              <div className="p-3 rounded-lg bg-[#1D1C18] border border-[#F1EDE3]/12 text-[#F1EDE3] group-hover:border-[#C86B4A]/40 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-playfair text-xl font-medium text-[#F1EDE3]">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-[#A6A197] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
