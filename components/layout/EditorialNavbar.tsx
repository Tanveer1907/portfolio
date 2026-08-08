"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function EditorialNavbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 rounded-xl px-5 py-3 ${
          scrolled
            ? "bg-[#181815]/85 backdrop-blur-md border border-[#F1EDE3]/12 shadow-lg"
            : "bg-[#181815]/50 backdrop-blur-xs border border-[#F1EDE3]/10"
        }`}
      >
        {/* Brand / Name */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-left group focus:outline-none"
        >
          <span className="font-playfair text-lg font-semibold tracking-tight text-[#F1EDE3] group-hover:text-[#C86B4A] transition-colors">
            TANVEER SINGH
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative py-1 font-geist text-xs font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? "text-[#F1EDE3]" : "text-[#A6A197] hover:text-[#F1EDE3]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C86B4A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#A6A197] hover:text-[#F1EDE3] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 max-w-6xl mx-auto bg-[#181815]/95 border border-[#F1EDE3]/12 backdrop-blur-xl rounded-xl p-5 shadow-2xl space-y-3"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left py-2 font-geist text-sm transition-colors ${
                  activeSection === item.id
                    ? "text-[#C86B4A] font-semibold"
                    : "text-[#A6A197] hover:text-[#F1EDE3]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
