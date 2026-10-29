"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";
import { personalInfo, navigationLinks } from "@/data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navigationLinks.map((link) => link.href.replace(/^\/?#/, ""));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation & body scroll locking for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 dark:bg-slate-950/90 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <Link
            href="/#hero"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1.5 min-h-[44px]"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 dark:bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-1 hidden sm:inline-block">
                {personalInfo.role}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.replace(/^\/?#/, "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Theme toggle & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 min-h-[40px]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Mobile hamburger button with accessible 44x44 touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop click to dismiss */}
          <div
            className="fixed inset-0 top-16 bg-slate-950/40 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <div
            id="mobile-navigation-menu"
            className="relative z-50 md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl transition-all"
          >
            <nav className="px-4 pt-3 pb-6 space-y-1.5" aria-label="Mobile navigation">
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.href.replace(/^\/?#/, "");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[44px] ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm min-h-[44px]"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
