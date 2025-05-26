"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ManageIt",
    description:
      "A budget app using the 50/30/20 rule to manage income and track expenses. Users can monitor their spending through a simple dashboard with needs, wants, and savings categories.",
    image: "/images/manageit.png",
    techStack: ["Next.js", "Nest.js", "MongoDB", "Docker"],
    githubLink: "https://github.com/peterdev123/manageit",
    demoLink: "https://www.youtube.com/watch?v=hj87vkmK4jk",
    liveLink: "https://manageit-117g.vercel.app",
  },
  {
    title: "GitJob",
    description:
      "Your ultimate job portal connecting job seekers and employers. Discover and apply to jobs, and connect with companies.",
    image: "/images/gitjob.png",
    techStack: ["Django", "Python", "PostgreSQL"],
    githubLink: "https://github.com/peterdev123/gitjob",
    demoLink: "https://www.youtube.com/watch?v=vwxJNfW09w8",
  },
  {
    title: "Exiled",
    description:
      "A Top-down Shooter Game inspired by Brotato and Vampire Survivors. Survive waves of enemies and level up your character to face new challenges.",
    image: "/images/exiled.png",
    techStack: ["Java", "LibGDX", "MySQL"],
    githubLink: "https://github.com/peterdev123/exiled-oop-project",
    demoLink: "https://www.youtube.com/watch?v=-2az27OirAM&t=16s",
  },
  {
    title: "OnlyFit",
    description:
      "A fitness gym app cater to users who want to focus on their health and wellness. Users can manage their workout routines, track their progress, and reach their goals and objectives.",
    image: "/images/OnlyFit.png",
    techStack: ["PHP", "HTML/CSS", "MySQL"],
    githubLink: "https://github.com/peterdev123/onlyfit-sql",
    demoLink: "N/A",
  },
  {
    title: "TreeTrace",
    description:
      "TreeTrace is a web-based family tree platform that enables users to build, manage, and visualize their family history interactively.",
    image: "/images/TreeTrace.png",
    techStack: ["Next.js", "Nest.js", "Typescript", "MongoDB"],
    githubLink: "https://github.com/ZenXen7/TreeTrace",
    demoLink: "https://www.youtube.com/watch?v=yvPGpf0bSUc&t=1s",
  },
  {
    title: "Food Detective 3000",
    description:
      "A food recognition app that uses AI to classify food items from images. Food classification is done using a pre-trained ResNet50 model.",
    image: "/images/foodDetective.png",
    techStack: ["Python", "Flask", "TensorFlow"],
    githubLink: "https://github.com/peterdev123/food_detective",
    demoLink: "https://www.youtube.com/watch?v=fooddetective-demo",
    liveLink: "https://food-detective.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section className="py-16 lg:py-24 w-full relative overflow-hidden bg-transparent" id="projects">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-30 pointer-events-none" />
      <div className="w-full px-4 sm:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 mb-2 text-center">
          Projects
        </h2>
        <p className="text-[#ADB7BE] text-lg mb-12 text-center max-w-2xl mx-auto">
          A showcase of my favorite projects, each crafted with passion and a focus on solving real-world problems. Explore the code, try the demos, and see what I've built!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl shadow-lg shadow-emerald-500/10 border border-emerald-500/10 hover:border-emerald-400 hover:shadow-emerald-400/20 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-[#101c24] flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 to-transparent z-10" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#ADB7BE] mb-4 text-base leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium hover:bg-emerald-500/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  >
                    <FaGithub size={24} />
                  </a>
                  {project.demoLink !== "N/A" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
                    >
                      Demo <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
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
