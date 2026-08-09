"use client";

import { useState, useEffect } from "react";

export const SECTION_IDS = ["home", "about", "projects", "skills", "journey", "connect"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(defaultSection: SectionId = "home"): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSection);

  useEffect(() => {
    const sectionElements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sectionElements.length === 0) return;

    // Use IntersectionObserver with multiple thresholds for clean active section calculation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
