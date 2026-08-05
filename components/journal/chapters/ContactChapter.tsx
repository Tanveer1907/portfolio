import React from "react";

export const ContactChapter: React.FC = () => {
  return (
    <article className="paper-texture w-full h-full relative flex flex-col md:flex-row mx-auto bg-[#fef9ed] text-[#1d1c15] border border-[#cfc4bd] p-6 md:p-10 justify-between overflow-hidden">
      {/* Structural Grid for Page */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full relative h-full">
        {/* Main Drafting Column */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-between z-10 relative h-full">
          <div>
            <header className="mb-4 relative">
              <h1 className="font-display-lg text-3xl md:text-4xl text-[#181512] tracking-tight font-semibold">
                Final Dispatch.
              </h1>
              <p className="font-annotation text-xs sm:text-sm text-[#4d4540] mt-2 max-w-md">
                Commence transmission. End of log sequence. Await further instructions or initiate direct contact.
              </p>
              {/* Floating Annotation */}
              <div className="absolute -right-2 -top-4 text-[#775a19] font-annotation text-xs -rotate-3 opacity-80 pointer-events-none flex flex-col items-center">
                <span>urgent.</span>
                <svg className="w-5 h-5 ml-1 mt-0.5 stroke-[#775a19]" fill="none" viewBox="0 0 24 24">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </header>

            {/* Contact Form (Drafting Line Style) */}
            <form className="space-y-3 max-w-lg mt-3 relative z-20">
              <div className="relative group">
                <label className="font-meta-technical text-[10px] text-[#7e756f] block mb-0.5" htmlFor="name">
                  Operator Identifier
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-[#181512] text-[#181512] focus:ring-0 focus:border-[#775a19] transition-colors font-body-main text-xs pb-1.5 px-0 placeholder-[#7e756f]/60 outline-none"
                  id="name"
                  placeholder="Enter name or callsign"
                  type="text"
                />
              </div>
              <div className="relative group mt-3">
                <label className="font-meta-technical text-[10px] text-[#7e756f] block mb-0.5" htmlFor="freq">
                  Frequency (Email)
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-[#181512] text-[#181512] focus:ring-0 focus:border-[#775a19] transition-colors font-body-main text-xs pb-1.5 px-0 placeholder-[#7e756f]/60 outline-none"
                  id="freq"
                  placeholder="transmit@domain.com"
                  type="email"
                />
              </div>
              <div className="relative group mt-3">
                <label className="font-meta-technical text-[10px] text-[#7e756f] block mb-0.5" htmlFor="msg">
                  Encrypted Payload
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b-2 border-[#181512] text-[#181512] focus:ring-0 focus:border-[#775a19] transition-colors font-body-main text-xs pb-1.5 px-0 placeholder-[#7e756f]/60 outline-none resize-none"
                  id="msg"
                  placeholder="Draft transmission here..."
                  rows={3}
                />
              </div>
              <button
                className="mt-4 px-5 py-2 bg-[#181512] text-[#ffffff] font-meta-technical text-xs tracking-widest hover:bg-[#323029] transition-colors uppercase border border-[#181512] shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] duration-100 cursor-pointer"
                type="button"
              >
                Execute Send
              </button>
            </form>
          </div>
        </div>

        {/* Right Column (Asymmetric Attachments) */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-between relative h-full">
          {/* Clipped Business Card */}
          <div className="relative w-56 h-32 bg-white shadow-xs rotate-3 flex flex-col p-3.5 z-20 border border-[#cfc4bd]/40 hover:rotate-1 transition-transform cursor-pointer group rounded-xs my-2">
            {/* Paperclip visual */}
            <div className="absolute -top-3.5 left-5 w-3.5 h-8 border-2 border-[#7e756f] rounded-full bg-transparent z-30 opacity-70 group-hover:-translate-y-1 transition-transform" />
            <div className="mt-auto">
              <h3 className="font-headline-md text-base text-[#181512] font-bold">Tanveer Singh</h3>
              <p className="font-meta-technical text-[10px] text-[#775a19] mt-0.5">Chief Architect</p>
              <div className="mt-2 flex items-center gap-1 font-annotation text-xs text-[#7e756f]">
                <span className="material-symbols-outlined text-xs">location_on</span>
                Sector 4G
              </div>
            </div>
          </div>

          {/* Final Ink Stamp */}
          <div className="relative opacity-85 rotate-[-15deg] pointer-events-none z-10 mix-blend-multiply my-2">
            <div className="border-3 border-[#ba1a1a] text-[#ba1a1a] p-2.5 rounded-full w-24 h-24 flex items-center justify-center font-meta-technical text-[10px] uppercase tracking-widest text-center font-bold">
              <span className="transform rotate-12">Verified<br />Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Foreground Pen */}
      {/* eslint-disable-next-html-link, @next/next/no-img-element */}
      <img
        alt="Machined Steel Pen"
        className="absolute bottom-2 right-[-30px] w-72 rotate-[-25deg] pen-shadow z-50 pointer-events-none mix-blend-normal hidden sm:block opacity-90"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzS8U7M_YEJCa9ZmZjjSxlV24ZRXN4jMx7Jds2v3tw5xwPsfGqViuk83qtwoxBrM8YBOQfb9Anea_fbWQApuef-cR0WYVic_1hvBfm-nMRAfDNdIQbfctOPQVfX_M1FvhuT2_FeEGZBpZXVioENdLbfheidLIcq6ubdUIc90DmUvVye7mpQz8bu5ShNG5yJ9KHLGHBz6htYIWaMpTTqp2o18t_r1PwtJ-w8aMYqEsWp5L5yi1SsOBx"
      />

      {/* Timestamp Overlay */}
      <div className="absolute bottom-4 right-6 text-right z-30 pointer-events-none">
        <p className="font-meta-technical text-[8px] text-[#7e756f] opacity-60">LAST ENTRY</p>
        <p className="font-annotation text-[10px] text-[#181512]">2026.08.05_18:45Z</p>
      </div>
    </article>
  );
};

export default ContactChapter;
