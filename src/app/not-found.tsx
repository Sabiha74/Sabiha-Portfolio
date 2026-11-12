import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";

export default function RootNotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-lavender-500/10 dark:bg-lavender-400/10 border border-lavender-500/20 text-lavender-600 dark:text-lavender-400 flex items-center justify-center shadow-md">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1628] dark:text-[#F4F0FC]">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-[#B9B0CC]">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-lavender-600 hover:bg-lavender-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-[#F4F0FC] bg-slate-100 dark:bg-[#1E1930] hover:bg-slate-200 dark:hover:bg-[#251F3D] border border-transparent dark:border-[#342B49] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

