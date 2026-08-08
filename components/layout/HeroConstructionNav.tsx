"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticleText from "@/components/ui/ParticleText";
import OptionWheel from "@/components/navigation/OptionWheel";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "journey", label: "JOURNEY" },
  { id: "work", label: "WORK" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export default function HeroConstructionNav() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll Progress relative to Hero Section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Hero headline transforms
  const heroHeadlineOpacity = useTransform(scrollYProgress, [0.0, 0.45], [1, 0]);
  const heroHeadlineY = useTransform(scrollYProgress, [0.0, 0.45], [0, -40]);

  // OptionWheel Emergence on Scroll (emerges gently as user scrolls away from Hero)
  const wheelOpacity = useTransform(scrollYProgress, [0.12, 0.40], [0, 1]);

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
      {/* Quiet Floating Left Vertical Navigation Rail (OptionWheel) — Desktop */}
      <motion.aside
        style={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: wheelOpacity,
              }
        }
        className="hidden md:block fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
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

      {/* Hero Section Container */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-6 max-w-6xl mx-auto"
      >
        {/* Top Subtitle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-4"
        >
          <span className="font-geist text-xs uppercase tracking-widest text-[#C86B4A] font-medium">
            Computer Science Student &amp; Full-Stack Developer
          </span>
        </motion.div>

        {/* Hero Title & Identity Statement */}
        <div className="my-auto py-12 max-w-4xl">
          <motion.div
            style={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: heroHeadlineOpacity,
                    y: heroHeadlineY,
                  }
            }
            className="hero-name my-4"
          >
            <ParticleText
              text="TANVEER SINGH"
              particleSize={2}
              density={3}
              color="#F1EDE3"
              highlightColor="#C86B4A"
              scatter={140}
              gatherDuration={1400}
              stagger={280}
              pointerRepel={24}
              repelRadius={100}
              idleDrift={0.18}
              trigger="mount"
              textAlign="left"
              fontSize="clamp(4rem, 10vw, 9rem)"
              fontWeight={800}
              fontFamily="inherit"
              glow={false}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-inter text-xl sm:text-2xl text-[#A6A197] font-light leading-relaxed max-w-2xl"
          >
            Computer science student building thoughtful software, interactive experiences, and systems that solve real problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex flex-wrap gap-4 items-center mt-10"
          >
            <button
              onClick={() => handleSelectSection(3)}
              className="px-7 py-3.5 rounded-xl bg-[#C86B4A] text-[#11110F] font-geist text-xs font-semibold uppercase tracking-wider hover:bg-[#D99A7D] transition-colors shadow-sm cursor-pointer"
            >
              View Work
            </button>

            <button
              onClick={() => handleSelectSection(1)}
              className="px-7 py-3.5 rounded-xl bg-transparent border border-[#F1EDE3]/18 text-[#F1EDE3] hover:bg-[#F1EDE3]/[0.06] font-geist text-xs font-medium uppercase tracking-wider transition-all cursor-pointer"
            >
              About Me
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-3 pt-8 border-t border-[#F1EDE3]/12 text-[#A6A197]"
        >
          <button
            onClick={() => handleSelectSection(1)}
            className="flex items-center gap-2 font-geist text-xs tracking-wider text-[#A6A197] hover:text-[#F1EDE3] transition-colors cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </motion.div>
      </section>
    </>
  );
}
