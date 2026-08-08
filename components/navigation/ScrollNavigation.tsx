"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import OptionWheel from "./OptionWheel";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "journey", label: "JOURNEY" },
  { id: "work", label: "WORK" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export default function ScrollNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Viewport scroll tracking: 0px -> opacity 0.45, 150px+ -> opacity 1.0
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 150], [0.45, 1.0]);

  // Section Tracking via IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = SECTIONS.findIndex((s) => s.id === entry.target.id);
          if (idx !== -1) {
            setActiveIndex(idx);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectSection = (index: number) => {
    setActiveIndex(index);
    const sec = SECTIONS[index];
    if (sec) {
      const el = document.getElementById(sec.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Viewport-Fixed Left Vertical Navigation Rail (OptionWheel) — Desktop */}
      <motion.aside
        style={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: navOpacity }
        }
        className="hidden md:block fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 z-[100] pointer-events-auto"
      >
        <OptionWheel
          items={SECTIONS.map((s) => s.label)}
          selectedIndex={activeIndex}
          onSelect={handleSelectSection}
          textColor="rgba(166,161,151,0.50)"
          activeColor="#F1EDE3"
          side="left"
          fontSize={0.85}
          spacing={1.0}
          curve={1.0}
          tilt={4}
          blur={1.0}
          fade={0.2}
          draggable
        />
      </motion.aside>

      {/* Viewport-Fixed Bottom Navigation Bar — Mobile */}
      <motion.div
        style={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: navOpacity }
        }
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto bg-[#11110F]/90 backdrop-blur-xl border border-[#F1EDE3]/12 rounded-full px-4 py-2 shadow-2xl flex items-center gap-3 text-xs font-geist"
      >
        <button
          onClick={() => handleSelectSection(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className="text-[#A6A197] hover:text-[#F1EDE3] disabled:opacity-30 p-1 cursor-pointer"
          aria-label="Previous Section"
        >
          &uarr;
        </button>

        <span className="font-semibold text-[#F1EDE3] tracking-widest min-w-[70px] text-center">
          {SECTIONS[activeIndex]?.label}
        </span>

        <button
          onClick={() => handleSelectSection(Math.min(SECTIONS.length - 1, activeIndex + 1))}
          disabled={activeIndex === SECTIONS.length - 1}
          className="text-[#A6A197] hover:text-[#F1EDE3] disabled:opacity-30 p-1 cursor-pointer"
          aria-label="Next Section"
        >
          &darr;
        </button>
      </motion.div>
    </>
  );
}
