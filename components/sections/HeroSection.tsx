"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-24 xl:px-48 border-b border-subtle overflow-hidden py-32 bg-[#0A0A09]"
    >
      {/* Background Image Layer with Gradient & Parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-[#0A0A09]/90 z-10" />
        <img
          alt="Dark workspace"
          className="w-full h-full object-cover object-right opacity-20 mix-blend-luminosity grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkk9YPHkxiQNwv9GIZEXyy89Sg2ldIfSAQ8DlRsf1pESHKVZ8tF28DgggnZk0mma2xBBSEq_J7yLC3Z01YCx8KfTg3kIHBH37LevsjHQtN0qcYtWtAyHP3dSNOqgrXqVR1dnAVIOuk1S2vebdHdcUNwSw8JCCgKYQ-fD7nrsigiGp2T42o569IUml8X42WAJlZmOI_fLJFl0HvveC0OfelfktEQeaNZ3n1lTwbp3R87H4WW2BwDe9S8w9pG_vSoBS4Xw"
        />
      </motion.div>

      {/* Main Content Area */}
      <motion.div style={{ y: textY, opacity }} className="relative z-20 flex flex-col gap-12 w-full mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="font-hero-display-mobile md:text-[9vw] lg:text-[10vw] xl:text-[140px] text-[#F1F0EB] uppercase leading-[0.85] tracking-tighter"
        >
          I BUILD<br />
          THINGS<br />
          <span className="text-[#949087]">
            TO UNDERSTAND<br />HOW THEY WORK.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-body-lg text-[#cac6bf] max-w-2xl text-xl md:text-2xl mt-4"
        >
          Software developer passionate about building scalable systems and intuitive experiences.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          onClick={onExplore}
          className="group flex items-center gap-4 w-fit mt-8 border-b border-subtle hover:border-[#F1F0EB] pb-2 transition-all cursor-pointer"
        >
          <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-sm tracking-[0.2em]">
            EXPLORE
          </span>
          <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#F1F0EB] transition-all transform group-hover:translate-x-2">
            arrow_forward
          </span>
        </motion.button>
      </motion.div>

      {/* Social Links Bottom Left */}
      <div className="absolute bottom-12 left-6 md:left-24 xl:left-48 flex gap-8 text-[#cac6bf] z-20">
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
          href="mailto:tanveersingh.dev@gmail.com"
          className="hover:text-[#F1F0EB] transition-colors p-1"
          aria-label="Email Contact"
        >
          <span className="material-symbols-outlined text-2xl">mail</span>
        </a>
      </div>

      {/* Scroll Down Indicator Bottom Right */}
      <div className="absolute bottom-12 right-6 md:right-12 xl:right-24 flex items-center gap-3 text-[#949087] z-20 mix-blend-difference">
        <span className="font-label-caps tracking-widest text-xs">SCROLL TO BEGIN</span>
        <span className="material-symbols-outlined text-sm animate-bounce">
          arrow_downward
        </span>
      </div>
    </section>
  );
}
