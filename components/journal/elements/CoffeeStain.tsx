import React from "react";
import { cn } from "@/utils/cn";

interface CoffeeStainProps {
  className?: string;
}

export const CoffeeStain: React.FC<CoffeeStainProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute select-none opacity-40 mix-blend-multiply",
        className
      )}
      aria-hidden="true"
    >
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer irregular coffee ring */}
        <circle
          cx="70"
          cy="70"
          r="62"
          stroke="#4A2E14"
          strokeWidth="6"
          strokeOpacity="0.45"
          strokeDasharray="18 4 32 2 12 6"
          style={{ filter: "blur(1.2px)" }}
        />
        {/* Inner ring smudge */}
        <circle
          cx="70"
          cy="70"
          r="58"
          stroke="#5C3A1A"
          strokeWidth="3"
          strokeOpacity="0.3"
          strokeDasharray="40 8 15 5"
          style={{ filter: "blur(1.8px)" }}
        />
        {/* Drip puddle accent */}
        <ellipse
          cx="110"
          cy="85"
          rx="6"
          ry="4"
          fill="#4A2E14"
          fillOpacity="0.25"
          style={{ filter: "blur(1px)" }}
        />
        {/* Secondary faint splash */}
        <circle
          cx="30"
          cy="45"
          r="3"
          fill="#5C3A1A"
          fillOpacity="0.2"
          style={{ filter: "blur(0.8px)" }}
        />
      </svg>
    </div>
  );
};

export default CoffeeStain;
