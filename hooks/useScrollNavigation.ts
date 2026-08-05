"use client";

import { useEffect, useRef } from "react";
import { useJournalStore } from "@/lib/store/useJournalStore";
import { ChapterId } from "@/types/chapter.types";

const CHAPTER_SEQUENCE: ChapterId[] = [
  "cover",
  "about",
  "journey",
  "projects",
  "skills",
  "contact",
];

const SCROLL_THRESHOLD = 30;
const COOLDOWN_MS = 900;

export function useScrollNavigation() {
  const activeChapter = useJournalStore((state) => state.activeChapter);
  const isPageTurning = useJournalStore((state) => state.isPageTurning);
  const startPageTurn = useJournalStore((state) => state.startPageTurn);
  const isCoolingDown = useRef(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const triggerTurn = (direction: "next" | "prev") => {
      if (isCoolingDown.current || isPageTurning) return;

      const currentIndex = CHAPTER_SEQUENCE.indexOf(activeChapter);
      if (currentIndex === -1) return;

      if (direction === "next" && currentIndex < CHAPTER_SEQUENCE.length - 1) {
        isCoolingDown.current = true;
        startPageTurn(CHAPTER_SEQUENCE[currentIndex + 1], "next");
        setTimeout(() => {
          isCoolingDown.current = false;
        }, COOLDOWN_MS);
      } else if (direction === "prev" && currentIndex > 0) {
        isCoolingDown.current = true;
        startPageTurn(CHAPTER_SEQUENCE[currentIndex - 1], "prev");
        setTimeout(() => {
          isCoolingDown.current = false;
        }, COOLDOWN_MS);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < SCROLL_THRESHOLD) return;
      triggerTurn(event.deltaY > 0 ? "next" : "prev");
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        triggerTurn("next");
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        triggerTurn("prev");
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      const touchEndY = event.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      if (Math.abs(diff) > 40) {
        triggerTurn(diff > 0 ? "next" : "prev");
        touchStartY.current = null;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeChapter, isPageTurning, startPageTurn]);
}
