"use client";

import React from "react";
import { User, GraduationCap, MapPin, Award, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-20 sm:py-24 bg-[#FAF7FF]/50 dark:bg-[#171323]/50 border-y border-[#E2D9F3] dark:border-[#342B49] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-lavender-600 dark:text-lavender-300 bg-lavender-100 dark:bg-lavender-950/60 border border-lavender-200 dark:border-lavender-500/30 mb-3">
            <User className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C152B] dark:text-[#F4F0FC]">
            Professional Introduction
          </h2>
        </div>

        {/* Short, Professional Content Card */}
        <div className="mt-8 bg-white dark:bg-[#1E1930] rounded-2xl border border-[#E2D9F3] dark:border-[#342B49] p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle lavender accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender-600 via-lavender-400 to-lavender-300" />

          {/* User's Exact Concise Statement */}
          <p className="text-lg sm:text-xl text-[#4A3E60] dark:text-[#D4CCE5] leading-relaxed font-normal">
            {personalInfo.aboutStatement}
          </p>

          {/* Quick Context Badges */}
          <div className="mt-8 pt-6 border-t border-[#E2D9F3]/80 dark:border-[#342B49] flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#FAF7FF] dark:bg-[#171323] text-lavender-700 dark:text-lavender-300 border border-lavender-200/80 dark:border-lavender-500/30">
              <GraduationCap className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
              <span>BSc in CSE &bull; Daffodil International University</span>
            </span>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#FAF7FF] dark:bg-[#171323] text-[#4A3E60] dark:text-[#D4CCE5] border border-[#E2D9F3] dark:border-[#342B49]">
              <MapPin className="w-3.5 h-3.5 text-lavender-400" />
              <span>{personalInfo.location}</span>
            </span>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
              <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>ICPC 2024 Dhaka Regional &bull; NGPC 2022 Finalist</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Open for Full Stack &amp; Frontend Roles</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
