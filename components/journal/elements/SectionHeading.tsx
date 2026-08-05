import React from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  meta?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  meta,
  className,
}) => {
  return (
    <header className={cn("mb-6 border-b border-[#cfc4bd] pb-3", className)}>
      <div className="flex justify-between items-end mb-1">
        {meta && (
          <span className="font-meta-technical text-meta-technical text-[#7e756f] uppercase tracking-widest">
            {meta}
          </span>
        )}
      </div>
      <h2 className="font-display-lg text-display-lg font-semibold text-[#181512]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body-main text-body-main text-[#4d4540] mt-1 leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionHeading;
