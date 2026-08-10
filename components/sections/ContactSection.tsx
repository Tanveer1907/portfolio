"use client";

import React, { useState } from "react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "1906tanveer@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="connect" className="w-full flex flex-col md:flex-row bg-transparent">
      {/* Left Column */}
      <Reveal className="w-full md:w-1/2 p-6 md:p-24 xl:p-32 flex flex-col justify-center">
        <RevealItem>
          <span className="font-mono-data text-[#949087] mb-12 block">
            06 / CONNECT
          </span>
        </RevealItem>
        <RevealItem>
          <h2 className="font-headline-lg text-[#F1F0EB] uppercase tracking-wide mb-8 text-5xl md:text-6xl">
            Let&apos;s<br />Build.
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="font-body-lg text-[#cac6bf] mb-16 max-w-sm text-xl leading-relaxed">
            Have an idea, a project, or just want to say hi? I&apos;d love to connect.
          </p>
        </RevealItem>
        <RevealItem className="flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-4 w-fit border-b border-[#cac6bf] hover:border-[#F1F0EB] pb-2 transition-all p-1"
          >
            <span className="font-label-caps text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors tracking-widest text-xs">
              GET IN TOUCH
            </span>
            <span className="material-symbols-outlined text-sm text-[#cac6bf] group-hover:text-[#F1F0EB] transition-all transform group-hover:translate-x-2 md:-rotate-45">
              arrow_forward
            </span>
          </a>
          <button
            onClick={handleCopyEmail}
            className="font-mono-data text-xs text-[#949087] hover:text-[#F1F0EB] transition-colors cursor-pointer p-1"
          >
            {copied ? "COPIED ✓" : "COPY EMAIL"}
          </button>
        </RevealItem>
      </Reveal>

      {/* Right Column Links */}
      <div className="w-full md:w-1/2 p-6 md:p-24 xl:p-32 flex flex-col justify-center gap-12 bg-transparent">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-8 group cursor-pointer p-1"
        >
          <span className="material-symbols-outlined text-[#949087] group-hover:text-[#F1F0EB] transition-colors text-3xl">
            mail
          </span>
          <span className="font-mono-data text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-xl">
            {email}
          </span>
        </a>

        <a
          href="https://github.com/Tanveer1907"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-8 group cursor-pointer p-1"
        >
          <span className="material-symbols-outlined text-[#949087] group-hover:text-[#F1F0EB] transition-colors text-3xl">
            code
          </span>
          <span className="font-mono-data text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-xl">
            github.com/Tanveer1907
          </span>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-8 group cursor-pointer p-1"
        >
          <span className="material-symbols-outlined text-[#949087] group-hover:text-[#F1F0EB] transition-colors text-3xl">
            work
          </span>
          <span className="font-mono-data text-[#cac6bf] group-hover:text-[#F1F0EB] transition-colors text-xl">
            linkedin.com/in/tanveersingh
          </span>
        </a>
      </div>
    </section>
  );
}
