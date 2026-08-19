/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ScrollMask.css";

const clamp = (v: number, min: number, max: number) => (v < min ? min : v > max ? max : v);

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

export type ScrollMaskShape = "circle" | "diamond" | "horizontal" | "vertical" | "box" | "wipe";

export interface ScrollMaskProps {
  src?: string;
  mediaType?: "image" | "video";
  poster?: string;
  alt?: string;
  maskShape?: ScrollMaskShape;
  scrollHint?: string;
  scrollSpanMultiplier?: number;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
  children?: React.ReactNode;
  className?: string;
}

export default function ScrollMask({
  src = "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1920&auto=format&fit=crop",
  mediaType = "image",
  poster = "",
  alt = "Scroll mask reveal",
  maskShape = "circle",
  scrollHint = "SCROLL TO ENTER EXPERIENCE",
  scrollSpanMultiplier = 1.6,
  onComplete,
  onProgress,
  children,
  className = "",
}: ScrollMaskProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);

  const [isCompleted, setIsCompleted] = useState(false);
  const hasTriggeredCompleteRef = useRef(false);

  const getClipPath = useCallback(
    (p: number): string => {
      switch (maskShape) {
        case "circle": {
          const radius = p * 150;
          return `circle(${radius.toFixed(2)}% at 50% 50%)`;
        }
        case "diamond": {
          const extent = p * 75;
          const top = Math.max(0, 50 - extent);
          const bottom = Math.min(100, 50 + extent);
          const left = Math.max(0, 50 - extent);
          const right = Math.min(100, 50 + extent);
          return `polygon(50% ${top.toFixed(2)}%, ${right.toFixed(2)}% 50%, 50% ${bottom.toFixed(2)}%, ${left.toFixed(2)}% 50%)`;
        }
        case "horizontal": {
          const insetX = (1 - p) * 50;
          return `inset(0% ${insetX.toFixed(2)}% 0% ${insetX.toFixed(2)}%)`;
        }
        case "vertical": {
          const insetY = (1 - p) * 50;
          return `inset(${insetY.toFixed(2)}% 0% ${insetY.toFixed(2)}% 0%)`;
        }
        case "wipe": {
          const insetY = (1 - p) * 100;
          return `inset(0% 0% ${insetY.toFixed(2)}% 0%)`;
        }
        case "box":
        default: {
          const inset = (1 - p) * 50;
          const r = Math.max(0, 24 * (1 - p));
          return `inset(${inset.toFixed(2)}% ${inset.toFixed(2)}% round ${r.toFixed(1)}px)`;
        }
      }
    },
    [maskShape]
  );

  const applyProgress = useCallback(
    (rawProgress: number) => {
      const viewport = viewportRef.current;
      const media = mediaRef.current;
      const hint = hintRef.current;
      const scrim = scrimRef.current;

      if (!viewport) return;

      const p = smoothstep(0, 0.85, rawProgress);
      viewport.style.clipPath = getClipPath(p);

      if (media) {
        const scale = 1.25 - 0.25 * p;
        media.style.transform = `scale(${scale.toFixed(4)})`;
      }

      if (hint) {
        const hintFade = smoothstep(0, 0.2, rawProgress);
        hint.style.opacity = `${(1 - hintFade).toFixed(3)}`;
        hint.style.transform = `translate(-50%, ${(hintFade * 12).toFixed(1)}px)`;
      }

      if (scrim) {
        const scrimOpacity = Math.max(0, 0.7 - 0.7 * p);
        scrim.style.opacity = `${scrimOpacity.toFixed(3)}`;
      }

      onProgress?.(rawProgress);

      if (rawProgress >= 0.95 && !hasTriggeredCompleteRef.current) {
        hasTriggeredCompleteRef.current = true;
        setIsCompleted(true);
        onComplete?.();
      }
    },
    [getClipPath, onComplete, onProgress]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = 0;
    let current = 0;
    let target = 0;

    const readProgress = () => {
      const rect = track.getBoundingClientRect();
      const span = window.innerHeight * scrollSpanMultiplier;
      return clamp(-rect.top / span, 0, 1);
    };

    const update = () => {
      target = readProgress();
      current += (target - current) * 0.18;
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
  }, [applyProgress, scrollSpanMultiplier]);

  return (
    <div
      ref={trackRef}
      className={`scroll-mask-track ${className}`.trim()}
      style={{ minHeight: `${(scrollSpanMultiplier + 1) * 100}vh` }}
    >
      <div className="scroll-mask-sticky">
        <div className="scroll-mask-backdrop" />

        {/* Revealed Mask Viewport */}
        <div ref={viewportRef} className="scroll-mask-viewport">
          {children ? (
            children
          ) : mediaType === "video" ? (
            <video
              ref={mediaRef as React.RefObject<HTMLVideoElement>}
              className="scroll-mask-media"
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              ref={mediaRef as React.RefObject<HTMLImageElement>}
              className="scroll-mask-media"
              src={src}
              alt={alt}
              draggable={false}
            />
          )}

          <div ref={scrimRef} className="scroll-mask-scrim" />
        </div>

        {/* Floating Scroll Hint */}
        {!isCompleted && (
          <div ref={hintRef} className="scroll-mask-hint">
            <span>{scrollHint}</span>
            <span className="material-symbols-outlined scroll-mask-hint-chevron">arrow_downward</span>
          </div>
        )}
      </div>
    </div>
  );
}
