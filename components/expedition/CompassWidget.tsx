"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Navigation, ArrowUp } from "lucide-react";

export default function CompassWidget() {
  const [rotation, setRotation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickJumps = [
    { id: "hero", label: "01 // HERO LANDING" },
    { id: "skills", label: "02 // SKILLS OUTPOST" },
    { id: "logbook", label: "03 // CAPTAIN'S LOG" },
    { id: "dispatch", label: "04 // DISPATCH BASE" },
  ];

  const jumpTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Navigation Jump Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-16 right-0 w-64 bg-[#001619]/95 border border-[#50E8F4]/40 backdrop-blur-2xl rounded-2xl p-3 shadow-[0_0_30px_rgba(80,232,244,0.3)] space-y-1"
          >
            <div className="px-3 py-2 border-b border-[#50E8F4]/20 font-geist text-[10px] tracking-[0.2em] text-[#50E8F4] font-semibold uppercase flex items-center justify-between">
              <span>CARTOGRAPHER JUMP</span>
              <Navigation className="w-3 h-3 text-[#50E8F4]" />
            </div>

            {quickJumps.map((j) => (
              <button
                key={j.id}
                onClick={() => jumpTo(j.id)}
                className="w-full text-left px-3 py-2 rounded-xl font-geist text-xs text-[#C7F8FE] hover:text-[#50E8F4] hover:bg-[#00252A] transition-all"
              >
                {j.label}
              </button>
            ))}

            <button
              onClick={scrollToTop}
              className="w-full mt-2 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#50E8F4] text-[#001619] font-geist text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(80,232,244,0.4)]"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>RETURN TO PEAK</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Compass Widget */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="group relative w-14 h-14 rounded-full bg-[#00252A] border border-[#50E8F4] flex items-center justify-center text-[#50E8F4] shadow-[0_0_25px_rgba(80,232,244,0.4)] hover:shadow-[0_0_35px_rgba(80,232,244,0.6)] transition-all duration-300"
        aria-label="Expedition Navigation Compass"
      >
        <motion.div style={{ rotate: rotation }} transition={{ ease: "linear" }}>
          <Compass className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </motion.div>

        {/* Outer Glowing Pulsing Ring */}
        <span className="absolute -inset-1 rounded-full border border-[#50E8F4]/40 animate-ping pointer-events-none" />
      </button>
    </div>
  );
}
