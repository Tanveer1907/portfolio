"use client";

import React, { useState, useEffect } from "react";
import TopHeader from "@/components/navigation/TopHeader";
import SideSectionIndicator from "@/components/navigation/SideSectionIndicator";
import MenuOverlay from "@/components/navigation/MenuOverlay";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpandedAboutModal from "@/components/sections/ExpandedAboutModal";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProjectDetailModal from "@/components/sections/ProjectDetailModal";
import AllProjectsModal from "@/components/sections/AllProjectsModal";
import SkillsSection from "@/components/sections/SkillsSection";
import JourneyMapSection from "@/components/sections/JourneyMapSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isExpandedAboutOpen, setIsExpandedAboutOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState<boolean>(false);

  // Scroll section observer to highlight SideSectionIndicator 01..05
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "journey", "connect"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const targetId = id === "hero" ? "home" : id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A09] text-[#F1F0EB] antialiased overflow-x-hidden w-full">
      {/* Top Header Navigation */}
      <TopHeader onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Side Section Indicators */}
      <SideSectionIndicator
        activeSection={activeSection}
        onSelectSection={scrollToSection}
      />

      {/* Main Single-Column Full Viewport Journey Flow */}
      <main className="w-full flex flex-col">
        {/* 01 HERO SECTION */}
        <HeroSection onExplore={() => scrollToSection("about")} />

        {/* 02 ABOUT SECTION */}
        <AboutSection
          onOpenExpandedAbout={() => setIsExpandedAboutOpen(true)}
        />

        {/* 03 SELECTED WORKS / PROJECTS */}
        <ProjectsSection
          onOpenProjectDetail={(id) => setSelectedProjectId(id)}
          onOpenAllProjects={() => setIsAllProjectsOpen(true)}
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
        onSelectSection={scrollToSection}
      />

      <ExpandedAboutModal
        isOpen={isExpandedAboutOpen}
        onClose={() => setIsExpandedAboutOpen(false)}
      />

      <ProjectDetailModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />

      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        onSelectProject={(id) => setSelectedProjectId(id)}
      />
    </div>
  );
}
