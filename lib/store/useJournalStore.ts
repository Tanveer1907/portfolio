import { create } from "zustand";
import { ChapterId } from "@/types/chapter.types";
import {
  CHAPTERS_REGISTRY,
  DEFAULT_CHAPTER_ID,
} from "@/lib/constants/chapters.config";

export interface JournalState {
  activeChapter: ChapterId;
  targetChapter: ChapterId | null;
  turnDirection: "next" | "prev";
  isPageTurning: boolean;
  completedChapters: ChapterId[];
  setActiveChapter: (chapterId: ChapterId) => void;
  startPageTurn: (targetChapterId: ChapterId, direction?: "next" | "prev") => void;
  commitPageTurn: () => void;
  setPageTurning: (isTurning: boolean) => void;
  markChapterCompleted: (chapterId: ChapterId) => void;
  nextChapter: () => void;
  prevChapter: () => void;
}

export const useJournalStore = create<JournalState>((set, get) => ({
  activeChapter: DEFAULT_CHAPTER_ID,
  targetChapter: null,
  turnDirection: "next",
  isPageTurning: false,
  completedChapters: [DEFAULT_CHAPTER_ID],

  setActiveChapter: (chapterId: ChapterId) => {
    if (CHAPTERS_REGISTRY[chapterId]) {
      set({ activeChapter: chapterId, targetChapter: null, isPageTurning: false });
    }
  },

  startPageTurn: (targetChapterId: ChapterId, direction?: "next" | "prev") => {
    const { activeChapter, isPageTurning } = get();
    if (isPageTurning || targetChapterId === activeChapter || !CHAPTERS_REGISTRY[targetChapterId]) {
      return;
    }

    const chapterIds = Object.keys(CHAPTERS_REGISTRY) as ChapterId[];
    const currentIndex = chapterIds.indexOf(activeChapter);
    const targetIndex = chapterIds.indexOf(targetChapterId);
    
    const computedDirection = direction || (targetIndex > currentIndex ? "next" : "prev");

    set({
      isPageTurning: true,
      targetChapter: targetChapterId,
      turnDirection: computedDirection,
    });
  },

  commitPageTurn: () => {
    const { targetChapter, activeChapter, completedChapters } = get();
    const finalChapter = targetChapter || activeChapter;
    
    const newCompleted = completedChapters.includes(finalChapter)
      ? completedChapters
      : [...completedChapters, finalChapter];

    set({
      activeChapter: finalChapter,
      targetChapter: null,
      isPageTurning: false,
      completedChapters: newCompleted,
    });
  },

  setPageTurning: (isTurning: boolean) => {
    set({ isPageTurning: isTurning });
  },

  markChapterCompleted: (chapterId: ChapterId) => {
    const { completedChapters } = get();
    if (!completedChapters.includes(chapterId)) {
      set({ completedChapters: [...completedChapters, chapterId] });
    }
  },

  nextChapter: () => {
    const chapterIds = Object.keys(CHAPTERS_REGISTRY) as ChapterId[];
    const currentIndex = chapterIds.indexOf(get().activeChapter);
    if (currentIndex < chapterIds.length - 1) {
      get().startPageTurn(chapterIds[currentIndex + 1], "next");
    }
  },

  prevChapter: () => {
    const chapterIds = Object.keys(CHAPTERS_REGISTRY) as ChapterId[];
    const currentIndex = chapterIds.indexOf(get().activeChapter);
    if (currentIndex > 0) {
      get().startPageTurn(chapterIds[currentIndex - 1], "prev");
    }
  },
}));
