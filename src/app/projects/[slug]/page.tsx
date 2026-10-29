import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Target,
  Wrench,
  Lightbulb,
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

  const hasLiveUrl = project.liveUrl && !project.liveUrl.startsWith("[");
  const hasGithubUrl = project.githubUrl && !project.githubUrl.startsWith("[");

  return (
    <main className="min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back to Projects */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>{project.status}</span>
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Slug: /projects/{project.slug}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </div>

        {/* Project Thumbnail / Screenshot Banner */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
          <ProjectThumbnail id={project.id} title={project.title} size="hero" />
        </div>

        {/* Action Links Bar */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Tech Badges Preview */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              Stack:
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live & Repo Actions */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm min-h-[40px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors min-h-[40px]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {!hasLiveUrl && !hasGithubUrl && (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                <span>Code repository &amp; live demo available upon deployment</span>
              </span>
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
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <h2
                id="section-overview"
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5"
              >
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Project Description &amp; Purpose</span>
              </h2>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Core Purpose
                </h3>
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                  {project.purpose}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section
              aria-labelledby="section-features"
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <h2
                id="section-features"
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Key Features</span>
              </h2>

              <ul className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300" role="list">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* My Role & Contributions */}
            <section
              aria-labelledby="section-role"
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <h2
                id="section-role"
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5"
              >
                <UserCheck className="w-5 h-5 text-indigo-500" />
                <span>My Role &amp; Contributions</span>
              </h2>

              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300" role="list">
                {project.roleAndContributions.map((contribution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges Faced and How I Solved Them */}
            <section
              aria-labelledby="section-challenges"
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
            >
              <h2
                id="section-challenges"
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5"
              >
                <Wrench className="w-5 h-5 text-amber-500" />
                <span>Challenges Faced &amp; Solutions</span>
              </h2>

              <div className="space-y-4">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400">
                        Challenge #{idx + 1}:
                      </span>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
                        How I Solved It:
                      </span>
                      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
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
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Technologies Used</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Primary frontend tools, frameworks, and styling libraries.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Improvements */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Future Improvements</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Planned features and technical enhancements for upcoming iterations.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300" role="list">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Takeaways */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>Core Learnings</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300" role="list">
                {project.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Previous / Next Project Navigation Links */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Project */}
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Project</span>
                </div>
                <span className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                  {prevProject.title}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {prevProject.tagline}
                </span>
              </Link>
            ) : (
              <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 text-xs text-slate-400 flex items-center justify-center">
                <span>First Project in Catalog</span>
              </div>
            )}

            {/* Next Project */}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-colors text-right items-end"
              >
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span>Next Project</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                  {nextProject.title}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {nextProject.tagline}
                </span>
              </Link>
            ) : (
              <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 text-xs text-slate-400 flex items-center justify-center text-right">
                <span>Last Project in Catalog</span>
              </div>
            )}
          </div>

          {/* Central Back to Projects Footer Button */}
          <div className="mt-8 text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
