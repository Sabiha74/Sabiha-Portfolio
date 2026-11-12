"use client";

import React from "react";
import { Code2, Layers, Palette, Database } from "lucide-react";
import { skillsData } from "@/data/portfolioData";
import { renderTechIcon } from "./TechIcons";

const categoryIconMap: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />,
  "Frameworks": <Layers className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />,
  "Styling & UI": <Palette className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />,
  "Database": <Database className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />,
};

export function Skills() {
  return (
    <section id="skills" aria-label="My Skills" className="py-20 sm:py-24 bg-[#FCFAFF] dark:bg-[#100D18] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with Short Underline Accent */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-600 dark:text-lavender-300 mb-2">
            Technical Stack &amp; Toolchain
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C152B] dark:text-[#F4F0FC]">
            MY SKILLS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-lavender-600 via-lavender-400 to-lavender-300 rounded-full mt-3" />
          <p className="mt-4 text-base sm:text-lg text-[#6C5F82] dark:text-[#B9B0CC] leading-relaxed">
            Core programming languages, frameworks, styling tools, and databases I actively use for software development.
          </p>
        </div>

        {/* Clean, Minimal, Vertically Organized Layout Without Number Count Badges */}
        <div className="mt-14 space-y-10 sm:space-y-12">
          {skillsData.map((category) => (
            <div key={category.category} className="space-y-4">
              {/* Category Heading Row (No technology counts) */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2D9F3] dark:border-[#342B49]">
                <div className="p-2 rounded-lg bg-lavender-100 dark:bg-lavender-950/60 text-lavender-600 dark:text-lavender-300 border border-lavender-200 dark:border-lavender-500/30">
                  {categoryIconMap[category.category] || <Code2 className="w-5 h-5" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC]">
                  {category.category}
                </h3>
              </div>

              {/* Neat Responsive Rows / Inline Groups with Genuine Logos */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    tabIndex={0}
                    role="img"
                    aria-label={skill.name}
                    title={skill.name}
                    className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] hover:border-lavender-400/70 dark:hover:border-lavender-400/70 hover:shadow-md hover:shadow-lavender-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                  >
                    {/* Consistent Square Tile with Genuine Technology Vector Logo */}
                    <div className="w-8 h-8 rounded-lg bg-[#FAF7FF] dark:bg-[#171323] border border-[#E2D9F3]/80 dark:border-[#342B49] flex items-center justify-center p-1 shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {renderTechIcon(skill.name, "w-6 h-6 drop-shadow-2xs") || (
                        <span className="text-xs font-bold text-lavender-400">{skill.name[0]}</span>
                      )}
                    </div>

                    {/* Technology Name Label */}
                    <span className="text-sm font-semibold text-[#1C152B] dark:text-[#F4F0FC] group-hover:text-lavender-600 dark:group-hover:text-lavender-300 transition-colors">
                      {skill.name}
                    </span>

                    {/* Accessible Hover Tooltip */}
                    <div
                      role="tooltip"
                      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 px-2 py-0.5 text-[11px] font-semibold text-white bg-[#100D18] dark:bg-[#1E1930] rounded-md shadow-lg whitespace-nowrap z-30 border border-[#342B49]"
                    >
                      {skill.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#100D18] dark:border-t-[#1E1930]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
