"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal, RevealItem, ImageReveal } from "@/components/ui/Reveal";

interface AboutSectionProps {
  onOpenExpandedAbout: () => void;
}

export default function AboutSection({ onOpenExpandedAbout }: AboutSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="w-full min-h-screen flex flex-col lg:flex-row border-b border-subtle relative overflow-hidden"
    >
      {/* Left Text Column */}
      <Reveal
        staggerChildren={0.12}
        className="w-full lg:w-5/12 p-6 md:p-24 xl:p-32 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-subtle relative bg-[#0C0C0B]"
      >
        <RevealItem>
          <span className="font-mono-data text-[#949087] mb-12 block">
            01 / ABOUT
          </span>
        </RevealItem>

        <RevealItem>
          <h2 className="font-headline-lg text-[#F1F0EB] uppercase tracking-wide mb-12 text-5xl md:text-6xl leading-tight">
            Engineering<br />with Intent.
          </h2>
        </RevealItem>

        <RevealItem>
          <p className="font-body-lg text-[#cac6bf] mb-10 text-xl leading-relaxed">
            Computer Science student who loves solving problems, building products and learning by doing. I focus on creating robust, scalable architectures that deliver seamless user experiences.
          </p>
        </RevealItem>

        <RevealItem>
          <p className="font-body-md text-[#949087] mb-16 text-lg">
            My approach combines deep technical curiosity with an eye for refined, functional design.
          </p>
        </RevealItem>

        <RevealItem>
          <button
            onClick={onOpenExpandedAbout}
            className="group flex items-center gap-3 w-fit cursor-pointer"
          >
            <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors tracking-widest border-b border-transparent group-hover:border-[#F1F0EB] pb-1">
              FULL PROFILE
            </span>
            <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#F1F0EB] transition-transform duration-300 transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </button>
        </RevealItem>
      </Reveal>

      {/* Right Image Column */}
      <ImageReveal className="w-full lg:w-7/12 h-[60vh] lg:h-auto relative bg-[#121110] overflow-hidden">
        <motion.img
          style={{ y: reduced ? 0 : imageParallaxY }}
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          alt="Minimalist desk setup with warm light"
          className="w-full h-full object-cover opacity-70 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAucd8v3BHfYQQaNOLnBE7Y3j86yfKJOrQmwGgbiLnC5Pqyj_YXaFp08RY7BGSzptSZ--8SB1rBfcLVt7H8XgGX9yUWDKMJ4f81HqroSEQT-7ZdkieUChPxelklEATU9OXY2dMPS39VyeVVuO541zadY9HBp0k4A4UYahJ6Lhbf_Zuac_ryevCttIfNN-5Qg_K4ye8Qf5OWhTAscsLKI4-B-TFHTwM7pVdRiYgDJuyNl0sPLbMsAg5J"
        />
      </ImageReveal>
    </section>
  );
}
