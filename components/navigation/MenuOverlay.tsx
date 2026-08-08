"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (id: string) => void;
}

const MENU_ITEMS = [
  { id: "hero", label: "01", title: "HOME" },
  { id: "about", label: "02", title: "ABOUT" },
  { id: "projects", label: "03", title: "PROJECTS" },
  { id: "skills", label: "04", title: "SKILLS" },
  { id: "journey", label: "05", title: "JOURNEY" },
  { id: "connect", label: "06", title: "CONTACT" },
];

export default function MenuOverlay({
  isOpen,
  onClose,
  onSelectSection,
}: MenuOverlayProps) {
  const handleItemClick = (id: string) => {
    onClose();
    onSelectSection(id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#0A0A09] text-[#e6e2df] flex flex-col justify-between p-8 md:p-16"
        >
          {/* Header */}
          <div className="flex justify-between items-center w-full">
            <div className="font-label-caps text-[#f5eee0] tracking-widest">
              TANVEER SINGH
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Close menu"
            >
              <span className="font-label-caps text-[#cac6bf] group-hover:text-[#f5eee0] transition-colors">
                CLOSE
              </span>
              <span className="material-symbols-outlined text-[#cac6bf] group-hover:text-[#f5eee0] transition-colors text-xl">
                close
              </span>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="my-auto py-12 flex flex-col gap-6 max-w-3xl">
            {MENU_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => handleItemClick(item.id)}
                className="flex items-baseline gap-6 text-left group cursor-pointer w-fit"
              >
                <span className="font-mono-data text-xs text-[#949087] group-hover:text-[#f5eee0] transition-colors">
                  {item.label}
                </span>
                <span className="font-hero-display text-3xl sm:text-5xl md:text-6xl text-[#cac6bf] group-hover:text-[#f5eee0] uppercase transition-colors tracking-tight">
                  {item.title}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-subtle pt-6 text-[#949087] font-mono-data text-xs gap-4">
            <div>SOFTWARE DEVELOPER &amp; CS STUDENT</div>
            <div className="flex gap-6">
              <a
                href="https://github.com/Tanveer1907"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5eee0] transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5eee0] transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:tanveersingh.dev@gmail.com"
                className="hover:text-[#f5eee0] transition-colors"
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
