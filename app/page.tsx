"use client";

import React, { useState } from "react";
import SmoothScrollProvider, { useLenisScroll } from "@/components/layout/SmoothScrollProvider";
import GlobalBackground from "@/components/layout/GlobalBackground";
import BubbleMenu from "@/components/navigation/BubbleMenu";
import HeroSection from "@/components/sections/HeroSection";

import AboutSection from "@/components/sections/AboutSection";
import ExpandedAboutModal from "@/components/sections/ExpandedAboutModal";
import ProjectsSection from "@/components/sections/ProjectsSection";

import SkillsSection from "@/components/sections/SkillsSection";
import JourneyMapSection from "@/components/sections/JourneyMapSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ClickSpark from "@/components/ui/ClickSpark";
import TerminalDemo from "@/components/ui/terminal-demo";
import { NoiseBackground } from "@/components/ui/noise-background";
import MusicPlayer from "@/components/ui/MusicPlayer";


function PortfolioContent() {
  const { scrollTo } = useLenisScroll();

  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isExpandedAboutOpen, setIsExpandedAboutOpen] = useState<boolean>(false);


  const handleSelectSection = (id: string) => {
    const targetId = id === "hero" ? "home" : id;
    scrollTo(targetId);
  };

  const menuItems = [
    {
      label: "home",
      href: "#home",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSelectSection("home");
      },
    },
    {
      label: "about",
      href: "#about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSelectSection("about");
      },
    },
    {
      label: "projects",
      href: "#projects",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSelectSection("projects");
      },
    },
    {
      label: "skills",
      href: "#skills",
      ariaLabel: "Skills",
      rotation: -6,
      hoverStyles: { bgColor: "#ec4899", textColor: "#ffffff" },
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSelectSection("skills");
      },
    },
    {
      label: "journey",
      href: "#journey",
      ariaLabel: "Journey",
      rotation: 8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSelectSection("journey");
      },
    },
    {
      label: "contact",
      href: "#connect",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSelectSection("connect");
      },
    },
  ];

  if (!hasEntered) {
    return <TerminalDemo onFinish={() => setHasEntered(true)} />;
  }


  return (
    <div className="relative min-h-screen bg-[#0A0A09] text-[#F1F0EB] antialiased overflow-x-clip w-full">
      {/* Bubble Menu Navigation */}
      <BubbleMenu
        logo={
          <NoiseBackground
            containerClassName="w-fit p-1 rounded-full mx-auto"
            gradientColors={[
              "rgb(255, 100, 150)",
              "rgb(100, 150, 255)",
              "rgb(255, 200, 100)",
            ]}
          >
            <button
              onClick={() => handleSelectSection("home")}
              className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-5 py-2 text-black font-extrabold text-xs tracking-wider shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] flex items-center justify-center"
            >
              TS
            </button>
          </NoiseBackground>
        }
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#181817"
        menuContentColor="#F1F0EB"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />





      {/* Main Single-Column Full Viewport Continuous Flow */}
      <main className="w-full flex flex-col">
        {/* 00 HERO SECTION */}
        <HeroSection onExplore={() => handleSelectSection("about")} />

        {/* 02 ABOUT SECTION */}
        <AboutSection
          onOpenExpandedAbout={() => setIsExpandedAboutOpen(true)}
        />

        {/* 03 SELECTED WORKS / PROJECTS */}
        <ProjectsSection />

        {/* 04 ENGINEERING TOOLKIT / SKILLS */}
        <SkillsSection />

        {/* 05 THE JOURNEY / VISUAL MAP */}
        <JourneyMapSection />

        {/* 06 LET'S BUILD / CONNECT */}
        <ContactSection />

        {/* FOOTER */}
        <Footer />
      </main>

      {/* Music Player Widget - Bottom Left */}
      <MusicPlayer />

      {/* Modals */}
      <ExpandedAboutModal
        isOpen={isExpandedAboutOpen}
        onClose={() => setIsExpandedAboutOpen(false)}
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



