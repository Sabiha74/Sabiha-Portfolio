"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Layers, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { ProjectEntry } from "@/types/portfolio";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: ProjectEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#100D18]/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1E1930] rounded-2xl border border-[#E2D9F3] dark:border-[#342B49] shadow-2xl overflow-hidden my-8">
        {/* Header Bar */}
        <div className="p-6 border-b border-[#E2D9F3] dark:border-[#342B49] flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-lavender-100 dark:bg-lavender-950/60 text-lavender-700 dark:text-lavender-300 border border-lavender-200 dark:border-lavender-500/30 mb-2">
              <Sparkles className="w-3 h-3 text-lavender-500 dark:text-lavender-400" />
              <span>{project.status}</span>
            </div>
            <h3 id="modal-project-title" className="text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC]">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#6C5F82] dark:text-[#B9B0CC] mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#6C5F82] dark:text-[#B9B0CC] hover:text-[#1C152B] dark:hover:text-white hover:bg-lavender-50 dark:hover:bg-[#171323] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6C5F82] dark:text-[#B9B0CC] mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-[#4A3E60] dark:text-[#D4CCE5] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6C5F82] dark:text-[#B9B0CC] mb-3">
              Key Features
            </h4>
            <ul className="space-y-2 text-sm text-[#4A3E60] dark:text-[#D4CCE5]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6C5F82] dark:text-[#B9B0CC] mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#FAF7FF] dark:bg-[#171323] text-[#1C152B] dark:text-lavender-200 border border-[#E2D9F3] dark:border-[#342B49]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#E2D9F3] dark:border-[#342B49] bg-[#FAF7FF]/50 dark:bg-[#171323]/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-lavender-600 hover:bg-lavender-500 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#1C152B] dark:text-[#F4F0FC] bg-white dark:bg-[#1E1930] hover:bg-[#F4EFFE] dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#6C5F82] dark:text-[#B9B0CC] hover:bg-lavender-100 dark:hover:bg-[#1E1930] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
