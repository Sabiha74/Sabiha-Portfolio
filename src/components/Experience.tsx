"use client";

import React from "react";
import { Briefcase, Trophy, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { careerMilestones } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="experience" aria-label="Career Milestones" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/50 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones &amp; Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Honest Fresher Journey &amp; Milestones
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            As a fresh graduate, I value transparent representation over fabricated corporate roles. Here are the core competitive milestones and problem-solving experiences shaping my readiness.
          </p>
        </div>

        {/* Milestones Cards */}
        <div className="mt-12 space-y-8">
          {careerMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    {milestone.type === "Contest" ? (
                      <Trophy className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Compass className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wide bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-1.5">
                      {milestone.type}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {milestone.organization}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                    {milestone.period}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {milestone.description}
              </p>

              {/* Highlights List */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Learnings &amp; Takeaways:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {milestone.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/40 to-blue-950/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Looking for a motivated, fast-learning Junior Frontend Developer?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              I am available for full-time junior frontend engineering positions, remote opportunities, and internships.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap min-h-[44px]"
          >
            <span>Let&apos;s Discuss Roles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

