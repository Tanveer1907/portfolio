"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 75%"],
  });

  const lineScaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 28 });

  const milestones = [
    {
      num: "01",
      period: "FOUNDATIONS",
      title: "Computer Science Education",
      subtitle: "B.Tech Computer Science & Engineering",
      detail:
        "Building core computer science knowledge: algorithms, data structures, object-oriented design, and computing principles.",
    },
    {
      num: "02",
      period: "EXPLORATION",
      title: "Discovering Web Technologies",
      subtitle: "Frontend Architecture & JavaScript",
      detail:
        "Transitioned from initial static sites to modular JavaScript and component-driven UI paradigms with React and CSS tooling.",
    },
    {
      num: "03",
      period: "PRACTICE",
      title: "Full-Stack Project Development",
      subtitle: "Next.js, Node.js & Database Systems",
      detail:
        "Engineered full-stack applications like HackConnect and Chitkara Diaries, focusing on real-time features, state management, and user interaction.",
    },
    {
      num: "04",
      period: "CURRENT FOCUS",
      title: "Systems & Production Quality",
      subtitle: "Clean Code & Modern Software Engineering",
      detail:
        "Focusing on scalable software design, API performance, developer tooling, and building thoughtful digital products.",
    },
  ];

  return (
    <section ref={sectionRef} id="journey" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#F1EDE3]/12">
      <div className="max-w-3xl mb-16 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-geist font-medium tracking-widest text-[#A6A197]">
          <span className="text-[#C86B4A]">02 // THE JOURNEY</span>
          <span className="opacity-60">[ LOG REF 02 ]</span>
        </div>
        <h2 className="font-playfair text-4xl sm:text-5xl font-medium text-[#F1EDE3] tracking-tight">
          Growth &amp; Milestones
        </h2>
        <p className="font-inter text-base text-[#A6A197] font-light leading-relaxed">
          Tracing the natural progression from core computer science fundamentals to building full-stack web applications.
        </p>
      </div>

      {/* Progressively Scroll-Drawn Timeline Vector */}
      <div className="relative pl-6 sm:pl-8 space-y-14 max-w-4xl">
        {/* Static Track Line */}
        <div className="absolute left-[3px] sm:left-[3px] top-3 bottom-3 w-[1px] bg-[#F1EDE3]/12" />

        {/* Scroll-Drawn Active Vector Line */}
        <motion.div
          style={{ scaleY: lineScaleY, transformOrigin: "top" }}
          className="absolute left-[3px] sm:left-[3px] top-3 bottom-3 w-[2px] bg-[#C86B4A]"
        />

        {milestones.map((m, idx) => {
          return (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="relative space-y-2 group pl-4"
            >
              {/* Interactive Milestone Dot */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#11110F] border-2 border-[#A6A197] group-hover:border-[#C86B4A] transition-colors" />

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-geist text-[10px] font-semibold tracking-widest uppercase text-[#F1EDE3] px-2.5 py-0.5 rounded bg-[#181815] border border-[#F1EDE3]/12">
                  {m.num} :: {m.period}
                </span>
                <span className="font-geist text-xs text-[#A6A197]">
                  {m.subtitle}
                </span>
              </div>

              <h3 className="font-playfair text-2xl font-medium text-[#F1EDE3]">
                {m.title}
              </h3>

              <p className="font-inter text-sm text-[#A6A197] font-light leading-relaxed max-w-2xl">
                {m.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
