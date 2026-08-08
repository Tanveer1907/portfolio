"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Code2, CheckCircle2 } from "lucide-react";
import AccordionGallery, { AccordionItem } from "@/components/ui/AccordionGallery";

export interface SkillCategory {
  id: string;
  image: string;
  label: string;
  subtitle: string;
  description: string;
  proficiency: number;
  tools: string[];
  codeSnippet: string;
}

export default function SkillsOutpostCheckpoint() {
  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      image: "/stitch_screens/screen1_landing.png",
      label: "Frontend Arsenal",
      subtitle: "UI & Interactive Engineering",
      description: "Building ultra-responsive, cinematic web interfaces with modern React, Next.js App Router, GSAP motion, and Three.js 3D acceleration.",
      proficiency: 96,
      tools: ["React 19", "Next.js 15", "TypeScript", "TailwindCSS v4", "GSAP", "Framer Motion", "Three.js"],
      codeSnippet: `// High-Performance Motion Pipeline
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.to(panelRef, { flexGrow: grow, rotateY: 0, duration: 0.6 })
  .to(mediaRef, { filter: "grayscale(0%)", scale: 1.05 }, 0);`,
    },
    {
      id: "backend",
      image: "/stitch_screens/screen2_map_journey.png",
      label: "Backend & Systems",
      subtitle: "Distributed Microservices & APIs",
      description: "Architecting concurrent microservices, gRPC protocol buffers, low-latency Rust/Go workloads, and ACID-compliant relational & key-value storage.",
      proficiency: 94,
      tools: ["Rust", "Go", "Node.js", "gRPC", "PostgreSQL", "Redis", "GraphQL"],
      codeSnippet: `// Async Concurrent Worker Pool in Rust
pub async fn dispatch_workload(tasks: Vec<Task>) -> Result<Metrics> {
    let pool = ThreadPool::builder().max_threads(32).build()?;
    let (tx, mut rx) = tokio::sync::mpsc::channel(100);
    // Concurrent execution stream...
}`,
    },
    {
      id: "ai-ml",
      image: "/stitch_screens/screen3_skills_checkpoint.png",
      label: "AI & ML Systems",
      subtitle: "Deep Learning & Computer Vision",
      description: "Developing custom PyTorch neural models, vector similarity search indexed in Milvus/Qdrant, and TensorRT optimized real-time edge inference.",
      proficiency: 91,
      tools: ["PyTorch", "CUDA", "TensorFlow", "FastAPI", "Qdrant", "OpenCV", "Transformers"],
      codeSnippet: `// PyTorch Multi-Modal Vector Embedder
class VisionEncoder(nn.Module):
    def __init__(self, embed_dim=768):
        super().__init__()
        self.backbone = timm.create_model('convnext_base', pretrained=True)
        self.proj = nn.Linear(1024, embed_dim)`,
    },
    {
      id: "cloud",
      image: "/stitch_screens/screen1_landing.png",
      label: "Cloud & Infrastructure",
      subtitle: "DevOps & Container Orchestration",
      description: "Automating cloud provision through Terraform, Kubernetes ingress controllers, zero-downtime CI/CD workflows, and eBPF network observability.",
      proficiency: 93,
      tools: ["Kubernetes", "Docker", "AWS", "GCP", "Terraform", "GitHub Actions", "Helm"],
      codeSnippet: `# Kubernetes Production Deployment Spec
apiVersion: apps/v1
kind: Deployment
metadata:
  name: outpost-ingress-mesh
spec:
  replicas: 5
  strategy:
    type: RollingUpdate`,
    },
    {
      id: "data",
      image: "/stitch_screens/screen2_map_journey.png",
      label: "Data Engineering",
      subtitle: "Real-Time Telemetry & Pipelines",
      description: "Designing fault-tolerant streaming pipelines using Apache Kafka, ClickHouse analytics databases, BigQuery ELT, and dbt transformations.",
      proficiency: 90,
      tools: ["Apache Beam", "Kafka", "ClickHouse", "BigQuery", "dbt", "Apache Spark"],
      codeSnippet: `// Streaming Telemetry Aggregator
CREATE MATERIALIZED VIEW telemetry_1m_mv
ENGINE = AggregatingMergeTree()
PRIMARY KEY (sensor_id, window_start)
AS SELECT sensor_id, toStartOfMinute(timestamp) AS window_start, avgState(val)`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSkill = skillCategories[activeIndex];

  const galleryItems: AccordionItem[] = skillCategories.map((cat) => ({
    image: cat.image,
    label: cat.label,
    alt: cat.label,
  }));

  return (
    <section id="skills" className="relative py-28 bg-[#001619]/80 backdrop-blur-sm overflow-hidden border-t border-[#50E8F4]/20">
      {/* Background Topographic Grids */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#50E8F4_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#50E8F4]/30 bg-[#00252A]/80 text-[#50E8F4] font-geist text-xs tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(80,232,244,0.2)]">
            <Compass className="w-3.5 h-3.5 text-[#50E8F4]" />
            <span>TECHNICAL ARSENAL // SECTOR 03</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#C7F8FE] tracking-tight">
            The Skills Outpost Checkpoint
          </h2>

          <p className="font-inter text-base md:text-lg text-[#78A3A8] font-light leading-relaxed">
            Explore technical proficiencies, language capabilities, and system toolkits across key engineering domains.
          </p>
        </div>

        {/* React Bits AccordionGallery Component */}
        <div className="mb-12">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={0}
            accentColor="#50E8F4"
            overlayColor="#001619"
            textColor="#C7F8FE"
            height={440}
            gap={12}
            radius={20}
            expandRatio={0.5}
            trigger="hover"
            showLabels={true}
            grayscale={true}
            onPanelChange={(idx) => setActiveIndex(idx)}
          />
        </div>

        {/* Active Outpost Inspection Drawer */}
        <motion.div
          key={activeSkill.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#00252A] border border-[#50E8F4]/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(80,232,244,0.15)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Skill Overview & Tools */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#50E8F4]/20 border border-[#50E8F4]/50 text-[#50E8F4] font-geist text-xs font-semibold tracking-wider uppercase">
                    {activeSkill.subtitle}
                  </span>
                  <span className="font-geist text-xs text-[#78A3A8]">
                    PROFICIENCY: {activeSkill.proficiency}%
                  </span>
                </div>

                <h3 className="font-playfair text-3xl font-bold text-[#C7F8FE]">
                  {activeSkill.label}
                </h3>
              </div>

              <p className="font-inter text-sm text-[#82B2B8] leading-relaxed">
                {activeSkill.description}
              </p>

              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex justify-between font-geist text-xs text-[#78A3A8]">
                  <span>DOMAIN MASTERY METRIC</span>
                  <span className="text-[#50E8F4] font-semibold">{activeSkill.proficiency}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#001619] border border-[#50E8F4]/20 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeSkill.proficiency}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-[#50E8F4] shadow-[0_0_12px_#50E8F4]"
                  />
                </div>
              </div>

              {/* Tools Badges */}
              <div className="space-y-3 pt-2">
                <h4 className="font-geist text-xs font-semibold text-[#78A3A8] uppercase tracking-wider">
                  TECHNOLOGY &amp; TOOLING ARSENAL
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeSkill.tools.map((tool) => (
                    <div
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#001619] border border-[#50E8F4]/30 text-[#C7F8FE] font-geist text-xs shadow-[0_0_10px_rgba(80,232,244,0.1)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#50E8F4]" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="lg:col-span-5 bg-[#001619] border border-[#50E8F4]/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#50E8F4]/20 font-geist text-xs text-[#50E8F4]">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-semibold tracking-wider">SYSTEM SCHEMATIC CODE</span>
                </div>
                <span className="text-[#78A3A8] text-[10px]">VERIFIED</span>
              </div>

              <pre className="font-geist text-xs text-[#C7F8FE]/90 overflow-x-auto leading-relaxed">
                <code>{activeSkill.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
