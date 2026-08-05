"use client";

import { useState, useEffect } from "react";

interface ViewportScaleOptions {
  targetWidth?: number;
  targetHeight?: number;
}

export function useViewportScale({
  targetWidth = 1280,
  targetHeight = 780,
}: ViewportScaleOptions = {}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const widthScale = window.innerWidth / targetWidth;
      const heightScale = window.innerHeight / targetHeight;

      // Uniformly scale down to fit the limiting dimension, maxing out at 1.0 scale
      const fitScale = Math.min(1, Math.min(widthScale, heightScale));
      setScale(fitScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [targetWidth, targetHeight]);

  return scale;
}
