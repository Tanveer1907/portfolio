import React from "react";

export const AboutChapter: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col md:flex-row bg-[#F8F5E9] text-[#1d1c16] overflow-hidden rounded-sm border-[6px] border-[#111]">
      {/* Subtle cover edge inner border */}
      <div className="absolute inset-[6px] border border-black/10 rounded-lg pointer-events-none z-40" />

      {/* LEFT PAGE */}
      <section className="relative w-full md:w-1/2 h-full paper-bg p-6 sm:p-10 md:p-14 flex flex-col z-10 border-b md:border-b-0 border-[#c4c7c7]/30 overflow-hidden justify-between">
        {/* Page Header */}
        <header className="flex justify-between items-center mb-4 pb-2 border-b border-[#c4c7c7]/30">
          <span className="font-label-code text-xs text-[#ba1a1a] tracking-widest uppercase font-bold">
            Build Log // Vol. 01
          </span>
          <span className="font-label-code text-[11px] border border-[#747878]/50 px-2.5 py-0.5 text-[#444748] rounded-sm bg-white/20">
            VERSION 1.0.0
          </span>
        </header>

        {/* Main Title Area */}
        <div className="mb-4">
          <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-[46px] text-[#1d1c16] tracking-tight leading-none">
            THE
          </h1>
          <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-[46px] text-[#1d1c16] tracking-tight leading-none">
            BUILD LOG
          </h1>
          <h2 className="font-label-code text-xs text-[#1f4874] uppercase tracking-widest mt-2">
            A Software Engineer&apos;s Journal
          </h2>
        </div>

        <p className="font-label-code text-xs sm:text-sm leading-relaxed text-[#444748] opacity-90 mb-4 max-w-sm border-l-2 border-[#c4c7c7]/50 pl-3">
          Documenting ideas, learning, and shipped projects.<br />
          One commit at a time.
        </p>

        {/* Polaroid Photo */}
        <div className="relative w-[75%] max-w-[280px] p-3 pb-10 polaroid mx-auto md:mx-0 rotate-[-1deg] self-start ml-2 md:ml-4 z-20 my-2">
          {/* Washi Tape Top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape rotate-[-2deg] z-30" />
          <div className="aspect-[4/3] w-full bg-[#dedad0] relative overflow-hidden ring-1 ring-black/5">
            {/* eslint-disable-next-html-link, @next/next/no-img-element */}
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 sepia-[.05]"
              alt="Tanveer Singh Desk Setup"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATBsZh1V8VpwgV9BWBorj-XUdlg_v3f5wcgBwow18sCQ_B8Nbv0d92tD5XAmcXB3DJs84O_zfw6lVuk898c22gKyfWQMQNCuYSSxSf3I58UqqQcvnmoy8TEV9HFDpm5LvIKecB3zPf1-3W0kVmTO8l3E350F_G_-CBfO4KzAcIhv3TDaMKpfAAdrrNxfd260M4_ro8Snp17K3vHBBpMLQ-K_aXCfvgV_Scra5VbCsHCq499gQbXtQr"
            />
          </div>
        </div>

        {/* Author Footer Box */}
        <div className="mt-2 border border-[#c4c7c7]/50 p-3 flex justify-between items-end max-w-sm bg-white/10 backdrop-blur-sm rounded-sm">
          <div>
            <span className="block font-label-code text-[9px] text-[#444748] opacity-80 mb-1 tracking-widest">
              ENGINEER
            </span>
            <span className="font-handwriting text-2xl text-[#1d1c16] pen-stroke">
              Tanveer Singh
            </span>
          </div>
          <div className="text-right">
            <span className="block font-label-code text-[9px] text-[#444748] opacity-80 mb-1 tracking-widest">
              DATE STARTED
            </span>
            <span className="font-label-code text-xs text-[#ba1a1a] font-bold">
              08.10.2023
            </span>
          </div>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-3 left-6 font-label-code text-xs text-[#444748] opacity-50">
          00
        </div>
      </section>

      {/* Book Spine / Gutter */}
      <div className="hidden md:block w-10 h-full book-spine z-30 relative flex-shrink-0">
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-black/20" />
      </div>

      {/* RIGHT PAGE */}
      <section className="relative w-full md:w-1/2 h-full paper-bg p-6 sm:p-10 md:p-14 flex flex-col z-10 overflow-hidden justify-between">
        {/* Sticky Note attached to top right */}
        <div className="absolute top-6 right-6 w-36 p-3 sticky-note rotate-[2.5deg] z-40 hidden sm:block">
          <div className="w-10 h-3 tape absolute -top-2 left-1/2 -translate-x-1/2 rotate-[1deg]" />
          <p className="font-handwriting text-lg text-[#1d1c16] pen-stroke leading-snug">
            Always <span className="sketch-underline">curious.</span><br />
            Always <span className="sketch-underline text-[#1f4874]">building.</span>
          </p>
        </div>

        {/* Page Header */}
        <header className="mb-4 pb-2 border-b border-[#c4c7c7]/30">
          <span className="font-label-code text-xs text-[#1f4874] uppercase tracking-widest font-bold">
            {"// CHAPTER 01"}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#1d1c16] mt-1 tracking-tight">
            ABOUT ME
          </h2>
        </header>

        <div className="w-full">
          <p className="font-body-lg text-xs sm:text-sm text-[#444748] leading-relaxed mb-4">
            I&apos;m a Computer Science student who loves turning ideas into real products. I enjoy building tools that solve problems and create impact.
          </p>

          {/* Icon Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4 border-t border-b border-[#c4c7c7]/40 py-3 border-dashed">
            <div className="flex flex-col items-center text-center px-1">
              <span className="material-symbols-outlined text-2xl mb-1 text-[#1d1c16] opacity-90" style={{ fontVariationSettings: "'wght' 200" }}>
                school
              </span>
              <span className="font-label-code text-xs font-bold block">B.Tech CSE</span>
              <span className="font-body-sm text-[10px] text-[#444748] opacity-80">2nd Year Student</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-r border-[#c4c7c7]/40 px-1">
              <span className="material-symbols-outlined text-2xl mb-1 text-[#1d1c16] opacity-90" style={{ fontVariationSettings: "'wght' 200" }}>
                code_blocks
              </span>
              <span className="font-label-code text-xs font-bold block">Full Stack</span>
              <span className="font-body-sm text-[10px] text-[#444748] opacity-80">Developer</span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <span className="material-symbols-outlined text-2xl mb-1 text-[#1d1c16] opacity-90" style={{ fontVariationSettings: "'wght' 200" }}>
                psychology
              </span>
              <span className="font-label-code text-xs font-bold block">Problem Solver</span>
              <span className="font-body-sm text-[10px] text-[#444748] opacity-80">&amp; Lifelong Learner</span>
            </div>
          </div>

          {/* Bento-ish Layout for Details */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Graph Paper Insert */}
            <div className="flex-1 bg-[#f4f1e8] p-3 shadow-sm border border-[#c4c7c7]/30 relative rotate-[-0.5deg] grid-overlay rounded-sm">
              <div className="w-10 h-4 tape absolute -top-2 left-4 rotate-[-2deg]" />
              <h3 className="font-label-code text-[10px] uppercase tracking-widest mb-2 bg-white/60 px-2 py-1 inline-block border border-[#c4c7c7]/50 font-bold backdrop-blur-md">
                What Drives Me
              </h3>
              <ul className="space-y-1.5 font-label-code text-[11px] bg-white/40 p-2 backdrop-blur-sm rounded-sm border border-white/50">
                <li className="flex items-start gap-1.5"><span className="text-[#1f4874]">•</span> Building useful things</li>
                <li className="flex items-start gap-1.5"><span className="text-[#1f4874]">•</span> Clean &amp; maintainable code</li>
                <li className="flex items-start gap-1.5"><span className="text-[#1f4874]">•</span> Scalable systems</li>
                <li className="flex items-start gap-1.5"><span className="text-[#1f4874]">•</span> Learning in public</li>
              </ul>
            </div>

            {/* Hand-written list */}
            <div className="flex-1 pt-2 pl-2">
              <h3 className="font-handwriting text-lg text-[#1d1c16] mb-2 flex items-center gap-1 pen-stroke">
                <span className="material-symbols-outlined text-sm opacity-60">arrow_right_alt</span>
                Currently Exploring
              </h3>
              <ul className="space-y-1.5 font-handwriting text-base pl-3 border-l-2 border-[#c4c7c7]/50 border-dashed pen-stroke">
                <li>System Design</li>
                <li>DevOps</li>
                <li>AI / ML fundamentals</li>
                <li>Open Source</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech I Love Footer */}
        <div className="mt-auto border border-[#c4c7c7]/50 p-2.5 bg-white/10 backdrop-blur-sm rounded-sm">
          <span className="block font-label-code text-[9px] text-[#444748] opacity-80 mb-2 uppercase tracking-widest">
            Tech I Love
          </span>
          <div className="flex gap-2 items-center flex-wrap opacity-90">
            <div className="w-8 h-8 rounded-md bg-white border border-[#c4c7c7]/50 flex items-center justify-center font-label-code text-[10px] font-bold text-[#3178C6] shadow-xs">TS</div>
            <div className="w-8 h-8 rounded-md bg-white border border-[#c4c7c7]/50 flex items-center justify-center font-label-code text-[10px] font-bold text-[#61DAFB] shadow-xs">React</div>
            <div className="w-8 h-8 rounded-md bg-white border border-[#c4c7c7]/50 flex items-center justify-center font-label-code text-[10px] font-bold text-black shadow-xs">Next</div>
            <div className="w-8 h-8 rounded-md bg-white border border-[#c4c7c7]/50 flex items-center justify-center font-label-code text-[10px] font-bold text-[#339933] shadow-xs">Node</div>
          </div>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-3 right-6 font-label-code text-xs text-[#444748] opacity-50">
          01
        </div>
      </section>
    </div>
  );
};

export default AboutChapter;
