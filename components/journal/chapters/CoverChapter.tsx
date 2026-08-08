import React from "react";

export const CoverChapter: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-[#1c1b1b] text-white overflow-hidden p-6 md:p-12">
      {/* The Leather Cover Frame */}
      <div className="relative z-10 w-full max-w-[460px] aspect-[1/1.4] max-h-[92%] bg-[#1c1b1b] rounded-r-[1rem] rounded-l-[4px] notebook-shadow border-l-[12px] border-black flex flex-col items-center justify-center overflow-hidden transition-transform duration-700 hover:scale-[1.01] hover:-translate-y-1 cursor-pointer leather-texture group p-8 sm:p-16">
        {/* Spine crease detail */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

        {/* Vertical Elastic Band */}
        <div className="absolute right-6 top-0 bottom-0 w-[14px] bg-[#151515] shadow-[inset_2px_0_5px_rgba(0,0,0,0.5),-2px_0_4px_rgba(0,0,0,0.3)] z-20 group-hover:bg-[#1a1a1a] transition-colors duration-500" />

        {/* Bookmark Ribbon Peek (Bottom) */}
        <div className="absolute bottom-[-10px] left-1/2 w-4 h-12 bg-[#8b2323] shadow-md transform rotate-3 origin-top opacity-80 z-0" />

        {/* Content Canvas (Embossed Typography) */}
        <div className="relative z-10 w-full flex flex-col items-center text-center mt-[-10%] gap-6 sm:gap-10">
          {/* Version/Vol */}
          <div className="flex items-center space-x-4 opacity-80">
            <div className="w-8 h-[1px] bg-[#d8c688]" />
            <p className="font-label-code text-xs text-[#d8c688] tracking-[0.2em] uppercase embossed-text">
              Vol. 01
            </p>
            <div className="w-8 h-[1px] bg-[#d8c688]" />
          </div>

          {/* Main Title */}
          <h1 className="font-headline-lg text-3xl sm:text-5xl text-[#6b5e2a] tracking-tighter uppercase embossed-text leading-tight">
            The<br />Build Log
          </h1>

          {/* Subtitle / Signoff */}
          <div className="flex flex-col items-center opacity-60 gap-2">
            <p className="font-body-sm text-xs sm:text-sm text-[#d8c688] tracking-[0.15em] uppercase">
              A Software Engineer&apos;s Journal
            </p>
            <div className="w-12 h-[2px] bg-[#d8c688]/40 rounded-full" />
          </div>
        </div>

        {/* Interaction Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <p className="font-annotation text-xs text-[#c8c6c5]/50 tracking-widest uppercase">
            Click or Scroll to Open
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverChapter;
