"use client";

import React from "react";
import { motion } from "framer-motion";

interface LeftHeroPanelProps {
  onExplore: () => void;
}

export default function LeftHeroPanel({ onExplore }: LeftHeroPanelProps) {
  return (
    <div className="hidden md:flex flex-col w-[48%] h-screen fixed top-0 left-0 border-r border-subtle pt-32 pb-8 px-12 xl:px-20 justify-between bg-[#0A0A09] z-10 overflow-hidden">
      {/* Hero Text Content */}
      <div className="flex flex-col gap-6 max-w-[480px] mt-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-hero-display text-[#f5eee0] uppercase"
        >
          I BUILD<br />
          THINGS<br />
          <span className="text-[#949087]">
            TO UNDERSTAND<br />HOW THEY WORK.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body-md text-[#cac6bf] max-w-sm"
        >
          Software developer passionate about building scalable systems and intuitive experiences.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          onClick={onExplore}
          className="group flex items-center gap-2 w-fit mt-2 cursor-pointer"
        >
          <span className="font-label-caps text-[#cac6bf] border-b border-transparent group-hover:border-[#f5eee0] group-hover:text-[#f5eee0] transition-colors pb-1">
            EXPLORE
          </span>
          <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#f5eee0] transition-all transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </motion.button>
      </div>

      {/* Atmospheric Workspace Photography */}
      <div
        className="absolute bottom-0 left-0 w-full h-[58%] opacity-35 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(10,10,9,1) 0%, rgba(10,10,9,0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmKJeEgPpWk2t0P0Nz51TGkC4JPwmFCwJSbsYZ7ft5bL2eBdAdYCn8KBs6DWgpjDlTtoJgVERejYqqyCLiJgN3W9m1_fI4isscEa5UvHBrqDNG9jzLsI9TSTSjvpLFZnTAW6b6yf0JXr_FXIw8fybUJVPfcUf9szpNPTvwmFt0-Q_nAHV645-3WukVx4ZZkfxUYsG-5TZI8VfwdkvItMzyig4ILR6yv98vf-jPKgYeqHy4Vt9oid27')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />

      {/* Footer / Social & Scroll Indicators */}
      <div className="flex justify-between items-end w-full relative z-10">
        <div className="flex items-center gap-5 text-[#cac6bf]">
          <a
            href="https://github.com/Tanveer1907"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5eee0] transition-colors p-1"
            title="GitHub"
          >
            <span className="material-symbols-outlined text-xl">code</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5eee0] transition-colors p-1"
            title="LinkedIn"
          >
            <span className="material-symbols-outlined text-xl">work</span>
          </a>
          <a
            href="mailto:tanveersingh.dev@gmail.com"
            className="hover:text-[#f5eee0] transition-colors p-1"
            title="Email"
          >
            <span className="material-symbols-outlined text-xl">mail</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-[#949087]">
          <span className="font-label-caps text-xs">SCROLL TO BEGIN</span>
          <span className="material-symbols-outlined text-sm animate-bounce">
            arrow_downward
          </span>
        </div>
      </div>
    </div>
  );
}
