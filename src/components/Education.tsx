"use client";

import React from "react";
import { GraduationCap, Building2, Calendar, MapPin } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="py-20 sm:py-24 bg-[#FCFAFF] dark:bg-[#100D18] border-y border-[#E2D9F3] dark:border-[#342B49] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-lavender-600 dark:text-lavender-300 bg-lavender-100 dark:bg-lavender-950/60 border border-lavender-200 dark:border-lavender-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C152B] dark:text-[#F4F0FC]">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6C5F82] dark:text-[#B9B0CC]">
            Formal undergraduate education in Computer Science and Engineering.
          </p>
        </div>

        {/* Minimal, Professional Education Card */}
        <div className="mt-10 max-w-3xl bg-white dark:bg-[#1E1930] rounded-2xl border border-[#E2D9F3] dark:border-[#342B49] p-6 sm:p-8 shadow-sm relative overflow-hidden group hover:border-lavender-400/60 dark:hover:border-lavender-400/60 transition-colors">
          {/* Subtle lavender accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender-600 via-lavender-400 to-lavender-300" />

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-lavender-50 dark:bg-[#171323] border border-lavender-200/80 dark:border-[#342B49] text-lavender-600 dark:text-lavender-400 group-hover:scale-105 transition-transform shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC] tracking-tight">
                  {educationData.degree}
                </h3>
                <div className="flex items-center gap-2 text-base font-semibold text-lavender-600 dark:text-lavender-300">
                  <Building2 className="w-4 h-4 shrink-0 text-lavender-500 dark:text-lavender-400" />
                  <span>{educationData.institution}</span>
                </div>
                {educationData.location && (
                  <div className="flex items-center gap-1.5 text-xs text-[#6C5F82] dark:text-[#B9B0CC] pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-lavender-400" />
                    <span>{educationData.location}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-lavender-100 dark:bg-[#171323] text-lavender-700 dark:text-lavender-300 border border-lavender-200 dark:border-lavender-500/30">
                <Calendar className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
                <span>Passed: 2026</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
