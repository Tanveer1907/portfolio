import React from "react";

export const SkillsChapter: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col md:flex-row bg-[#fef9ef] text-[#1d1c16] overflow-hidden rounded-sm border border-[#c4c7c7]/40 shadow-notebook">
      {/* Physical Notebook Spine */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-3.5 bg-gradient-to-r from-[#dedad0] via-[#e7e2d8] to-[#dedad0] -translate-x-1/2 z-20" />
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#c4c7c7] -translate-x-1/2 z-30 opacity-50" />
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1.5 bg-[#1c1b1b] -translate-x-1/2 z-40 shadow-sm" />

      {/* LEFT PAGE: APTITUDE SPREAD */}
      <section className="w-full md:w-1/2 h-full page-gradient relative p-6 sm:p-10 md:p-12 bg-dot-pattern bg-dot spine-shadow rounded-l-lg border-r border-[#c4c7c7]/30 flex flex-col justify-between overflow-hidden">
        {/* Washi Tape Detail */}
        <div className="absolute -top-3 left-8 w-20 h-5 washi-tape shadow-tape z-10" />

        <div>
          {/* Page Header */}
          <header className="mb-6 border-b border-[#c4c7c7]/50 pb-3 flex justify-between items-end">
            <div>
              <p className="font-label-code text-xs text-[#6b5e2a] tracking-widest uppercase mb-1 font-bold">
                Build Log // Vol. 01
              </p>
              <h1 className="font-headline-md text-xl sm:text-2xl font-bold text-[#1d1c16] tracking-tight">
                APTITUDE SPREAD
              </h1>
            </div>
            <div className="font-label-code text-[10px] border border-[#c4c7c7] px-2 py-0.5 hand-drawn-border text-[#444748]">
              ASSESSMENT v2.4
            </div>
          </header>

          <div className="space-y-6">
            {/* Languages Section */}
            <div>
              <h2 className="font-headline-md text-base sm:text-lg font-bold mb-3 flex items-center space-x-2 ink-text">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>
                  code
                </span>
                <span>Languages</span>
              </h2>
              <div className="space-y-3 pl-3 border-l-2 border-[#c4c7c7]/30">
                {/* TypeScript */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-code text-xs font-bold">TypeScript</span>
                    <span className="font-annotation text-sm text-[#1d1c16] font-bold -rotate-2">Fluent</span>
                  </div>
                  <div className="h-3 w-full bg-[#e7e2d8] rounded-sm overflow-hidden hand-drawn-border">
                    <div className="h-full w-[90%] progress-bar-sketch" />
                  </div>
                </div>
                {/* Go */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-code text-xs font-bold">Go</span>
                    <span className="font-annotation text-sm text-[#1d1c16] font-bold -rotate-1">Proficient</span>
                  </div>
                  <div className="h-3 w-full bg-[#e7e2d8] rounded-sm overflow-hidden hand-drawn-border">
                    <div className="h-full w-[75%] progress-bar-sketch" />
                  </div>
                </div>
                {/* Python */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-code text-xs font-bold">Python</span>
                    <span className="font-annotation text-sm text-[#1d1c16] font-bold rotate-1">Working Knowledge</span>
                  </div>
                  <div className="h-3 w-full bg-[#e7e2d8] rounded-sm overflow-hidden hand-drawn-border">
                    <div className="h-full w-[60%] progress-bar-sketch" />
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks Section */}
            <div>
              <h2 className="font-headline-md text-base sm:text-lg font-bold mb-3 flex items-center space-x-2 ink-text">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>
                  layers
                </span>
                <span>Frameworks</span>
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {/* React Card */}
                <div className="p-3 border border-[#c4c7c7]/50 hand-drawn-border bg-[#f8f3e9] hover:bg-[#f2ede3] transition-colors cursor-pointer relative group">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[#747878] opacity-70">
                    <span className="material-symbols-outlined text-sm">attach_file</span>
                  </div>
                  <h3 className="font-label-code text-xs font-bold mb-1 text-center mt-1">React</h3>
                  <p className="font-body-sm text-[10px] text-[#444748] text-center leading-tight">Hooks, Context, Performance</p>
                </div>
                {/* Next.js Card */}
                <div className="p-3 border border-[#c4c7c7]/50 hand-drawn-border bg-[#f8f3e9] hover:bg-[#f2ede3] transition-colors cursor-pointer relative group">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[#747878] opacity-70">
                    <span className="material-symbols-outlined text-sm">attach_file</span>
                  </div>
                  <h3 className="font-label-code text-xs font-bold mb-1 text-center mt-1">Next.js</h3>
                  <p className="font-body-sm text-[10px] text-[#444748] text-center leading-tight">App Router, SSR/SSG, Middleware</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Footer/Numbering */}
        <div className="mt-4 flex justify-between items-end border-t border-[#c4c7c7]/30 pt-2">
          <div className="font-annotation text-base text-[#1d1c16] font-bold -rotate-2">Focus: Deep Work</div>
          <div className="font-label-code text-xs text-[#444748]">04</div>
        </div>
      </section>

      {/* RIGHT PAGE: INFRASTRUCTURE */}
      <section className="w-full md:w-1/2 h-full page-gradient-right relative p-6 sm:p-10 md:p-12 bg-dot-pattern bg-dot spine-shadow-right rounded-r-lg flex flex-col justify-between overflow-hidden">
        {/* Sticky Note Layer */}
        <aside className="absolute top-4 -right-2 w-40 p-3 sticky-note z-30 font-annotation text-xs text-[#70622e] rounded-xs hidden sm:block">
          <div className="flex items-center space-x-1 mb-1 border-b border-[#70622e]/20 pb-0.5">
            <span className="material-symbols-outlined text-xs">lightbulb</span>
            <strong className="font-label-code text-[10px] uppercase">Focus Area</strong>
          </div>
          <p className="leading-tight text-[11px]">
            Currently Exploring: <br />
            <span className="font-bold underline decoration-wavy underline-offset-2">LLM Orchestration</span>
          </p>
        </aside>

        <div>
          {/* Page Header */}
          <header className="mb-4 border-b border-[#c4c7c7]/50 pb-3 flex justify-between items-end">
            <div>
              <p className="font-label-code text-xs text-[#444748] tracking-widest uppercase mb-1 font-bold">
                {"// Chapter 02"}
              </p>
              <h1 className="font-headline-md text-xl sm:text-2xl font-bold text-[#1d1c16] tracking-tight">
                INFRASTRUCTURE
              </h1>
            </div>
            <div className="w-14 h-3.5 washi-tape absolute top-8 right-16 opacity-60" />
          </header>

          <p className="font-body-lg text-xs sm:text-sm ink-text mb-4 max-w-xs leading-relaxed">
            The foundation matters. Building scalable, resilient systems requires a strong grasp of deployment and orchestration primitives.
          </p>

          {/* Technical Schematic Area */}
          <div className="relative p-4 border-2 border-dashed border-[#c4c7c7]/60 rounded-xl bg-[#f8f3e9]/50 hand-drawn-border mt-2 min-h-[220px]">
            <span className="absolute -top-2.5 left-3 bg-[#fef9ef] px-1.5 font-label-code text-[9px] text-[#444748]">
              SCHEMATIC_VIEW
            </span>

            {/* Nodes Grid */}
            <div className="relative h-full w-full flex items-center justify-between py-2">
              {/* Left Column: Docker & GitOps */}
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-[#fef9ef] rounded-full hand-drawn-border flex items-center justify-center shadow-xs relative">
                  <span className="font-label-code text-[10px] font-bold">Docker</span>
                </div>
                <div className="w-14 h-14 bg-[#fef9ef] rounded-full hand-drawn-border flex items-center justify-center shadow-xs relative">
                  <span className="font-label-code text-[10px] font-bold">GitOps</span>
                </div>
              </div>

              {/* Center Column: K8s */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#001c37] text-white rounded-lg hand-drawn-border flex flex-col items-center justify-center shadow-md rotate-[-2deg]">
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                  <span className="font-label-code text-[10px] font-bold">K8s</span>
                </div>
              </div>

              {/* Right Column: AWS */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#fef9ef] border-2 border-[#1d1c16] rounded-xl hand-drawn-border flex flex-col items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-lg">cloud</span>
                  <span className="font-label-code text-[10px] font-bold">AWS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code Snippet Insert */}
          <div className="mt-3 p-2.5 bg-white rounded-lg shadow-inner font-label-code text-[10px] relative transform rotate-1 border border-[#c4c7c7]/30">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-2.5 washi-tape" />
            <pre className="w-full text-[#1d1c16] opacity-80 leading-snug overflow-x-auto">
              <code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: build-log-api
spec:
  replicas: 3`}</code>
            </pre>
          </div>
        </div>

        {/* Page Footer/Numbering */}
        <div className="mt-4 flex justify-between items-end border-t border-[#c4c7c7]/30 pt-2 font-label-code text-xs text-[#444748]">
          <div>05</div>
          <div className="font-annotation text-base text-[#1d1c16] font-bold rotate-2">Commit: abc123f</div>
        </div>
      </section>
    </div>
  );
};

export default SkillsChapter;
