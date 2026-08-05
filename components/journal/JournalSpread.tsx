"use client";

import React, { useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { JournalSpreadProps } from "@/types/chapter.types";
import {
  CHAPTERS_REGISTRY,
  DEFAULT_CHAPTER_ID,
} from "@/lib/constants/chapters.config";
import { useJournalStore } from "@/lib/store/useJournalStore";

export const JournalSpread: React.FC<JournalSpreadProps> = ({
  activeChapter: overrideActiveChapter,
}) => {
  const activeChapterId = useJournalStore((state) => state.activeChapter);
  const targetChapterId = useJournalStore((state) => state.targetChapter);
  const turnDirection = useJournalStore((state) => state.turnDirection);
  const isPageTurning = useJournalStore((state) => state.isPageTurning);
  const commitPageTurn = useJournalStore((state) => state.commitPageTurn);

  const currentChapterId =
    overrideActiveChapter || activeChapterId || DEFAULT_CHAPTER_ID;

  const ActiveComponent =
    (CHAPTERS_REGISTRY[currentChapterId] || CHAPTERS_REGISTRY[DEFAULT_CHAPTER_ID])
      .component;

  // Physical turn progress motion value (0 to 1)
  const turnProgress = useMotionValue(0);

  // STEP 1: Corner Detachment Phase (0 to 0.15) — Bottom-right corner lifts up first before sheet body rotates
  const cornerLiftY = useTransform(
    turnProgress,
    [0, 0.12, 0.3, 0.85, 1],
    [0, -22, -6, 0, 0]
  );

  const cornerLiftZ = useTransform(
    turnProgress,
    [0, 0.12, 0.35, 0.85, 1],
    [0, 48, 15, 0, 0]
  );

  const cornerRotateZ = useTransform(
    turnProgress,
    [0, 0.12, 0.4, 1],
    turnDirection === "next" ? [0, -6, 0, 0] : [0, 6, 0, 0]
  );

  // STEP 2 & 4: Continuous Paper Bending & Bowing Outward
  const bowOutZ = useTransform(
    turnProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 45, 75, 35, 0]
  );

  const totalPaperZ = useTransform(
    [cornerLiftZ, bowOutZ],
    (values: (number | string)[]) => Number(values[0] || 0) + Number(values[1] || 0)
  );

  // STEP 2: Paper Curvature Skew
  const pageCurlSkewY = useTransform(
    turnProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, -6.5, 0, 6.5, 0]
  );

  const invertedPageCurlSkewY = useTransform(pageCurlSkewY, (v) => -v);

  // STEP 7: Active Sweeping Shadow across stationary pages
  const sweepShadowOpacity = useTransform(
    turnProgress,
    [0, 0.1, 0.5, 0.9, 1],
    [0, 0.55, 0.85, 0.45, 0]
  );

  const sweepShadowX = useTransform(
    turnProgress,
    [0, 1],
    turnDirection === "next" ? ["92%", "-92%"] : ["-92%", "92%"]
  );

  const sweepShadowBlur = useTransform(
    turnProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["4px", "12px", "20px", "10px", "3px"]
  );

  const sweepShadowWidth = useTransform(
    turnProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["30%", "45%", "65%", "45%", "25%"]
  );

  // STEP 5: Dynamic Fold Shadows
  const frontFoldShadowOpacity = useTransform(
    turnProgress,
    [0, 0.12, 0.48, 0.5, 1],
    [0, 0.45, 0.7, 0, 0]
  );

  const backFoldShadowOpacity = useTransform(
    turnProgress,
    [0, 0.5, 0.52, 0.85, 1],
    [0, 0, 0.7, 0.4, 0]
  );

  // STEP 6: Paper Edge Highlight
  const edgeHighlightOpacity = useTransform(
    turnProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.9, 1, 0.5, 0]
  );

  // STEP 3: Spine Seam Ambient Occlusion
  const leftPageAO = useTransform(
    turnProgress,
    [0, 0.4, 0.8, 1],
    [0, 0.25, 0.6, 0]
  );

  const rightPageAO = useTransform(
    turnProgress,
    [0, 0.2, 0.6, 1],
    [0, 0.6, 0.25, 0]
  );

  const handleAnimationComplete = useCallback(() => {
    commitPageTurn();
  }, [commitPageTurn]);

  // If not currently turning, render active spread directly with zero offset
  if (!isPageTurning || !targetChapterId) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <ActiveComponent />
      </div>
    );
  }

  const TargetComponent =
    (CHAPTERS_REGISTRY[targetChapterId] || CHAPTERS_REGISTRY[DEFAULT_CHAPTER_ID])
      .component;

  const isNext = turnDirection === "next";

  return (
    <div className="relative h-full w-full overflow-hidden [perspective:2400px] [transform-style:preserve-3d]">
      {/* BASE UNDERNEATH LAYER */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        {isNext ? (
          <>
            {/* Left Half: Active Chapter Left Page */}
            <div
              className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <div className="w-[200%] h-full">
                <ActiveComponent />
              </div>
              <motion.div
                className="absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: leftPageAO }}
              />
            </div>

            {/* Right Half: Target Chapter Right Page */}
            <div
              className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <div className="w-[200%] h-full -translate-x-1/2">
                <TargetComponent />
              </div>
              <motion.div
                className="absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: rightPageAO }}
              />
            </div>
          </>
        ) : (
          <>
            {/* Left Half: Target Chapter Left Page */}
            <div
              className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <div className="w-[200%] h-full">
                <TargetComponent />
              </div>
              <motion.div
                className="absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: leftPageAO }}
              />
            </div>

            {/* Right Half: Active Chapter Right Page */}
            <div
              className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <div className="w-[200%] h-full -translate-x-1/2">
                <ActiveComponent />
              </div>
              <motion.div
                className="absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: rightPageAO }}
              />
            </div>
          </>
        )}
      </div>

      {/* SWEEPING SHADOW */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ opacity: sweepShadowOpacity }}
      >
        <motion.div
          className="absolute top-0 bottom-0"
          style={{
            left: sweepShadowX,
            width: sweepShadowWidth,
            filter: `blur(${sweepShadowBlur})`,
            background:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 20%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.18) 80%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* 3D FLIPPING SHEET LAYER */}
      <motion.div
        key={`${currentChapterId}->${targetChapterId}`}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isNext ? [-2, -182, -179, -180] : [2, 182, 179, 180] }}
        transition={{
          duration: 0.78,
          ease: [0.25, 0.1, 0.25, 1],
          times: [0, 0.88, 0.96, 1],
        }}
        onUpdate={(latest) => {
          const angle = Math.abs(Number(latest.rotateY));
          const progress = Math.min(1, angle / 180);
          turnProgress.set(progress);
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: isNext ? "left center" : "right center",
          left: isNext ? "50%" : "0%",
          y: cornerLiftY,
          z: totalPaperZ,
          rotateZ: cornerRotateZ,
        }}
        className="absolute top-0 bottom-0 w-1/2 z-30 pointer-events-none"
      >
        {/* FRONT FACE OF FLIPPING SHEET */}
        <motion.div
          className="absolute inset-0 h-full w-full overflow-hidden bg-[#F7F4EC] bg-graph-paper paper-texture [backface-visibility:hidden]"
          style={{
            transform: "rotateY(0deg)",
            borderLeft: "1px solid #ddd6c6",
            borderRight: "1px solid #ddd6c6",
            skewY: isNext ? pageCurlSkewY : invertedPageCurlSkewY,
          }}
        >
          <div className={`w-[200%] h-full ${isNext ? "-translate-x-1/2" : "translate-x-0"}`}>
            <ActiveComponent />
          </div>

          <motion.div
            className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-100 via-white to-amber-100 pointer-events-none"
            style={{ opacity: edgeHighlightOpacity }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: frontFoldShadowOpacity,
              background: isNext
                ? "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 35%, transparent 100%)"
                : "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 35%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* BACK FACE OF FLIPPING SHEET */}
        <motion.div
          className="absolute inset-0 h-full w-full overflow-hidden bg-[#EDE6D4] bg-graph-paper paper-texture [backface-visibility:hidden]"
          style={{
            transform: "rotateY(180deg)",
            borderLeft: "1px solid #ddd6c6",
            borderRight: "1px solid #ddd6c6",
            skewY: isNext ? pageCurlSkewY : invertedPageCurlSkewY,
          }}
        >
          <div className={`w-[200%] h-full opacity-90 contrast-[0.92] ${isNext ? "translate-x-0" : "-translate-x-1/2"}`}>
            <TargetComponent />
          </div>

          <motion.div
            className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-100 via-white to-amber-100 pointer-events-none"
            style={{ opacity: edgeHighlightOpacity }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: backFoldShadowOpacity,
              background: isNext
                ? "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 35%, transparent 100%)"
                : "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 35%, transparent 100%)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JournalSpread;
