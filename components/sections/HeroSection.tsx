"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import WarpText from "@/components/ui/WarpText";
import HeroCard from "@/components/ui/HeroCard";

interface HeroSectionProps {
  onExplore: () => void;
  isActive?: boolean;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[100dvh] flex flex-col justify-center pl-24 sm:pl-28 md:pl-36 lg:pl-40 xl:pl-44 pr-6 sm:pr-10 md:pr-16 lg:pr-20 xl:pr-24 overflow-hidden pt-6 pb-14 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 bg-transparent scroll-mt-6"
    >
      {/* Main Content Area: Centered with comfortable breathing room */}
      <motion.div
        style={{ y: reduced ? 0 : textY, opacity: reduced ? 1 : opacity }}
        className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 w-full max-w-[1440px] mx-auto my-auto"
      >
        {/* Left Side: Main Text and CTA */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[48%] xl:w-[46%] flex-shrink-0 lg:pl-4">
          {/* Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#39C3EF]" />
            <span className="font-label-caps text-[#cac6bf] text-xs tracking-[0.25em] uppercase">
              01 // HOME
            </span>
          </div>

          {/* Headline: Intro label HI, I'M + Interactive WarpText TANVEER SINGH */}
          <div className="flex flex-col gap-0.5 w-full max-w-2xl overflow-visible">
            <span className="font-label-caps text-[#cac6bf] text-sm sm:text-base md:text-lg font-semibold tracking-[0.25em] uppercase">
              HI, I&apos;M
            </span>
            <div className="relative w-full overflow-visible py-1">
              <WarpText
                text={"TANVEER\nSINGH"}
                warpStrength={0.07}
                warpScale={1.6}
                speed={0.55}
                lens="bulge"
                pointerInfluence={0.42}
                pointerStrength={0.38}
                refraction={0.018}
                chromatic={0.35}
                idleDrift={0.2}
                ripple
                clickRipple
                intro
                fontSize="clamp(2.7rem, 5.8vw, 5.2rem)"
                fontWeight={900}
                fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
                letterSpacing="-0.035em"
                lineHeight={0.88}
                align="left"
                color="#F1F0EB"
                style={{ height: "185px", width: "100%", minHeight: "170px" }}
                className="font-hero-display"
              />
            </div>
          </div>

          {/* Supporting Text */}
          <p className="font-body-lg text-[#cac6bf] max-w-lg text-lg md:text-xl leading-relaxed mt-0">
            Software developer passionate about building scalable systems and intuitive experiences.
          </p>

          {/* CTA Button */}
          <button
            onClick={onExplore}
            className="group flex items-center gap-4 w-fit mt-1 border-b border-subtle hover:border-[#F1F0EB] pb-2 transition-all cursor-pointer"
          >
            <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-sm tracking-[0.2em]">
              EXPLORE
            </span>
            <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#F1F0EB] transition-transform duration-300 transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Right Side: Holographic Collector Card (HoloCard) */}
        <div className="w-full lg:w-[52%] xl:w-[54%] relative flex items-center justify-center pointer-events-auto z-20 py-2">
          <HeroCard />
        </div>
      </motion.div>

      {/* Social Links Bottom Left */}
      <div className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-24 sm:left-28 md:left-36 lg:left-44 flex gap-8 text-[#cac6bf] z-20">
        <a
          href="https://github.com/Tanveer1907"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F1F0EB] transition-colors p-1"
          aria-label="GitHub Profile"
        >
          <span className="material-symbols-outlined text-2xl">code</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F1F0EB] transition-colors p-1"
          aria-label="LinkedIn Profile"
        >
          <span className="material-symbols-outlined text-2xl">work</span>
        </a>
        <a
          href="mailto:1906tanveer@gmail.com"
          className="hover:text-[#F1F0EB] transition-colors p-1"
          aria-label="Email Contact"
        >
          <span className="material-symbols-outlined text-2xl">mail</span>
        </a>
      </div>

      {/* Scroll Down Indicator Bottom Right */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.18 }}
        className="absolute bottom-5 sm:bottom-6 md:bottom-8 right-8 sm:right-14 md:right-20 lg:right-28 xl:right-36 flex items-center gap-3 text-[#949087] z-20 mix-blend-difference"
      >
        <span className="font-label-caps tracking-widest text-xs">SCROLL TO BEGIN</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="material-symbols-outlined text-sm"
        >
          arrow_downward
        </motion.span>
      </motion.div>
    </section>
  );
}
