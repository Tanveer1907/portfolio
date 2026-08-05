import React from "react";

export const CoverChapter: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-[600px] aspect-[3/4] mx-auto transition-transform duration-500 hover:scale-[1.01]">
      {/* Notebook Structure */}
      <div className="w-full h-full bg-leather-cover rounded-r-2xl rounded-l-md relative overflow-hidden border border-[#333]">
        {/* Spine Binding Texture */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent border-r border-white/5" />
        <div className="absolute left-16 top-0 bottom-0 w-px bg-white/5" />
        
        {/* Spotlight over cover */}
        <div className="absolute inset-0 spotlight" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          {/* Main Title Embossed */}
          <h1 className="font-display-lg text-display-lg text-center tracking-widest gold-emboss uppercase mb-8 text-4xl sm:text-5xl">
            The Build Log
          </h1>
          {/* Subtitle / Identity */}
          <div className="font-meta-technical text-meta-technical text-gray-500 tracking-[0.2em] uppercase text-center border-t border-b border-gray-700/50 py-4 w-3/4">
            Engineering Atelier<br />
            <span className="text-[10px] mt-2 block opacity-70">
              Vol. 04 — Machined Precision
            </span>
          </div>
        </div>

        {/* Masking Tape Annotation (Top Right) */}
        <div className="masking-tape w-32 h-8 top-8 right-6 flex items-center justify-center -rotate-6 absolute">
          <span className="font-annotation text-annotation text-primary opacity-80 transform -rotate-2 text-sm text-[#181512]">
            REV: 2.01.A
          </span>
        </div>

        {/* Masking Tape Annotation (Bottom Right) */}
        <div className="masking-tape w-24 h-10 bottom-12 right-12 flex items-center justify-center rotate-3 pb-1 absolute">
          <span className="font-annotation text-annotation text-primary opacity-90 text-sm text-[#181512]">
            Active
          </span>
        </div>

        {/* Brass Paperclip */}
        <div className="absolute top-24 -left-4 w-12 h-20 border-4 border-yellow-600 rounded-full border-r-0 transform rotate-12 shadow-lg mix-blend-hard-light opacity-80" />
        <div className="absolute top-26 -left-2 w-8 h-16 border-4 border-yellow-600 rounded-full border-r-0 transform rotate-12 shadow-md mix-blend-hard-light opacity-80" />
      </div>

      {/* Pages edges visible on the right */}
      <div className="absolute -right-3 top-2 bottom-2 w-3 bg-surface rounded-r-md shadow-[inset_2px_0_5px_rgba(0,0,0,0.2)] z-[-1] border-r border-y border-outline-variant flex flex-col justify-evenly">
        <div className="w-full h-px bg-outline-variant/30" />
        <div className="w-full h-px bg-outline-variant/30" />
        <div className="w-full h-px bg-outline-variant/30" />
        <div className="w-full h-px bg-outline-variant/30" />
        <div className="w-full h-px bg-outline-variant/30" />
      </div>
    </div>
  );
};

export default CoverChapter;
