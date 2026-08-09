"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import TextFlippingBoardDemo from "@/components/ui/text-flipping-board-demo";
import { IconSquareRoundedX } from "@tabler/icons-react";

export const PORTFOLIO_LOADING_STATES = [
  { text: "Initializing core environment..." },
  { text: "Loading 3D Globe & interactive graphics..." },
  { text: "Fetching selected works & projects..." },
  { text: "Compiling engineering toolkit..." },
  { text: "Rendering continuous layout..." },
  { text: "Welcome to Tanveer Singh's Portfolio" },
];

export default function MultiStepLoaderDemo({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
  };

  const handleComplete = () => {
    setLoading(false);
    onFinish?.();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0A0A09] text-[#F1F0EB] p-4 sm:p-6 relative overflow-hidden">
      {/* Core Loader Modal */}
      <Loader
        loadingStates={PORTFOLIO_LOADING_STATES}
        loading={loading}
        duration={900}
        loop={false}
        onComplete={handleComplete}
      />

      {/* Opening Gate Content before loading */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl text-center z-10 w-full px-2">
        <span className="font-label-caps text-[#cac6bf] text-xs tracking-[0.3em] uppercase">
          SYSTEM READY • PORTFOLIO v2.0
        </span>

        {/* Text Flipping Board Component */}
        <TextFlippingBoardDemo />

        <button
          onClick={handleStart}
          className="mt-2 bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-300 h-12 rounded-xl px-10 flex items-center justify-center shadow-lg hover:scale-105 cursor-pointer"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset, 0 8px 24px rgba(57, 195, 239, 0.3)",
          }}
        >
          CLICK TO LOAD PORTFOLIO
        </button>
      </div>

      {loading && (
        <button
          className="fixed top-6 right-6 text-[#cac6bf] hover:text-[#F1F0EB] z-[120] p-2 transition-colors cursor-pointer"
          onClick={handleComplete}
          aria-label="Close loader"
        >
          <IconSquareRoundedX className="h-8 w-8" />
        </button>
      )}
    </div>
  );
}
