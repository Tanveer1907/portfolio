import React from "react";
import { cn } from "@/utils/cn";

interface MaskingTapeProps {
  children?: React.ReactNode;
  className?: string;
  rotation?: string;
}

export const MaskingTape: React.FC<MaskingTapeProps> = ({
  children,
  className,
  rotation = "rotate-[-2deg]",
}) => {
  return (
    <div
      className={cn(
        "masking-tape px-3 py-1 flex items-center justify-center pointer-events-none select-none z-20",
        rotation,
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaskingTape;
