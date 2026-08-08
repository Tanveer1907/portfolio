"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Database, Wrench, Layers } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      code: "CAT.01",
      title: "Languages",
      icon: Code,
      skills: ["TypeScript", "JavaScript", "Java", "C++", "Python"],
    },
    {
      code: "CAT.02",
      title: "Frontend",
      icon: Layers,
      skills: ["React", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
    },
    {
      code: "CAT.03",
      title: "Backend",
      icon: Terminal,
      skills: ["Node.js", "Express", "REST APIs", "WebSockets"],
    },
    {
      code: "CAT.04",
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQLite", "MongoDB"],
    },
    {
      code: "CAT.05",
      title: "Tools & Workflow",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Linux", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#F1EDE3]/12">
      <div className="max-w-3xl mb-16 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-geist font-medium tracking-widest text-[#A6A197]">
          <span className="text-[#C86B4A]">04 // TOOLKIT</span>
          <span className="opacity-60">[ LOG REF 04 ]</span>
        </div>
        <h2 className="font-playfair text-4xl sm:text-5xl font-medium text-[#F1EDE3] tracking-tight">
          Catalogued Toolkit
        </h2>
        <p className="font-inter text-base text-[#A6A197] font-light leading-relaxed">
          Technical inventory of languages, frameworks, databases, and developer tooling used throughout the logbook.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 * idx }}
            className="p-6 rounded-xl bg-[#181815] border border-[#F1EDE3]/12 hover:border-[#F1EDE3]/18 transition-colors flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#F1EDE3]/12 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1D1C18] border border-[#F1EDE3]/12 text-[#F1EDE3]">
                    <cat.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-playfair text-xl font-medium text-[#F1EDE3]">
                    {cat.title}
                  </h3>
                </div>
                <span className="font-geist text-[10px] font-semibold tracking-widest text-[#C86B4A]">
                  {cat.code}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[#1D1C18] border border-[#F1EDE3]/12 text-[#F1EDE3]/90 font-geist text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
