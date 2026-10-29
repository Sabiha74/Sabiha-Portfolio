"use client";

import React from "react";
import { User, Sparkles, BookOpen, HeartHandshake, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-20 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/50 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            From Algorithmic Foundations to Full Stack Engineering
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A CSE graduate and Full Stack Developer focused on building robust, performant web applications with modern frontend and backend architectures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {personalInfo.bioFull.map((paragraph, idx) => (
              <p key={idx} className="bg-white dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                {paragraph}
              </p>
            ))}

            {/* Target Roles Card */}
            <div className="p-6 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" />
                Target Opportunities
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {personalInfo.openToRoles.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-blue-200/60 dark:border-blue-800/60 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights & Focus Areas (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Education Summary Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-lg">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3>Academic &amp; Contest Background</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Graduated with a Bachelor of Science in Computer Science and Engineering from <strong>{personalInfo.institution}</strong>.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-2">
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">University:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 text-right">{personalInfo.institution}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">Department:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 text-right">{personalInfo.department}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">Contest Achievements:</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400 text-right">ICPC 2024 &bull; NGPC 2022 Finalist</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 text-right">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Focus Areas / Technical Interests */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Technical Focus Areas
                </h3>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Core technologies and engineering domains I actively work with and enjoy building.
              </p>

              <ul className="mt-4 space-y-2.5" role="list">
                {personalInfo.interests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    <span className="mt-0.5 text-blue-500 font-bold">&bull;</span>
                    <span className="flex-1">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
