"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useLenisScroll } from "@/components/layout/SmoothScrollProvider";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export const DESTINATION_PINS = [
  {
    lat: 28.6139,
    lng: 77.209,
    city: "New Delhi, IN",
    sectionId: "about",
    badge: "02 // ABOUT ME",
    flag: "🇮🇳",
    color: "#39C3EF",
  },
  {
    lat: 51.5072,
    lng: -0.1276,
    city: "London, UK",
    sectionId: "journey",
    badge: "03 // THE JOURNEY",
    flag: "🇬🇧",
    color: "#8b5cf6",
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    city: "San Francisco, US",
    sectionId: "projects",
    badge: "04 // PROJECTS",
    flag: "🇺🇸",
    color: "#f59e0b",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    city: "Tokyo, JP",
    sectionId: "skills",
    badge: "05 // SKILLS",
    flag: "🇯🇵",
    color: "#ec4899",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    city: "Sydney, AU",
    sectionId: "connect",
    badge: "06 // CONNECT",
    flag: "🇦🇺",
    color: "#ef4444",
  },
];

export default function GlobeDemo() {
  const { scrollTo } = useLenisScroll();

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 28.6139, lng: 77.209 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.25,
      color: "#39C3EF",
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.35,
      color: "#8b5cf6",
    },
    {
      order: 3,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: "#f59e0b",
    },
    {
      order: 4,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.3,
      color: "#ec4899",
    },
    {
      order: 5,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.4,
      color: "#ef4444",
    },
  ];

  const handleNavigateToSection = (sectionId: string) => {
    const targetId = sectionId.startsWith("#") ? sectionId : `#${sectionId}`;
    scrollTo(targetId);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Interactive Location Node Controls (Floating Badges over 3D Globe) */}
      <div className="absolute top-2 z-20 flex flex-wrap justify-center items-center gap-2 max-w-full px-2">
        {DESTINATION_PINS.map((pin) => (
          <button
            key={pin.city}
            onClick={() => handleNavigateToSection(pin.sectionId)}
            className="group px-2.5 py-1 rounded-full border border-white/15 text-[11px] font-mono flex items-center gap-1.5 backdrop-blur-md bg-black/60 text-[#cac6bf] hover:border-[#39C3EF] hover:text-white hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
            title={`Navigate to ${pin.badge}`}
          >
            <span>{pin.flag}</span>
            <span className="tracking-wide">{pin.city}</span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: pin.color }}
            />
          </button>
        ))}
      </div>

      <div className="w-full h-full relative">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <World
            data={sampleArcs}
            globeConfig={globeConfig}
            onPinClick={(point) => {
              if (point?.lat && point?.lng) {
                const matchedPin = DESTINATION_PINS.find(
                  (p) =>
                    Math.abs(p.lat - point.lat) < 5 &&
                    Math.abs(p.lng - point.lng) < 5
                );
                if (matchedPin) {
                  handleNavigateToSection(matchedPin.sectionId);
                }
              }
            }}
          />
        </div>
      </div>

      {/* Interactive Helper Text */}
      <div className="absolute bottom-2 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#cac6bf] flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#39C3EF] animate-pulse" />
        <span>Click global nodes to navigate sections</span>
      </div>
    </div>
  );
}
