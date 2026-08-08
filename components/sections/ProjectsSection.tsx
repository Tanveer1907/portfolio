"use client";

import React from "react";


interface ProjectsSectionProps {
  onOpenProjectDetail: (projectId: string) => void;
  onOpenAllProjects: () => void;
}

export default function ProjectsSection({
  onOpenProjectDetail,
  onOpenAllProjects,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="w-full flex flex-col border-b border-subtle bg-[#0A0A09]">
      {/* Section Header */}
      <div className="w-full p-6 md:px-24 xl:px-48 pt-32 pb-16 border-b border-subtle">
        <span className="font-mono-data text-[#949087] mb-8 block">
          02 / PROJECTS
        </span>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-12">
          <div>
            <h2 className="font-headline-lg text-[#F1F0EB] uppercase tracking-wide text-5xl md:text-6xl">
              Selected<br />Works
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
            <p className="font-body-md text-[#cac6bf] text-lg">
              Things I&apos;ve built that solve real problems or were fun to experiment with. Focus on systems and architecture.
            </p>
            <button
              onClick={onOpenAllProjects}
              className="group flex items-center gap-2 text-xs font-label-caps text-[#cac6bf] hover:text-[#F1F0EB] transition-colors cursor-pointer"
            >
              <span>VIEW ALL PROJECTS</span>
              <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Case Study 1: Chitkara Diaries */}
      <div className="w-full flex flex-col lg:flex-row min-h-[85vh] group">
        {/* Large Preview Area */}
        <div
          onClick={() => onOpenProjectDetail("chitkara-diaries")}
          className="w-full lg:w-2/3 p-6 md:p-16 lg:p-24 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-subtle bg-[#0C0C0B] relative overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F1F0EB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-subtle shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
            <img
              alt="Chitkara Diaries Dashboard"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGd8LQRwpkhbwbW98Zz9D-HWZFHvw3um73nBfMDo3cxOjX8p7TQoFTktkEd8yjKAeMZgKzZvLUIwT7rIIXJ_QSze3qVT7TtRsbtF7HAPPcd5MxFEh1-s2Psdyab31Heq_dq6VXLXNfCsJ_oqNz_9xORvMDFXdqVwXyTvfITzAL-hXXIS-3D9iivIwK7twHHwq-1OBIDVAehgc2qX6BrBeGoOAVY3n6MyAXpf6YfEB50DBEBYrdh1Iu"
            />
          </div>
        </div>

        {/* Info Area */}
        <div className="w-full lg:w-1/3 p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-[#0A0A09]">
          <span className="font-label-caps text-[#949087] mb-6 tracking-widest text-xs">
            FEATURED PROJECT
          </span>
          <h3
            onClick={() => onOpenProjectDetail("chitkara-diaries")}
            className="font-headline-md text-[#F1F0EB] hover:text-white transition-colors mb-8 text-4xl uppercase tracking-wide cursor-pointer"
          >
            CHITKARA DIARIES
          </h3>
          <p className="font-body-md text-[#cac6bf] mb-12 text-lg leading-relaxed">
            Campus information system built to help students discover events, clubs and resources in one place. Engineered with a scalable microservices architecture.
          </p>

          <div className="flex flex-col gap-6 mb-16 border-l border-subtle pl-8">
            <div>
              <span className="font-label-caps text-[#949087] block mb-2 tracking-widest text-xs">
                ROLE
              </span>
              <span className="font-body-md text-[#F1F0EB] text-lg">
                Full Stack Developer
              </span>
            </div>
            <div>
              <span className="font-label-caps text-[#949087] block mb-2 tracking-widest text-xs">
                TECH STACK
              </span>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="font-mono-data text-[#cac6bf]">React</span>
                <span className="text-[#949087]">/</span>
                <span className="font-mono-data text-[#cac6bf]">Node.js</span>
                <span className="text-[#949087]">/</span>
                <span className="font-mono-data text-[#cac6bf]">MySQL</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenProjectDetail("chitkara-diaries")}
            className="group/btn flex items-center gap-4 w-fit border-b border-transparent hover:border-[#F1F0EB] pb-2 transition-all cursor-pointer"
          >
            <span className="font-label-caps text-[#cac6bf] group-hover/btn:text-[#F1F0EB] transition-colors tracking-widest text-xs">
              VIEW CASE STUDY
            </span>
            <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover/btn:text-[#F1F0EB] transition-all transform group-hover/btn:translate-x-2">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
