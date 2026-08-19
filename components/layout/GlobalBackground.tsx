"use client";

import React from "react";
import RisingParticles from "@/components/ui/RisingParticles";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#090a0f]">
      {/* Interactive Rising Particles Background */}
      <RisingParticles
        className="w-full h-full"
        repelRadius={140}
        repelStrength={7}
        speed={0.8}
        minRadius={1.1}
        maxRadius={3.2}
        baseColor="radial-gradient(ellipse at bottom, #131b26 0%, #090a0f 70%, #050608 100%)"
      />

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
    </div>
  );
}
