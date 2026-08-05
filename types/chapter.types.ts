import React from "react";

export type ChapterId =
  | "cover"
  | "about"
  | "journey"
  | "projects"
  | "skills"
  | "contact";

export interface ChapterConfig {
  id: ChapterId;
  number: string;
  title: string;
  subtitle: string;
  pageNumber: number;
  component: React.ComponentType;
}

export interface JournalSpreadProps {
  activeChapter?: ChapterId;
  className?: string;
}
