"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "HOME", icon: Compass },
    { id: "skills", label: "SKILLS OUTPOST", icon: Compass },
    { id: "logbook", label: "CAPTAIN'S LOG", icon: Compass },
    { id: "dispatch", label: "DISPATCH", icon: Compass },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-xl bg-[#001619]/80 border border-[#50E8F4]/20 rounded-2xl px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Brand / Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#00252A] border border-[#50E8F4]/40 flex items-center justify-center text-[#50E8F4] group-hover:border-[#50E8F4] transition-all shadow-[0_0_15px_rgba(80,232,244,0.3)]">
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-playfair text-lg font-bold tracking-wide text-[#C7F8FE] group-hover:text-[#50E8F4] transition-colors">
              TS EXPEDITIONS
            </span>
            <span className="block font-geist text-[10px] tracking-[0.2em] text-[#6B9499] uppercase">
              ENGINEERING LOG V3.0
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#00252A]/80 p-1.5 rounded-xl border border-[#50E8F4]/20">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 rounded-lg font-geist text-xs tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-[#C7F8FE] font-semibold"
                    : "text-[#6B9499] hover:text-[#C7F8FE]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-[#50E8F4]/20 border border-[#50E8F4]/60 rounded-lg shadow-[0_0_15px_rgba(80,232,244,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <item.icon className={`w-3.5 h-3.5 ${isActive ? "text-[#50E8F4]" : "text-[#6B9499]"}`} />
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Status Badge */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-geist text-[#6B9499] bg-[#00252A]/90 px-3 py-1.5 rounded-lg border border-[#50E8F4]/20">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#50E8F4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#50E8F4]"></span>
            </span>
            <span className="text-[#50E8F4] font-medium tracking-wider">SYS: ON-LINE</span>
          </div>
          <span className="text-[#50E8F4]/30">|</span>
          <span className="tracking-widest text-[#C7F8FE]">30.7333° N, 76.7794° E</span>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-[#00252A] border border-[#50E8F4]/30 flex items-center justify-center text-[#50E8F4]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 max-w-7xl mx-auto bg-[#001619]/95 border border-[#50E8F4]/30 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-geist text-xs tracking-widest text-left uppercase transition-colors ${
                  activeSection === item.id
                    ? "bg-[#50E8F4]/20 text-[#50E8F4] border border-[#50E8F4]/40 font-semibold"
                    : "text-[#6B9499] hover:bg-[#00252A]"
                }`}
              >
                <item.icon className="w-4 h-4 text-[#50E8F4]" />
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
