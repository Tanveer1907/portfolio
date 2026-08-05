import React from "react";
import { cn } from "@/utils/cn";

interface InkStampProps {
  text: string;
  variant?: "error" | "primary" | "secondary";
  rotation?: string;
  className?: string;
}

export const InkStamp: React.FC<InkStampProps> = ({
  text,
  variant = "error",
  rotation = "-rotate-6",
  className,
}) => {
  const colorStyles =
    variant === "error"
      ? "border-[#ba1a1a] text-[#ba1a1a]"
      : variant === "secondary"
      ? "border-[#775a19] text-[#775a19]"
      : "border-[#181512] text-[#181512]";

  return (
    <div
      className={cn(
        "ink-stamp font-meta-technical text-meta-technical font-bold tracking-widest uppercase border-2 px-2 py-0.5 rounded-sm inline-block select-none",
        colorStyles,
        rotation,
        className
      )}
    >
      {text}
    </div>
  );
};

export default InkStamp;
