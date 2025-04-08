"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ManageIt",
      description:
        "A budget app using the 50/30/20 rule to manage income and track expenses. Users can monitor their spending through a simple dashboard with needs, wants, and savings categories.",
      image: "/images/manageit.png",
      techStack: ["Next.js", "Nest.js", "MongoDB", "Docker"],
      githubLink: "https://github.com/peterdev123/manageit",
    },
    {
      title: "GitJob",
      description:
        "Your ultimate job portal connecting job seekers and employers. Discover and apply to jobs, and connect with companies.",
      image: "/images/gitjob.png",
      techStack: ["Django", "Python", "PostgreSQL"],
      githubLink: "https://github.com/peterdev123/gitjob",
    },
    {
      title: "Exiled",
      description:
        "A Top-down Shooter Game inspired by Brotato and Vampire Survivors. Survive waves of enemies and level up your character to face new challenges.",
      image: "/images/exiled.png",
      techStack: ["Java", "LibGDX", "MySQL"],
      githubLink: "https://github.com/peterdev123/exiled-oop-project",
    },
    {
      title: "OnlyFit",
      description:
        "A fitness gym app cater to users who want to focus on their health and wellness. Users can manage their workout routines, track their progress, and reach their goals and objectives.",
      image: "/images/OnlyFit.png",
      techStack: ["PHP", "HTML/CSS", "MySQL"],
      githubLink: "https://github.com/peterdev123/onlyfit-sql",
    },
  ];

  return (
    <section className="py-16 lg:py-24" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1E293B]/50 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[#ADB7BE] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  {project.title === "ManageIt" && (
                    <a
                      href="https://manageit-117g.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full hover:scale-105 transition-all duration-200 flex items-center gap-2"
                    >
                      Live Site <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
