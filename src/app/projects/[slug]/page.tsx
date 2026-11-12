import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  CheckCircle2,
  Sparkles,
  Target,
  Wrench,
  UserCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectCandidates, personalInfo } from "@/data/portfolioData";
import { ProjectThumbnail } from "@/components/ProjectThumbnail";
import { GithubIcon } from "@/components/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectCandidates.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCandidates.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${project.tagline} | ${personalInfo.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const currentIndex = projectCandidates.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectCandidates[currentIndex];
  const prevProject = currentIndex > 0 ? projectCandidates[currentIndex - 1] : null;
  const nextProject = currentIndex < projectCandidates.length - 1 ? projectCandidates[currentIndex + 1] : null;

  return (
    <main className="min-h-screen py-10 sm:py-16 bg-[#FCFAFF] dark:bg-[#100D18] text-[#1C152B] dark:text-[#F4F0FC] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back to Projects */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C5F82] dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-300 group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-lavender-100 dark:bg-lavender-950/60 text-lavender-700 dark:text-lavender-300 border border-lavender-200 dark:border-lavender-500/30">
              <Sparkles className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
              <span>{project.status}</span>
            </span>
            <span className="text-xs text-[#6C5F82] dark:text-[#B9B0CC] font-mono">
              /projects/{project.slug}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C152B] dark:text-[#F4F0FC]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#6C5F82] dark:text-[#B9B0CC] leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </div>

        {/* Project Preview Banner */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-[#E2D9F3] dark:border-[#342B49] shadow-xl">
          <ProjectThumbnail id={project.id} title={project.title} size="hero" />
        </div>

        {/* Action Bar: Prominent Live Demo & GitHub Buttons */}
        <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Tech Badges Preview */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#6C5F82] dark:text-[#B9B0CC] mr-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
              Stack:
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-lavender-50 dark:bg-[#171323] text-lavender-700 dark:text-lavender-300 border border-lavender-200/60 dark:border-[#342B49]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Prominent Live Demo & GitHub Repository Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-lavender-600 hover:bg-lavender-500 active:scale-95 transition-all shadow-md shadow-lavender-600/20 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#1C152B] dark:text-[#F4F0FC] bg-[#F4EFFE] dark:bg-[#171323] hover:bg-[#EAE2FD] dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] active:scale-95 transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description, Features, Role, Challenges (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Project Overview & Purpose */}
            <section
              aria-labelledby="section-overview"
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm space-y-4"
            >
              <h2
                id="section-overview"
                className="text-xl sm:text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC] flex items-center gap-2.5"
              >
                <Target className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />
                <span>Project Description &amp; Purpose</span>
              </h2>

              <p className="text-base text-[#4A3E60] dark:text-[#D4CCE5] leading-relaxed">
                {project.description}
              </p>

              <div className="p-4 rounded-xl bg-[#FAF7FF] dark:bg-[#171323] border border-[#E2D9F3] dark:border-[#342B49]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#6C5F82] dark:text-[#B9B0CC] mb-1">
                  Core Purpose
                </h3>
                <p className="text-sm text-[#1C152B] dark:text-[#F4F0FC] font-medium leading-relaxed">
                  {project.purpose}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section
              aria-labelledby="section-features"
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm space-y-4"
            >
              <h2
                id="section-features"
                className="text-xl sm:text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC] flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Features</span>
              </h2>

              <ul className="space-y-3 text-sm sm:text-base text-[#4A3E60] dark:text-[#D4CCE5]" role="list">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7FF] dark:bg-[#171323] border border-[#E2D9F3]/80 dark:border-[#342B49]">
                    <CheckCircle2 className="w-4 h-4 text-lavender-500 dark:text-lavender-400 shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* My Role & Contributions */}
            <section
              aria-labelledby="section-role"
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm space-y-4"
            >
              <h2
                id="section-role"
                className="text-xl sm:text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC] flex items-center gap-2.5"
              >
                <UserCheck className="w-5 h-5 text-lavender-500 dark:text-lavender-400" />
                <span>My Role &amp; Contributions</span>
              </h2>

              <ul className="space-y-2.5 text-sm sm:text-base text-[#4A3E60] dark:text-[#D4CCE5]" role="list">
                {project.roleAndContributions.map((contribution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-lavender-500 mt-2 shrink-0" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges Faced and How I Solved Them */}
            <section
              aria-labelledby="section-challenges"
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm space-y-5"
            >
              <h2
                id="section-challenges"
                className="text-xl sm:text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC] flex items-center gap-2.5"
              >
                <Wrench className="w-5 h-5 text-amber-400" />
                <span>Challenges Faced &amp; Solutions</span>
              </h2>

              <div className="space-y-4">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#FAF7FF] dark:bg-[#171323] border border-[#E2D9F3] dark:border-[#342B49] space-y-3"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-300">
                        Challenge #{idx + 1}:
                      </span>
                      <p className="mt-1 text-sm font-semibold text-[#1C152B] dark:text-[#F4F0FC]">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E2D9F3] dark:border-[#342B49]/80">
                      <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
                        How I Solved It:
                      </span>
                      <p className="mt-1 text-sm text-[#4A3E60] dark:text-[#D4CCE5] leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Tech Badges, Future Improvements, Learning Outcomes (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Badges Sidebar Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm">
              <h3 className="font-bold text-[#1C152B] dark:text-[#F4F0FC] text-base flex items-center gap-2">
                <Layers className="w-4 h-4 text-lavender-500 dark:text-lavender-400" />
                <span>Technologies Used</span>
              </h3>
              <p className="text-xs text-[#6C5F82] dark:text-[#B9B0CC] mt-1">
                Core frameworks, styling tools, and database systems.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF7FF] dark:bg-[#171323] text-[#1C152B] dark:text-lavender-200 border border-[#E2D9F3] dark:border-[#342B49]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Live Link Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-lavender-500/10 via-[#1E1930] to-[#171323] border border-lavender-400/30 shadow-sm space-y-4">
              <h3 className="font-bold text-[#1C152B] dark:text-[#F4F0FC] text-base">
                Try the Live Application
              </h3>
              <p className="text-xs text-[#6C5F82] dark:text-[#B9B0CC] leading-relaxed">
                Test the deployed user interface and experience real features in your browser.
              </p>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-lavender-600 hover:bg-lavender-500 transition-all shadow-md shadow-lavender-600/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch {project.title}</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#1C152B] dark:text-[#F4F0FC] bg-white dark:bg-[#171323] hover:bg-[#F4EFFE] dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source on GitHub</span>
                </a>
              )}
            </div>

            {/* Future Enhancements */}
            {project.futureImprovements.length > 0 && (
              <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm">
                <h3 className="font-bold text-[#1C152B] dark:text-[#F4F0FC] text-sm uppercase tracking-wider mb-3">
                  Planned Improvements
                </h3>
                <ul className="space-y-2 text-xs text-[#4A3E60] dark:text-[#D4CCE5]">
                  {project.futureImprovements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lavender-500 font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Project Pagination Footer */}
        <div className="mt-14 pt-8 border-t border-[#E2D9F3] dark:border-[#342B49] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C5F82] dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-300 transition-colors p-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/#projects"
            className="text-xs font-semibold uppercase tracking-wider text-lavender-600 dark:text-lavender-400 hover:underline"
          >
            All Projects
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C5F82] dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-300 transition-colors p-2"
            >
              <span>Next: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
}
