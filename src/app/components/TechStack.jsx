"use client";
import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaDocker, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiNestjs, SiDjango, SiMongodb, SiPostgresql, SiTailwindcss, SiCplusplus, SiC, SiTypescript, SiRuby, SiMysql, SiGit, SiPostman, SiInsomnia, SiVisualstudiocode } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const techs = [
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <TbBrandJavascript className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#000000]" /> },
  { name: "Nest.js", icon: <SiNestjs className="text-[#E0234E]" /> },
  { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
  { name: "Ruby", icon: <SiRuby className="text-[#CC342D]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
  { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Insomnia", icon: <SiInsomnia className="text-[#4000BF]" /> },
];

const mainTechs = techs.slice(0, techs.length - 4);
const bottomTechs = techs.slice(-4);

const TechStack = () => {
  return (
    <section className="py-8 w-full relative overflow-hidden bg-transparent" id="tech">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-30 pointer-events-none" />
      <div className="w-full px-4 sm:px-8 relative z-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 mb-2 text-center">
          Tech Stack
        </h2>
        <p className="text-[#ADB7BE] text-lg mb-6 text-center max-w-2xl mx-auto">
          The tools and technologies I use most often.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
          {mainTechs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white/5 backdrop-blur-md shadow-lg shadow-emerald-500/10 border border-emerald-500/10 hover:border-emerald-400 hover:shadow-emerald-400/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300">
                {tech.icon}
              </div>
              <span className="text-[#ADB7BE] group-hover:text-emerald-400 font-medium text-xs text-center transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-6">
          {bottomTechs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white/5 backdrop-blur-md shadow-lg shadow-emerald-500/10 border border-emerald-500/10 hover:border-emerald-400 hover:shadow-emerald-400/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300">
                {tech.icon}
              </div>
              <span className="text-[#ADB7BE] group-hover:text-emerald-400 font-medium text-xs text-center transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;