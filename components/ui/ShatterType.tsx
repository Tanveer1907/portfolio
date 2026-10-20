"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface Shard {
  // Polygon vertices relative to shard origin
  points: { x: number; y: number }[];
  centroid: { x: number; y: number };
  baseCentroid: { x: number; y: number };
  // Visual properties
  color: string;
  glassAlpha: number;
  // Dynamic physics
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  // Crack fissure offsets
  crackDist: number;
  crackAngle: number;
}

export interface ShatterTypeProps {
  text?: string;
  fontSize?: string;
  fontWeight?: number | string;
  fontFamily?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  crackRadius?: number;
  reassembleDelay?: number;
  onClick?: () => void;
}

export default function ShatterType({
  text = "TANVEER\nSINGH",
  fontSize = "clamp(2.8rem, 5.8vw, 5.2rem)",
  fontWeight = 900,
  fontFamily = "'Space Grotesk', system-ui, -apple-system, sans-serif",
  color = "#F1F0EB",
  className = "",
  style = {},
  crackRadius = 140,
  reassembleDelay = 3200,
  onClick,
}: ShatterTypeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const [isShattered, setIsShattered] = useState(false);
  const isShatteredRef = useRef(false);
  const shardsRef = useRef<Shard[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const animFrameRef = useRef<number>(0);
  const reassembleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dimsRef = useRef({ width: 400, height: 180 });

  // Generate text mask offscreen and build glass shards
  const generateShards = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.max(Math.round(rect.width), 320);
    const height = Math.max(Math.round(rect.height), 170);
    dimsRef.current = { width, height };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Temporary element to resolve CSS font size
    const tempDiv = document.createElement("div");
    tempDiv.style.fontSize = fontSize;
    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    container.appendChild(tempDiv);
    const computedFontSize = parseFloat(window.getComputedStyle(tempDiv).fontSize) || 58;
    container.removeChild(tempDiv);

    // Offscreen canvas for rendering the crisp text
    const offscreen = document.createElement("canvas");
    offscreen.width = width * dpr;
    offscreen.height = height * dpr;
    const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
    if (!offCtx) return;

    offscreenRef.current = offscreen;

    offCtx.scale(dpr, dpr);
    offCtx.clearRect(0, 0, width, height);

    // Resolve clean font name
    const cleanFontFamily = fontFamily.replace(/var\([^)]+\),?\s*/g, "'Space Grotesk', system-ui, sans-serif");
    offCtx.font = `${fontWeight} ${computedFontSize}px ${cleanFontFamily}`;
    offCtx.fillStyle = color;
    offCtx.textBaseline = "top";

    // Draw multiline text
    const lines = text.split("\n");
    const lineHeight = computedFontSize * 0.94;
    const totalTextHeight = lines.length * lineHeight;
    const startY = Math.max(4, (height - totalTextHeight) / 2);

    lines.forEach((line, index) => {
      offCtx.fillText(line, 2, startY + index * lineHeight);
    });

    const imgData = offCtx.getImageData(0, 0, width * dpr, height * dpr);
    const data = imgData.data;

    // Glass shards Voronoi triangulation grid
    const cols = Math.floor(width / 28) + 2;
    const rows = Math.floor(height / 24) + 2;
    const cellW = width / cols;
    const cellH = height / rows;

    const gridPoints: { x: number; y: number }[][] = [];
    for (let r = 0; r <= rows; r++) {
      gridPoints[r] = [];
      for (let c = 0; c <= cols; c++) {
        const jitterX = (Math.random() - 0.5) * cellW * 0.75;
        const jitterY = (Math.random() - 0.5) * cellH * 0.75;
        gridPoints[r][c] = {
          x: c === 0 ? 0 : c === cols ? width : c * cellW + jitterX,
          y: r === 0 ? 0 : r === rows ? height : r * cellH + jitterY,
        };
      }
    }

    const shards: Shard[] = [];

    // Check if triangle bounding box has any non-transparent pixel
    const hasText = (minX: number, minY: number, maxX: number, maxY: number) => {
      const sx0 = Math.max(0, Math.floor(minX * dpr));
      const sy0 = Math.max(0, Math.floor(minY * dpr));
      const sx1 = Math.min(width * dpr - 1, Math.ceil(maxX * dpr));
      const sy1 = Math.min(height * dpr - 1, Math.ceil(maxY * dpr));

      const step = 4;
      for (let y = sy0; y <= sy1; y += step) {
        for (let x = sx0; x <= sx1; x += step) {
          const idx = (y * (width * dpr) + x) * 4;
          if (data[idx + 3] > 15) return true;
        }
      }
      return false;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const p1 = gridPoints[r][c];
        const p2 = gridPoints[r][c + 1];
        const p3 = gridPoints[r + 1][c + 1];
        const p4 = gridPoints[r + 1][c];

        const triangles = [
          [p1, p2, p3],
          [p1, p3, p4],
        ];

        for (const tri of triangles) {
          const minX = Math.min(tri[0].x, tri[1].x, tri[2].x);
          const maxX = Math.max(tri[0].x, tri[1].x, tri[2].x);
          const minY = Math.min(tri[0].y, tri[1].y, tri[2].y);
          const maxY = Math.max(tri[0].y, tri[1].y, tri[2].y);

          // Only keep shards covering text
          if (hasText(minX, minY, maxX, maxY)) {
            const cx = (tri[0].x + tri[1].x + tri[2].x) / 3;
            const cy = (tri[0].y + tri[1].y + tri[2].y) / 3;

            shards.push({
              points: tri.map((pt) => ({ x: pt.x - cx, y: pt.y - cy })),
              centroid: { x: cx, y: cy },
              baseCentroid: { x: cx, y: cy },
              color,
              glassAlpha: 0.9 + Math.random() * 0.1,
              x: 0,
              y: 0,
              z: 0,
              vx: 0,
              vy: 0,
              vz: 0,
              rotX: 0,
              rotY: 0,
              rotZ: 0,
              vRotX: 0,
              vRotY: 0,
              vRotZ: 0,
              crackDist: 0,
              crackAngle: 0,
            });
          }
        }
      }
    }

    shardsRef.current = shards;
  }, [color, fontFamily, fontSize, fontWeight, text]);

  // Main animation render loop
  useEffect(() => {
    generateShards();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offscreen = offscreenRef.current;
      const shards = shardsRef.current;

      const { width, height } = dimsRef.current;

      // Fallback: If shards haven't generated yet or empty, draw full text offscreen directly
      if (!shards.length && offscreen) {
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.drawImage(offscreen, 0, 0, width, height);
        ctx.restore();
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      const mouse = mouseRef.current;
      const shattered = isShatteredRef.current;

      for (let i = 0; i < shards.length; i++) {
        const s = shards[i];

        if (shattered) {
          // Physics under shatter explosion
          s.x += s.vx * dt * 60;
          s.y += s.vy * dt * 60;
          s.z += s.vz * dt * 60;
          s.vy += 0.35 * dt * 60; // gravity
          s.rotZ += s.vRotZ * dt;
          s.vx *= 0.985;
          s.vy *= 0.985;
        } else {
          // Normal state: cursor proximity crack displacement + assemble spring
          s.x += (0 - s.x) * 0.14;
          s.y += (0 - s.y) * 0.14;
          s.rotZ += (0 - s.rotZ) * 0.14;

          if (mouse.active) {
            const dx = s.baseCentroid.x - mouse.x;
            const dy = s.baseCentroid.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < crackRadius) {
              const force = Math.pow(1 - dist / crackRadius, 1.8) * 12;
              const angle = Math.atan2(dy, dx);
              s.crackDist += (force - s.crackDist) * 0.28;
              s.crackAngle = angle;
            } else {
              s.crackDist *= 0.85;
            }
          } else {
            s.crackDist *= 0.85;
          }
        }

        const renderX = s.baseCentroid.x + s.x + (shattered ? 0 : Math.cos(s.crackAngle) * s.crackDist);
        const renderY = s.baseCentroid.y + s.y + (shattered ? 0 : Math.sin(s.crackAngle) * s.crackDist);
        const rot = shattered ? s.rotZ : s.crackDist * 0.04 * (i % 2 === 0 ? 1 : -1);

        ctx.save();
        ctx.translate(renderX, renderY);
        if (rot !== 0) ctx.rotate(rot);

        // Path of shard polygon
        ctx.beginPath();
        if (s.points.length >= 3) {
          ctx.moveTo(s.points[0].x, s.points[0].y);
          for (let p = 1; p < s.points.length; p++) {
            ctx.lineTo(s.points[p].x, s.points[p].y);
          }
          ctx.closePath();

          // 1. Clip to shard polygon
          ctx.save();
          ctx.clip();

          // 2. Render sliced text from offscreen canvas
          if (offscreen) {
            ctx.drawImage(offscreen, -s.baseCentroid.x, -s.baseCentroid.y, width, height);
          }

          // 3. Subtle glass tint overlay
          ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
          ctx.fill();
          ctx.restore();

          // 4. Specular glass edge highlights & fissures
          const crackHighlight = !shattered && s.crackDist > 1 ? 0.65 : 0.2;
          ctx.lineWidth = 1;
          ctx.strokeStyle = `rgba(255, 255, 255, ${crackHighlight})`;
          ctx.stroke();

          // 5. Cyan brand gleam along active crack fissures
          if (!shattered && s.crackDist > 2) {
            ctx.strokeStyle = "rgba(57, 195, 239, 0.5)";
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      ctx.restore();
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    const handleResize = () => generateShards();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      generateShards();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [generateShards, crackRadius]);

  // Click to shatter and auto-reassemble
  const handleShatter = () => {
    onClick?.();

    if (isShatteredRef.current) {
      reassemble();
      return;
    }

    isShatteredRef.current = true;
    setIsShattered(true);

    const mouse = mouseRef.current;
    const originX = mouse.active ? mouse.x : (containerRef.current?.clientWidth || 400) / 2;
    const originY = mouse.active ? mouse.y : (containerRef.current?.clientHeight || 180) / 2;

    // Impart radial explosion velocities with 3D spins
    shardsRef.current.forEach((s) => {
      const dx = s.baseCentroid.x - originX;
      const dy = s.baseCentroid.y - originY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const speed = 7 + Math.random() * 14;

      s.vx = (dx / dist) * speed + (Math.random() - 0.5) * 6;
      s.vy = (dy / dist) * speed - (3 + Math.random() * 7); // pop upward
      s.vz = (Math.random() - 0.5) * 10;
      s.vRotX = (Math.random() - 0.5) * 8;
      s.vRotY = (Math.random() - 0.5) * 8;
      s.vRotZ = (Math.random() - 0.5) * 9;
    });

    if (reassembleTimerRef.current) clearTimeout(reassembleTimerRef.current);
    reassembleTimerRef.current = setTimeout(() => {
      reassemble();
    }, reassembleDelay);
  };

  const reassemble = () => {
    if (reassembleTimerRef.current) clearTimeout(reassembleTimerRef.current);
    isShatteredRef.current = false;
    setIsShattered(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleShatter}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleShatter();
        }
      }}
      aria-label="Tanveer Singh - Shatter Type interactive glass headline"
      title="Click to shatter, move cursor to crack"
      className={`relative select-none cursor-pointer group ${className}`}
      style={{
        width: "100%",
        minHeight: "175px",
        height: "190px",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none transition-filter duration-300 group-hover:drop-shadow-[0_0_24px_rgba(57,195,239,0.25)]"
      />

      {/* Glass shard indicator hint */}
      <span
        className={`absolute -bottom-2 left-1 text-[10px] font-mono tracking-widest text-[#949087]/60 uppercase transition-opacity duration-300 pointer-events-none ${
          isShattered ? "opacity-100 text-[#39C3EF]" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {isShattered ? "CLICK TO REASSEMBLE" : "CRACK UNDER CURSOR • CLICK TO SHATTER"}
      </span>

      {/* Screen reader fallback text */}
      <span className="sr-only">Tanveer Singh</span>
    </div>
  );
}
