"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticleText from "@/components/ui/ParticleText";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollProgressVal, setScrollProgressVal] = useState(0);

  // Scroll Progress relative to Hero Section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Hero transforms
  const heroHeadlineOpacity = useTransform(scrollYProgress, [0.0, 0.5], [1, 0]);
  const heroHeadlineY = useTransform(scrollYProgress, [0.0, 0.5], [0, -30]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setScrollProgressVal(v));
  }, [scrollYProgress]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-16 px-6 max-w-5xl mx-auto"
    >
      {/* Top Subtitle Tag / Log Metadata */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-4"
      >
        <span className="font-geist text-xs uppercase tracking-widest text-[#C86B4A] font-medium flex flex-wrap items-center gap-2">
          <span>ENGINEERING LOG // 2026</span>
          <span className="opacity-40">•</span>
          <span className="text-[#A6A197]">Computer Science Student &amp; Full-Stack Developer</span>
        </span>
      </motion.div>

      {/* Main Single-Column Editorial Composition */}
      <div className="my-auto py-12 space-y-8 max-w-4xl">
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
            fontSize="clamp(3.8rem, 9.5vw, 8.8rem)"
            fontWeight={800}
            fontFamily="inherit"
            glow={false}
            scatterProgress={shouldReduceMotion ? 0 : scrollProgressVal}
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
          className="flex flex-wrap gap-4 items-center pt-4"
        >
          <button
            onClick={() => scrollToSection("work")}
            className="px-7 py-3.5 rounded-xl bg-[#C86B4A] text-[#11110F] font-geist text-xs font-semibold uppercase tracking-wider hover:bg-[#D99A7D] transition-colors shadow-sm cursor-pointer"
          >
            View Work
          </button>

          <button
            onClick={() => scrollToSection("about")}
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
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2 font-geist text-xs tracking-wider text-[#A6A197] hover:text-[#F1EDE3] transition-colors cursor-pointer"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
