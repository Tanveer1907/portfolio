import { ChapterConfig, ChapterId } from "@/types/chapter.types";
import { CoverChapter } from "@/components/journal/chapters/CoverChapter";
import { AboutChapter } from "@/components/journal/chapters/AboutChapter";
import { JourneyChapter } from "@/components/journal/chapters/JourneyChapter";
import { ProjectsChapter } from "@/components/journal/chapters/ProjectsChapter";
import { SkillsChapter } from "@/components/journal/chapters/SkillsChapter";
import { ContactChapter } from "@/components/journal/chapters/ContactChapter";

export const CHAPTERS_REGISTRY: Record<ChapterId, ChapterConfig> = {
  cover: {
    id: "cover",
    number: "00",
    title: "Frontispiece",
    subtitle: "Philosophy & Architectural Mindset",
    pageNumber: 1,
    component: CoverChapter,
  },
  about: {
    id: "about",
    number: "01",
    title: "About",
    subtitle: "Engineering Values & Workspace Foundations",
    pageNumber: 4,
    component: AboutChapter,
  },
  journey: {
    id: "journey",
    number: "02",
    title: "Journey",
    subtitle: "Milestones & Technical Retrospectives",
    pageNumber: 8,
    component: JourneyChapter,
  },
  projects: {
    id: "projects",
    number: "03",
    title: "Projects",
    subtitle: "System Architecture & Case Study Spreads",
    pageNumber: 14,
    component: ProjectsChapter,
  },
  skills: {
    id: "skills",
    number: "04",
    title: "Skills",
    subtitle: "Engineered Schematics & Core Competencies",
    pageNumber: 22,
    component: SkillsChapter,
  },
  contact: {
    id: "contact",
    number: "05",
    title: "Contact",
    subtitle: "Direct Channels & Collaboration Log",
    pageNumber: 28,
    component: ContactChapter,
  },
};

export const DEFAULT_CHAPTER_ID: ChapterId = "cover";
