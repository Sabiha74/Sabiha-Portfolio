"use client";

import React from "react";
import { GraduationCap, MapPin, Award, Trophy, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="py-20 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/50 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal Computer Science and Engineering education with a strong emphasis on core computing fundamentals, algorithmic problem solving, and software engineering.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Degree & Institution (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
                  {educationData.status}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3 h-3" />
                  {educationData.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {educationData.degree}
              </h3>

              <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {educationData.institution}
              </div>

              <div className="text-sm text-slate-600 dark:text-slate-400">
                {educationData.department}
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">Key Highlights</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {educationData.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Achievements & Coursework (Right 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contest Honors Box */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 dark:text-white">
                  Contest Honors
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs">
                    <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">ICPC 2024 Dhaka Regional</div>
                      <div className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">National level collegiate programming contest participant</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/60 text-xs">
                    <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">NGPC 2022 Finalist</div>
                      <div className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">National Girls Programming Contest finalist</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Coursework */}
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 dark:text-white">
                  Core Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
