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
    title: "TreeTrace",
    description:
      "TreeTrace is a web-based family tree platform that enables users to build, manage, and visualize their family history interactively.",
    image: "/images/TreeTrace.png",
    techStack: ["Next.js", "Nest.js", "Typescript", "MongoDB"],
    githubLink: "https://github.com/ZenXen7/TreeTrace",
    demoLink: "https://www.youtube.com/watch?v=yvPGpf0bSUc&t=1s",
    liveLink: "https://tree-trace-rzni.vercel.app",
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
];

const Projects = () => {
  return (
    <section className="py-16 lg:py-24 w-full bg-white" id="projects">
      <div className="w-full px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 border-b-4 border-black pb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-3">
              Projects
            </h2>
            <p className="text-lg text-gray-700 max-w-1xl">
              Collection of projects that I made for my college classes and for my own personal use.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-4 border-black bg-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Section - 7 columns */}
                  <div className="lg:col-span-7 relative aspect-[16/10] bg-white border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden p-3">
                    <div className="relative w-full h-full bg-gray-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={index < 3}
                      />
                    </div>
                  </div>

                  {/* Content Section - 5 columns */}
                  <div className="lg:col-span-5 p-5 flex flex-col bg-white">
                    {/* Project Number and Title */}
                    <div className="text-emerald-600 text-xs font-semibold mb-1 tracking-wider">
                      PROJECT {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2 uppercase">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-3 mt-auto">
                      <div className="text-xs font-semibold text-black mb-2 tracking-wider uppercase">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black text-white text-xs font-semibold uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-3 bg-white border-3 border-black text-black text-xs font-semibold uppercase flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <FaGithub size={18} />
                          View Repository
                        </span>
                        <FaExternalLinkAlt size={12} />
                      </a>
                      {project.demoLink !== "N/A" && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-3 bg-emerald-500 border-3 border-black text-white text-xs font-semibold uppercase flex items-center justify-between"
                        >
                          <span>Watch Demo</span>
                          <FaExternalLinkAlt size={12} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-3 bg-black text-white text-xs font-semibold uppercase flex items-center justify-between"
                        >
                          <span>Visit Live Site</span>
                          <FaExternalLinkAlt size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
