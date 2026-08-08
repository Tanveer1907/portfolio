"use client";

import React from "react";
import GlobalBackground from "@/components/layout/GlobalBackground";
import ScrollNavigation from "@/components/navigation/ScrollNavigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import JourneySection from "@/components/sections/JourneySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#11110F] text-[#F1EDE3] selection:bg-[#C86B4A] selection:text-[#11110F]">
      {/* Persistent Global Background */}
      <GlobalBackground />

      {/* Viewport-Level Persistent Navigation Layer */}
      <ScrollNavigation />

      {/* Main Content Canvas */}
      <main className="relative z-10">
        {/* Narrative 1: Hero */}
        <HeroSection />

        {/* Narrative 2: About */}
        <AboutSection />

        {/* Narrative 3: Journey */}
        <JourneySection />

        {/* Narrative 4: Selected Projects */}
        <ProjectsSection />

        {/* Narrative 5: Engineering Toolkit */}
        <SkillsSection />

        {/* Narrative 6: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#F1EDE3]/12 py-8 text-center text-xs font-geist text-[#A6A197]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Tanveer Singh. All rights reserved.</span>
          <span>Computer Science Student &amp; Developer</span>
        </div>
      </footer>
    </div>
  );
}
