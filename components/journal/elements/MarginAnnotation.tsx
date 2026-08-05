import React from "react";
import { cn } from "@/utils/cn";

interface MarginAnnotationProps {
  children: React.ReactNode;
  variant?: "graphite" | "vermilion";
  className?: string;
}

export const MarginAnnotation: React.FC<MarginAnnotationProps> = ({
  children,
  variant = "graphite",
  className,
}) => {
  const colorClass =
    variant === "vermilion" ? "text-[#C2410C]" : "text-[#4A4744]";

  return (
    <div
      className={cn(
        "font-script text-base sm:text-lg leading-tight select-none",
        colorClass,
        className
      )}
    >
      {children}
    </div>
  );
};
