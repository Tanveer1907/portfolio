"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { EASING, DURATION } from "@/lib/animations/tokens";

interface ExpandedAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExpandedAboutModal({
  isOpen,
  onClose,
}: ExpandedAboutModalProps) {
  const { lockScroll, unlockScroll } = useLenisScroll();

  useEffect(() => {
    if (!isOpen) return;

    lockScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.FAST, ease: EASING.editorial }}
          className="fixed inset-0 z-50 bg-[#090a0f]/90 backdrop-blur-xl text-[#F1F0EB] overflow-y-auto p-6 md:p-16 flex flex-col justify-between"
        >
          <div className="max-w-4xl mx-auto w-full py-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.MEDIUM, ease: EASING.editorial }}
              className="flex justify-between items-center border-b border-subtle pb-6 mb-12"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono-data text-xs text-[#949087]">
                  01 // EXTENDED LOG
                </span>
                <span className="text-[#49473f]">•</span>
                <span className="font-label-caps text-xs text-[#F1F0EB]">
                  ABOUT TANVEER SINGH
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex items-center gap-2 group cursor-pointer p-2"
                aria-label="Close extended log"
              >
                <span className="font-label-caps text-xs text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors">
                  CLOSE
                </span>
                <span className="material-symbols-outlined text-[#cac6bf] group-hover:text-[#F1F0EB] text-xl transition-colors">
                  close
                </span>
              </button>
            </motion.div>

            {/* Intro */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DURATION.MEDIUM, delay: 0.1, ease: EASING.editorial }}
              >
                <h2 className="font-hero-display text-4xl sm:text-6xl text-[#F1F0EB] uppercase mb-6 tracking-tight">
                  ENGINEER &amp; BUILDER
                </h2>
                <p className="font-body-lg text-[#cac6bf] max-w-2xl leading-relaxed text-xl">
                  I am a Computer Science student dedicated to building software that is reliable, scalable, and intuitive to interact with. My philosophy relies on fundamental understanding: tearing down abstractions to know how systems work under the hood.
                </p>
              </motion.div>

              {/* Grid Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DURATION.SLOW, delay: 0.2, ease: EASING.editorial }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-subtle pt-10"
              >
                {/* Education */}
                <div className="space-y-4">
                  <span className="font-label-caps text-xs text-[#949087] tracking-widest">
                    01. EDUCATION
                  </span>
                  <h3 className="font-headline-md text-[#F1F0EB] text-xl">
                    Bachelor of Engineering — Computer Science
                  </h3>
                  <p className="font-body-md text-[#cac6bf]">
                    Chitkara University
                  </p>
                  <p className="font-mono-data text-xs text-[#949087] leading-relaxed">
                    Focus: Data Structures, Operating Systems, Database Management Systems, Object-Oriented Architecture, Web Engineering.
                  </p>
                </div>

                {/* Core Interests */}
                <div className="space-y-4">
                  <span className="font-label-caps text-xs text-[#949087] tracking-widest">
                    02. CORE INTERESTS
                  </span>
                  <h3 className="font-headline-md text-[#F1F0EB] text-xl">
                    Systems &amp; Frontend Craft
                  </h3>
                  <ul className="font-body-md text-[#cac6bf] space-y-2 list-disc list-inside">
                    <li>Full-stack Web Engineering &amp; Modern Frameworks</li>
                    <li>System Architecture &amp; Database Design</li>
                    <li>Editorial UI/UX Interaction &amp; Micro-animations</li>
                    <li>API Design &amp; Developer Tooling</li>
                  </ul>
                </div>

                {/* Currently Learning */}
                <div className="space-y-4 border-t border-subtle pt-8">
                  <span className="font-label-caps text-xs text-[#949087] tracking-widest">
                    03. CURRENTLY LEARNING
                  </span>
                  <h3 className="font-headline-md text-[#F1F0EB] text-xl">
                    Distributed Infrastructure
                  </h3>
                  <p className="font-body-md text-[#cac6bf] leading-relaxed">
                    Exploring C++ and Go for concurrent backends, Docker container orchestration, and deep dives into Next.js performance tuning.
                  </p>
                </div>

                {/* Currently Building */}
                <div className="space-y-4 border-t border-subtle pt-8">
                  <span className="font-label-caps text-xs text-[#949087] tracking-widest">
                    04. CURRENTLY BUILDING
                  </span>
                  <h3 className="font-headline-md text-[#F1F0EB] text-xl">
                    Chitkara Diaries &amp; HackConnect
                  </h3>
                  <p className="font-body-md text-[#cac6bf] leading-relaxed">
                    High-impact campus applications and community platforms that bring students, events, and collaborative projects into one cohesive ecosystem.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Modal Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: DURATION.MEDIUM, delay: 0.3 }}
              className="mt-16 border-t border-subtle pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <span className="font-mono-data text-xs text-[#949087]">
                LOCATION: INDIA // AVAILABLE FOR COLLABORATION
              </span>
              <button
                onClick={onClose}
                className="font-label-caps text-xs text-[#F1F0EB] border-b border-[#F1F0EB] pb-1 hover:text-[#cac6bf] hover:border-[#cac6bf] transition-colors cursor-pointer"
              >
                RETURN TO PORTFOLIO →
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
