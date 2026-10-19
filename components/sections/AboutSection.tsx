"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

interface AboutSectionProps {
  onOpenExpandedAbout: () => void;
}

export default function AboutSection({ onOpenExpandedAbout }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-transparent text-[#F1F0EB] relative overflow-hidden flex flex-col justify-center pl-24 sm:pl-28 md:pl-36 lg:pl-40 xl:pl-44 pr-6 sm:pr-10 md:pr-16 lg:pr-20 xl:pr-24 scroll-mt-6"
    >
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-3">
            <span className="font-label-caps text-[#39C3EF] text-xs sm:text-sm tracking-[0.3em] uppercase">
              02 // ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#F1F0EB] uppercase">
              Know More About Me.
            </h2>

          </div>
        }
      >
        <div className="h-full w-full overflow-hidden rounded-2xl bg-[#141413]/70 backdrop-blur-md border border-white/10 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-left relative shadow-2xl">
          {/* Left: Bio & Details */}
          <div className="flex flex-col justify-center gap-5 w-full md:w-1/2 z-10">
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#39C3EF]/10 border border-[#39C3EF]/30 text-[#39C3EF] text-xs font-mono tracking-widest uppercase">
              SOFTWARE DEVELOPER & CS STUDENT
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F1F0EB] leading-tight">
              Crafting scalable systems & intuitive digital experiences.
            </h3>

            <p className="text-[#cac6bf] text-sm md:text-base leading-relaxed">
              Computer Science student passionate about building robust, scalable architectures and learning by doing. My approach combines deep technical curiosity with an eye for refined, functional design.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["React / Next.js", "TypeScript", "Python", "System Architecture", "Web Audio / 3D"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[#cac6bf] text-xs font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button
              onClick={onOpenExpandedAbout}
              className="mt-2 group flex items-center gap-3 w-fit cursor-pointer border-b border-subtle hover:border-[#F1F0EB] pb-1 transition-all"
            >
              <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-xs tracking-[0.2em]">
                FULL PROFILE & JOURNAL
              </span>
              <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#F1F0EB] transition-transform duration-300 transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Right: Featured Developer Image Showcase */}
          <div className="w-full md:w-1/2 h-full min-h-[240px] md:min-h-[360px] rounded-xl overflow-hidden relative group border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
              alt="Developer workspace"
              className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#cac6bf] font-mono">
              <span>TANVEER SINGH</span>
              <span>BASED IN INDIA</span>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
