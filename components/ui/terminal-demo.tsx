"use client";
import React from "react";
import { Terminal } from "@/components/ui/terminal";

export const PORTFOLIO_TERMINAL_COMMANDS = [
  "tanveer --init portfolio",
  "npm run build:3d-experience",
  "tanveer --launch",
];

export const PORTFOLIO_TERMINAL_OUTPUTS = {
  0: [
    "✔ System specs verified (Mac / Next.js 15 / Tailwind CSS v4)",
    "✔ Core environment initialized.",
    "✔ Developer profile: Tanveer Singh loaded.",
  ],
  1: [
    "Compiling 3D Globe & interactive animations...",
    "Done in 1.4s.",
  ],
  2: [
    "🚀 Launching portfolio...",
    "Redirecting to main hero screen...",
  ],
};

export default function TerminalDemo({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const handleComplete = () => {
    setTimeout(() => {
      onFinish?.();
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b]/50 via-[#0A0A09] to-black text-[#F1F0EB] p-4 sm:p-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="w-full max-w-2xl flex flex-col items-center justify-center z-10">
        <Terminal
          commands={PORTFOLIO_TERMINAL_COMMANDS}
          outputs={PORTFOLIO_TERMINAL_OUTPUTS}
          username="tanveer@macbook"
          typingSpeed={35}
          delayBetweenCommands={800}
          enableSound={true}
          onComplete={handleComplete}
          className="w-full max-w-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
