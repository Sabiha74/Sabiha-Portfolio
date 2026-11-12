"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Terminal, Award, Trophy, Sparkles, Copy, Check } from "lucide-react";
import { personalInfo, GMAIL_COMPOSE_URL } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FCFAFF] dark:bg-[#100D18] transition-colors"
    >
      {/* Subtle background ambient lavender glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-lavender-500/10 dark:bg-lavender-600/15 blur-[120px] rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-lavender-50 dark:bg-[#1E1930] text-lavender-700 dark:text-lavender-300 border border-lavender-200 dark:border-[#342B49] mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lavender-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lavender-500" />
              </span>
              <span>Available for Full Stack &amp; Software Engineering Roles</span>
            </div>

            {/* Title & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C152B] dark:text-[#F4F0FC] leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 via-lavender-500 to-lavender-400 dark:from-lavender-400 dark:via-lavender-300 dark:to-lavender-200">
                {personalInfo.name}
              </span>
            </h1>

            <p className="mt-2 text-xl sm:text-2xl font-semibold text-[#4A3E60] dark:text-[#D4CCE5]">
              {personalInfo.role} &amp; CSE Graduate
            </p>

            {/* Highlights Tag */}
            <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#6C5F82] dark:text-[#B9B0CC]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lavender-500" />
                {personalInfo.institution}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-lavender-400" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-lavender-600 dark:text-lavender-400 font-medium">
                <Award className="w-3.5 h-3.5" />
                ICPC 2024 Regionalist
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium">
                <Trophy className="w-3.5 h-3.5" />
                NGPC 2022 Finalist
              </span>
            </div>

            {/* Summary Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-[#4A3E60] dark:text-[#B9B0CC] leading-relaxed max-w-2xl">
              {personalInfo.bioIntro}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Resume Download */}
              <a
                href={personalInfo.resumeUrl}
                download="Sabiha_Mashruha_Dipita_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-lavender-600 hover:bg-lavender-500 active:scale-95 transition-all shadow-md shadow-lavender-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 w-full sm:w-auto min-h-[44px]"
                title="Download Resume (Sabiha Mashruha Dipita)"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me CTA */}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#1C152B] dark:text-[#F4F0FC] bg-[#F4EFFE] hover:bg-[#EAE2FD] dark:bg-[#1E1930] dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 w-full sm:w-auto min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-lavender-500 dark:text-lavender-400" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="mt-8 pt-6 border-t border-[#E2D9F3] dark:border-[#342B49] flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-[#6C5F82] dark:text-[#B9B0CC] font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl text-[#4A3E60] dark:text-[#B9B0CC] hover:text-[#1C152B] dark:hover:text-white bg-[#F4EFFE] dark:bg-[#1E1930] hover:bg-lavender-100 dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="GitHub Profile (github.com/sabiha74)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl text-[#4A3E60] dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-300 bg-[#F4EFFE] dark:bg-[#1E1930] hover:bg-lavender-100 dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="LinkedIn Profile (linkedin.com/in/sabiha-mashruha)"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compose in Gmail"
                  className="p-3 rounded-xl text-[#4A3E60] dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-300 bg-[#F4EFFE] dark:bg-[#1E1930] hover:bg-lavender-100 dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Compose in Gmail (sabihamashruha74@gmail.com)"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  className="p-3 rounded-xl text-[#4A3E60] dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-300 bg-[#F4EFFE] dark:bg-[#1E1930] hover:bg-lavender-100 dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 min-w-[44px] min-h-[44px] flex items-center justify-center relative group/copy"
                  title={copiedEmail ? "Copied!" : "Copy Email Address"}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copiedEmail && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[11px] font-semibold text-white bg-emerald-600 shadow-md whitespace-nowrap z-20">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card with Real Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-lavender-400/30 via-[#342B49]/40 to-[#100D18]/80 shadow-2xl">
                <div className="rounded-[14px] bg-[#1E1930] border border-[#342B49] p-6 text-[#F4F0FC]">
                  {/* Real Profile Photo Container */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-lavender-400/40 shadow-xl bg-[#171323] group">
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
                        <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#171323]">
                          <div className="w-12 h-12 rounded-full bg-lavender-500/10 text-lavender-300 flex items-center justify-center mb-1">
                            <Terminal className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-mono text-lavender-300 font-semibold">
                            Sabiha Mashruha
                          </span>
                        </div>
                      )}
                    </div>

                    <h2 className="mt-4 font-bold text-lg text-[#F4F0FC]">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xs text-lavender-300 font-mono mt-0.5">
                      {personalInfo.role}
                    </p>
                    <p className="text-xs text-[#B9B0CC] mt-1">
                      {personalInfo.institution}
                    </p>
                  </div>

                  {/* Terminal / Code snippet box */}
                  <div className="mt-5 pt-4 border-t border-[#342B49] text-xs font-mono space-y-1.5 text-[#B9B0CC]">
                    <div className="flex items-center gap-1.5 text-[#6C5F82]">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[10px] ml-2 text-[#B9B0CC]">engineer-profile.ts</span>
                    </div>

                    <div className="pt-2">
                      <span className="text-lavender-400">const</span> developer = &#123;
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
                      stack: [<span className="text-lavender-300">&quot;React&quot;</span>, <span className="text-lavender-300">&quot;Next.js&quot;</span>, <span className="text-lavender-300">&quot;MongoDB&quot;</span>]
                    </div>
                    <div>&#125;;</div>
                  </div>

                  {/* Quick Highlight Badge */}
                  <div className="mt-4 p-2.5 rounded-lg bg-[#171323] border border-[#342B49] flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-lavender-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-lavender-200 leading-relaxed">
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
