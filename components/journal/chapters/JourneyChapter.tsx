import React from "react";

export const JourneyChapter: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col md:flex-row bg-[#fef9ef] text-[#1d1c16] overflow-hidden rounded-sm border border-[#c4c7c7]/40 shadow-notebook">
      {/* LEFT PAGE: Chronology of Builds */}
      <section className="flex-1 h-full paper-texture relative p-6 sm:p-10 md:p-12 md:pr-14 border-r md:border-r-0 border-b md:border-b-0 border-[#c4c7c7]/20 flex flex-col justify-between overflow-hidden">
        <div>
          {/* Page Header */}
          <header className="flex justify-between items-center mb-6 border-b border-[#c4c7c7]/30 pb-3">
            <div className="font-label-code text-xs text-[#6b5e2a] tracking-wider font-bold">
              CHAPTER 02
            </div>
            <div className="font-label-code text-xs text-[#444748] border border-[#c4c7c7] px-2.5 py-0.5">
              V. 2.0.1
            </div>
          </header>

          <h1 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#1d1c16] mb-1 uppercase tracking-tight">
            Chronology of Builds
          </h1>
          <p className="font-handwriting text-lg text-[#1e3a8a] mb-6 -rotate-1 opacity-90 pl-1">
            Tracing the commit history of a developing mind.
          </p>

          {/* Timeline Container */}
          <div className="relative pl-5 border-l-2 border-[#747878]/30 space-y-6">
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-[#6b5e2a] border-2 border-[#fef9ef]" />
              <div className="font-label-code text-[11px] text-[#444748] mb-1 flex items-center gap-2">
                <span className="bg-[#ece8de] px-2 py-0.5 rounded text-[10px] border border-[#747878]/20 font-bold">
                  feat: init portfolio
                </span>
                <span className="opacity-60">2023-05-12</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-[#1d1c16] mb-1">
                The First Monolith
              </h3>
              <p className="font-body-sm text-xs text-[#444748] leading-relaxed">
                Built entirely in raw HTML/CSS. A sprawling single file that taught me the harsh reality of maintainability.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-[#fef9ef] border-2 border-[#747878]" />
              <div className="font-label-code text-[11px] text-[#444748] mb-1 flex items-center gap-2">
                <span className="bg-[#ece8de] px-2 py-0.5 rounded text-[10px] border border-[#747878]/20 font-bold">
                  refactor: extract components
                </span>
                <span className="opacity-60">2023-09-01</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-[#1d1c16] mb-1">
                Discovering React
              </h3>
              <p className="font-body-sm text-xs text-[#444748] leading-relaxed">
                Breaking the monolith into reusable pieces. State management still a mystery, but the mental model shifted.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number Left */}
        <div className="font-label-code text-xs text-[#444748] opacity-50 mt-4">
          02
        </div>
      </section>

      {/* The Spine (Center Gutter) */}
      <div className="hidden md:block w-10 h-full book-spine flex-shrink-0 relative z-10 border-l border-r border-[#c4c7c7]/10">
        {/* Ribbon Bookmark */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-[105%] bg-[#ba1a1a]/90 shadow-sm z-20" />
      </div>

      {/* RIGHT PAGE: Pivot Points */}
      <section className="flex-1 h-full paper-texture relative p-6 sm:p-10 md:p-12 md:pl-14 flex flex-col justify-between overflow-hidden">
        <div>
          <header className="flex justify-between items-center mb-6 border-b border-[#c4c7c7]/30 pb-3">
            <div className="font-label-code text-xs text-[#001c37] font-bold tracking-wider">
              {"// DESIGN DECISIONS"}
            </div>
          </header>

          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#1d1c16] mb-4 uppercase tracking-tight">
            Pivot Points
          </h2>

          {/* Diagram Sketch Area */}
          <div className="bg-[#f8f3e9] border border-[#c4c7c7]/50 p-4 rounded-sm mb-6 relative shadow-xs">
            {/* Washi Tape Graphic */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape -rotate-2" />
            <p className="font-handwriting text-lg text-[#1e3a8a] text-center mb-4 -rotate-1 opacity-90">
              Architecture Evolution
            </p>
            <div className="flex justify-between items-center px-2 font-label-code text-xs text-[#444748]">
              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-20 border-2 border-[#747878] rounded-sm flex flex-col justify-center gap-1.5 p-1.5 bg-[#fef9ef]">
                  <div className="h-3 border border-[#747878] rounded-[1px] w-full flex items-center px-1">
                    <div className="w-1 h-1 rounded-full bg-[#747878]" />
                  </div>
                  <div className="h-3 border border-[#747878] rounded-[1px] w-full flex items-center px-1">
                    <div className="w-1 h-1 rounded-full bg-[#747878]" />
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold">Monolith</span>
              </div>

              <div className="flex-1 px-2 text-center text-[#001c37] relative">
                <div className="h-[2px] bg-[#a3c9fc] w-full relative">
                  <div className="absolute right-0 -top-[3px] w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-[#a3c9fc]" />
                </div>
                <span className="bg-[#f8f3e9] px-1 relative -top-2.5 text-[#1f4874] font-handwriting text-sm font-bold">
                  Scale
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="grid grid-cols-2 gap-1 bg-[#fef9ef] p-1 border border-[#747878]">
                  <div className="w-6 h-8 border border-[#747878] rounded-sm" />
                  <div className="w-6 h-8 border border-[#747878] rounded-sm" />
                  <div className="w-6 h-8 border border-[#747878] rounded-sm" />
                  <div className="w-6 h-8 border border-[#747878] rounded-sm" />
                </div>
                <span className="text-[10px] uppercase font-bold">Microservices</span>
              </div>
            </div>
          </div>

          {/* Sticky Note (To-do) */}
          <div className="relative ml-auto w-48 sticky-note-yellow p-4 rotate-2 shadow-xs font-annotation text-xs text-[#1d1c16] rounded-xs border border-amber-400/30">
            {/* Washi tape corner */}
            <div className="absolute -top-2 -left-2 w-10 h-3.5 washi-tape rotate-45" />
            <h4 className="font-bold border-b border-[#1d1c16]/20 pb-1 mb-2 font-label-code text-[11px] uppercase">
              Next Up
            </h4>
            <ul className="space-y-1.5 list-none pl-0 font-handwriting text-base">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs">check_box_outline_blank</span> Learn Docker
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs">check_box_outline_blank</span> Setup CI/CD
              </li>
              <li className="flex items-center gap-1.5 text-[#1d1c16]/50 line-through">
                <span className="material-symbols-outlined text-xs">check_box</span> Break production
              </li>
            </ul>
          </div>
        </div>

        {/* Page Number Right */}
        <div className="font-label-code text-xs text-[#444748] opacity-50 text-right mt-4">
          03
        </div>
      </section>
    </div>
  );
};

export default JourneyChapter;
