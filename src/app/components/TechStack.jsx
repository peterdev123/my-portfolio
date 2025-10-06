"use client";
import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiCplusplus, SiMysql, SiTypescript, SiInsomnia, SiFlask, SiDotnet } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const techCategories = [
  {
    category: "Frontend",
    techs: [
      { name: "HTML", icon: <FaHtml5 size={36} /> },
      { name: "CSS", icon: <FaCss3Alt size={36} /> },
      { name: "JavaScript", icon: <TbBrandJavascript size={36} /> },
      { name: "TypeScript", icon: <SiTypescript size={36} /> },
      { name: "React", icon: <FaReact size={36} /> },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: <FaNodeJs size={36} /> },
      { name: "PHP", icon: <FaPhp size={36} /> },
      { name: "ASP.NET", icon: <SiDotnet size={36} /> },
      { name: "Flask", icon: <SiFlask size={36} /> },
    ],
  },
  {
    category: "System Languages",
    techs: [
      { name: "C", icon: <span className="text-3xl font-black">C</span> },
      { name: "C++", icon: <SiCplusplus size={36} /> },
      { name: "C#", icon: <span className="text-3xl font-black">C#</span> },
      { name: "Java", icon: <FaJava size={36} /> },
      { name: "Python", icon: <FaPython size={36} /> },
    ],
  },
  {
    category: "Databases",
    techs: [
      { name: "MongoDB", icon: <SiMongodb size={36} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={36} /> },
      { name: "MySQL", icon: <SiMysql size={36} /> },
    ],
  },
  {
    category: "DevOps & Tools",
    techs: [
      { name: "Docker", icon: <FaDocker size={36} /> },
      { name: "Git", icon: <FaGitAlt size={36} /> },
      { name: "Insomnia", icon: <SiInsomnia size={36} /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="py-16 lg:py-24 w-full relative overflow-hidden" id="tech">
      <div className="w-full px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-3">
              Tech Stack
            </h2>
            <p className="text-lg text-slate-300">
              Technologies and tools I work with across different domains.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, idx) => (
              <div
                key={idx}
                className="border-2 border-slate-700 bg-slate-900/50 p-6"
              >
                <h3 className="text-sm font-semibold text-emerald-400 mb-5 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.techs.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      className="flex items-center gap-4 p-3 border border-slate-700 bg-slate-800/30"
                    >
                      <div className="text-emerald-400">
                        {tech.icon}
                      </div>
                      <span className="text-white font-semibold text-base">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;