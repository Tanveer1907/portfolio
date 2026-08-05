"use client";

import { useJournalStore } from "@/lib/store/useJournalStore";
import { CHAPTERS_REGISTRY } from "@/lib/constants/chapters.config";
import { ChapterConfig } from "@/types/chapter.types";

export function useJournalNavigation() {
  const activeChapter = useJournalStore((state) => state.activeChapter);
  const isPageTurning = useJournalStore((state) => state.isPageTurning);
  const completedChapters = useJournalStore((state) => state.completedChapters);
  const setActiveChapter = useJournalStore((state) => state.setActiveChapter);
  const setPageTurning = useJournalStore((state) => state.setPageTurning);
  const markChapterCompleted = useJournalStore((state) => state.markChapterCompleted);
  const nextChapter = useJournalStore((state) => state.nextChapter);
  const prevChapter = useJournalStore((state) => state.prevChapter);

  const activeChapterConfig: ChapterConfig = CHAPTERS_REGISTRY[activeChapter];

  return {
    activeChapter,
    activeChapterConfig,
    isPageTurning,
    completedChapters,
    availableChapters: Object.values(CHAPTERS_REGISTRY),
    setActiveChapter,
    setPageTurning,
    markChapterCompleted,
    nextChapter,
    prevChapter,
  };
}
