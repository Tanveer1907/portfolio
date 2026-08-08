"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#11110F]">
      {/* Base Noise / Paper Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay paper-noise-bg" />

      {/* SVG Grain Noise Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none">
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain)" />
      </svg>

      {/* Extremely Subtle Warm Ambient Tonal Layer (Slowly drifting) */}
      <motion.div
        animate={{
          opacity: [0.03, 0.07, 0.03],
          scale: [1, 1.05, 1],
          x: ["-4%", "4%", "-4%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[25%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,107,74,0.06)_0%,rgba(17,17,15,0)_70%)] blur-3xl pointer-events-none"
      />

      {/* Secondary Low-Opacity Warm Tonal Variation */}
      <motion.div
        animate={{
          opacity: [0.02, 0.05, 0.02],
          scale: [1.05, 0.95, 1.05],
          y: ["-3%", "4%", "-3%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] right-[-10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,154,125,0.04)_0%,rgba(17,17,15,0)_70%)] blur-3xl pointer-events-none"
      />

      {/* Vignette Rim */}
      <div className="absolute inset-0 subtle-vignette pointer-events-none" />
    </div>
  );
}
