"use client";

import React, { useState } from "react";
import SmoothScrollProvider, { useLenisScroll } from "@/components/layout/SmoothScrollProvider";
import GooeyNav from "@/components/navigation/GooeyNav";
import HeroSection from "@/components/sections/HeroSection";

import AboutSection from "@/components/sections/AboutSection";
import ExpandedAboutModal from "@/components/sections/ExpandedAboutModal";
import ProjectsSection from "@/components/sections/ProjectsSection";

import SkillsSection from "@/components/sections/SkillsSection";
import JourneyMapSection from "@/components/sections/JourneyMapSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ClickSpark from "@/components/ui/ClickSpark";
import IntroSequence from "@/components/layout/IntroSequence";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#connect" },
];

function PortfolioContent() {
  const { lenis, scrollTo } = useLenisScroll();

  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isExpandedAboutOpen, setIsExpandedAboutOpen] = useState<boolean>(false);
  const [activeNavIndex, setActiveNavIndex] = useState<number>(0);

  const isClickScrollingRef = React.useRef<boolean>(false);
  const clickTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleSelectSection = (targetHref: string) => {
    const cleanId = targetHref.replace("#", "");
    const targetId = cleanId === "hero" ? "home" : cleanId;
    const index = NAV_ITEMS.findIndex((item) => item.href === `#${targetId}`);
    if (index !== -1) {
      setActiveNavIndex(index);
    }

    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);

    scrollTo(`#${targetId}`);
  };

  // Synchronize active nav pill with scroll position
  React.useEffect(() => {
    if (!hasEntered) return;

    const sectionIds = ["home", "about", "journey", "projects", "skills", "connect"];

    const updateActiveSectionOnScroll = () => {
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom reached -> activate Contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveNavIndex(sectionIds.length - 1);
        return;
      }

      // Top reached -> activate Home
      if (scrollY < 120) {
        setActiveNavIndex(0);
        return;
      }

      const threshold = windowHeight * 0.38;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveNavIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", updateActiveSectionOnScroll, { passive: true });
    if (lenis) {
      lenis.on("scroll", updateActiveSectionOnScroll);
    }
    updateActiveSectionOnScroll();

    return () => {
      window.removeEventListener("scroll", updateActiveSectionOnScroll);
      if (lenis) {
        lenis.off("scroll", updateActiveSectionOnScroll);
      }
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [hasEntered, lenis]);

  return (
    <div className="relative min-h-screen bg-transparent text-[#F1F0EB] antialiased overflow-x-clip w-full">
      {/* Intro Sequence: Terminal -> Scroll Mask -> Home Hero Reveal */}
      {!hasEntered && (
        <IntroSequence onFinish={() => setHasEntered(true)} />
      )}

      {/* Vertical Gooey Navigation Bar (fixed on left side) */}
      {hasEntered && (
        <header
          className="fixed left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-50 pointer-events-auto transition-all duration-500 ease-out animate-in fade-in slide-in-from-left-6"
          role="banner"
        >
          <GooeyNav
            orientation="vertical"
            items={NAV_ITEMS}
            activeIndex={activeNavIndex}
            onChange={(index) => handleSelectSection(NAV_ITEMS[index].href)}
            theme="dark"
            size="sm"
            frame={true}
            particleCount={14}
            spread={22}
            animationTime={550}
            timeVariance={240}
            gooeyness={0.5}
            wobble={0.45}
            hoverEffect={true}
            color="#F1F0EB"
            colors={["#39C3EF", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899", "#3b82f6"]}
          />
        </header>
      )}

      {/* Main Single-Column Full Viewport Continuous Flow */}
      <main className="w-full flex flex-col">
        {/* 01 HERO SECTION */}
        <HeroSection onExplore={() => handleSelectSection("about")} />

        {/* 02 ABOUT SECTION */}
        <AboutSection
          onOpenExpandedAbout={() => setIsExpandedAboutOpen(true)}
        />

        {/* 03 THE JOURNEY / VISUAL MAP */}
        <JourneyMapSection />

        {/* 04 SELECTED WORKS / PROJECTS */}
        <ProjectsSection />

        {/* 05 ENGINEERING TOOLKIT / SKILLS */}
        <SkillsSection />

        {/* 06 LET'S BUILD / CONNECT */}
        <ContactSection />

        {/* FOOTER */}
        <Footer />
      </main>

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



