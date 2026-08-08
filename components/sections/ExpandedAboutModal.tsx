"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandedAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExpandedAboutModal({
  isOpen,
  onClose,
}: ExpandedAboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#0A0A09]/95 backdrop-blur-md text-[#e6e2df] overflow-y-auto p-6 md:p-16 flex flex-col justify-between"
        >
          <div className="max-w-4xl mx-auto w-full">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-subtle pb-6 mb-12">
              <div className="flex items-center gap-3">
                <span className="font-mono-data text-xs text-[#949087]">
                  01 // EXTENDED LOG
                </span>
                <span className="text-[#49473f]">•</span>
                <span className="font-label-caps text-xs text-[#f5eee0]">
                  ABOUT TANVEER SINGH
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex items-center gap-2 group cursor-pointer"
                aria-label="Close modal"
              >
                <span className="font-label-caps text-xs text-[#cac6bf] group-hover:text-[#f5eee0]">
                  CLOSE
                </span>
                <span className="material-symbols-outlined text-[#cac6bf] group-hover:text-[#f5eee0] text-xl">
                  close
                </span>
              </button>
            </div>

            {/* Intro */}
            <div className="space-y-12">
              <div>
                <h2 className="font-hero-display text-4xl sm:text-6xl text-[#f5eee0] uppercase mb-6">
                  ENGINEER &amp; BUILDER
                </h2>
                <p className="font-body-lg text-[#cac6bf] max-w-2xl leading-relaxed">
                  I am a Computer Science student dedicated to building software that is reliable, scalable, and delightful to interact with. My philosophy relies on fundamental understanding: tearing down abstractions to know how things work under the hood.
                </p>
              </div>

              {/* Grid Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-subtle pt-10">
                {/* Education */}
                <div className="space-y-4">
                  <span className="font-label-caps text-xs text-[#949087]">
                    01. EDUCATION
                  </span>
                  <h3 className="font-headline-md text-[#f5eee0]">
                    Bachelor of Engineering — Computer Science
                  </h3>
                  <p className="font-body-md text-[#cac6bf]">
                    Chitkara University
                  </p>
                  <p className="font-mono-data text-xs text-[#949087]">
                    Focus: Data Structures, Operating Systems, Database Management Systems, Object-Oriented Architecture, Web Engineering.
                  </p>
                </div>

                {/* Core Interests */}
                <div className="space-y-4">
                  <span className="font-label-caps text-xs text-[#949087]">
                    02. CORE INTERESTS
                  </span>
                  <h3 className="font-headline-md text-[#f5eee0]">
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
                  <span className="font-label-caps text-xs text-[#949087]">
                    03. CURRENTLY LEARNING
                  </span>
                  <h3 className="font-headline-md text-[#f5eee0]">
                    Distributed Infrastructure
                  </h3>
                  <p className="font-body-md text-[#cac6bf]">
                    Exploring Go for concurrent backends, Docker container orchestration, and deep dives into Next.js App Router performance tuning.
                  </p>
                </div>

                {/* Currently Building */}
                <div className="space-y-4 border-t border-subtle pt-8">
                  <span className="font-label-caps text-xs text-[#949087]">
                    04. CURRENTLY BUILDING
                  </span>
                  <h3 className="font-headline-md text-[#f5eee0]">
                    Chitkara Diaries &amp; HackConnect
                  </h3>
                  <p className="font-body-md text-[#cac6bf]">
                    High-impact campus applications and community platforms that bring students, events, and collaborative projects into one cohesive ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-16 border-t border-subtle pt-8 flex justify-between items-center">
              <span className="font-mono-data text-xs text-[#949087]">
                LOCATION: INDIA // AVAILABLE FOR COLLABORATION
              </span>
              <button
                onClick={onClose}
                className="font-label-caps text-xs text-[#f5eee0] border-b border-[#f5eee0] pb-1 hover:text-[#cac6bf] hover:border-[#cac6bf] transition-colors cursor-pointer"
              >
                RETURN TO PORTFOLIO →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
