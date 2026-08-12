"use client";

import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";

// Royalty-free ambient lofi soundtrack stream
const AMBIENT_AUDIO_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";
const SONG_TITLE = "Lofi Study — Chill Beats";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(AMBIENT_AUDIO_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio playback issue:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[150] flex flex-col items-center pointer-events-auto">

      {/* Orb Button container with smooth upward push when playing */}
      <div
        className={`transition-all duration-500 ease-out flex flex-col items-center ${
          isPlaying ? "-translate-y-2 sm:-translate-y-3" : "translate-y-0"
        }`}
      >
        <button
          onClick={togglePlay}
          className={`music-loader-btn group ${isPlaying ? "playing" : ""}`}
          title={isPlaying ? "Pause music" : "Play music"}
          aria-label="Toggle background music"
        >
          <div className="loader">
            <div className="box" style={{ "--inset": "0%", "--i": 0 } as React.CSSProperties} />
            <div className="box" style={{ "--inset": "12%", "--i": 1 } as React.CSSProperties} />
            <div className="box" style={{ "--inset": "24%", "--i": 2 } as React.CSSProperties} />
            <div className="box" style={{ "--inset": "36%", "--i": 3 } as React.CSSProperties} />
            <div className="box" style={{ "--inset": "48%", "--i": 4 } as React.CSSProperties} />
            <div className="logo">
              {isPlaying ? (
                <span className="material-symbols-outlined text-white text-lg select-none">pause</span>
              ) : (
                <span className="material-symbols-outlined text-[#39C3EF] text-lg select-none group-hover:scale-110 transition-transform">
                  music_note
                </span>
              )}
            </div>
          </div>
        </button>

        {/* Song Name beneath the orb when playing */}
        <div
          className={`transition-all duration-500 ease-out overflow-hidden mt-2 flex items-center justify-center ${
            isPlaying
              ? "max-h-12 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono text-[#F1F0EB] tracking-wider whitespace-nowrap shadow-2xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39C3EF] animate-pulse" />
            <span>{SONG_TITLE}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
