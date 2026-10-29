import React from "react";

export default function ProjectLoading() {
  return (
    <main className="min-h-screen py-10 sm:py-16 animate-pulse">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link Skeleton */}
        <div className="w-32 h-6 bg-slate-200 dark:bg-slate-800 rounded-md" />

        {/* Header Skeleton */}
        <div className="space-y-3">
          <div className="w-24 h-6 bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="w-2/3 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg" />
          <div className="w-full max-w-xl h-6 bg-slate-200 dark:bg-slate-800 rounded-md" />
        </div>

        {/* Hero image banner Skeleton */}
        <div className="w-full h-72 sm:h-96 bg-slate-200 dark:bg-slate-800 rounded-2xl" />

        {/* Bar skeleton */}
        <div className="w-full h-16 bg-slate-200 dark:bg-slate-800 rounded-2xl" />

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
            <div className="w-full h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="w-full h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
            <div className="w-full h-52 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}

