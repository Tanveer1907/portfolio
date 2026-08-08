import React from "react";

export const ContactChapter: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col md:flex-row bg-[#111] text-white overflow-hidden rounded-lg shadow-notebook">
      {/* Book Cover Edge */}
      <div className="absolute inset-0 border-[4px] border-[#0a0a0a] rounded-lg -z-10 bg-[#0a0a0a]" />

      {/* Bookmark Ribbon */}
      <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-[#050505] -translate-x-1/2 shadow-sm z-20" />

      {/* Center Fold Shadow */}
      <div className="absolute inset-y-0 left-1/2 w-20 -translate-x-1/2 center-fold z-10 pointer-events-none" />

      {/* LEFT PAGE: The Form */}
      <div className="flex-1 relative p-6 sm:p-10 md:p-12 pr-6 md:pr-14 notebook-spine rounded-l-lg border-r border-black/20 overflow-hidden flex flex-col justify-between dark-paper-texture">
        <div>
          {/* Header Info */}
          <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-3">
            <span className="font-label-code text-xs text-[#ba1a1a] tracking-wider uppercase font-bold">
              Final Dispatch // v1.0
            </span>
            <span className="font-label-code text-[10px] text-white/50 border border-white/20 px-2 py-0.5 rounded-sm">
              SECURE_COMMS
            </span>
          </div>

          <h1 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white/90 mb-4 uppercase tracking-tight">
            Communicate
          </h1>

          <form className="space-y-4 max-w-md">
            <div className="group">
              <label className="block font-label-code text-[10px] text-white/50 mb-1 uppercase tracking-wide">
                Operator Identifier
              </label>
              <input
                className="w-full input-line text-xs sm:text-sm"
                placeholder="Name or Callsign"
                type="text"
              />
            </div>

            <div className="group">
              <label className="block font-label-code text-[10px] text-white/50 mb-1 uppercase tracking-wide">
                Frequency (Email)
              </label>
              <input
                className="w-full input-line text-xs sm:text-sm"
                placeholder="return.address@node.com"
                type="email"
              />
            </div>

            <div className="group">
              <label className="block font-label-code text-[10px] text-white/50 mb-1 uppercase tracking-wide">
                Payload
              </label>
              <textarea
                className="w-full input-line text-xs sm:text-sm resize-none min-h-[90px]"
                placeholder="Enter transmission data here..."
                rows={3}
              />
            </div>

            <div className="pt-2 text-right">
              <button
                className="font-label-code text-xs px-5 py-2 border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 uppercase tracking-widest active:scale-95 inline-flex items-center gap-1.5 rounded-sm cursor-pointer"
                type="button"
              >
                Transmit
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </form>
        </div>

        {/* Page Number */}
        <div className="font-label-code text-xs text-white/20 mt-4">
          05
        </div>
      </div>

      {/* RIGHT PAGE: The Artifacts */}
      <div className="flex-1 relative p-6 sm:p-10 md:p-12 pl-6 md:pl-14 notebook-spine rounded-r-lg bg-[#151515] flex flex-col justify-between overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative z-10 w-full h-full flex flex-col justify-around items-center">
          {/* Business Card Artifact */}
          <div className="relative bg-[#fef9ef] text-[#1d1c16] p-4 shadow-card rotate-[2deg] w-64 sm:w-72 h-36 flex flex-col justify-center items-center border border-black/10 z-10 transition-transform hover:rotate-[3deg] hover:scale-105 duration-300 rounded-xs my-2">
            {/* Paperclip Simulation */}
            <div className="absolute -top-3.5 left-5 w-3 h-10 border-2 border-[#888] rounded-full shadow-xs bg-gradient-to-b from-[#ccc] to-[#888] z-20" />
            <h3 className="font-headline-md text-lg text-[#1d1c16] font-bold uppercase tracking-widest">
              Tanveer Singh
            </h3>
            <p className="font-label-code text-[11px] text-[#444748] uppercase mb-2 tracking-wider">
              Engineer in Progress
            </p>
            <div className="w-10 h-[1px] bg-[#c4c7c7] mb-2" />
            <p className="font-label-code text-[10px] text-[#747878] tracking-wider">
              connect@buildlog.dev
            </p>
          </div>

          {/* Stamp */}
          <div className="relative z-30 stamp-texture my-2">
            <div className="rotate-[-10deg] text-3xl sm:text-4xl font-handwriting text-white/70 drop-shadow-sm">
              Acknowledged.
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="font-label-code text-xs text-white/20 text-right mt-4 relative z-10">
          06
        </div>
      </div>
    </div>
  );
};

export default ContactChapter;
