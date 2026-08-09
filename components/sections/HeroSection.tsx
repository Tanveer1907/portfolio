"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import EchoText from "@/components/ui/EchoText";
import { EASING } from "@/lib/animations/tokens";

interface HeroSectionProps {
  onExplore: () => void;
  isActive?: boolean;
}

export default function HeroSection({ onExplore, isActive = true }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen flex flex-col justify-center px-6 md:px-24 xl:px-48 border-b border-subtle overflow-hidden py-16 bg-[#0A0A09]"
    >
      {/* Background Image Layer with Gradient & Parallax */}
      <motion.div
        style={{ y: reduced ? 0 : imageY }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASING.editorial }}
      >
        <div className="absolute inset-0 w-full h-full bg-[#0A0A09]/92 z-10" />
        <img
          alt="Dark ambient texture"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity grayscale"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"
        />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        style={{ y: reduced ? 0 : textY, opacity: reduced ? 1 : opacity }}
        className="relative z-20 flex flex-col gap-8 w-full mt-6"
      >
        {/* EchoText Interactive Headline */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: EASING.editorial }}
          className="overflow-visible py-2"
        >
          <EchoText
            key={isActive ? "active" : "inactive"}
            text="HI, I'M TANVEER SINGH"
            echoes={8}
            lag={0.22}
            offset={24}
            direction="right"
            fade={0.68}
            blur={1.5}
            tint="#F1F0EB"
            mode="both"
            cursorRadius={360}
            duration={1100}
            ease="ease-out"
            fontSize="clamp(2.8rem, 7vw, 7rem)"
            fontWeight={800}
            color="#F1F0EB"
            className="tracking-tight uppercase font-hero-display cursor-pointer"
          />
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
          className="font-body-lg text-[#cac6bf] max-w-2xl text-xl md:text-2xl mt-1 leading-relaxed"
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
          className="group flex items-center gap-4 w-fit mt-4 border-b border-subtle hover:border-[#F1F0EB] pb-2 transition-all cursor-pointer"
        >
          <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-sm tracking-[0.2em]">
            EXPLORE
          </span>
          <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#F1F0EB] transition-transform duration-300 transform group-hover:translate-x-2">
            arrow_forward
          </span>
        </motion.button>
      </motion.div>

      {/* Social Links Bottom Left */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05, ease: EASING.editorial }}
        className="absolute bottom-10 left-6 md:left-24 xl:left-48 flex gap-8 text-[#cac6bf] z-20"
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
        className="absolute bottom-10 right-6 md:right-12 xl:right-24 flex items-center gap-3 text-[#949087] z-20 mix-blend-difference"
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
