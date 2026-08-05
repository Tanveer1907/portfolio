import React from "react";
import { cn } from "@/utils/cn";

interface StickyNoteProps {
  children?: React.ReactNode;
  rotation?: string;
  className?: string;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  children,
  rotation = "rotate-[-3.5deg]",
  className,
}) => {
  return (
    <aside
      className={cn(
        "relative z-40 w-36 sm:w-44 p-3.5 rounded-[2px] bg-[#FAF2C8] text-[#292524] select-none",
        rotation,
        className
      )}
      style={{
        /* Multi-stage contact shadow: tight contact at adhesive top, wide elevated floating shadow at bottom right */
        boxShadow:
          "2px 3px 6px rgba(0,0,0,0.35), 8px 14px 24px -2px rgba(0,0,0,0.5), 14px 24px 38px -6px rgba(0,0,0,0.45)",
        borderTop: "1px solid rgba(255, 230, 100, 0.8)",
      }}
    >
      {/* Top Adhesive Strip Shadow & Highlight Line */}
      <div className="absolute top-0 right-0 left-0 h-3 bg-gradient-to-b from-amber-900/10 via-black/5 to-transparent rounded-t-[2px]" />

      {/* Micro paper fiber & wrinkle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 rounded-[2px]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(140, 120, 40, 0.1) 1px, transparent 1px), linear-gradient(135deg, transparent 42%, rgba(0,0,0,0.04) 47%, transparent 52%)",
          backgroundSize: "4px 4px, 100% 100%",
        }}
      />

      {/* Note Content */}
      <div className="relative z-10 font-script text-sm sm:text-base leading-snug text-stone-900 font-medium">
        {children}
      </div>

      {/* Corner Lift Effect & Gap Shadow at Bottom-Right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 rounded-br-[2px]"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.1) 45%, transparent 75%)",
          transform: "translate(2px, 2px)",
        }}
      />

      {/* Corner curl highlight edge */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-r border-b border-amber-600/30 rounded-br-[2px]" />
    </aside>
  );
};
