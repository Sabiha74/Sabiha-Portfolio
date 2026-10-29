"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-lg border border-slate-700/50 dark:border-slate-800 bg-slate-900/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center w-11 h-11 rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        isDark
          ? "border-slate-800 bg-slate-900/80 text-amber-400 hover:text-amber-300 hover:bg-slate-800 focus-visible:ring-offset-slate-950"
          : "border-slate-200 bg-white/90 text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus-visible:ring-offset-white"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}

