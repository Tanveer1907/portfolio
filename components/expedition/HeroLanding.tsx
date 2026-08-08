"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Compass, Navigation } from "lucide-react";
import ParticleText from "@/components/ui/ParticleText";

export default function HeroLanding() {
  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Topographic Contour Lines Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 200 C 200 150, 400 350, 600 250 C 800 150, 1000 300, 1100 250"
            fill="none"
            stroke="#50E8F4"
            strokeWidth="1.2"
            strokeDasharray="4,6"
          />
          <path
            d="M -100 350 C 150 400, 450 250, 700 400 C 900 500, 1050 350, 1200 400"
            fill="none"
            stroke="#50E8F4"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <path
            d="M -100 500 C 300 450, 500 650, 800 500 C 950 400, 1100 600, 1200 550"
            fill="none"
            stroke="#50E8F4"
            strokeWidth="1"
            opacity="0.8"
          />
          <path
            d="M -100 700 C 250 600, 550 750, 750 650 C 900 600, 1050 800, 1200 700"
            fill="none"
            stroke="#50E8F4"
            strokeWidth="0.7"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Atmospheric Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#001619] via-[#001619]/80 to-transparent pointer-events-none z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Expeditioner Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#50E8F4]/30 bg-[#00252A]/90 text-[#50E8F4] font-geist text-xs tracking-[0.25em] uppercase mb-4 shadow-[0_0_20px_rgba(80,232,244,0.3)] backdrop-blur-md"
        >
          <Navigation className="w-3.5 h-3.5 animate-pulse text-[#50E8F4]" />
          <span>EXPEDITION CAPTAIN &amp; SOFTWARE ARCHITECT</span>
        </motion.div>

        {/* Hero Interactive ParticleText Headline Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-5xl h-[180px] md:h-[230px] my-4 relative flex items-center justify-center"
        >
          <ParticleText
            text="TANVEER SINGH"
            particleSize={2.4}
            density={3.2}
            color="#C7F8FE"
            highlightColor="#50E8F4"
            scatter={140}
            gatherDuration={1500}
            stagger={320}
            pointerRepel={55}
            repelRadius={140}
            idleDrift={0.8}
            trigger="mount"
            fontSize="clamp(3rem, 7.5vw, 6.5rem)"
            fontWeight={800}
            fontFamily="Inter, system-ui, sans-serif"
            glow={true}
          />
        </motion.div>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-inter text-lg md:text-2xl text-[#C7F8FE]/90 max-w-2xl font-light mb-10 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Mapping high-performance distributed systems, machine learning frontiers, and cinematic digital experiences.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToSkills}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-geist text-sm tracking-[0.25em] font-semibold text-[#C7F8FE] uppercase transition-all duration-300 focus:outline-none"
          >
            {/* Outer Decorative Box */}
            <span className="absolute inset-0 border border-[#50E8F4]/60 group-hover:border-[#50E8F4] bg-[#00252A]/90 group-hover:bg-[#00383F] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(80,232,244,0.45)] backdrop-blur-md" />
            
            {/* Decorative Corner Accents */}
            <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#50E8F4]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#50E8F4]" />
            <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#50E8F4]" />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#50E8F4]" />

            {/* Side Flourish Lines */}
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-[#50E8F4]/60 group-hover:w-5 transition-all" />
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-[#50E8F4]/60 group-hover:w-5 transition-all" />

            <span className="relative flex items-center gap-3 z-10 text-[#50E8F4] group-hover:text-[#C7F8FE]">
              <Compass className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
              BEGIN EXPEDITION
            </span>
          </button>
        </motion.div>
      </div>

      {/* Dotted Expedition Path leading down */}
      <div className="relative z-20 mt-12 flex flex-col items-center pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
          onClick={scrollToSkills}
        >
          <span className="font-geist text-[10px] tracking-[0.3em] text-[#78A3A8] uppercase">
            EXPLORE SKILLS OUTPOST
          </span>
          <div className="w-8 h-8 rounded-full border border-[#50E8F4]/40 flex items-center justify-center text-[#50E8F4] bg-[#00252A]/80 backdrop-blur-md">
            <ChevronDown className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Winding glowing cyan dotted line */}
        <div className="w-[2px] h-20 mt-4 bg-gradient-to-b from-[#50E8F4] via-[#50E8F4]/50 to-transparent border-r-2 border-dashed border-[#50E8F4]/80" />
      </div>
    </section>
  );
}
