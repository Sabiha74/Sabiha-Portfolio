"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, ExternalLink, ShieldCheck, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
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
    <section id="contact" aria-label="Contact Information" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/50 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            I am actively seeking software engineering and full stack development opportunities, technical collaborations, and internships. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Email Action Card (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            {/* Ambient accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400" />

            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                  Primary Contact
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                Send an Email
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you have an open software engineering role, a project discussion, or would like to connect, my inbox is always open.
              </p>

              {/* Email Address Display Box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all mt-0.5"
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0 min-h-[40px]"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Email Actions & Security Note */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Email Client</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Security Banner */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Secure Direct Contact:</strong> Directly opening your email client ensures safe, encrypted client-side transmission without intermediate forms or exposing private API tokens.
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles & Location Cards (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-900/60">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-950/60 transition-colors"
                  aria-label="Open LinkedIn Profile in new tab"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="mt-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">LinkedIn</span>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/sabiha-mashruha
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Professional network, recommendations, and updates.
                </p>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Open GitHub Profile in new tab"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="mt-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">GitHub</span>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  github.com/sabiha74
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Source code repositories, projects, and contributions.
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/60">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Location</span>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {personalInfo.location}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Available for Onsite, Hybrid &amp; Remote roles
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
