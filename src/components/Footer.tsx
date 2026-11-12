"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Code2 } from "lucide-react";
import { personalInfo, navigationLinks, GMAIL_COMPOSE_URL } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E3DAEE] dark:border-[#342B49] bg-white dark:bg-[#100D18] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/#hero"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-lavender-500/10 dark:bg-lavender-400/10 border border-lavender-500/20 flex items-center justify-center text-lavender-600 dark:text-lavender-400 group-hover:scale-105 transition-transform">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#1C1628] dark:text-[#F4F0FC]">
                {personalInfo.name}
              </span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-[#B9B0CC] mt-1 max-w-sm">
              {personalInfo.role} &amp; CSE Graduate from {personalInfo.institution}.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 dark:text-[#B9B0CC]" aria-label="Footer navigation">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded px-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-500 dark:text-[#B9B0CC] hover:text-[#1C1628] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1E1930] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-500 dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-400 hover:bg-slate-100 dark:hover:bg-[#1E1930] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose in Gmail"
              title="Compose in Gmail (sabihamashruha74@gmail.com)"
              className="p-2 rounded-lg text-slate-500 dark:text-[#B9B0CC] hover:text-lavender-600 dark:hover:text-lavender-400 hover:bg-slate-100 dark:hover:bg-[#1E1930] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 ml-2 rounded-lg border border-[#E3DAEE] dark:border-[#342B49] text-slate-600 dark:text-[#B9B0CC] hover:bg-slate-100 dark:hover:bg-[#1E1930] hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-[#342B49]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-[#B9B0CC] gap-2">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400 dark:text-[#B9B0CC]/70">Built with Next.js, React, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

