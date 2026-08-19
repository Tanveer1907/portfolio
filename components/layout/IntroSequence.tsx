"use client";

import React, { useCallback, useEffect, useRef } from "react";
import TerminalDemo from "@/components/ui/terminal-demo";
import RisingParticles from "@/components/ui/RisingParticles";
import { useLenisScroll } from "@/components/layout/SmoothScrollProvider";

const clamp = (v: number, min: number, max: number) => (v < min ? min : v > max ? max : v);

export interface IntroSequenceProps {
  onFinish: () => void;
}

export default function IntroSequence({ onFinish }: IntroSequenceProps) {
  const { lenis, lockScroll, unlockScroll } = useLenisScroll();

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const isTerminalDoneRef = useRef(false);
  const hasFinishedRef = useRef(false);
  const animIdRef = useRef(0);

  const curtainRef = useRef<HTMLDivElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const handleTerminalComplete = useCallback(() => {
    isTerminalDoneRef.current = true;
  }, []);

  const triggerFinish = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    window.scrollTo({ top: 0, behavior: "instant" });
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    }
    unlockScroll();
    onFinish();
  }, [lenis, onFinish, unlockScroll]);

  useEffect(() => {
    // Completely lock Lenis and native window scroll so page cannot skip past Home
    lockScroll();
    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, behavior: "instant" });

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onWheel = (e: WheelEvent) => {
      if (!isTerminalDoneRef.current || hasFinishedRef.current) return;
      e.preventDefault();
      const delta = e.deltaY;
      targetProgressRef.current = clamp(targetProgressRef.current + delta * 0.0016, 0, 1.05);
    };

    let startTouchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        startTouchY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isTerminalDoneRef.current || hasFinishedRef.current) return;
      if (e.touches.length > 0) {
        const touchY = e.touches[0].clientY;
        const delta = startTouchY - touchY;
        startTouchY = touchY;
        targetProgressRef.current = clamp(targetProgressRef.current + delta * 0.0035, 0, 1.05);
        if (targetProgressRef.current > 0.05) {
          e.preventDefault();
        }
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isTerminalDoneRef.current || hasFinishedRef.current) return;
      if (["ArrowDown", "PageDown", "Space"].includes(e.code)) {
        e.preventDefault();
        targetProgressRef.current = clamp(targetProgressRef.current + 0.25, 0, 1.05);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    const updateLoop = () => {
      if (!hasFinishedRef.current) {
        // Keep window pinned at 0 during intro sequence
        if (window.scrollY !== 0) {
          window.scrollTo({ top: 0, behavior: "instant" });
        }

        const target = targetProgressRef.current;
        const cur = currentProgressRef.current;
        const next = cur + (target - cur) * 0.14;
        currentProgressRef.current = next;

        // Animate the portal mask opening from center ONLY when scrolling begins
        if (curtainRef.current) {
          if (next > 0.005) {
            const radiusPct = next * 135;
            const maskVal = `radial-gradient(circle at 50% 50%, transparent ${radiusPct.toFixed(2)}%, black ${(radiusPct + 8).toFixed(2)}%)`;
            curtainRef.current.style.maskImage = maskVal;
            curtainRef.current.style.webkitMaskImage = maskVal;
          } else {
            // Absolute solid cover with zero center hole leak
            curtainRef.current.style.maskImage = "none";
            curtainRef.current.style.webkitMaskImage = "none";
          }

          // Smooth fade out at the tail end
          if (next > 0.82) {
            const finalFade = Math.max(0, 1 - (next - 0.82) / 0.18);
            curtainRef.current.style.opacity = `${finalFade.toFixed(3)}`;
          } else {
            curtainRef.current.style.opacity = "1";
          }
        }

        // Fade and scale terminal
        if (terminalRef.current) {
          const termOpacity = Math.max(0, 1 - next * 2.2);
          const termScale = 1 - next * 0.08;
          terminalRef.current.style.opacity = `${termOpacity.toFixed(3)}`;
          terminalRef.current.style.transform = `scale(${termScale.toFixed(4)})`;
          terminalRef.current.style.pointerEvents = termOpacity > 0.1 ? "auto" : "none";
        }

        if (next >= 0.98) {
          triggerFinish();
        }
      }
      animIdRef.current = requestAnimationFrame(updateLoop);
    };

    animIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(animIdRef.current);
    };
  }, [lenis, lockScroll, triggerFinish]);

  const handleEnterClick = () => {
    targetProgressRef.current = 1.0;
  };

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 w-full h-full z-50 overflow-hidden bg-[#090a0f] pointer-events-auto select-none"
      style={{
        maskImage: "none",
        WebkitMaskImage: "none",
        willChange: "mask-image, -webkit-mask-image, opacity",
      }}
    >
      {/* Active Rising Particles Background inside the curtain while in terminal */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <RisingParticles
          className="w-full h-full"
          repelRadius={140}
          repelStrength={7}
          speed={0.8}
          minRadius={1.1}
          maxRadius={3.2}
          baseColor="radial-gradient(ellipse at bottom, #131b26 0%, #090a0f 70%, #050608 100%)"
        />
      </div>

      {/* Terminal Screen in center */}
      <div
        ref={terminalRef}
        className="relative z-10 w-full h-full flex items-center justify-center pointer-events-auto"
        style={{ willChange: "transform, opacity" }}
      >
        <TerminalDemo
          onTerminalComplete={handleTerminalComplete}
          onFinish={handleEnterClick}
        />
      </div>
    </div>
  );
}
