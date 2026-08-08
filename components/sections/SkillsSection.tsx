"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section id="skills" className="w-full border-b border-subtle bg-[#0C0C0B] py-32 px-6 md:px-24 xl:px-48">
      <span className="font-mono-data text-[#949087] mb-12 block">
        03 / ENGINEERING TOOLKIT
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16 pt-12">
        {TOOLKIT_DATA.map((col, colIdx) => (
          <div key={col.category} className="flex flex-col gap-12">
            <h3 className="font-label-caps text-[#949087] border-b border-subtle pb-6 tracking-[0.3em] uppercase text-xs">
              {col.category}
            </h3>

            <ul className="flex flex-col gap-8">
              {col.items.map((item, itemIdx) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (colIdx * 4 + itemIdx) * 0.05 }}
                  className="flex items-center justify-between group cursor-default"
                >
                  <span className="font-body-lg text-[#F1F0EB] group-hover:translate-x-2 transition-transform duration-300">
                    {item.name}
                  </span>
                  <span className="font-mono-data text-[#949087] text-xs uppercase tracking-widest">
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
