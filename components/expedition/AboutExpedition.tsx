"use client";

import React from "react";
import { Compass, Download, ShieldCheck, Milestone, User } from "lucide-react";

export default function AboutExpedition() {
  const milestones = [
    {
      year: "2024 — PRESENT",
      title: "Senior Distributed Systems & AI Lead",
      organization: "Engineering Expedition Outpost",
      detail: "Leading architecture of multi-modal neural search engines, vector index pipelines, and low-latency Rust/Go microservices.",
    },
    {
      year: "2022 — 2024",
      title: "Full Stack Systems Architect",
      organization: "NextGen Software Labs",
      detail: "Engineered scalable cloud web platforms, real-time WebSockets telemetry dashboards, and high-frequency data aggregators.",
    },
    {
      year: "2020 — 2022",
      title: "Software Engineering Scholar",
      organization: "Computer Science Expedition",
      detail: "Specialized in algorithm optimization, operating system kernels, distributed consensus protocols, and computer vision.",
    },
  ];

  return (
    <section id="logbook" className="relative py-28 bg-[#001619]/80 backdrop-blur-sm overflow-hidden border-t border-[#50E8F4]/20">
      {/* Topographic Background Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#50E8F4_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#50E8F4]/30 bg-[#00252A]/80 text-[#50E8F4] font-geist text-xs tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(80,232,244,0.2)]">
            <Compass className="w-3.5 h-3.5 text-[#50E8F4]" />
            <span>CAPTAIN&apos;S LOGBOOK // SECTOR 04</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#C7F8FE] tracking-tight">
            Captain&apos;s Log &amp; Biography
          </h2>

          <p className="font-inter text-base md:text-lg text-[#78A3A8] font-light leading-relaxed">
            Charting the milestones, research papers, and technical expeditions across software engineering history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Captain Biography Card */}
          <div className="lg:col-span-5 bg-[#00252A] border border-[#50E8F4]/40 rounded-3xl p-8 space-y-6 shadow-[0_0_30px_rgba(80,232,244,0.15)] relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-[#001619] border border-[#50E8F4]/40 flex items-center justify-center text-[#50E8F4] shadow-[0_0_20px_rgba(80,232,244,0.3)]">
              <User className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-playfair text-3xl font-bold text-[#C7F8FE]">
                Tanveer Singh
              </h3>
              <p className="font-geist text-xs text-[#50E8F4] tracking-widest uppercase">
                CAPTAIN &amp; CHIEF SOFTWARE ARCHITECT
              </p>
            </div>

            <p className="font-inter text-sm text-[#82B2B8] leading-relaxed">
              Passionate software engineer focused on building robust distributed systems, high-concurrency data pipelines, and responsive web user experiences. Driven by clean code design, rigorous mathematical modeling, and state-of-the-art UI craftsmanship.
            </p>

            <div className="pt-4 border-t border-[#50E8F4]/20 flex flex-wrap gap-4">
              <a
                href="#dispatch"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#50E8F4] hover:bg-[#C7F8FE] text-[#001619] font-geist text-xs font-bold uppercase transition-all shadow-[0_0_20px_rgba(80,232,244,0.3)]"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>COMMISSION PROJECT</span>
              </a>

              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#001619] border border-[#50E8F4]/40 text-[#50E8F4] hover:border-[#50E8F4] font-geist text-xs font-medium uppercase transition-all">
                <Download className="w-4 h-4" />
                <span>RESUME CV</span>
              </button>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-geist text-xs font-bold text-[#50E8F4] uppercase tracking-[0.25em] flex items-center gap-2">
              <Milestone className="w-4 h-4" />
              <span>EXPEDITION CHRONOLOGY</span>
            </h3>

            <div className="space-y-4">
              {milestones.map((m) => (
                <div
                  key={m.title}
                  className="bg-[#00252A]/80 border border-[#50E8F4]/20 hover:border-[#50E8F4]/50 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="font-playfair text-xl font-bold text-[#C7F8FE]">
                      {m.title}
                    </h4>
                    <span className="px-3 py-1 rounded-full bg-[#001619] border border-[#50E8F4]/30 text-[#50E8F4] font-geist text-[10px] tracking-wider w-fit">
                      {m.year}
                    </span>
                  </div>

                  <p className="font-geist text-xs text-[#50E8F4] mb-2 font-semibold">
                    {m.organization}
                  </p>

                  <p className="font-inter text-xs text-[#82B2B8] leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
