import React from "react";
import { cn } from "@/utils/cn";

interface DietCokeCanProps {
  className?: string;
}

export const DietCokeCan: React.FC<DietCokeCanProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative flex flex-col items-center select-none [transform-style:preserve-3d]",
        className
      )}
      aria-hidden="true"
    >
      {/* CORK COASTER UNDER CAN */}
      <div
        className="absolute -bottom-3.5 h-14 w-24 rounded-full border border-amber-900/40 bg-[#5C4033] shadow-[0_8px_20px_rgba(0,0,0,0.7)] pointer-events-none"
        style={{
          transform: "rotateX(60deg)",
          backgroundImage:
            "radial-gradient(#3E2723 1px, transparent 1px), linear-gradient(135deg, #4A3326 0%, #2D1E16 100%)",
          backgroundSize: "4px 4px, 100% 100%",
        }}
      >
        {/* Coaster Outer Rim Bevel */}
        <div className="absolute inset-0 rounded-full border border-amber-200/20" />
      </div>

      {/* Tight Base Contact Shadow on Coaster */}
      <div className="absolute -bottom-1 h-4 w-18 rounded-full bg-black/95 blur-[2px]" />

      {/* Mid Shadow Spread */}
      <div className="absolute -bottom-3 h-6 w-22 rounded-full bg-black/75 blur-md" />

      {/* Directional Key-Light Cast Shadow (Long shadow extending bottom-right) */}
      <div
        className="absolute -bottom-7 left-3 h-16 w-32 rounded-full bg-black/60 blur-xl pointer-events-none"
        style={{
          transform: "rotate(25deg) skewX(20deg) scaleY(0.4)",
          transformOrigin: "left top",
        }}
      />

      {/* 3D Can Body with Metallic Cylinder Shading & Condensation */}
      <div
        className="relative h-44 w-20 overflow-hidden rounded-[18px] border border-zinc-600/50 bg-gradient-to-r from-zinc-700 via-zinc-200 to-zinc-800"
        style={{
          boxShadow:
            "5px 18px 36px rgba(0,0,0,0.75), 2px 8px 16px rgba(0,0,0,0.55), -1px 0 6px rgba(0,0,0,0.3)",
        }}
      >
        {/* Top Metallic Rim Bevel */}
        <div className="h-3.5 w-full border-b border-zinc-400 bg-gradient-to-r from-zinc-500 via-white to-zinc-600 shadow-xs relative">
          {/* Inner ring top pull-tab slot reflection */}
          <div className="mx-auto mt-0.5 h-1 w-8 rounded-full bg-zinc-400 border border-zinc-600" />
        </div>

        {/* Can Main Red Brand Band with Specular Cylinder Reflection */}
        <div className="relative my-1.5 flex h-32 w-full flex-col justify-between bg-gradient-to-r from-red-950 via-red-600 via-50% to-red-950 px-1 py-3 text-center shadow-inner">
          {/* Top Thin Silver Stripe */}
          <div className="h-[2px] w-full bg-zinc-300/80" />

          {/* Diet Branding */}
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans text-[10px] tracking-[0.28em] font-extrabold text-zinc-200 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              DIET
            </span>
            <span className="font-serif text-2xl italic font-black tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Coke
            </span>
          </div>

          {/* Bottom Silver Stripe */}
          <div className="h-[2px] w-full bg-zinc-300/80" />
        </div>

        {/* CONDENSATION DROPLETS OVERLAY */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          {/* Droplet 1 */}
          <div className="absolute top-8 left-4 h-1.5 w-1 rounded-full bg-white/70 shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
          {/* Droplet 2 */}
          <div className="absolute top-14 left-7 h-2 w-1.5 rounded-full bg-white/80 shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
          {/* Droplet 3 */}
          <div className="absolute top-20 right-5 h-2.5 w-1.5 rounded-full bg-white/75 shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
          {/* Droplet 4 */}
          <div className="absolute top-28 left-5 h-1.5 w-1 rounded-full bg-white/60 shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
          {/* Droplet 5 */}
          <div className="absolute top-32 right-6 h-2 w-1 rounded-full bg-white/70 shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
          {/* Water trickle line */}
          <div className="absolute top-10 left-7 h-8 w-[1px] bg-gradient-to-b from-white/60 via-white/30 to-transparent" />
        </div>

        {/* Bottom Metallic Lip Gradient */}
        <div className="h-4 w-full border-t border-zinc-400 bg-gradient-to-r from-zinc-600 via-zinc-200 to-zinc-700" />

        {/* Primary Specular Highlight Reflection (Curved cylinder sheen from top-left key light) */}
        <div className="absolute top-0 bottom-0 left-3.5 w-3 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Secondary Backlit Rim Reflection on Right Edge */}
        <div className="absolute top-0 bottom-0 right-3 w-1.5 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>
    </div>
  );
};

export default DietCokeCan;
