"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";

interface LenisContextType {
  lenis: Lenis | null;
  lockScroll: () => void;
  unlockScroll: () => void;
  scrollTo: (target: string | HTMLElement | number, options?: Record<string, unknown>) => void;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  lockScroll: () => {},
  unlockScroll: () => {},
  scrollTo: () => {},
});

export function useLenisScroll() {
  return useContext(LenisContext);
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lockCountRef = useRef(0);

  useEffect(() => {
    // Respect reduced motion settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  const lockScroll = useCallback(() => {
    lockCountRef.current += 1;
    if (lockCountRef.current === 1) {
      lenisInstance?.stop();
      document.body.style.overflow = "hidden";
    }
  }, [lenisInstance]);

  const unlockScroll = useCallback(() => {
    lockCountRef.current = Math.max(0, lockCountRef.current - 1);
    if (lockCountRef.current === 0) {
      lenisInstance?.start();
      document.body.style.overflow = "";
    }
  }, [lenisInstance]);

  const scrollTo = useCallback(
    (target: string | HTMLElement | number, options?: Record<string, unknown>) => {
      if (lenisInstance) {
        lenisInstance.scrollTo(target, options);
      } else {
        if (typeof target === "string") {
          const el = document.getElementById(target.replace("#", ""));
          el?.scrollIntoView({ behavior: "smooth" });
        } else if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [lenisInstance]
  );

  return (
    <LenisContext.Provider
      value={{
        lenis: lenisInstance,
        lockScroll,
        unlockScroll,
        scrollTo,
      }}
    >
      {children}
    </LenisContext.Provider>
  );
}
