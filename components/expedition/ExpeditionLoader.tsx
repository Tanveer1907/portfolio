"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpeditionLoaderProps {
  onComplete?: () => void;
}

export default function ExpeditionLoader({ onComplete }: ExpeditionLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="expedition-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-[#001619] flex flex-col items-center justify-center select-none"
        >
          {/* Glowing Minimalist Arc Loader */}
          <div className="relative w-28 h-28 mb-10 flex items-center justify-center">
            {/* Spinning Outer Arc */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-t-[#50E8F4] border-r-[#50E8F4]/60 border-b-transparent border-l-transparent shadow-[0_0_20px_rgba(80,232,244,0.5)]"
            />
            
            {/* Counter Orbiting Glow Node */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-b-[#50E8F4]/30 border-transparent"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#50E8F4] shadow-[0_0_12px_#50E8F4] absolute -top-1 left-1/2 -translate-x-1/2" />
            </motion.div>

            {/* Central Glowing Orb */}
            <div className="w-2 h-2 rounded-full bg-[#50E8F4] shadow-[0_0_10px_#50E8F4] animate-pulse" />
          </div>

          {/* Loader Text Matching Reference Image */}
          <div className="text-center space-y-3 px-6">
            <h3 className="font-geist text-xs md:text-sm font-semibold tracking-[0.45em] text-[#C7F8FE] uppercase">
              LOADING EXPERIENCE
            </h3>
            <p className="font-inter text-xs md:text-sm text-[#78A3A8] font-light">
              Please wait while we prepare something{" "}
              <span className="text-[#50E8F4] font-medium shadow-[0_0_10px_rgba(80,232,244,0.3)]">
                amazing.
              </span>
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-44 h-[2px] bg-[#003339] mt-8 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-[#50E8F4] shadow-[0_0_12px_#50E8F4]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
