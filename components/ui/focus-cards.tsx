"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FocusCardData {
  id?: string;
  title: string;
  category?: string;
  src: string;
  description?: string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onSelect,
  }: {
    card: FocusCardData;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onSelect?: (card: FocusCardData) => void;
  }) => (
    <div
      onClick={() => onSelect?.(card)}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-neutral-900 border border-white/10 overflow-hidden h-72 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer shadow-xl group",
        hovered !== null && hovered !== index && "blur-[2px] scale-[0.98] opacity-75"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300",
          hovered === index ? "opacity-100 translate-y-0" : "opacity-90 sm:opacity-80 translate-y-1"
        )}
      >
        {card.category && (
          <span className="text-[#39C3EF] text-xs font-mono tracking-widest uppercase mb-1">
            {card.category}
          </span>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-[#F1F0EB] tracking-tight">
          {card.title}
        </h3>
        <span className="text-xs text-[#cac6bf] font-mono mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Click for details <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </span>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({
  cards,
  onSelect,
}: {
  cards: FocusCardData[];
  onSelect?: (card: FocusCardData) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id || card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
