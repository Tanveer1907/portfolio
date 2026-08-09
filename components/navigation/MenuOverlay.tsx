"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { EASING, DURATION } from "@/lib/animations/tokens";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (id: string) => void;
}

const MENU_ITEMS = [
  { id: "home", label: "01", title: "HOME" },
  { id: "about", label: "02", title: "ABOUT" },
  { id: "projects", label: "03", title: "PROJECTS" },
  { id: "skills", label: "04", title: "SKILLS" },
  { id: "journey", label: "05", title: "JOURNEY" },
  { id: "connect", label: "06", title: "CONNECT" },
];

export default function MenuOverlay({
  isOpen,
  onClose,
  onSelectSection,
}: MenuOverlayProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { lockScroll, unlockScroll } = useLenisScroll();

  useEffect(() => {
    if (!isOpen) return;

    lockScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll, onClose]);

  // Handle native trackpad gesture, mouse wheel & touch scrolling inside menu overlay
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isOpen) return;

    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      el.scrollTop += e.deltaY;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.stopPropagation();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [isOpen]);

  const handleItemClick = (id: string) => {
    onClose();
    onSelectSection(id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.FAST, ease: EASING.editorial }}
          data-lenis-prevent="true"
          data-lenis-prevent-touch="true"
          data-lenis-prevent-wheel="true"
          className="fixed inset-0 z-50 bg-[#0A0A09]/98 text-[#F1F0EB] overflow-y-auto overscroll-contain touch-pan-y p-6 md:p-16 flex flex-col justify-between"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Header */}
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto flex-shrink-0">
            <span className="font-label-caps text-[#F1F0EB] tracking-[0.2em] text-xs">
              TANVEER SINGH
            </span>
            <button
              onClick={onClose}
              className="flex items-center gap-2 group cursor-pointer p-2 rounded hover:bg-white/5 transition-colors"
              aria-label="Close navigation menu"
            >
              <span className="font-label-caps text-xs text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors">
                CLOSE
              </span>
              <span className="material-symbols-outlined text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-xl">
                close
              </span>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="my-auto py-12 flex flex-col gap-6 max-w-3xl mx-auto w-full flex-shrink-0">
            {MENU_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: DURATION.MEDIUM,
                  delay: index * 0.05,
                  ease: EASING.editorial,
                }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleItemClick(item.id)}
                className="flex items-baseline gap-6 text-left group cursor-pointer w-fit p-1"
              >
                <span className="font-mono-data text-xs text-[#949087] group-hover:text-[#F1F0EB] transition-colors">
                  {item.label}
                </span>
                <span className="font-hero-display text-3xl sm:text-5xl md:text-6xl text-[#cac6bf] group-hover:text-[#F1F0EB] uppercase transition-colors tracking-tight">
                  {item.title}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-subtle pt-6 text-[#949087] font-mono-data text-xs gap-4 max-w-7xl mx-auto w-full flex-shrink-0">
            <div>SOFTWARE DEVELOPER &amp; CS STUDENT</div>
            <div className="flex gap-8">
              <a
                href="https://github.com/Tanveer1907"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F1F0EB] transition-colors p-1"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F1F0EB] transition-colors p-1"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:1906tanveer@gmail.com"
                className="hover:text-[#F1F0EB] transition-colors p-1"
              >
                EMAIL
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
