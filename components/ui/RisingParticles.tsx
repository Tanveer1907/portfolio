"use client";

import React, { useEffect, useRef } from "react";

export interface RisingParticlesProps {
  className?: string;
  particleCount?: number;
  repelRadius?: number;
  repelStrength?: number;
  speed?: number;
  minRadius?: number;
  maxRadius?: number;
  colors?: string[];
  denseGlow?: boolean;
  baseColor?: string;
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  baseVy: number;
  radius: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  alphaSpeed: number;
  driftFreq: number;
  driftAmp: number;
  driftPhase: number;
}

const DEFAULT_COLORS = [
  "rgba(57, 195, 239, ",   // Cyan accent (#39C3EF)
  "rgba(241, 240, 235, ",  // Warm ivory (#F1F0EB)
  "rgba(186, 230, 253, ",  // Celestial light cyan
  "rgba(245, 208, 97, ",   // Starlight gold
  "rgba(216, 210, 196, ",  // Subtle champagne
];

export default function RisingParticles({
  className = "",
  particleCount,
  repelRadius = 130,
  repelStrength = 6,
  speed = 0.85,
  minRadius = 1.2,
  maxRadius = 3.2,
  colors = DEFAULT_COLORS,
  denseGlow = false,
  baseColor = "radial-gradient(ellipse at bottom, #111722 0%, #08090d 60%, #050608 100%)",
  interactive = true,
}: RisingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;
    let dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const particles: Particle[] = [];

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const effectiveCount = particleCount ?? Math.min(Math.max(Math.floor((width * height) / 14000), 45), 160);
      for (let i = 0; i < effectiveCount; i++) {
        const baseVy = -(0.3 + Math.random() * 0.7) * speed;
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        const initialAlpha = 0.25 + Math.random() * 0.65;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: 0,
          baseY: 0,
          vx: 0,
          vy: baseVy,
          baseVy,
          radius: minRadius + Math.random() * (maxRadius - minRadius),
          color: colorPrefix,
          alpha: initialAlpha,
          targetAlpha: initialAlpha,
          alphaSpeed: 0.005 + Math.random() * 0.015,
          driftFreq: 0.001 + Math.random() * 0.003,
          driftAmp: 0.2 + Math.random() * 0.5,
          driftPhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const onPointerMove = (e: MouseEvent | PointerEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const r2 = repelRadius * repelRadius;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural horizontal oscillation
        const drift = Math.sin(time * p.driftFreq + p.driftPhase) * p.driftAmp;

        // Interactive mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < r2 && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = ((1 - dist / repelRadius) * repelStrength) / dist;
            p.vx += dx * force * 0.35;
            p.vy += dy * force * 0.35;
          }
        }

        // Apply velocities with smooth damping
        p.vx *= 0.92;
        p.vy = p.vy * 0.94 + p.baseVy * 0.06;

        p.x += p.vx + drift;
        p.y += p.vy;

        // Wrap around top / bottom / edges
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        } else if (p.y > height + 20) {
          p.y = -20;
        }

        if (p.x < -20) {
          p.x = width + 20;
        } else if (p.x > width + 20) {
          p.x = -20;
        }

        // Alpha pulsing for glowing shimmer
        if (Math.abs(p.alpha - p.targetAlpha) < 0.03) {
          p.targetAlpha = 0.2 + Math.random() * 0.75;
        }
        p.alpha += (p.targetAlpha - p.alpha) * p.alphaSpeed;

        const effectiveAlpha = Math.max(0.1, Math.min(1, p.alpha * (denseGlow ? 1.3 : 1.0)));

        // Soft outer glow aura
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (denseGlow ? 2.6 : 2.0), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.28).toFixed(3)})`;
        ctx.fill();

        // Luminous core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${effectiveAlpha.toFixed(3)})`;
        ctx.fill();

        // Extra bright sparkle center for larger particles
        if (p.radius > 2.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${(effectiveAlpha * 0.9).toFixed(3)})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [colors, denseGlow, interactive, maxRadius, minRadius, particleCount, repelRadius, repelStrength, speed]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`.trim()}
      style={{ background: baseColor }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none" />
    </div>
  );
}
