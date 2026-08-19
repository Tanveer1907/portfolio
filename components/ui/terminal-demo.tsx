"use client";
import React, { useEffect } from "react";
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
  onTerminalComplete,
}: {
  onFinish?: () => void;
  onTerminalComplete?: () => void;
}) {
  const [isDone, setIsDone] = React.useState(false);

  const handleComplete = () => {
    setIsDone(true);
    onTerminalComplete?.();
  };

  useEffect(() => {
    // Attempt audio context resume on initial mount / user interaction
    const unlockAudio = () => {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          if (ctx.state === "suspended") ctx.resume();
        }
      } catch {}
    };
    unlockAudio();

    const events = ["pointerdown", "keydown", "touchstart", "mousemove"];
    events.forEach((evt) => window.addEventListener(evt, unlockAudio, { once: true }));
    return () => {
      events.forEach((evt) => window.removeEventListener(evt, unlockAudio));
    };
  }, []);

  const handleScrollClick = () => {
    if (window.scrollY < 50) {
      window.scrollBy({ top: window.innerHeight * 1.2, behavior: "smooth" });
    } else {
      onFinish?.();
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent text-[#F1F0EB] p-4 sm:p-6 relative overflow-hidden pointer-events-auto">
      {/* Background Ambient Glows */}
      <div className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="w-full max-w-2xl flex flex-col items-center justify-center z-10 relative">
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

        {/* Scroll Prompt Triggered When Terminal Finishes */}
        {isDone && (
          <div
            onClick={handleScrollClick}
            className="mt-8 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:opacity-100 opacity-90 group"
          >
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-sky-400/30 bg-sky-950/40 backdrop-blur-md shadow-[0_0_20px_rgba(57,195,239,0.25)] transition-all group-hover:scale-105 group-hover:border-sky-400/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-label-caps text-xs tracking-widest uppercase text-[#F1F0EB]">
                SYSTEM READY • SCROLL DOWN TO ENTER
              </span>
            </div>
            <span className="material-symbols-outlined text-base animate-bounce text-sky-400 mt-1">
              arrow_downward
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
