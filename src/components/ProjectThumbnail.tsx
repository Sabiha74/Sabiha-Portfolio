import React from "react";
import { Terminal, Activity, Globe, Sparkles } from "lucide-react";

interface ProjectThumbnailProps {
  id: string;
  title: string;
  className?: string;
  size?: "card" | "hero";
}

export function ProjectThumbnail({ id, title, className = "", size = "card" }: ProjectThumbnailProps) {
  const isHero = size === "hero";

  switch (id) {
    case "dev-stack":
      return (
        <div
          className={`relative w-full ${
            isHero ? "h-64 sm:h-80 md:h-96" : "h-48"
          } bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-200/60 dark:border-slate-800 ${className}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div
            className={`${
              isHero ? "w-16 h-16 mb-4" : "w-12 h-12 mb-3"
            } rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/5 group-hover:scale-110 transition-transform duration-300`}
          >
            <Terminal className={isHero ? "w-8 h-8" : "w-6 h-6"} />
          </div>
          <div className={`font-mono ${isHero ? "text-base sm:text-lg" : "text-xs"} text-blue-400 font-semibold tracking-tight`}>
            &lt;DevStack /&gt;
          </div>
          <div className={`${isHero ? "text-sm mt-2 max-w-md" : "text-[11px] mt-1"} text-slate-400`}>
            Developer Workbench &amp; UI Directory
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-950/80 text-blue-300 border border-blue-800/80 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Project Mockup / Screenshot Placeholder
            </span>
          </div>
        </div>
      );

    case "fit-log":
      return (
        <div
          className={`relative w-full ${
            isHero ? "h-64 sm:h-80 md:h-96" : "h-48"
          } bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-200/60 dark:border-slate-800 ${className}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
          <div
            className={`${
              isHero ? "w-16 h-16 mb-4" : "w-12 h-12 mb-3"
            } rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shadow-lg shadow-indigo-500/5 group-hover:scale-110 transition-transform duration-300`}
          >
            <Activity className={isHero ? "w-8 h-8" : "w-6 h-6"} />
          </div>
          <div className={`font-mono ${isHero ? "text-base sm:text-lg" : "text-xs"} text-indigo-400 font-semibold tracking-tight`}>
            &lt;FitLog Dashboard /&gt;
          </div>
          <div className={`${isHero ? "text-sm mt-2 max-w-md" : "text-[11px] mt-1"} text-slate-400`}>
            Next.js App Router Activity Tracker
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-800/80 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Project Mockup / Screenshot Placeholder
            </span>
          </div>
        </div>
      );

    case "devconf":
      return (
        <div
          className={`relative w-full ${
            isHero ? "h-64 sm:h-80 md:h-96" : "h-48"
          } bg-gradient-to-br from-slate-900 via-sky-950/40 to-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-200/60 dark:border-slate-800 ${className}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent pointer-events-none" />
          <div
            className={`${
              isHero ? "w-16 h-16 mb-4" : "w-12 h-12 mb-3"
            } rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shadow-lg shadow-sky-500/5 group-hover:scale-110 transition-transform duration-300`}
          >
            <Globe className={isHero ? "w-8 h-8" : "w-6 h-6"} />
          </div>
          <div className={`font-mono ${isHero ? "text-base sm:text-lg" : "text-xs"} text-sky-400 font-semibold tracking-tight`}>
            &lt;DevConf Landing /&gt;
          </div>
          <div className={`${isHero ? "text-sm mt-2 max-w-md" : "text-[11px] mt-1"} text-slate-400`}>
            Semantic Web &amp; Vanilla JavaScript
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-sky-950/80 text-sky-300 border border-sky-800/80 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Project Mockup / Screenshot Placeholder
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div
          className={`w-full ${
            isHero ? "h-64 sm:h-80" : "h-48"
          } bg-slate-900 flex flex-col items-center justify-center text-slate-400 text-xs p-6 border-b border-slate-800 ${className}`}
        >
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-2">
            <Terminal className="w-6 h-6" />
          </div>
          <span>{title} Preview</span>
        </div>
      );
  }
}

