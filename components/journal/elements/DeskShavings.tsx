import React from "react";
import { cn } from "@/utils/cn";

interface DeskShavingsProps {
  className?: string;
}

export const DeskShavings: React.FC<DeskShavingsProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute select-none opacity-60 mix-blend-screen",
        className
      )}
      aria-hidden="true"
    >
      <svg
        width="100"
        height="70"
        viewBox="0 0 100 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curled Wood Pencil Shaving 1 */}
        <path
          d="M 20 40 C 25 35, 35 38, 40 45 C 38 48, 28 46, 20 40 Z"
          fill="#C4A484"
          fillOpacity="0.7"
          stroke="#8B5A2B"
          strokeWidth="0.8"
        />
        {/* Graphite edge inside shaving */}
        <path
          d="M 22 41 C 26 37, 33 39, 38 44"
          stroke="#2C2C2C"
          strokeWidth="1.2"
        />

        {/* Small Curled Shaving 2 */}
        <path
          d="M 45 50 C 50 46, 56 49, 58 54 C 55 56, 48 53, 45 50 Z"
          fill="#D2B48C"
          fillOpacity="0.65"
          stroke="#966F33"
          strokeWidth="0.6"
        />

        {/* Tiny Eraser Dust Specks */}
        <ellipse cx="15" cy="52" rx="1.5" ry="1" fill="#E8E3D5" fillOpacity="0.7" />
        <ellipse cx="28" cy="58" rx="2" ry="1" fill="#E8E3D5" fillOpacity="0.6" />
        <ellipse cx="35" cy="30" rx="1.2" ry="1.2" fill="#E8E3D5" fillOpacity="0.8" />
        <ellipse cx="62" cy="42" rx="1.8" ry="1" fill="#E8E3D5" fillOpacity="0.65" />
        <ellipse cx="50" cy="25" rx="1" ry="1" fill="#2C2C2C" fillOpacity="0.5" />
        <ellipse cx="22" cy="28" rx="1.5" ry="0.8" fill="#2C2C2C" fillOpacity="0.6" />
      </svg>
    </div>
  );
};

export default DeskShavings;
