"use client";

import React, { useMemo } from "react";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiGit,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiLinux,
  SiPostman,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function SkillsSection() {
  const languagesAndFrameworks = useMemo(
    () => [
      {
        node: <SiReact />,
        title: "React",
        hoverColor: "#61DAFB",
        href: "https://react.dev",
      },
      {
        node: <SiNextdotjs />,
        title: "Next.js",
        hoverColor: "#FFFFFF",
        href: "https://nextjs.org",
      },
      {
        node: <SiTypescript />,
        title: "TypeScript",
        hoverColor: "#3178C6",
        href: "https://www.typescriptlang.org",
      },
      {
        node: <SiJavascript />,
        title: "JavaScript",
        hoverColor: "#F7DF1E",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        node: <SiCplusplus />,
        title: "C++",
        hoverColor: "#00599C",
        href: "https://isocpp.org",
      },
      {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        hoverColor: "#38BDF8",
        href: "https://tailwindcss.com",
      },
      {
        node: <SiNodedotjs />,
        title: "Node.js",
        hoverColor: "#5FA04E",
        href: "https://nodejs.org",
      },
      {
        node: <SiExpress />,
        title: "Express.js",
        hoverColor: "#F1F0EB",
        href: "https://expressjs.com",
      },
      {
        node: <SiThreedotjs />,
        title: "Three.js",
        hoverColor: "#FFFFFF",
        href: "https://threejs.org",
      },
      {
        node: <SiFramer />,
        title: "Framer Motion",
        hoverColor: "#EC4899",
        href: "https://www.framer.com/motion",
      },
    ],
    []
  );

  const toolsAndInfrastructure = useMemo(
    () => [
      {
        node: <SiGit />,
        title: "Git",
        hoverColor: "#F05032",
        href: "https://git-scm.com",
      },
      {
        node: <SiDocker />,
        title: "Docker",
        hoverColor: "#2496ED",
        href: "https://www.docker.com",
      },
      {
        node: <SiMysql />,
        title: "MySQL",
        hoverColor: "#4479A1",
        href: "https://www.mysql.com",
      },
      {
        node: <SiPostgresql />,
        title: "PostgreSQL",
        hoverColor: "#4169E1",
        href: "https://www.postgresql.org",
      },
      {
        node: <SiMongodb />,
        title: "MongoDB",
        hoverColor: "#47A248",
        href: "https://www.mongodb.com",
      },
      {
        node: <VscVscode />,
        title: "VS Code",
        hoverColor: "#007ACC",
        href: "https://code.visualstudio.com",
      },
      {
        node: <SiLinux />,
        title: "Linux",
        hoverColor: "#FCC624",
        href: "https://www.kernel.org",
      },
      {
        node: <SiPostman />,
        title: "Postman",
        hoverColor: "#FF6C37",
        href: "https://www.postman.com",
      },
      {
        node: <SiVercel />,
        title: "Vercel",
        hoverColor: "#FFFFFF",
        href: "https://vercel.com",
      },
      {
        node: <SiFigma />,
        title: "Figma",
        hoverColor: "#A259FF",
        href: "https://www.figma.com",
      },
    ],
    []
  );

  return (
    <section
      id="skills"
      className="w-full bg-transparent py-24 pl-24 sm:pl-28 md:pl-36 lg:pl-40 xl:pl-44 pr-6 sm:pr-12 md:pr-20 xl:pr-32 scroll-mt-6 overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto w-full mb-12 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#39C3EF]" />
          <span className="font-label-caps text-[#cac6bf] text-xs tracking-[0.25em] uppercase">
            05 // ENGINEERING TOOLKIT
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F1F0EB] uppercase">
          TECH STACK &amp; SKILLS
        </h2>
        <p className="text-[#cac6bf] text-sm sm:text-base max-w-xl">
          Core languages, frameworks, databases, and development tooling. Drag or swipe to slide, hover for details.
        </p>
      </div>

      {/* Dual Infinite Marquees with Interactive LogoLoop */}
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 rounded-2xl border border-white/5 bg-[#0e0e0d]/50 backdrop-blur-sm p-6 sm:p-10 shadow-2xl">
        {/* Row 1: Languages & Frameworks (Leftward Loop) */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#949087] px-2">
            <span>LANGUAGES &amp; FRAMEWORKS</span>
            <span className="hidden sm:inline text-[#cac6bf]/50">DRAG &bull; HOVER BRAND COLORS</span>
          </div>
          <div className="w-full overflow-hidden py-3">
            <LogoLoop
              logos={languagesAndFrameworks}
              speed={65}
              direction="left"
              logoHeight={42}
              gap={54}
              intro={false}
              scaleOnHover
              draggable
              labels="hover"
              ariaLabel="Languages and Frameworks"
            />
          </div>
        </div>

        {/* Divider with subtle glowing line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Row 2: Databases, DevOps & Tooling (Rightward Loop) */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#949087] px-2">
            <span>DATABASES, DEVOPS &amp; TOOLING</span>
            <span className="hidden sm:inline text-[#cac6bf]/50">SWIPE &bull; INTERACTIVE LINKS</span>
          </div>
          <div className="w-full overflow-hidden py-3">
            <LogoLoop
              logos={toolsAndInfrastructure}
              speed={60}
              direction="right"
              logoHeight={42}
              gap={54}
              intro={false}
              scaleOnHover
              draggable
              labels="hover"
              ariaLabel="Databases, DevOps and Tooling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
