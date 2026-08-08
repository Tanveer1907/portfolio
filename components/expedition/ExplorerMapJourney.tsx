"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  Sparkles,
  Terminal,
  Zap,
  X,
} from "lucide-react";

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  constellation: string;
  metrics: string;
  description: string;
  tags: string[];
  link: string;
  schematic: string;
}

export default function ExplorerMapJourney() {
  const projects: ProjectItem[] = [
    {
      id: "project-1",
      num: "Project 01",
      title: "Stellar AI Explorer",
      category: "Machine Learning / Vision",
      icon: Sparkles,
      constellation: "Ursa Major Vector",
      metrics: "99.4% Inference Precision",
      description:
        "Autonomous deep learning neural search engine optimizing multi-modal astronomical vector embeddings across distributed GPU worker nodes.",
      tags: ["PyTorch", "CUDA", "FastAPI", "VectorDB", "React"],
      link: "https://github.com",
      schematic: "MODEL ARCHITECTURE // RESNET-152 + TRANSFORMER HEAD // LATENCY: 14ms",
    },
    {
      id: "project-2",
      num: "Project 02",
      title: "Quantum Data Platform",
      category: "High Performance Compute",
      icon: Cpu,
      constellation: "Cassiopeia Stream",
      metrics: "2.4M Ops / sec",
      description:
        "Low-latency real-time telemetry ingestion and stream analytics engine powering distributed edge nodes with fault-tolerant consensus.",
      tags: ["Rust", "Apache Kafka", "ClickHouse", "Go", "Docker"],
      link: "https://github.com",
      schematic: "RING BUFFER PIPELINE // ZERO-COPY MEMORY ALLOCATOR // THREAD POOL: 64",
    },
    {
      id: "project-3",
      num: "Project 03",
      title: "Neural Vision Suite",
      category: "Computer Vision & Edge",
      icon: Database,
      constellation: "Orion Cluster",
      metrics: "60 FPS Edge Processing",
      description:
        "Real-time object detection and spatio-temporal segmentation platform for high-velocity video feeds deployed on embedded TPU modules.",
      tags: ["OpenCV", "TensorRT", "C++20", "WebAssembly", "Python"],
      link: "https://github.com",
      schematic: "TENSORRT OPTIMIZED // INT8 QUANTIZATION // EDGE TPU BACKEND",
    },
    {
      id: "project-4",
      num: "Project 04",
      title: "Aether Engine",
      category: "Distributed Orchestration",
      icon: Terminal,
      constellation: "Cygnus Gateway",
      metrics: "99.999% SLA Uptime",
      description:
        "Cloud-native micro-service mesh scheduler with automated canary deployment, failover discovery, and cryptographic zero-trust routing.",
      tags: ["Kubernetes", "gRPC", "Envoy", "Terraform", "TypeScript"],
      link: "https://github.com",
      schematic: "EBPF NETWORK FILTER // ZERO-TRUST TLS 1.3 // RAFT CONSENSUS",
    },
  ];

  const [activeProject, setActiveProject] = useState<ProjectItem>(projects[0]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="journey" className="relative py-28 bg-[#001619] overflow-hidden">
      {/* Background Topographic Grids */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#50E8F4_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#50E8F4]/30 bg-[#00252A]/80 text-[#50E8F4] font-geist text-xs tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(80,232,244,0.2)]">
            <Compass className="w-3.5 h-3.5 text-[#50E8F4]" />
            <span>EXPEDITION MAP SECTOR // 02</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#C7F8FE] tracking-tight">
            The Explorer Map Journey
          </h2>

          <p className="font-inter text-base md:text-lg text-[#78A3A8] font-light leading-relaxed">
            Navigate through major engineered outposts. Select any sector card to inspect technical schematics and telemetry metrics.
          </p>
        </div>

        {/* HUD Control Indicator Bar */}
        <div className="bg-[#00252A]/90 border border-[#50E8F4]/30 rounded-2xl p-4 mb-12 flex flex-wrap items-center justify-between gap-4 shadow-[0_0_20px_rgba(80,232,244,0.15)]">
          <div className="flex items-center gap-3 font-geist text-xs text-[#50E8F4]">
            <Layers className="w-4 h-4" />
            <span className="tracking-widest uppercase font-semibold text-[#C7F8FE]">
              JOURNEY VARIANT
            </span>
            <span className="text-[#50E8F4]/40">|</span>
            <span className="text-[#C7F8FE]">
              {projects.findIndex((p) => p.id === activeProject.id) + 1} / {projects.length} — PROJECTS
            </span>
          </div>

          <div className="flex items-center gap-2 font-geist text-xs text-[#78A3A8]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#50E8F4] animate-ping" />
            <span className="text-[#C7F8FE]">{activeProject.constellation}</span>
          </div>
        </div>

        {/* 3D Interactive Project Tarot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project) => {
            const isSelected = activeProject.id === project.id;
            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveProject(project)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-500 relative flex flex-col justify-between overflow-hidden border ${
                  isSelected
                    ? "bg-[#00383F] border-[#50E8F4] shadow-[0_0_30px_rgba(80,232,244,0.35)]"
                    : "bg-[#00252A]/80 border-[#50E8F4]/20 hover:border-[#50E8F4]/50"
                }`}
              >
                {/* Background Constellation Vector Overlay */}
                <div className="absolute top-4 right-4 opacity-10">
                  <project.icon className="w-24 h-24 text-[#50E8F4]" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-geist text-xs font-semibold text-[#50E8F4] tracking-widest uppercase">
                      {project.num}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#50E8F4] shadow-[0_0_8px_#50E8F4]" />
                    )}
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-[#C7F8FE] mb-2">
                    {project.title}
                  </h3>

                  <p className="font-geist text-xs text-[#78A3A8] mb-4">
                    {project.category}
                  </p>

                  <p className="font-inter text-xs text-[#82B2B8] line-clamp-3 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Metric Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#001619] border border-[#50E8F4]/30 text-[#50E8F4] font-geist text-[10px] tracking-wider mb-4">
                    <Zap className="w-3 h-3" />
                    <span>{project.metrics}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-geist bg-[#00252A] text-[#78A3A8] border border-[#50E8F4]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Outpost Schematic Control Panel */}
        <div className="bg-[#00252A] border border-[#50E8F4]/40 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(80,232,244,0.15)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#50E8F4]/20 border border-[#50E8F4]/50 text-[#50E8F4] font-geist text-xs font-semibold tracking-wider">
                  ACTIVE SCHEMATIC
                </span>
                <span className="font-geist text-xs text-[#78A3A8]">
                  {`${activeProject.num} // ${activeProject.category}`}
                </span>
              </div>

              <h3 className="font-playfair text-3xl font-bold text-[#C7F8FE]">
                {activeProject.title}
              </h3>

              <p className="font-inter text-sm text-[#82B2B8] leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#50E8F4] hover:bg-[#C7F8FE] text-[#001619] font-geist text-xs tracking-widest font-bold uppercase transition-all shadow-[0_0_20px_rgba(80,232,244,0.4)]"
              >
                INSPECT SCHEMATICS
              </button>

              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#001619] border border-[#50E8F4]/40 text-[#50E8F4] hover:text-[#C7F8FE] hover:border-[#50E8F4] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Schematic Modal Dialog */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001619]/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#00252A] border border-[#50E8F4]/50 rounded-3xl max-w-2xl w-full p-8 relative shadow-[0_0_50px_rgba(80,232,244,0.3)]"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-[#001619] border border-[#50E8F4]/30 text-[#50E8F4] hover:text-[#C7F8FE]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-geist text-xs font-semibold text-[#50E8F4] tracking-widest uppercase">
                    TECHNICAL SPECIFICATIONS
                  </span>
                  <h3 className="font-playfair text-3xl font-bold text-[#C7F8FE]">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#001619] border border-[#50E8F4]/30 font-geist text-xs text-[#50E8F4]">
                  <code>{activeProject.schematic}</code>
                </div>

                <div className="space-y-3">
                  <h4 className="font-geist text-xs font-semibold text-[#78A3A8] uppercase tracking-wider">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-[#00383F] border border-[#50E8F4]/30 text-[#C7F8FE] font-geist text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#50E8F4] text-[#001619] font-geist text-xs font-bold uppercase"
                  >
                    CLOSE SCHEMATIC
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
