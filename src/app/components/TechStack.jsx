"use client";
import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaDocker, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiNestjs, SiDjango, SiMongodb, SiPostgresql, SiTailwindcss, SiCplusplus, SiC, SiTypescript, SiRuby, SiMysql, SiGit } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const TechStack = () => {
  const technologies = {
    "Frontend Frameworks": [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ],
    "Backend Frameworks": [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Nest.js", icon: <SiNestjs className="text-[#E0234E]" /> },
      { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
      { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    ],
    "Databases": [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    ],
    "Programming Languages": [
      { name: "JavaScript", icon: <TbBrandJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "Ruby", icon: <SiRuby className="text-[#CC342D]" /> },
    ],
    "Tools": [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    ],
  };

  return (
    <section className="py-16 lg:py-24" id="tech">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Tech Stack</h2>
        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-[#1E293B]/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-4">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#1E293B] hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    <div className="text-4xl">{tech.icon}</div>
                    <span className="text-[#ADB7BE]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;