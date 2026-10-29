"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Terminal, Award, Trophy, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span>Available for Full Stack &amp; Software Engineering Roles</span>
            </div>

            {/* Title & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400">
                {personalInfo.name}
              </span>
            </h1>

            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              {personalInfo.role} &amp; CSE Graduate
            </p>

            {/* Highlights Tag */}
            <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {personalInfo.institution}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                <Award className="w-3.5 h-3.5" />
                ICPC 2024 Regionalist
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium">
                <Trophy className="w-3.5 h-3.5" />
                NGPC 2022 Finalist
              </span>
            </div>

            {/* Summary Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.bioIntro}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Resume Download */}
              <a
                href={personalInfo.resumeUrl}
                download="Sabiha_Mashruha_Dipita_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 w-full sm:w-auto min-h-[44px]"
                title="Download Resume (Sabiha Mashruha Dipita)"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me CTA */}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full sm:w-auto min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="GitHub Profile (github.com/sabiha74)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="LinkedIn Profile (linkedin.com/in/sabiha-mashruha)"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  aria-label="Direct Email"
                  className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Direct Email (sabihamashruha74@gmail.com)"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card with Real Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-700/20 to-slate-900/40 shadow-2xl">
                <div className="rounded-[14px] bg-slate-900 border border-slate-800 p-6 text-slate-300">
                  {/* Real Profile Photo Container */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl bg-slate-800 group">
                      {!imageError ? (
                        <Image
                          src="/profile.png"
                          alt="Sabiha Mashruha Dipita - Full Stack Developer"
                          width={160}
                          height={160}
                          priority
                          onError={() => setImageError(true)}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-slate-800">
                          <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-1">
                            <Terminal className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-mono text-blue-300 font-semibold">
                            Sabiha Mashruha
                          </span>
                        </div>
                      )}
                    </div>

                    <h2 className="mt-4 font-bold text-lg text-white">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xs text-blue-400 font-mono mt-0.5">
                      {personalInfo.role}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {personalInfo.institution}
                    </p>
                  </div>

                  {/* Terminal / Code snippet box */}
                  <div className="mt-5 pt-4 border-t border-slate-800 text-xs font-mono space-y-1.5 text-slate-400">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[10px] ml-2 text-slate-500">engineer-profile.ts</span>
                    </div>

                    <div className="pt-2">
                      <span className="text-blue-400">const</span> developer = &#123;
                    </div>
                    <div className="pl-4">
                      name: <span className="text-emerald-400">&quot;Sabiha Mashruha Dipita&quot;</span>,
                    </div>
                    <div className="pl-4">
                      role: <span className="text-emerald-400">&quot;Full Stack Developer&quot;</span>,
                    </div>
                    <div className="pl-4">
                      degree: <span className="text-emerald-400">&quot;BSc in CSE (DIU)&quot;</span>,
                    </div>
                    <div className="pl-4">
                      contests: [<span className="text-amber-300">&quot;ICPC 2024&quot;</span>, <span className="text-amber-300">&quot;NGPC 2022&quot;</span>],
                    </div>
                    <div className="pl-4">
                      stack: [<span className="text-amber-300">&quot;React&quot;</span>, <span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;Laravel&quot;</span>]
                    </div>
                    <div>&#125;;</div>
                  </div>

                  {/* Quick Highlight Badge */}
                  <div className="mt-4 p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/60 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-200/90 leading-relaxed">
                      Rangpur, Bangladesh &bull; Open to Onsite, Hybrid &amp; Remote software engineering roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
