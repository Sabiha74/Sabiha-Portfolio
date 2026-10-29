"use client";

import React from "react";
import Link from "next/link";
import { FolderGit2, ArrowRight, Sparkles } from "lucide-react";
import { projectCandidates } from "@/data/portfolioData";
import { ProjectThumbnail } from "./ProjectThumbnail";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-20 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/50 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Selected projects demonstrating modern React component composition, Next.js App Router conventions, and responsive web architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectCandidates.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Whole card clickable overlay link */}
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                aria-label={`View project details for ${project.title}`}
              >
                <span className="sr-only">View project details for {project.title}</span>
              </Link>

              {/* Project Image / Visual Placeholder */}
              <div className="relative overflow-hidden">
                <ProjectThumbnail id={project.id} title={project.title} size="card" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3 z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-900/90 text-blue-300 border border-blue-500/30 backdrop-blur-xs shadow-sm">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Action Button */}
                  <div className="relative z-20">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white border border-blue-200/60 dark:border-blue-800/60 transition-all duration-200 shadow-xs min-h-[44px]"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
