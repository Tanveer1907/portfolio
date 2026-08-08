"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { EASING, DURATION } from "@/lib/animations/tokens";

const TOOLKIT_DATA = [
  {
    category: "LANGUAGES",
    items: [
      { name: "C++", status: "Proficient" },
      { name: "JavaScript", status: "Proficient" },
      { name: "TypeScript", status: "Intermediate" },
      { name: "SQL", status: "Intermediate" },
    ],
  },
  {
    category: "FRAMEWORKS",
    items: [
      { name: "React", status: "Advanced" },
      { name: "Node.js", status: "Advanced" },
      { name: "Express", status: "Intermediate" },
      { name: "Tailwind CSS", status: "Advanced" },
    ],
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", status: "Advanced" },
      { name: "Docker", status: "Familiar" },
      { name: "MySQL", status: "Intermediate" },
      { name: "VS Code", status: "Daily" },
    ],
  },
];

export default function SkillsSection() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="w-full border-b border-subtle bg-[#0C0C0B] py-32 px-6 md:px-24 xl:px-48">
      <Reveal staggerChildren={0.08}>
        <RevealItem>
          <span className="font-mono-data text-[#949087] mb-12 block">
            03 / ENGINEERING TOOLKIT
          </span>
        </RevealItem>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16 pt-12">
        {TOOLKIT_DATA.map((col, colIdx) => (
          <div key={col.category} className="flex flex-col gap-12">
            <Reveal delay={colIdx * 0.1}>
              <h3 className="font-label-caps text-[#949087] border-b border-subtle pb-6 tracking-[0.3em] uppercase text-xs">
                {col.category}
              </h3>
            </Reveal>

            <ul className="flex flex-col gap-8">
              {col.items.map((item, itemIdx) => (
                <motion.li
                  key={item.name}
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: DURATION.MEDIUM,
                    delay: (colIdx * 4 + itemIdx) * 0.06,
                    ease: EASING.editorial,
                  }}
                  className="flex items-center justify-between group cursor-default transition-all duration-300 hover:translate-x-1"
                >
                  <span className="font-body-lg text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="font-mono-data text-[#949087] group-hover:text-[#F1F0EB] text-xs uppercase tracking-widest transition-colors duration-300">
                    {item.status}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
