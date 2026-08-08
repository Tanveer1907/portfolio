"use client";

import React, { useEffect, useRef, useState } from "react";
import "./OptionWheel.css";

export interface OptionWheelProps {
  items?: string[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  textColor?: string;
  activeColor?: string;
  side?: "left" | "right";
  fontSize?: number;
  spacing?: number;
  curve?: number;
  tilt?: number;
  blur?: number;
  fade?: number;
  draggable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function OptionWheel({
  items = ["HOME", "ABOUT", "JOURNEY", "WORK", "SKILLS", "CONTACT"],
  selectedIndex = 0,
  onSelect,
  textColor = "rgba(166,161,151,0.50)",
  activeColor = "#F1EDE3",
  side = "left",
  fontSize = 0.85,
  spacing = 1.0,
  curve = 1.0,
  tilt = 4,
  blur = 1.0,
  fade = 0.2,
  draggable = true,
  className = "",
  style = {},
}: OptionWheelProps) {
  const [animIndex, setAnimIndex] = useState(selectedIndex);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const dragDelta = useRef(0);

  // Smooth lerp animIndex toward selectedIndex
  useEffect(() => {
    let frameId: number;
    const lerp = () => {
      setAnimIndex((prev) => {
        const diff = selectedIndex - prev;
        if (Math.abs(diff) < 0.001) return selectedIndex;
        return prev + diff * 0.16;
      });
      frameId = requestAnimationFrame(lerp);
    };
    frameId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(frameId);
  }, [selectedIndex]);

  // Pointer drag handling (does not block normal page scroll)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    isDragging.current = true;
    startY.current = e.clientY;
    dragDelta.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    dragDelta.current = e.clientY - startY.current;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 25;
    if (Math.abs(dragDelta.current) > threshold) {
      const step = dragDelta.current < 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(items.length - 1, selectedIndex + step));
      if (nextIndex !== selectedIndex && onSelect) {
        onSelect(nextIndex);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = Math.min(items.length - 1, selectedIndex + 1);
      onSelect?.(next);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = Math.max(0, selectedIndex - 1);
      onSelect?.(prev);
    }
  };

  return (
    <div
      className={`option-wheel-container ${className}`.trim()}
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="listbox"
      aria-label="Section Navigation"
    >
      <div className="option-wheel-list">
        {items.map((item, idx) => {
          const delta = idx - animIndex;
          const absDelta = Math.abs(delta);
          const isActive = idx === selectedIndex;
          const isNearActive = absDelta <= 1.2 && !isActive;

          const rotX = -delta * tilt;
          const scale = Math.max(0.82, 1 - absDelta * 0.06);
          const opacity = isActive
            ? 1
            : isNearActive
            ? 0.6
            : Math.max(0.18, 1 - absDelta * fade * 2.2);

          const color = isActive
            ? activeColor
            : isNearActive
            ? "rgba(241,237,227,0.70)"
            : textColor;

          const blurVal = Math.min(absDelta * blur, 2.5);
          const offsetX =
            side === "left"
              ? (1 - Math.cos(delta * 0.35)) * curve * 14
              : -(1 - Math.cos(delta * 0.35)) * curve * 14;

          const itemStyle: React.CSSProperties = {
            fontSize: `${fontSize}rem`,
            padding: `${spacing * 2}px 0`,
            color,
            transform: `translate3d(${offsetX}px, 0, 0) rotateX(${rotX}deg) scale(${scale})`,
            opacity,
            filter: blurVal > 0.2 ? `blur(${blurVal}px)` : "none",
          };

          return (
            <button
              key={item}
              type="button"
              role="option"
              aria-selected={isActive}
              className={`option-wheel-item ${isActive ? "option-wheel-item--active" : ""}`}
              style={itemStyle}
              onClick={() => onSelect?.(idx)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
