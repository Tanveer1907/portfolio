import React from "react";

export const JourneyChapter: React.FC = () => {
  return (
    <div className="w-full h-full relative z-10 text-[#1d1c15] overflow-hidden bg-[#fef9ed]">
      {/* The Paper Spread */}
      <article className="paper-texture w-full h-full rounded-sm relative overflow-hidden bg-[#fef9ed] p-6 md:p-10 border border-[#cfc4bd] flex flex-col justify-between">
        {/* Bookmark Ribbons */}
        <div
          className="absolute -top-4 right-20 w-8 h-16 bg-[#ba1a1a] shadow-md rounded-b flex items-end justify-center pb-2 z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)" }}
        >
          <span className="material-symbols-outlined text-white text-sm opacity-60">bookmark</span>
        </div>
        <div
          className="absolute -top-6 right-32 w-6 h-20 bg-[#775a19] shadow-md rounded-b z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)" }}
        />

        {/* Page Margin Grid Lines */}
        <div className="absolute top-0 bottom-0 left-12 w-px bg-[#cfc4bd] opacity-30" />
        <div className="absolute top-0 bottom-0 right-12 w-px bg-[#cfc4bd] opacity-30" />

        <div className="relative z-10">
          {/* Spread Header */}
          <header className="mb-6 border-b border-[#cfc4bd] pb-4 relative">
            <h1 className="font-display-lg text-3xl md:text-4xl text-[#181512] mb-1 font-semibold">
              Chronology of Builds
            </h1>
            <div className="font-meta-technical text-[10px] sm:text-xs text-[#7e756f] flex gap-3 tracking-wider">
              <span>REV. 04</span>
              <span>|</span>
              <span>1998 — PRESENT</span>
              <span>|</span>
              <span>STATUS: ITERATING</span>
            </div>
            {/* Annotation attached to header */}
            <div className="absolute -right-2 top-0 rotate-3 w-44 hidden lg:block">
              <div className="font-annotation text-[11px] text-[#7e756f] opacity-80 leading-snug">
                *Note: Initial phases heavily reliant on unstructured experimentation. Proceed with caution.
              </div>
            </div>
          </header>

          {/* Timeline Nodes Container */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            {/* Node 1 */}
            <div className="relative mb-4" style={{ width: "fit-content" }}>
              <div className="font-meta-technical text-[10px] text-[#7e756f] mb-0.5 uppercase font-bold">
                01. GENESIS
              </div>
              <div className="bg-[#f8f3e7] border border-[#cfc4bd] p-3 w-56 sm:w-64 rotate-[1deg] shadow-2xs">
                <h3 className="font-headline-md text-base sm:text-lg font-bold mb-1 text-[#181512]">
                  The First Assembly
                </h3>
                <p className="font-body-sm text-xs text-[#4d4540] leading-relaxed">
                  Constructed from salvaged parts. Structural integrity compromised but functional.
                </p>
              </div>
              {/* Tape */}
              <div className="masking-tape w-10 h-3.5 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-2" />
              {/* Graphite Annotation */}
              <div className="font-annotation text-xs text-[#181512] mt-1 rotate-[-2deg]">
                Ignored torque specs → Learned the hard way.
              </div>
            </div>

            {/* Node 2 (Branch Right) */}
            <div className="relative mb-4 md:ml-auto" style={{ width: "fit-content" }}>
              <div className="font-meta-technical text-[10px] text-[#7e756f] mb-0.5 text-right uppercase font-bold">
                02. PIVOT
              </div>
              <div className="bg-[#fef9ed] border border-[#cfc4bd] p-3 w-60 sm:w-68 -rotate-[1deg] shadow-2xs">
                <h3 className="font-headline-md text-base sm:text-lg font-bold mb-1 text-[#181512]">
                  System Overhaul
                </h3>
                <p className="font-body-sm text-xs text-[#4d4540] leading-relaxed">
                  Transitioned to modular architecture. Reduced technical debt by 40%.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clipped Scrap Paper (Floating outside grid) */}
        <div className="absolute top-20 -left-6 rotate-[-5deg] z-20">
          {/* Brass Clip */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-8 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-800 rounded-xs shadow-xs border border-amber-900/40 z-30" />
          {/* Scrap Paper */}
          <div className="bg-[#e7e2d6] p-3 w-40 h-40 border-l-2 border-[#775a19] shadow-xs">
            <div className="font-meta-technical text-[9px] text-[#7e756f] mb-1 font-bold uppercase">
              SCRATCHPAD //
            </div>
            <div className="font-annotation text-xs text-[#181512] opacity-90 leading-relaxed">
              To-do:<br />
              - Refine tolerance.<br />
              - Order more brass stock.<br />
              - Re-read chapter 4 on load distribution.
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default JourneyChapter;
