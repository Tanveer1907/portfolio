"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MaskedHeading from "@/components/ui/MaskedHeading";
import RisingParticles from "@/components/ui/RisingParticles";
import GlobeDemo from "@/components/ui/globe-demo";
import { EASING } from "@/lib/animations/tokens";

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
      className="relative w-full min-h-screen flex flex-col justify-center px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 overflow-hidden py-16 bg-transparent"
    >


      {/* Main Content Area: Aligned slightly rightwards with max-w container */}
      <motion.div
        style={{ y: reduced ? 0 : textY, opacity: reduced ? 1 : opacity }}
        className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 w-full max-w-[1440px] mx-auto mt-6"
      >
        {/* Left Side: Main Text and CTA (Shifted slightly rightwards) */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[52%] flex-shrink-0 lg:pl-4">
          {/* Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#39C3EF]" />
            <span className="font-label-caps text-[#cac6bf] text-xs tracking-[0.25em] uppercase">
              01 // HOME
            </span>
          </div>

          {/* Headline: Intro label HI, I'M + Large prominent MaskedHeading TANVEER SINGH */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASING.editorial }}
            className="flex flex-col gap-0.5 w-full max-w-2xl overflow-visible"
          >
            <span className="font-label-caps text-[#cac6bf] text-sm sm:text-base md:text-lg font-semibold tracking-[0.25em] uppercase">
              HI, I&apos;M
            </span>
            <div className="relative w-full overflow-visible py-1">
              <MaskedHeading
                text="TANVEER SINGH"
                tag="h1"
                align="left"
                weight={900}
                tracking={-0.035}
                lineHeight={0.92}
                textScale={0.18}
                fillScale={1.35}
                parallax={32}
                drift={18}
                reveal="rise"
                trigger="view"
                className="font-hero-display uppercase"
                customMedia={
                  <div className="w-full h-full relative">
                    <RisingParticles
                      className="w-full h-full"
                      particleCount={80}
                      repelRadius={130}
                      repelStrength={7}
                      speed={1.0}
                      minRadius={1.8}
                      maxRadius={4.0}
                      denseGlow={true}
                      baseColor="linear-gradient(135deg, rgba(22, 34, 48, 0.96) 0%, rgba(180, 210, 240, 0.92) 30%, rgba(245, 243, 238, 0.98) 55%, rgba(57, 195, 239, 0.95) 80%, rgba(15, 25, 38, 0.96) 100%)"
                      colors={[
                        "rgba(255, 255, 255, ",
                        "rgba(57, 195, 239, ",
                        "rgba(245, 208, 97, ",
                        "rgba(241, 240, 235, ",
                      ]}
                    />
                  </div>
                }
              />
            </div>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.72,
              ease: EASING.editorial,
            }}
            className="font-body-lg text-[#cac6bf] max-w-lg text-lg md:text-xl leading-relaxed mt-0"
          >
            Software developer passionate about building scalable systems and intuitive experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={reduced ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.88,
              ease: EASING.editorial,
            }}
            onClick={onExplore}
            className="group flex items-center gap-4 w-fit mt-1 border-b border-subtle hover:border-[#F1F0EB] pb-2 transition-all cursor-pointer"
          >
            <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-sm tracking-[0.2em]">
              EXPLORE
            </span>
            <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#F1F0EB] transition-transform duration-300 transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </motion.button>
        </div>

        {/* Right Side: Globe Demo Container (Shifted Rightwards to avoid overlap) */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: EASING.editorial }}
          className="w-full lg:w-[46%] lg:translate-x-14 xl:translate-x-20 h-[320px] sm:h-[400px] md:h-[450px] lg:h-[520px] relative flex items-center justify-center pointer-events-auto z-20"
        >

          <GlobeDemo />
        </motion.div>
      </motion.div>

      {/* Social Links Bottom Left */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05, ease: EASING.editorial }}
        className="absolute bottom-10 left-24 sm:left-28 md:left-36 lg:left-44 flex gap-8 text-[#cac6bf] z-20"

      >
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
      </motion.div>

      {/* Scroll Down Indicator Bottom Right */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.18 }}
        className="absolute bottom-10 right-8 sm:right-14 md:right-20 lg:right-28 xl:right-36 flex items-center gap-3 text-[#949087] z-20 mix-blend-difference"
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
