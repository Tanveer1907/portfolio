"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import HeroSection from "@/components/sections/HeroSection";
import "./OpeningSequence.css";

const clamp = (v: number, min: number, max: number) => (v < min ? min : v > max ? max : v);

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = Math.min(Math.max((x - edge0) / (edge1 - edge0 || 1e-6), 0), 1);
  return t * t * (3 - 2 * t);
};

interface OpeningSequenceProps {
  onExplore: () => void;
}

export default function OpeningSequence({ onExplore }: OpeningSequenceProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const heroLayerRef = useRef<HTMLDivElement | null>(null);

  const [isHeroActive, setIsHeroActive] = useState(false);

  const applyProgress = useCallback((p: number) => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    const scrim = scrimRef.current;
    const hint = hintRef.current;
    const heroLayer = heroLayerRef.current;

    if (!frame || !media) return;

    // Expansion progress (0.0 to 0.75 maps to 0 to 1 for clipPath)
    const expansionE = smoothstep(0, 0.75, p);

    const startW = 42;
    const startH = 58;
    const w = startW + (100 - startW) * expansionE;
    const h = startH + (100 - startH) * expansionE;

    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = Math.max(0, 24 * (1 - expansionE));

    frame.style.clipPath = `inset(${iy.toFixed(3)}% ${ix.toFixed(3)}% ${iy.toFixed(3)}% ${ix.toFixed(3)}% round ${r.toFixed(1)}px)`;

    // Media scale eases from 1.15 to 1.0
    const scale = 1.15 - 0.15 * expansionE;
    media.style.transform = `scale(${scale.toFixed(4)})`;

    // Image frame opacity: dissolves smoothly at maximum expansion (0.65 to 0.95)
    const crossfade = smoothstep(0.65, 0.95, p);
    frame.style.opacity = `${(1 - crossfade).toFixed(3)}`;

    // Scrim overlay opacity
    if (scrim) {
      scrim.style.opacity = `${(0.65 * expansionE).toFixed(3)}`;
    }

    // Scroll hint fades out early (0.0 to 0.15)
    if (hint) {
      const hintFade = smoothstep(0, 0.15, p);
      hint.style.opacity = `${(1 - hintFade).toFixed(3)}`;
      hint.style.transform = `translate3d(0, ${(8 * hintFade).toFixed(1)}px, 0)`;
    }

    // Hero layer is hidden (opacity 0) while image expands, and only fades in as expansion completes
    if (heroLayer) {
      const heroFade = smoothstep(0.65, 0.95, p);
      heroLayer.style.opacity = `${heroFade.toFixed(3)}`;
      heroLayer.style.pointerEvents = heroFade > 0.5 ? "auto" : "none";
    }

    // Activate EchoText when expansion finishes
    if (p >= 0.75) {
      setIsHeroActive(true);
    } else {
      setIsHeroActive(false);
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = 0;
    let current = 0;
    let target = 0;

    const readProgress = () => {
      const rect = track.getBoundingClientRect();
      const span = window.innerHeight * 0.85;
      return clamp(-rect.top / span, 0, 1);
    };

    const update = () => {
      target = readProgress();
      current += (target - current) * 0.16;
      if (Math.abs(target - current) < 0.0005) {
        current = target;
      }
      applyProgress(current);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          update();
          rafId = 0;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [applyProgress]);

  return (
    <div ref={trackRef} className="opening-gate-track">
      <div className="opening-gate-stage">
        {/* Solid #0A0A09 Background behind resting image */}
        <div className="absolute inset-0 bg-[#0A0A09] z-0" />

        {/* HeroSection Layer (fades in ONLY after expansion completes) */}
        <div ref={heroLayerRef} className="absolute inset-0 z-10 opacity-0 pointer-events-none">
          <HeroSection onExplore={onExplore} isActive={isHeroActive} />
        </div>

        {/* Expanding Image Frame Overlay */}
        <div ref={frameRef} className="opening-gate-frame z-20">
          <img
            ref={mediaRef}
            className="opening-gate-media"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
            alt="Tanveer Singh Portfolio Opening"
            draggable={false}
          />
          <div ref={scrimRef} className="opening-gate-scrim" />
          <div ref={hintRef} className="opening-gate-hint">
            SCROLL TO OPEN
          </div>
        </div>
      </div>
    </div>
  );
}
