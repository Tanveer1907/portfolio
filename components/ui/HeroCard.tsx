'use client';

import React, { useState, useEffect } from 'react';
import HoloCard from '@/components/ui/HoloCard';

export default function HeroCard() {
  const [cardWidth, setCardWidth] = useState(420);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Make the card responsive and fill the space cleanly
      if (w < 440) {
        setCardWidth(Math.min(w - 95, 290));
      } else if (w < 640) {
        setCardWidth(Math.min(w - 110, 330));
      } else if (w < 1024) {
        setCardWidth(350);
      } else if (h < 720) {
        setCardWidth(330);
      } else if (h < 800) {
        setCardWidth(355);
      } else if (h < 900) {
        setCardWidth(390);
      } else {
        setCardWidth(420);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full select-none">
      {/* The HoloCard Component - No filters or overlays, true to original artwork */}
      <div className="relative flex items-center justify-center">
        <HoloCard
          image="/images/tanveer-card.jpg"
          backImage="/images/tanveer-card-back.jpg"
          alt="Tanveer Singh - Software Developer Collector Card"
          intensity={0}
          edgeSparkle={0}
          frame={0}
          glare={0.35}
          width={cardWidth}
          radius={18}
          tiltMax={15}
          hoverScale={1.04}
          idle={true}
          shadow={true}
        />
      </div>

      {/* Clean minimal hint */}
      <div className="mt-4 flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm text-[11px] font-mono text-[#cac6bf]/80">
        <span className="w-1.5 h-1.5 rounded-full bg-[#39C3EF] animate-pulse" />
        <span>Click to flip</span>
        <span className="text-white/30">•</span>
        <span>Tilt in 3D</span>
      </div>
    </div>
  );
}
