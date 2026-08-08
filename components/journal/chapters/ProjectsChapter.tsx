import React from "react";

export const ProjectsChapter: React.FC = () => {
  return (
    <div className="w-full h-full relative flex flex-col lg:flex-row bg-[#f6f2eb] text-[#1d1c16] overflow-hidden rounded-sm border border-[#c4c7c7]/30 shadow-notebook">
      {/* LEFT PAGE: System Architecture */}
      <section className="flex-1 h-full paper-grain dot-grid relative p-6 sm:p-10 lg:p-12 border-r border-[#c4c7c7]/30 flex flex-col justify-between z-10 overflow-hidden">
        <div>
          {/* Page Header / Metadata */}
          <header className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2 relative">
                <span className="font-label-code text-xs text-[#bc412b] tracking-widest uppercase font-bold">
                  Project // Nexus
                </span>
                <div className="washi-tape absolute -top-2 left-28 w-14 h-4 z-10" />
              </div>
              <h1 className="font-headline-md text-xl sm:text-2xl font-bold ink-text mt-2 uppercase tracking-tight">
                SYSTEM<br />ARCHITECTURE
              </h1>
            </div>
            <div className="border border-[#c4c7c7]/50 px-2.5 py-0.5 text-[#444748] font-label-code text-[10px] uppercase tracking-wider bg-white/50">
              v.2.4.1 // Distributed
            </div>
          </header>

          {/* Content Area */}
          <div className="space-y-4">
            <p className="font-body-lg text-xs sm:text-sm ink-text leading-relaxed max-w-lg">
              Migrating the monolithic state to a distributed key-value store. The primary challenge remains resolving split-brain scenarios during network partitions while maintaining high availability for the read path.
            </p>

            {/* Architecture Sketch Area */}
            <div className="relative mt-4 max-w-md mx-auto">
              <div className="relative z-10 p-2 bg-[#f9f7f1] shadow-xs rotate-1 border border-[#c4c7c7]/30">
                {/* eslint-disable-next-html-link, @next/next/no-img-element */}
                <img
                  className="w-full h-auto mix-blend-multiply opacity-95 grayscale contrast-125 brightness-110 max-h-40 object-contain mx-auto"
                  alt="Distributed System Architecture Sketch"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASwdRPaP0eFkuqvfRF-17tQyzo2Hc2mVuDcy7n6LxwJ9RkoAER9yv4Zqd6o4JIFdBOTrr4IiqmzMNC36ypobMagUyjVxsCPnjHO8UDq5C6huJaP0i6G6C-_BoZNIxs5eAEIzUo2KmCa_kajYFCZW9RePLlnVDQCU57o-VAYleFSzEFX1ni6Riks9uBCA1goin55jqLtyOdzk8W4HL8vVqABoEq5XwjuwxLmHqIn-dcLMBUnjRdux1x"
                />
                <div className="absolute -top-3 left-1/2 w-10 h-4 washi-tape-2 z-10 -ml-5" />
              </div>

              {/* Floating sticky note annotation */}
              <div className="absolute -right-4 top-1/4 bg-[#f5e2a2] w-44 p-3 shadow-xs rotate-3 z-20 border border-amber-400/30">
                <div className="absolute -top-2 left-1/2 w-6 h-3.5 washi-tape z-10 -ml-3" />
                <p className="font-handwriting text-xs text-[#524615] leading-snug mt-1">
                  Note: Redis cluster latency spikes during backup. Need to separate RDB snapshotting to replica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="font-label-code text-xs text-[#444748]/60 mt-4">
          04
        </div>
      </section>

      {/* The Spine / Gutter */}
      <div className="hidden lg:flex w-12 flex-shrink-0 relative z-0">
        <div className="w-1/2 bg-gradient-to-r from-[#f6f2eb] to-[#dcd6cc] border-r border-black/20" />
        <div className="w-1/2 bg-gradient-to-l from-[#f6f2eb] to-[#dcd6cc]" />
        <div className="absolute inset-y-0 left-1/2 w-3 -ml-1.5 spine-shadow" />
        <div className="absolute -top-2 bottom-[-20px] left-1/2 w-2.5 -ml-[5px] bookmark-ribbon z-30 transform -rotate-1 origin-top bg-black" />
      </div>

      {/* RIGHT PAGE: Implementation Log */}
      <section className="flex-1 h-full paper-grain dot-grid relative p-6 sm:p-10 lg:p-12 flex flex-col justify-between z-10 overflow-hidden">
        <div>
          <header className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-0.5">
              <span className="font-label-code text-xs text-[#1f4874] tracking-widest uppercase font-bold">
                {"// 2024-10-24"}
              </span>
              <h2 className="font-headline-md text-xl sm:text-2xl font-bold ink-text mt-1 uppercase tracking-wide">
                IMPLEMENTATION<br />LOG
              </h2>
            </div>
            <div className="flex gap-1.5 items-center text-[#444748]/70 border border-[#c4c7c7]/30 px-2 py-0.5 bg-white/50">
              <span className="material-symbols-outlined text-sm">commit</span>
              <span className="font-label-code text-[10px] uppercase tracking-widest">a1b2c3d</span>
            </div>
          </header>

          <div className="space-y-4 relative z-10">
            {/* Commit Message Block */}
            <div className="bg-[#f2efe9] p-3.5 border-l-2 border-[#1f4874] shadow-2xs max-w-lg">
              <h3 className="font-label-code text-xs font-bold text-[#1d1c16] mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">terminal</span>
                refactor: optimize caching layer
              </h3>
              <p className="font-body-sm text-xs text-[#444748] leading-relaxed">
                Implemented consistent hashing for the cache client to reduce cache misses during node scaling events. Moved serialization logic out of the main request thread.
              </p>
            </div>

            {/* Code Snippet as Paper Clipping */}
            <div className="relative mt-3 mx-auto max-w-[98%] pl-2">
              <div className="bg-[#fcfbf9] border border-[#c4c7c7]/30 shadow-xs p-4 transform -rotate-1 relative overflow-hidden rounded-xs">
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 mb-2 border-b border-[#c4c7c7]/30 pb-1.5">
                    <span className="material-symbols-outlined text-xs text-[#001c37]">code</span>
                    <span className="font-label-code text-[11px] text-[#444748] tracking-wider">cache_client.rs</span>
                  </div>
                  <pre className="font-label-code text-[11px] text-[#1d1c16] overflow-x-auto leading-relaxed">
                    <code>{`impl CacheClient {
    pub async fn get_node(&self, key: &str) -> Option<Node> {
        // Use consistent hashing ring
        let hash = calculate_hash(key);
        let ring = self.ring.read().await;
        ring.get_node(hash).cloned()
    }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Hand-written notes section */}
            <div className="mt-4 pt-2 pl-2">
              <h4 className="font-handwriting text-base font-bold text-[#1d1c16] mb-2 underline decoration-[#c4c7c7]/60 decoration-wavy underline-offset-2">
                Post-Deployment Observations:
              </h4>
              <ul className="space-y-1 font-handwriting text-sm text-[#444748]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#6b5e2a]">check</span> Hit rate improved from 82% to 94% during peak load.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#747878]">check_box_outline_blank</span> Need to monitor memory usage on nodes handling &quot;hot&quot; keys.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="font-label-code text-xs text-[#444748]/60 text-right mt-4">
          05
        </div>
      </section>
    </div>
  );
};

export default ProjectsChapter;
