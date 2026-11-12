import React from "react";
import { ShoppingCart, Dumbbell, Layers, TrendingUp, Calendar, Code2, Sparkles } from "lucide-react";

interface ProjectThumbnailProps {
  id: string;
  title: string;
  className?: string;
  size?: "card" | "hero";
}

export function ProjectThumbnail({ id, title, className = "", size = "card" }: ProjectThumbnailProps) {
  const isHero = size === "hero";

  switch (id) {
    case "bazardor":
      return (
        <div
          className={`relative w-full ${
            isHero ? "h-64 sm:h-80 md:h-96" : "h-52"
          } bg-gradient-to-br from-[#100D18] via-[#1E1930] to-[#171323] flex flex-col items-center justify-center p-6 text-center border-b border-[#342B49] overflow-hidden ${className}`}
        >
          {/* Subtle lavender ambient radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lavender-400/10 via-transparent to-transparent pointer-events-none" />

          {/* Decorative price tracking grid graphic */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#B69CFF_1px,transparent_1px),linear-gradient(to_bottom,#B69CFF_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Icon Badge */}
          <div
            className={`${
              isHero ? "w-16 h-16 mb-4" : "w-12 h-12 mb-3"
            } rounded-2xl bg-lavender-400/15 text-lavender-300 border border-lavender-400/30 flex items-center justify-center shadow-lg shadow-lavender-500/10 group-hover:scale-105 transition-transform duration-300`}
          >
            <ShoppingCart className={isHero ? "w-8 h-8" : "w-6 h-6"} />
          </div>

          {/* Title and Tagline */}
          <div className={`font-bold ${isHero ? "text-xl sm:text-2xl" : "text-base"} text-lavender-200 tracking-tight`}>
            বাজার দর &bull; BazarDor
          </div>
          <div className={`${isHero ? "text-sm mt-2 max-w-md" : "text-xs mt-1"} text-[#B9B0CC]`}>
            Market-Price Tracking &amp; Price Comparison
          </div>

          {/* Pill Highlights */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#171323] text-lavender-300 border border-[#342B49] flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span>চাল, ডাল, তেল, সবজি, মাছ, মাংস</span>
            </span>
            {isHero && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#171323] text-lavender-300 border border-[#342B49] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-lavender-400" />
                <span>Next.js &bull; MongoDB &bull; Better Auth</span>
              </span>
            )}
          </div>
        </div>
      );

    case "fitlog":
      return (
        <div
          className={`relative w-full ${
            isHero ? "h-64 sm:h-80 md:h-96" : "h-52"
          } bg-gradient-to-br from-[#100D18] via-[#1E1930] to-[#171323] flex flex-col items-center justify-center p-6 text-center border-b border-[#342B49] overflow-hidden ${className}`}
        >
          {/* Subtle lavender ambient radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lavender-400/10 via-transparent to-transparent pointer-events-none" />

          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#B69CFF_1px,transparent_1px),linear-gradient(to_bottom,#B69CFF_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Icon Badge */}
          <div
            className={`${
              isHero ? "w-16 h-16 mb-4" : "w-12 h-12 mb-3"
            } rounded-2xl bg-lavender-400/15 text-lavender-300 border border-lavender-400/30 flex items-center justify-center shadow-lg shadow-lavender-500/10 group-hover:scale-105 transition-transform duration-300`}
          >
            <Dumbbell className={isHero ? "w-8 h-8" : "w-6 h-6"} />
          </div>

          {/* Title and Tagline */}
          <div className={`font-bold ${isHero ? "text-xl sm:text-2xl" : "text-base"} text-lavender-200 tracking-tight`}>
            FitLog
          </div>
          <div className={`${isHero ? "text-sm mt-2 max-w-md" : "text-xs mt-1"} text-[#B9B0CC]`}>
            Workout Library &amp; Daily Routine Planner
          </div>

          {/* Pill Highlights */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#171323] text-lavender-300 border border-[#342B49] flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-lavender-400" />
              <span>Daily 5-Exercise Routine Plan</span>
            </span>
            {isHero && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#171323] text-lavender-300 border border-[#342B49] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-lavender-400" />
                <span>Next.js &bull; DaisyUI &bull; LocalStorage</span>
              </span>
            )}
          </div>
        </div>
      );

    case "devstack":
      return (
        <div
          className={`relative w-full ${
            isHero ? "h-64 sm:h-80 md:h-96" : "h-52"
          } bg-gradient-to-br from-[#100D18] via-[#1E1930] to-[#171323] flex flex-col items-center justify-center p-6 text-center border-b border-[#342B49] overflow-hidden ${className}`}
        >
          {/* Subtle lavender ambient radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lavender-400/10 via-transparent to-transparent pointer-events-none" />

          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#B69CFF_1px,transparent_1px),linear-gradient(to_bottom,#B69CFF_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Icon Badge */}
          <div
            className={`${
              isHero ? "w-16 h-16 mb-4" : "w-12 h-12 mb-3"
            } rounded-2xl bg-lavender-400/15 text-lavender-300 border border-lavender-400/30 flex items-center justify-center shadow-lg shadow-lavender-500/10 group-hover:scale-105 transition-transform duration-300`}
          >
            <Layers className={isHero ? "w-8 h-8" : "w-6 h-6"} />
          </div>

          {/* Title and Tagline */}
          <div className={`font-bold ${isHero ? "text-xl sm:text-2xl" : "text-base"} text-lavender-200 tracking-tight`}>
            DevStack
          </div>
          <div className={`${isHero ? "text-sm mt-2 max-w-md" : "text-xs mt-1"} text-[#B9B0CC]`}>
            Technology Explorer &amp; Custom Stack Builder
          </div>

          {/* Pill Highlights */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#171323] text-lavender-300 border border-[#342B49] flex items-center gap-1.5">
              <Code2 className="w-3 h-3 text-lavender-400" />
              <span>Tool Evaluation &amp; Stack Curation</span>
            </span>
            {isHero && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#171323] text-lavender-300 border border-[#342B49] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-lavender-400" />
                <span>React &bull; TypeScript &bull; Vite</span>
              </span>
            )}
          </div>
        </div>
      );

    default:
      return (
        <div
          className={`w-full ${
            isHero ? "h-64 sm:h-80" : "h-52"
          } bg-[#1E1930] flex flex-col items-center justify-center text-[#B9B0CC] text-xs p-6 border-b border-[#342B49] ${className}`}
        >
          <div className="w-12 h-12 rounded-xl bg-[#171323] border border-[#342B49] flex items-center justify-center text-lavender-300 mb-2">
            <Layers className="w-6 h-6" />
          </div>
          <span className="font-semibold text-lavender-200">{title}</span>
        </div>
      );
  }
}
