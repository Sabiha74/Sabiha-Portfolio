"use client";

import React from "react";
import { Layout, Cpu, Palette, Terminal } from "lucide-react";
import { skillsData } from "@/data/portfolioData";
import { renderTechIcon } from "./TechIcons";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend": <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  "Programming Languages": <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  "Styling & UI": <Palette className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
  "Backend & Tools": <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

export function Skills() {
  return (
    <section id="skills" aria-label="My Skills" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with Short Underline Accent */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Technical Stack &amp; Toolchain
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            MY SKILLS
          </h2>
          {/* Short underline accent */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 rounded-full mt-3" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Technologies, frameworks, and programming languages I actively use to architect and build full-stack web applications.
          </p>
        </div>

        {/* Responsive Grid: 3 cols on large, 2 on medium, 1 on small */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-105 transition-transform duration-200">
                      {categoryIcons[category.category] || <Cpu className="w-5 h-5 text-blue-500" />}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skill Count Badge */}
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                  {category.description}
                </p>

                {/* Technology Icon Tiles Grid */}
                <div className="mt-6 grid grid-cols-3 sm:grid-cols-3 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      tabIndex={0}
                      role="img"
                      aria-label={skill.name}
                      title={skill.name}
                      className="group/tile relative flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-white dark:bg-slate-800/50 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      {/* Consistent Square Tile Icon */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover/tile:scale-110 transition-transform duration-200">
                        {renderTechIcon(skill.name, "w-8 h-8 sm:w-9 sm:h-9 drop-shadow-xs") || (
                          <span className="text-xs font-bold text-blue-500">{skill.name[0]}</span>
                        )}
                      </div>

                      {/* Technology Name Label */}
                      <span className="mt-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300 text-center tracking-tight truncate w-full group-hover/tile:text-blue-600 dark:group-hover/tile:text-blue-400 transition-colors">
                        {skill.name}
                      </span>

                      {/* Accessible Hover Tooltip */}
                      <div
                        role="tooltip"
                        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tile:opacity-100 group-focus-visible/tile:opacity-100 transition-opacity duration-200 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900 dark:bg-slate-800 rounded-md shadow-lg whitespace-nowrap z-30 border border-slate-700"
                      >
                        {skill.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
