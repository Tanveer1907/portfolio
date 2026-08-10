"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";

export interface TimelineEntry {
  title: string;
  year?: string;
  category?: string;
  content: React.ReactNode;
}

function MilestoneStepProgressBar({
  progress,
  reduced,
  dataCount,
}: {
  progress: MotionValue<number>;
  reduced: boolean;
  dataCount: number;
}) {
  const [currentProgress, setCurrentProgress] = useState(0);

  // Unified single-source-of-truth progress (0 to 100%)
  useMotionValueEvent(progress, "change", (latest) => {
    setCurrentProgress(Math.min(Math.max(latest * 100, 0), 100));
  });

  const widthStyle = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-4 mb-2">

      {/* Outer Track */}
      <div className="relative w-full h-3 bg-[#262522] border border-white/10 rounded-full overflow-visible shadow-inner">
        {/* Inner Filled Bar in Theme Cyan #39C3EF */}
        <motion.div
          style={{ width: reduced ? "100%" : widthStyle }}
          className="h-full bg-gradient-to-r from-[#39C3EF] via-[#39C3EF] to-[#60A5FA] rounded-full shadow-[0_0_14px_rgba(57,195,239,0.6)]"
        />

        {/* Milestone Check Nodes (Node 1 at 0%, Node 5 at 100%) */}
        <div className="absolute inset-x-0 -top-1.5 flex items-center justify-between z-20 pointer-events-none px-0.5">
          {Array.from({ length: dataCount }).map((_, idx) => {
            const stepThreshold = (idx / (dataCount - 1)) * 100;
            const isCompleted = reduced || currentProgress >= stepThreshold - 1;

            return (
              <div
                key={idx}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? "bg-[#39C3EF] text-black scale-110 shadow-[0_0_14px_rgba(57,195,239,0.8)] font-bold"
                    : "bg-[#2a2926] text-neutral-500 scale-90 border border-white/15"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="w-3.5 h-3.5 stroke-[3] stroke-black fill-none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <span className="text-[10px] font-mono font-bold">{idx + 1}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const HorizontalTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // SINGLE SOURCE OF TRUTH:
  // Maps scrollYProgress [0, 0.85] to normalized progress [0, 1].
  // Progress is strictly clamped between 0.0 (Card 1) and 1.0 (Card 5).
  const rawProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const progress = useTransform(rawProgress, (v) => Math.min(Math.max(v, 0), 1));

  // Horizontal translation percentage for N cards:
  // Moving from Card 1 to Card N across a flex container translates by ((N - 1) / N) * 100%
  // For 5 cards, (4 / 5) * 100% = 80%.
  const maxTranslationPercent = data.length > 1 ? ((data.length - 1) / data.length) * 100 : 0;

  const xTransform = useTransform(
    progress,
    [0, 1],
    ["0%", `-${maxTranslationPercent}%`]
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-transparent">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-10 px-6 sm:px-12 md:px-16">
        {/* Top Header & Progress Line */}
        <div className="max-w-6xl w-full mx-auto mb-8 flex flex-col gap-3 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39C3EF] animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-[#cac6bf] uppercase">
                05 // THE JOURNEY
              </span>
            </div>
            <span className="font-mono text-xs text-[#cac6bf] hidden sm:block">
              Keep scrolling to navigate journey →
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F1F0EB] uppercase">
            TIMELINE & MILESTONES
          </h2>

          {/* Unified Step Progress Bar driven by single progress source */}
          <MilestoneStepProgressBar
            progress={progress}
            reduced={reduced ?? false}
            dataCount={data.length}
          />
        </div>

        {/* Horizontal Track Container */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <motion.div
            style={{ x: reduced ? "0%" : xTransform }}
            className="flex gap-6 sm:gap-10 items-stretch w-max transition-transform duration-75 ease-linear"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[85vw] sm:w-[500px] md:w-[580px] bg-[#141413]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between flex-shrink-0 shadow-2xl relative group hover:border-[#39C3EF]/40 transition-colors"
              >
                {/* Top Badge: Year & Index */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#39C3EF] font-mono">
                    {item.year || item.title}
                  </span>
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-neutral-900 border border-neutral-800 text-[#cac6bf]">
                    0{index + 1} / 0{data.length}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F0EB] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-sm sm:text-base text-[#cac6bf] leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom scroll hint */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-[#cac6bf]">
          <span>Scroll down to advance journey</span>
          <span className="material-symbols-outlined text-sm animate-bounce">arrow_downward</span>
        </div>
      </div>
    </div>
  );
};

export const Timeline = HorizontalTimeline;
