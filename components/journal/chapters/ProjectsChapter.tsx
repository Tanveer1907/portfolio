import React from "react";

export const ProjectsChapter: React.FC = () => {
  return (
    <article className="paper-texture w-full h-full relative flex flex-col xl:flex-row mx-auto bg-[#fef9ed] text-[#1d1c15] border border-[#cfc4bd] overflow-hidden">
      {/* Left Page (Grid & Blueprint) */}
      <section className="flex-1 p-5 md:p-8 border-b xl:border-b-0 xl:border-r border-[#cfc4bd]/30 relative flex flex-col justify-between z-10 overflow-hidden">
        {/* Fold mark artifact */}
        <div
          className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-[#e7e2d6] to-transparent"
          style={{ width: "2px", left: "30%" }}
        />
        <div>
          <header className="mb-3 border-b-2 border-[#181512] pb-2">
            <div className="flex justify-between items-end mb-1">
              <span className="font-meta-technical text-[10px] text-[#7e756f] uppercase tracking-widest">
                Fig 4.1
              </span>
              <span className="font-meta-technical text-[10px] text-[#7e756f]">
                Date: 24.10.2023
              </span>
            </div>
            <h2 className="font-display-lg text-2xl md:text-3xl text-[#181512] font-semibold">
              Mechanical Articulation
            </h2>
          </header>

          <div className="font-body-main text-xs text-[#4d4540] mb-3 space-y-2 leading-relaxed">
            <p className="first-letter:font-display-lg first-letter:text-3xl first-letter:float-left first-letter:mr-2 first-letter:-mt-1 first-letter:font-bold">
              The primary challenge in designing the central pivot mechanism was mitigating friction under high load while maintaining a slim profile. Early prototypes utilized brass bushings, which degraded rapidly during stress testing.
            </p>
            <p>
              We transitioned to a sealed ceramic bearing assembly, housed within a custom-machined 6061 aluminum casing. This adjustment reduced drag by 40% and improved structural rigidity across the lateral axis.
            </p>
          </div>
        </div>

        {/* Taped Blueprint Graphic */}
        <div className="relative w-full aspect-[16/10] max-h-48 bg-[#ede8dc] border border-[#7e756f]/20 p-2 blueprint-overlay rotate-[-1deg] mx-auto z-20 shadow-2xs">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 masking-tape rotate-[-3deg]" />
          <div className="absolute -bottom-2.5 right-8 w-10 h-4 masking-tape rotate-[4deg]" />
          <div className="w-full h-full border border-[#181512]/20 p-1.5 flex flex-col">
            <div className="flex justify-between border-b border-[#181512]/20 pb-0.5 mb-1">
              <span className="font-meta-technical text-[9px] text-[#181512]/60 uppercase">
                SCHEMATIC: PIVOT ASSY
              </span>
              <span className="font-meta-technical text-[9px] text-[#181512]/60">
                SCALE 1:1
              </span>
            </div>
            <div className="flex-grow w-full h-full relative overflow-hidden">
              {/* eslint-disable-next-html-link, @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLwta-18_N-CDkHM4Fj4ctylxjd4r79XBXorVLdYYu0z3lo5YvFzq-MNfo8YybhvcGE_mDRWhz5wYwkXsjnkStWlHTnliX6E3Ozx7VggUuNzi20Rz7YoLyEkQYnwJWVbqRCKNpyzNubnvtdFemIWutO5paIHEaK4wgXykqunL_y8ooei5lLWzOucZi3VLiXEmYP1Zk9VQ3om9satefoSPUtHFv_KfQ6H6fwsBVCVwOCCl_KhbZQN61"
                alt="Blueprint Pivot Assy"
                className="w-full h-full object-cover mix-blend-multiply opacity-85"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Right Page (Photos & Annotations) */}
      <section className="flex-1 p-5 md:p-8 relative flex flex-col justify-between z-10 overflow-hidden">
        {/* Coffee ring imperfection */}
        <div className="absolute top-4 right-12 w-24 h-24 rounded-full border-[2px] border-[#fed488] opacity-20 mix-blend-multiply pointer-events-none filter blur-[0.5px]" />

        <div>
          {/* Handwriting Annotation Floating */}
          <div className="text-right font-annotation text-xs text-[#775a19] transform rotate-[3deg] mb-2">
            <span className="material-symbols-outlined text-xs inline-block mr-1 rotate-[-45deg] align-middle">
              north_west
            </span>
            *Ensure tolerance is tight here to prevent wobble.
          </div>

          {/* Bento-style Photo Gallery taped in */}
          <div className="grid grid-cols-2 gap-3 my-2 w-full max-w-sm mx-auto">
            {/* Photo 1 */}
            <div className="photo-card rotate-[2deg] relative bg-white p-1.5 pb-4 shadow-xs border border-[#cfc4bd]">
              <div className="absolute -top-2 left-3 w-8 h-3.5 masking-tape rotate-[2deg] z-20" />
              <div className="w-full aspect-square bg-[#e7e2d6] relative overflow-hidden">
                {/* eslint-disable-next-html-link, @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ElneZFtL2HWE8aXTnM2H0bVv9vaaO2SQr5XadtXzXbs7_4_jegnDLGYtYj0Dos0XeEdycRzyExJbSuYRkP2Ns03eTiAIGTmFWaeYW5QyLciAh7IzyGEiV7Ssq3pfwAVJ-jeNairVp8Xc5TPTHVfN3JY2_SDQRHE2y4uV2EwbnW0K5aA0HROUBLMvyHi76cKXIfzfkPD0ASsnQwi1VZLjF2xYLhGaQV7qnVQCAGfICnjMhxmPlG05"
                  alt="Raw Extrusion"
                  className="object-cover w-full h-full grayscale-[20%] sepia-[10%]"
                />
              </div>
              <div className="mt-1 font-meta-technical text-[9px] text-[#7e756f] flex justify-between uppercase">
                <span>RAW EXTRUSION</span>
                <span>#01</span>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="photo-card rotate-[-1deg] relative mt-3 bg-white p-1.5 pb-4 shadow-xs border border-[#cfc4bd]">
              <div className="absolute -top-2.5 right-3 w-10 h-4 masking-tape rotate-[-4deg] z-20" />
              <div className="w-full aspect-square bg-[#e7e2d6] relative overflow-hidden">
                {/* eslint-disable-next-html-link, @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk11UyTtKmZLLbkElpUK628EMnmfoP2-72t0QrGUj4CSUzlNLEgRJ3iFoo-PfP6mLkMZgTfPMpgWxtjw6co0ux4Of-O3uVGdKDawGIB-yPaIT4G40vupJE--zglE6wwvHLNYha3V1xZ7XDhGDECjoCZPud9xp92_Id8k8VPLiRxVQoXb5ukoexLMVmnxjK5EBH1npdFoPMexIjIp6Q7Wjh7QKY2wLd0-2Tn9rym6G_AdutIOxfqmTv"
                  alt="Gear Assembly"
                  className="object-cover w-full h-full grayscale-[20%] sepia-[10%]"
                />
              </div>
              <div className="mt-1 font-meta-technical text-[9px] text-[#7e756f] flex justify-between uppercase">
                <span>GEAR ASSY</span>
                <span>#02</span>
              </div>
            </div>
          </div>

          <p className="font-annotation text-xs text-[#181512] max-w-xs ml-auto text-right leading-tight rotate-[-1deg] mt-3">
            Testing confirmed ceramic bearings resolved heat buildup. Next phase: stress testing linkage arms.
          </p>
        </div>

        {/* Footer drafting line */}
        <div className="mt-2 pt-3 border-t border-[#181512] border-dashed flex justify-between items-center opacity-70">
          <span className="font-meta-technical text-[10px]">STATUS: IN PROGRESS</span>
          <span className="font-meta-technical text-[10px] flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-xs">check_circle</span> VERIFIED
          </span>
        </div>
      </section>
    </article>
  );
};

export default ProjectsChapter;
