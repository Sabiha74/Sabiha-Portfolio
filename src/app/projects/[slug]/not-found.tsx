import React from "react";
import Link from "next/link";
import { ArrowLeft, FolderX, Home } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-md">
          <FolderX className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Project Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            The project entry you are looking for does not exist in the catalog or may have been renamed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-lavender-600 hover:bg-lavender-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-[#F4F0FC] bg-slate-100 dark:bg-[#1E1930] hover:bg-slate-200 dark:hover:bg-[#251F3D] border border-transparent dark:border-[#342B49] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

