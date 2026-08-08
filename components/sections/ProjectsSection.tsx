"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Code, Layers, Sparkles } from "lucide-react";

interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageBg: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "hackconnect",
      num: "PROJECT 01",
      title: "HackConnect",
      subtitle: "Developer Matchmaking & Collaboration Platform",
      description:
        "A real-time collaborative platform designed for developers and hackathon participants to form teams, share ideas, and coordinate projects seamlessly during build competitions.",
      highlights: [
        "Real-time team chat and room messaging",
        "Skill-based developer matchmaking",
        "Project showcase and idea discovery portal",
      ],
      techStack: ["React", "Node.js", "WebSockets", "Express", "TailwindCSS"],
      githubUrl: "https://github.com/Tanveer1907",
      imageBg: "from-[#1D1C18] to-[#141412]",
    },
    {
      id: "chitkara-diaries",
      num: "PROJECT 02",
      title: "Chitkara Diaries",
      subtitle: "Digital Campus Portal & Student Community",
      description:
        "An interactive digital campus portal for Chitkara University students, providing a space to share stories, access community updates, and discover campus experiences.",
      highlights: [
        "Interactive story publishing & community feed",
        "Campus announcement & event index",
        "Responsive, modern editorial UI design",
      ],
      techStack: ["Next.js", "TypeScript", "React", "TailwindCSS", "Node.js"],
      githubUrl: "https://github.com/Tanveer1907",
      imageBg: "from-[#1D1C18] to-[#141412]",
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <section id="work" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#F1EDE3]/12">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center justify-between text-[11px] font-geist font-medium tracking-widest text-[#A6A197]">
            <span className="text-[#C86B4A]">03 // BUILDS</span>
            <span className="opacity-60">[ LOG REF 03 ]</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-6xl font-medium text-[#F1EDE3] tracking-tight">
            Case-Study Sheets
          </h2>
          <p className="font-inter text-base text-[#A6A197] font-light leading-relaxed">
            Detailed case studies of software applications built with an emphasis on clean logic, interactive usability, and real-world execution.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex gap-2 p-1.5 rounded-xl bg-[#181815] border border-[#F1EDE3]/12">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-4 py-2 rounded-lg font-geist text-xs font-medium transition-all cursor-pointer ${
                activeProjectIndex === idx
                  ? "bg-[#C86B4A] text-[#11110F] shadow-xs font-semibold"
                  : "text-[#A6A197] hover:text-[#F1EDE3]"
              }`}
            >
              {p.num}
            </button>
          ))}
        </div>
      </div>

      {/* Main Sticky Case-Study Sheet Showcase */}
      <div className="relative space-y-16">
        {projects.map((project, index) => {
          const isSelected = activeProjectIndex === index;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ top: `${80 + index * 24}px` }}
              className={`sticky rounded-2xl border transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-md ${
                isSelected
                  ? "bg-[#181815] border-[#F1EDE3]/18 z-20"
                  : "bg-[#181815]/95 border-[#F1EDE3]/12 z-10 hover:border-[#F1EDE3]/18"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Artwork Column */}
                <div
                  className={`lg:col-span-6 min-h-[320px] sm:min-h-[400px] bg-gradient-to-br ${project.imageBg} p-8 sm:p-12 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#F1EDE3]/12`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-geist text-xs font-semibold text-[#F1EDE3] tracking-widest uppercase px-3 py-1 rounded bg-[#11110F]/80 border border-[#F1EDE3]/12">
                      {project.num}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#A6A197]" />
                  </div>

                  {/* Project Artwork Canvas Mockup */}
                  <div className="my-auto py-8">
                    <div className="p-6 rounded-xl bg-[#11110F]/85 border border-[#F1EDE3]/12 space-y-4 shadow-lg backdrop-blur-xs">
                      <div className="flex items-center gap-2 border-b border-[#F1EDE3]/12 pb-3 text-[#A6A197]">
                        <Code className="w-4 h-4 text-[#C86B4A]" />
                        <span className="font-geist text-xs tracking-wider font-medium text-[#F1EDE3]">
                          {project.title} Architecture Preview
                        </span>
                      </div>
                      <div className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-geist text-[#A6A197]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C86B4A]" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-geist text-[#A6A197]">
                    <span>Case Study</span>
                    <span>{project.subtitle}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="font-geist text-xs font-medium text-[#C86B4A] uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                      <h3 className="font-playfair text-3xl sm:text-4xl font-medium text-[#F1EDE3]">
                        {project.title}
                      </h3>
                    </div>

                    <p className="font-inter text-sm sm:text-base text-[#A6A197] font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2 space-y-2">
                      <h4 className="font-geist text-xs font-semibold text-[#F1EDE3] uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs font-geist text-[#A6A197]">
                            <Layers className="w-3.5 h-3.5 text-[#C86B4A]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Pills & Action Button */}
                  <div className="space-y-6 pt-4 border-t border-[#F1EDE3]/12">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-[#1D1C18] border border-[#F1EDE3]/12 text-[#F1EDE3] font-geist text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent border border-[#F1EDE3]/18 hover:bg-[#F1EDE3]/[0.06] text-[#F1EDE3] font-geist text-xs font-medium uppercase tracking-wider transition-all"
                        >
                          <Github className="w-4 h-4 text-[#F1EDE3]" />
                          <span>View on GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
