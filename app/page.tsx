"use client";

import React, { useState } from "react";
import SmoothScrollProvider, { useLenisScroll } from "@/components/layout/SmoothScrollProvider";
import GlobalBackground from "@/components/layout/GlobalBackground";
import TopHeader from "@/components/navigation/TopHeader";
import SideSectionIndicator from "@/components/navigation/SideSectionIndicator";
import MenuOverlay from "@/components/navigation/MenuOverlay";
import OpeningSequence from "@/components/sections/OpeningSequence";
import AboutSection from "@/components/sections/AboutSection";
import ExpandedAboutModal from "@/components/sections/ExpandedAboutModal";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProjectDetailModal from "@/components/sections/ProjectDetailModal";
import SkillsSection from "@/components/sections/SkillsSection";
import JourneyMapSection from "@/components/sections/JourneyMapSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ClickSpark from "@/components/ui/ClickSpark";
import { useActiveSection } from "@/hooks/useActiveSection";

function PortfolioContent() {
  const activeSection = useActiveSection("home");
  const { scrollTo } = useLenisScroll();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isExpandedAboutOpen, setIsExpandedAboutOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectSection = (id: string) => {
    const targetId = id === "hero" ? "home" : id;
    scrollTo(targetId);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A09] text-[#F1F0EB] antialiased overflow-x-clip w-full">
      {/* Top Header Navigation */}
      <TopHeader
        onOpenMenu={() => setIsMenuOpen(true)}
        activeSection={activeSection}
      />

      {/* Side Section Indicators */}
      <SideSectionIndicator
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Main Single-Column Full Viewport Continuous Flow */}
      <main className="w-full flex flex-col">
        {/* 00 OPENING SEQUENCE & HERO GATE */}
        <OpeningSequence onExplore={() => handleSelectSection("about")} />

        {/* 02 ABOUT SECTION */}
        <AboutSection
          onOpenExpandedAbout={() => setIsExpandedAboutOpen(true)}
        />

        {/* 03 SELECTED WORKS / PROJECTS */}
        <ProjectsSection
          onOpenProjectDetail={(id) => setSelectedProjectId(id)}
        />

        {/* 04 ENGINEERING TOOLKIT / SKILLS */}
        <SkillsSection />

        {/* 05 THE JOURNEY / VISUAL MAP */}
        <JourneyMapSection />

        {/* 06 LET'S BUILD / CONNECT */}
        <ContactSection />

        {/* FOOTER */}
        <Footer />
      </main>

      {/* Overlays and Modals */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSection={handleSelectSection}
      />

      <ExpandedAboutModal
        isOpen={isExpandedAboutOpen}
        onClose={() => setIsExpandedAboutOpen(false)}
      />

      <ProjectDetailModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}

export default function Home() {
  return (
    <SmoothScrollProvider>
      <GlobalBackground />
      <ClickSpark
        sparkColor="#4202ed"
        sparkSize={29}
        sparkRadius={58}
        sparkCount={16}
        duration={600}
        easing="ease-out"
        extraScale={1}
      >
        <PortfolioContent />
      </ClickSpark>
    </SmoothScrollProvider>
  );
}
