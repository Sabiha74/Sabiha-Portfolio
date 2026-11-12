"use client";

import React from "react";
import Link from "next/link";
import { FolderGit2, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { projectCandidates } from "@/data/portfolioData";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { GithubIcon } from "./Icons";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-20 sm:py-24 bg-[#FAF7FF]/50 dark:bg-[#171323]/50 border-y border-[#E2D9F3] dark:border-[#342B49] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-lavender-600 dark:text-lavender-300 bg-lavender-100 dark:bg-lavender-950/60 border border-lavender-200 dark:border-lavender-500/30 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C152B] dark:text-[#F4F0FC]">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6C5F82] dark:text-[#B9B0CC]">
            Real-world full-stack and frontend applications built with Next.js, React, TypeScript, Tailwind CSS, and MongoDB.
          </p>
        </div>

        {/* Responsive Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectCandidates.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm hover:border-lavender-400/60 dark:hover:border-lavender-400/60 hover:shadow-xl hover:shadow-lavender-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
              aria-label={`View project details for ${project.title}`}
            >
              {/* Project Preview Visual */}
              <div className="relative overflow-hidden">
                <ProjectThumbnail id={project.id} title={project.title} size="card" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#100D18]/90 text-lavender-300 border border-lavender-400/30 backdrop-blur-xs shadow-sm">
                    <Sparkles className="w-3 h-3 text-lavender-400" />
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1C152B] dark:text-[#F4F0FC] group-hover:text-lavender-600 dark:group-hover:text-lavender-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#6C5F82] dark:text-[#B9B0CC] font-medium">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm text-[#4A3E60] dark:text-[#D4CCE5] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2D9F3]/60 dark:border-[#342B49]/80">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[#F4EFFE] dark:bg-[#171323] text-[#4A3E60] dark:text-lavender-200 border border-[#E2D9F3] dark:border-[#342B49]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F4EFFE] dark:bg-[#171323] text-lavender-600 dark:text-lavender-300 border border-[#E2D9F3] dark:border-[#342B49]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* View Details Visual Action */}
                  <div className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-lavender-700 dark:text-lavender-300 bg-lavender-100 dark:bg-[#171323] border border-lavender-200 dark:border-lavender-400/30 group-hover:bg-lavender-600 group-hover:text-white dark:group-hover:bg-lavender-500 dark:group-hover:text-white transition-all duration-200 shadow-xs min-h-[44px]">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
