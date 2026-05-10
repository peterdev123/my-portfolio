"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const projects = [
  {
    title: "TreeTrace",
    description:
      "TreeTrace is a web-based family tree platform that enables users to build, manage, and visualize their family history interactively.",
    image: "/images/TreeTrace.png",
    techStack: ["Next.js", "Nest.js", "Typescript", "MongoDB"],
    githubLink: "https://github.com/ZenXen7/TreeTrace",
    demoLink: "https://www.youtube.com/watch?v=yvPGpf0bSUc&t=1s",
    liveLink: "https://ancestree.onrender.com",
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
    title: "SoleSentinel",
    description:
      "As the last member of three ancient powerful Filipino tribes, you bear the sole responsibility to protect the Philippine Islands from enemies from a dimension of nightmares and madness. Bearing alone the enormous responsibility to wield the three sacred tribal Masks inherited from the three fallen tribes, you obtain the necessary power to drive the Masked Nightmare King and his minions away.",
    image: "/images/SoleSentinel.png",
    techStack: ["Godot", "GDScript"],
    githubLink: "https://github.com/Requiem53/mask_game",
    liveLink: "https://requiem53.itch.io/sole-sentinel",
    liveLinkLabel: "Play",
  },
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
];

function hasDemo(project) {
  return (
    project.demoLink &&
    project.demoLink !== "N/A" &&
    project.demoLink.startsWith("http")
  );
}

const linkBase =
  "inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const Projects = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16 lg:py-24"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative z-10 w-full px-4 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 lg:mb-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 lg:text-5xl"
            >
              Projects
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              Collection of projects from coursework and personal builds—web
              apps, games, and tools I shipped end to end.
            </p>
          </header>

          <div className="flex flex-col gap-10 lg:gap-12">
            {projects.map((project, index) => {
              const reversed = index % 2 === 1;
              return (
                <article
                  key={project.title}
                  className="group border border-slate-700/80 bg-slate-900/40 shadow-lg shadow-black/20 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-emerald-500/35 hover:shadow-emerald-950/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-0">
                    <div
                      className={[
                        "relative aspect-[16/10] overflow-hidden bg-slate-950/50 p-3 sm:p-4 lg:aspect-auto lg:min-h-[280px]",
                        "border-b border-slate-700/80 lg:border-b-0",
                        reversed
                          ? "lg:col-span-7 lg:col-start-6 lg:border-l lg:border-slate-700/80"
                          : "lg:col-span-7 lg:border-r lg:border-slate-700/80",
                      ].join(" ")}
                    >
                      <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-sm bg-slate-800/40 ring-1 ring-slate-700/50 lg:min-h-[248px]">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          priority={index < 3}
                        />
                      </div>
                    </div>

                    <div
                      className={[
                        "flex flex-col justify-center p-5 sm:p-6 lg:p-8",
                        reversed
                          ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                          : "lg:col-span-5 lg:col-start-8",
                        "lg:row-start-1",
                      ].join(" ")}
                    >
                      <div className="mb-1 text-xs font-semibold tracking-wider text-emerald-400/90">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold uppercase tracking-tight text-white lg:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-base leading-relaxed text-slate-300 lg:text-[1.05rem]">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Tech stack
                        </div>
                        <ul className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <li key={tech}>
                              <span className="inline-block border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                                {tech}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${linkBase} flex-1 border-slate-600 bg-slate-800/50 text-white hover:border-emerald-500/50 hover:bg-slate-800`}
                        >
                          <FaGithub className="shrink-0" size={18} />
                          Code
                          <FaExternalLinkAlt
                            className="ml-auto shrink-0 opacity-60 sm:ml-0"
                            size={12}
                            aria-hidden
                          />
                        </a>
                        {hasDemo(project) && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkBase} flex-1 border-emerald-600/60 bg-emerald-600/15 text-emerald-100 hover:bg-emerald-600/25`}
                          >
                            <FaYoutube className="shrink-0" size={18} />
                            Demo
                            <FaExternalLinkAlt
                              className="ml-auto shrink-0 opacity-70 sm:ml-0"
                              size={12}
                              aria-hidden
                            />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkBase} flex-1 border-slate-800 bg-emerald-500 text-slate-950 hover:bg-emerald-400`}
                          >
                            {project.liveLinkLabel ?? "Live"}
                            <FaExternalLinkAlt
                              className="ml-auto shrink-0 opacity-80 sm:ml-0"
                              size={12}
                              aria-hidden
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
