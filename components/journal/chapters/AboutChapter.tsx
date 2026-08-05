import React from "react";

export const AboutChapter: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row relative mx-auto text-[#1d1c15] overflow-hidden bg-[#fef9ed]">
      {/* Left Page */}
      <div className="paper-texture w-full md:w-1/2 h-full p-6 md:p-10 relative rounded-sm md:rounded-l-md md:rounded-r-none z-20 bg-[#fef9ed] flex flex-col justify-between overflow-hidden">
        <div className="absolute top-6 right-6 coffee-stain w-20 h-20 opacity-20 pointer-events-none" />
        <div>
          <h1 className="font-display-lg text-3xl md:text-4xl mb-4 text-[#181512] relative z-10 font-semibold">
            Chief Architect
          </h1>
          <div className="relative w-48 sm:w-56 h-60 sm:h-64 mb-4 transform -rotate-2 ml-2">
            {/* eslint-disable-next-html-link, @next/next/no-img-element */}
            <img
              alt="Engineer Photo"
              className="w-full h-full object-cover grayscale sepia-[0.2] border-4 border-[#fef9ed] shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZdUcmjpenCSNaETzADtSSJ-NBKcnwriKBmc6wTvHqetfj95FhrHnFqnQTAHVzGDJfivU5--_4bBbYFBEEiqlYF5z3CeerghtOBng3LceGQ0Yar2dflLKM7t5zNXkXBmX8L8ftKzxlo5zIppiB3yPUD4b6KhuDbYrvwBkcKUulduGD1ECmmgXp2zMkFCk0lYj819T0g6UGpPtRozQL1d38MGzM9oJUziYO10kvUBAII8HzeyxO2HNU"
            />
            <div className="masking-tape w-20 h-5 absolute -top-3 left-1/2 transform -translate-x-1/2 rotate-1" />
            <div className="masking-tape w-20 h-5 absolute -bottom-3 left-1/2 transform -translate-x-1/2 -rotate-1" />
          </div>
          <div className="space-y-3 text-[#1d1c15] font-body-main text-xs sm:text-sm max-w-md relative z-10 leading-relaxed">
            <p>
              Building systems is akin to drafting a cathedral. It requires an understanding of the materials at hand, an appreciation for the foundational bedrock, and the foresight to construct spires that reach without collapsing.
            </p>
            <p>
              With over a decade navigating the structural integrity of digital realms, my approach remains grounded in analog precision. A line drawn in graphite demands intention. Code should be written with the same reverence.
            </p>
          </div>
        </div>

        <div className="font-annotation text-xs sm:text-sm text-[#775a19] transform -rotate-3 opacity-80 mt-2">
          * Need to re-calibrate the primary servers.
        </div>
      </div>

      {/* Page Binding (Center) */}
      <div className="hidden md:block w-8 page-fold absolute left-1/2 transform -translate-x-1/2 h-full z-30 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]" />

      {/* Right Page */}
      <div className="paper-texture w-full md:w-1/2 h-full p-6 md:p-10 relative rounded-sm md:rounded-r-md md:rounded-l-none z-20 bg-[#fef9ed] flex flex-col justify-between overflow-hidden">
        <div>
          <div className="text-right font-meta-technical text-[10px] sm:text-xs text-[#7e756f] opacity-60 mb-2">
            LOG ENTRY: 042<br />
            SYS. VER. 8.1
          </div>
          <h2 className="font-headline-md text-xl sm:text-2xl font-bold mb-4 border-b border-[#cfc4bd] inline-block pb-1 text-[#181512]">
            Personal Philosophy
          </h2>
          <div className="font-annotation text-xs sm:text-sm text-[#181512] mb-4 transform rotate-1 leading-relaxed max-w-sm">
            &quot;Efficiency without elegance is merely survival. True engineering finds poetry in the mechanism. Seek the minimal viable complexity.&quot;
          </div>
          <div className="relative w-full h-44 sm:h-48 border border-[#cfc4bd] p-3 mb-4 bg-[#f8f3e7]">
            <span className="absolute top-2 left-2 font-meta-technical text-[#7e756f] text-[9px] uppercase font-bold">
              FIG. 1 - LEVERAGE
            </span>
            {/* eslint-disable-next-html-link, @next/next/no-img-element */}
            <img
              alt="Engineering Sketch"
              className="w-full h-full object-contain sketch-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDocScpnXC6xTj-r-NvgCw4WZ4xAIAlF2hg9XU0HvZQK8Ot9NWKXHquckTcvvXcRGNdF0YkzBP8aHxMkaInl6XemeJugUWHNlIcEIG7jKlM9myPAkjr6-5lyW5dC_OlSERYgnOD5gJCuWX1Uk5mJ67qAV-4kSJWwiMu9q1DAI5luYeaB_AIhtYqhn_XkhsZqV-nUN1tI2xKhjlQHZfyYBKAULMRMg-KZ6XURPyGmSL2O6UHNv0klA"
            />
          </div>
        </div>

        {/* Sticky Note */}
        <div className="relative w-44 sm:w-48 h-36 bg-[#fed488] shadow-xs p-3 transform rotate-3 flex flex-col ml-auto rounded-xs border border-amber-500/30">
          <div className="masking-tape w-14 h-4 absolute -top-2 left-1/2 transform -translate-x-1/2 -rotate-2" />
          <span className="font-annotation text-xs text-[#785a1a] mt-1 leading-tight">
            Review the load-bearing modules before the Q3 deployment. Do not forget.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutChapter;
