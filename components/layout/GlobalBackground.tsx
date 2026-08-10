"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function GlobalBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="stars-container fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Animated Star Layers */}
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      {/* SVG Grain Noise Filter (~0.018 opacity) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.018] pointer-events-none mix-blend-soft-light z-10">
        <filter id="film-grain-global">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain-global)" />
      </svg>

      {/* Extremely Subtle Ambient Light Variation — Slow, Organic, Quiet */}
      {!reduced && (
        <motion.div
          animate={{
            opacity: [0.015, 0.025, 0.015],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(241,240,235,0.03)_0%,rgba(9,10,15,0)_75%)] pointer-events-none z-20"
        />
      )}
    </div>
  );
}
