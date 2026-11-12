"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo, GMAIL_COMPOSE_URL } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Clipboard fallback if needed
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      newErrors.subject = "Please enter a subject line.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Safely read response as text first (never throws "Unexpected end of JSON input" on empty bodies)
      const rawText = await response.text();
      const contentType = response.headers.get("content-type") || "";

      let data: { success?: boolean; message?: string; error?: string } | null = null;
      if (rawText && rawText.trim() && contentType.includes("application/json")) {
        try {
          data = JSON.parse(rawText);
        } catch {
          data = null;
        }
      }

      // Handle non-OK HTTP status codes
      if (!response.ok) {
        if (data?.error) {
          throw new Error(data.error);
        }

        if (response.status === 404) {
          throw new Error(
            "Contact service endpoint not found (404). Please contact sabihamashruha74@gmail.com directly."
          );
        } else if (response.status === 429) {
          throw new Error(
            "Too many messages sent. Please wait a few minutes before trying again."
          );
        } else if (response.status === 503) {
          throw new Error(
            data?.error ||
              "The email service is currently being configured (RESEND_API_KEY missing). Please contact sabihamashruha74@gmail.com directly."
          );
        } else {
          throw new Error(
            `Server error (${response.status}). Please try again later or email sabihamashruha74@gmail.com directly.`
          );
        }
      }

      // Check parsed JSON payload
      if (!data || typeof data !== "object") {
        throw new Error(
          "The server returned an empty or invalid response. Please try again or use direct Gmail compose."
        );
      }

      if (!data.success) {
        throw new Error(
          data.error || "Failed to send message. Please try again or use direct Gmail compose."
        );
      }

      setSuccessMessage(data.message || "Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
      setErrors({});
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact Information" className="py-20 sm:py-24 bg-[#FCFAFF] dark:bg-[#100D18] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-lavender-600 dark:text-lavender-300 bg-lavender-100 dark:bg-lavender-950/60 border border-lavender-200 dark:border-lavender-500/30 mb-3">
            <Mail className="w-3.5 h-3.5 text-lavender-500 dark:text-lavender-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C152B] dark:text-[#F4F0FC]">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6C5F82] dark:text-[#B9B0CC]">
            Have an open role, project inquiry, or collaboration idea? Send me a message below or reach out directly via Gmail.
          </p>
        </div>

        {/* Contact Grid: Form on Left (7 cols), Direct Contact on Right (5 cols) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Working Contact Form (Left 7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1E1930] rounded-2xl border border-[#E2D9F3] dark:border-[#342B49] p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender-600 via-lavender-400 to-lavender-300" />

            <h3 className="text-xl sm:text-2xl font-bold text-[#1C152B] dark:text-[#F4F0FC]">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#6C5F82] dark:text-[#B9B0CC] mt-1 mb-6">
              Fill in the form below and your message will be delivered straight to my inbox.
            </p>

            {/* Success Notification */}
            {successMessage && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                    Message Sent
                  </p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                    {successMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Error Notification */}
            {errorMessage && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-rose-800 dark:text-rose-200">
                    Submission Notice
                  </p>
                  <p className="text-xs text-rose-700 dark:text-rose-300 mt-0.5">
                    {errorMessage}
                  </p>
                  <div className="mt-2">
                    <a
                      href={GMAIL_COMPOSE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-lavender-600 dark:text-lavender-300 hover:underline"
                    >
                      <span>Compose directly in Gmail</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Honeypot field (hidden from real users, traps bots) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E60] dark:text-[#D4CCE5] mb-1.5"
                  >
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-[#FAF7FF] dark:bg-[#171323] text-[#1C152B] dark:text-[#F4F0FC] border ${
                      errors.name
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-[#E2D9F3] dark:border-[#342B49] focus:border-lavender-400 focus:ring-lavender-400"
                    } transition-colors focus:outline-none focus:ring-2`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E60] dark:text-[#D4CCE5] mb-1.5"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-[#FAF7FF] dark:bg-[#171323] text-[#1C152B] dark:text-[#F4F0FC] border ${
                      errors.email
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-[#E2D9F3] dark:border-[#342B49] focus:border-lavender-400 focus:ring-lavender-400"
                    } transition-colors focus:outline-none focus:ring-2`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E60] dark:text-[#D4CCE5] mb-1.5"
                >
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Full Stack Developer Role / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-[#FAF7FF] dark:bg-[#171323] text-[#1C152B] dark:text-[#F4F0FC] border ${
                    errors.subject
                      ? "border-rose-500 focus:ring-rose-500"
                      : "border-[#E2D9F3] dark:border-[#342B49] focus:border-lavender-400 focus:ring-lavender-400"
                    } transition-colors focus:outline-none focus:ring-2`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E60] dark:text-[#D4CCE5] mb-1.5"
                >
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-[#FAF7FF] dark:bg-[#171323] text-[#1C152B] dark:text-[#F4F0FC] border ${
                    errors.message
                      ? "border-rose-500 focus:ring-rose-500"
                      : "border-[#E2D9F3] dark:border-[#342B49] focus:border-lavender-400 focus:ring-lavender-400"
                    } transition-colors focus:outline-none focus:ring-2 resize-y`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-lavender-600 hover:bg-lavender-500 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-lavender-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 min-h-[44px] w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Direct Email, Actions & Socials (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-lavender-50 dark:bg-[#171323] text-lavender-600 dark:text-lavender-400 border border-lavender-200/80 dark:border-[#342B49]">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                  Direct Inbox
                </span>
              </div>

              <div className="mt-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#6C5F82] dark:text-[#B9B0CC]">
                  Email Address
                </span>
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-0.5 text-base sm:text-lg font-bold text-[#1C152B] dark:text-[#F4F0FC] hover:text-lavender-600 dark:hover:text-lavender-300 transition-colors break-all"
                  title="Open Gmail Compose (sabihamashruha74@gmail.com)"
                >
                  {personalInfo.socials.email}
                </a>
                <p className="text-xs text-[#6C5F82] dark:text-[#B9B0CC] mt-1">
                  Prefer direct emailing? Compose in Gmail or copy my address.
                </p>
              </div>

              {/* Action Buttons: Copy Email & Gmail Compose */}
              <div className="mt-5 pt-4 border-t border-[#E2D9F3]/80 dark:border-[#342B49] flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#4A3E60] dark:text-[#D4CCE5] hover:text-lavender-600 dark:hover:text-lavender-300 bg-[#F4EFFE] dark:bg-[#171323] hover:bg-lavender-100 dark:hover:bg-[#251F38] border border-[#E2D9F3] dark:border-[#342B49] shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 min-h-[40px]"
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

                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-lavender-600 hover:bg-lavender-500 transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 min-h-[40px]"
                  title="Compose in Gmail (sabihamashruha74@gmail.com)"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Compose in Gmail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn & GitHub Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm hover:border-lavender-400/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-lavender-50 dark:bg-[#171323] text-lavender-600 dark:text-lavender-400 border border-lavender-200/80 dark:border-[#342B49]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-lavender-600 dark:text-lavender-400 hover:underline"
                    aria-label="Open LinkedIn Profile in new tab"
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-[#6C5F82] dark:text-[#B9B0CC]">LinkedIn</span>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-bold text-[#1C152B] dark:text-[#F4F0FC] truncate hover:text-lavender-600 dark:hover:text-lavender-300 mt-0.5"
                  >
                    sabiha-mashruha
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm hover:border-lavender-400/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-lavender-50 dark:bg-[#171323] text-[#4A3E60] dark:text-[#D4CCE5] border border-lavender-200/80 dark:border-[#342B49]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-lavender-600 dark:text-lavender-400 hover:underline"
                    aria-label="Open GitHub Profile in new tab"
                  >
                    <span>Follow</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-[#6C5F82] dark:text-[#B9B0CC]">GitHub</span>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-bold text-[#1C152B] dark:text-[#F4F0FC] truncate hover:text-lavender-600 dark:hover:text-lavender-300 mt-0.5"
                  >
                    sabiha74
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1E1930] border border-[#E2D9F3] dark:border-[#342B49] shadow-sm flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-lavender-50 dark:bg-[#171323] text-lavender-600 dark:text-lavender-400 border border-lavender-200/80 dark:border-[#342B49] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#6C5F82] dark:text-[#B9B0CC]">
                  Location
                </span>
                <div className="text-sm font-bold text-[#1C152B] dark:text-[#F4F0FC] mt-0.5">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-[#6C5F82] dark:text-[#B9B0CC]">
                  Open to Onsite, Hybrid &amp; Remote roles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
