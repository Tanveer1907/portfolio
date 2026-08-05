import React from "react";

export const SkillsChapter: React.FC = () => {
  return (
    <div className="w-full h-full paper-texture binding-shadow flex flex-col justify-between p-5 md:p-8 rounded-r-lg relative bg-[#fef9ed] text-[#1d1c15] border border-[#cfc4bd] overflow-hidden">
      {/* Page Header */}
      <header className="mb-4 relative">
        <h1 className="font-display-lg text-2xl md:text-3xl font-semibold text-[#181512] mb-1">
          Aptitude Spread
        </h1>
        <div className="w-20 h-0.5 bg-[#181512] mb-2" />
        <p className="font-body-main text-xs text-[#4d4540] max-w-xl leading-relaxed">
          Assessment of current mechanical and digital capabilities. Areas requiring further calibration are noted. Metrics derived from recent stress tests on Project Alpha components.
        </p>
        <div className="absolute -right-2 top-0 font-annotation text-xs text-[#775a19] transform rotate-3 bg-[#f8f3e7] p-2 shadow-2xs border border-[#cfc4bd] z-10 w-44 hidden lg:block">
          *Note: CAD proficiency heavily skewed towards parametric modeling lately.
        </div>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-grow">
        {/* Skill Card: CAD / 3D Modeling (Spans 8 cols) */}
        <article className="col-span-1 md:col-span-8 bg-[#fef9ed] border border-[#cfc4bd] p-4 relative shadow-2xs group">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="font-headline-md text-base font-bold text-[#181512] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#7e756f]">view_in_ar</span>
                Digital Drafting (CAD)
              </h2>
              <p className="font-meta-technical text-[9px] text-[#7e756f] mt-0.5">
                SolidWorks // Fusion 360 // Rhino
              </p>
            </div>
            <div className="ink-stamp font-meta-technical text-[10px] text-[#ba1a1a] border border-[#ba1a1a] px-1.5 py-0.5 transform -rotate-6">
              CERT: 9.4
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <div className="w-full md:w-1/2 space-y-2 font-body-sm text-[11px]">
              <div>
                <p className="font-medium text-[#1d1c15] mb-0.5">Parametric Assemblies</p>
                <div className="w-full bg-[#ede8dc] h-1.5 relative">
                  <div className="absolute left-0 top-0 h-full bg-[#181512] w-[90%]" />
                </div>
              </div>
              <div>
                <p className="font-medium text-[#1d1c15] mb-0.5">Complex Surfacing</p>
                <div className="w-full bg-[#ede8dc] h-1.5 relative">
                  <div className="absolute left-0 top-0 h-full bg-[#181512] w-[65%]" />
                </div>
              </div>
              <div>
                <p className="font-medium text-[#1d1c15] mb-0.5">Generative Design</p>
                <div className="w-full bg-[#ede8dc] h-1.5 relative">
                  <div className="absolute left-0 top-0 h-full bg-[#181512] w-[40%]" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative bg-white border border-[#cfc4bd] p-1.5 shadow-inner aspect-[4/3] max-h-32">
              {/* eslint-disable-next-html-link, @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfnB-lbIZPf4x-w502Mp_B3_Ht403n9X6YO8HyVQ9Yv37P4BvNfxkut_Gbu6nPQHrCxFkuhTZDpvt64YSElmX8U43YmXkIY1DVkxl5SNLBaNPj7sjLRUIUIsfqAWIgyFMB-xewOH89Ic9d6rMJiFRjrOFlKHBlakdi2J4VXRhRCwTjcWkf2amuLHN6AjNC7zGiXclnpHujLIkkxFBAXDCoywPSLou0SwfDgd1h2yjzGe_Ogg9Ql4t"
                alt="Blueprint Render"
              />
              <span className="absolute bottom-1 right-1 font-meta-technical text-[8px] text-[#7e756f] bg-[#fef9ed] px-1 border border-[#cfc4bd]">
                FIG 1.A
              </span>
            </div>
          </div>
        </article>

        {/* Skill Card: Machining (Spans 4 cols) */}
        <article className="col-span-1 md:col-span-4 bg-[#fef9ed] border border-[#cfc4bd] p-4 relative shadow-2xs">
          <div className="masking-tape absolute -top-2.5 left-3 w-16 h-4 rotate-[-2deg]" />
          <h2 className="font-headline-md text-base font-bold text-[#181512] mb-0.5 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#7e756f]">precision_manufacturing</span>
            Subtractive
          </h2>
          <p className="font-meta-technical text-[9px] text-[#7e756f] mb-2 border-b border-[#7e756f]/30 pb-1">
            CNC &amp; Manual
          </p>
          <ul className="space-y-1.5 font-body-sm text-[11px] text-[#1d1c15]">
            <li className="flex justify-between items-center border-b border-[#7e756f]/30 pb-0.5">
              <span>3-Axis Milling</span>
              <span className="font-meta-technical font-bold">A</span>
            </li>
            <li className="flex justify-between items-center border-b border-[#7e756f]/30 pb-0.5">
              <span>Lathe Turning</span>
              <span className="font-meta-technical font-bold">B+</span>
            </li>
            <li className="flex justify-between items-center border-b border-[#7e756f]/30 pb-0.5 text-[#7e756f]">
              <span>5-Axis (Training)</span>
              <span className="font-meta-technical">C</span>
            </li>
          </ul>
          <div className="mt-3 font-annotation text-xs text-[#4d4540] italic leading-tight p-2 bg-[#f8f3e7] border-l-2 border-[#181512]">
            &quot;Feeds and speeds optimization improved by 15% this quarter.&quot;
          </div>
        </article>

        {/* Skill Card: Prototyping & Electronics (Spans 6 cols) */}
        <article className="col-span-1 md:col-span-6 border-t-2 border-b-2 border-[#181512] py-3 relative">
          <h2 className="font-headline-md text-base font-bold text-[#181512] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#7e756f]">memory</span>
            Mechatronics Integration
          </h2>
          <div className="flex gap-4 text-[11px]">
            <div className="flex-1">
              <h3 className="font-meta-technical text-[9px] text-[#181512] font-bold mb-1 uppercase">HARDWARE</h3>
              <div className="grid grid-cols-2 gap-1 font-body-sm text-[#1d1c15]">
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box</span> Microcontrollers</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box</span> PCB Layout</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box_outline_blank</span> RF Comms</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box</span> Sensors</div>
              </div>
            </div>
            <div className="w-px bg-[#cfc4bd] hidden md:block" />
            <div className="flex-1">
              <h3 className="font-meta-technical text-[9px] text-[#181512] font-bold mb-1 uppercase">FIRMWARE</h3>
              <div className="grid grid-cols-2 gap-1 font-body-sm text-[#1d1c15]">
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box</span> C/C++</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box</span> Python</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box_outline_blank</span> RTOS</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7e756f]">check_box</span> I2C/SPI</div>
              </div>
            </div>
          </div>
        </article>

        {/* Skill Card: Materials (Spans 6 cols) */}
        <article className="col-span-1 md:col-span-6 bg-[#f8f3e7] border border-[#7e756f] p-4 flex items-center relative overflow-hidden">
          <div className="w-full">
            <h2 className="font-headline-md text-sm font-bold text-[#181512] mb-2">Material Library Experience</h2>
            <div className="flex flex-wrap gap-1.5 font-meta-technical text-[9px]">
              <span className="px-2 py-0.5 border border-[#7e756f] rounded-xs bg-[#fef9ed] text-[#1d1c15]">6061-T6 Al</span>
              <span className="px-2 py-0.5 border border-[#7e756f] rounded-xs bg-[#fef9ed] text-[#1d1c15]">304 SS</span>
              <span className="px-2 py-0.5 border border-[#7e756f] rounded-xs bg-[#fef9ed] text-[#1d1c15]">Brass (360)</span>
              <span className="px-2 py-0.5 border border-[#7e756f] rounded-xs bg-[#fef9ed] text-[#1d1c15]">Delrin</span>
              <span className="px-2 py-0.5 border border-[#7e756f] rounded-xs bg-[#fef9ed] text-[#1d1c15] opacity-50">Titanium Gr5</span>
              <span className="px-2 py-0.5 border border-[#7e756f] rounded-xs bg-[#fef9ed] text-[#1d1c15]">Carbon Fiber</span>
            </div>
          </div>
        </article>
      </div>

      {/* Page Number */}
      <div className="mt-3 pt-2 border-t border-dashed border-[#cfc4bd] flex justify-end font-meta-technical text-[10px] text-[#7e756f]">
        PAGE 042
      </div>
    </div>
  );
};

export default SkillsChapter;
