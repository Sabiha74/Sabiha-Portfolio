import React from "react";

interface TechIconProps {
  className?: string;
}

export function Html5Icon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.565-2.438L1.5 0zm17.09 4.471H5.41l.402 4.545h11.977l-.442 4.966-5.377 1.493-5.385-1.495-.294-3.298H3.75l.551 6.183 7.669 2.127 7.682-2.132 1.038-12.389z" fill="#E34F26" />
    </svg>
  );
}

export function Css3Icon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.565-2.438L1.5 0zm17.09 4.471H5.41l.402 4.545h11.977l-.442 4.966-5.377 1.493-5.385-1.495-.294-3.298H3.75l.551 6.183 7.669 2.127 7.682-2.132 1.038-12.389z" fill="#1572B6" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6 18.5c1.2.7 2.4.9 3.4.9 2.2 0 3.3-.9 3.3-2.6 0-1.5-.9-2.2-2.8-2.9-1.9-.7-3.1-1.6-3.1-3.6 0-2.4 1.8-3.7 4.5-3.7 1.3 0 2.4.3 3.3.7l-.6 2c-.8-.4-1.7-.7-2.7-.7-1.4 0-2.2.7-2.2 1.7 0 1.2.8 1.8 2.6 2.5 2.1.8 3.3 1.8 3.3 3.9 0 2.6-2 3.9-5.1 3.9-1.5 0-2.8-.3-3.8-.9l.6-2.2zm11.3 0c.9.5 2 .8 3.1.8 2.1 0 3.1-.9 3.1-2.7V6.9h2.3v9.8c0 3.1-1.9 4.8-5.3 4.8-1.5 0-2.9-.3-3.8-.8l.6-2.2z" fill="#000000" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M12.5 13.5c-.7-.4-1.3-.9-1.3-1.6 0-.8.7-1.4 1.8-1.4.9 0 1.7.3 2.3.8l.8-1.4c-.9-.6-2-1-3.2-1-2.2 0-3.7 1.3-3.7 3.1 0 1.6 1 2.5 2.7 3.2 1.4.5 1.9 1 1.9 1.7 0 .9-.8 1.5-2 1.5-1.1 0-2.2-.5-2.9-1.1l-.8 1.5c1 .8 2.3 1.2 3.7 1.2 2.4 0 3.9-1.3 3.9-3.2 0-1.8-1.2-2.7-2.9-3.3zM4 9.9h7.4v1.8H8.8v7.8H6.6v-7.8H4V9.9z" fill="#FFFFFF" />
    </svg>
  );
}

export function ReactIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.643-4.992-6.524v6.524h-1.68V7.5h1.68l5.373 7.027V7.5H19.5v10.143h-1.68zM9.54 7.5v10.143H7.86V7.5h1.68z" />
    </svg>
  );
}

export function CIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17c-3.87 0-7-3.13-7-7s3.13-7 7-7c2.04 0 3.88.88 5.18 2.29l-2.02 2.02C14.38 8.52 13.25 8 12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.25 0 2.38-.52 3.16-1.31l2.02 2.02C15.88 18.12 14.04 19 12 19z" fill="#A8B9CC" />
    </svg>
  );
}

export function CPlusPlusIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 2C4.48 2 0 6.48 0 12s4.48 10 10 10c3.73 0 7-2.04 8.7-5.1l-2.7-1.55C14.88 17.15 12.6 18.5 10 18.5c-3.58 0-6.5-2.92-6.5-6.5s2.92-6.5 6.5-6.5c2.6 0 4.88 1.35 6 3.15l2.7-1.55C17 3.04 13.73 2 10 2zm9 7v2h-2v2h2v2h2v-2h2v-2h-2V9h-2zm-3 0v2h-2v2h2v2h2v-2h2v-2h-2V9h-2z" fill="#00599C" />
    </svg>
  );
}

export function PythonIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.922 0c-3.176 0-5.016.326-5.886 1.157-.86.822-1.036 2.146-1.036 4.386v2.457h6.922v.878H3.344C1.94 8.878.784 9.993.42 11.455c-.415 1.666-.43 2.825 0 4.615.342 1.41 1.25 2.502 2.924 2.57h1.7v-2.317c0-1.892 1.64-3.486 3.578-3.486h6.9v-.879H8.6v-2.456c0-2.188.795-3.51 3.322-3.51 2.35 0 3.235.918 3.235 2.533v1.744h1.745c1.45 0 2.378.966 2.766 2.456.44 1.7.44 3.064 0 4.764-.344 1.328-1.316 2.456-2.766 2.456h-1.745v-2.318c0-1.892-1.64-3.486-3.578-3.486H4.978v.879H12v2.456c0 2.188-.795 3.51-3.322 3.51-2.35 0-3.235-.918-3.235-2.533v-1.744H3.7c-1.45 0-2.378-.966-2.766-2.456-.44-1.7-.44-3.064 0-4.764C1.278 8.04 2.25 6.912 3.7 6.912h1.7v2.318c0 1.892 1.64 3.486 3.578 3.486h6.9v.879H8.6v2.456c0 2.188.795 3.51 3.322 3.51 2.35 0 3.235-.918 3.235-2.533v-1.744h1.745c1.45 0 2.378-.966 2.766-2.456.44-1.7.44-3.064 0-4.764-.344-1.328-1.316-2.456-2.766-2.456h-1.745V3.912c0-1.892-1.64-3.486-3.578-3.486H8.6V-.425z" fill="#3776AB" />
      <circle cx="8.5" cy="4" r="1" fill="#FFFFFF" />
      <circle cx="15.5" cy="20" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function BootstrapIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path d="M7 6h5.3c1.7 0 2.9.4 3.7 1.1.8.7 1.2 1.7 1.2 2.8 0 1-.3 1.8-.9 2.4-.6.6-1.5 1-2.6 1.1v.1c1.4.1 2.4.6 3.1 1.3.7.8 1.1 1.8 1.1 3 0 1.3-.5 2.4-1.4 3.2-.9.8-2.3 1.2-4.2 1.2H7V6zm3.1 2.4v4h2.1c.9 0 1.6-.2 2-.6.4-.4.6-1 .6-1.7s-.2-1.2-.6-1.5c-.4-.3-1.1-.5-2-.5h-2.1v.3zm0 6.2v4.4h2.5c1 0 1.8-.2 2.3-.7.5-.5.7-1.2.7-2s-.2-1.4-.7-1.9c-.5-.5-1.3-.7-2.3-.7h-2.5v.9z" fill="#FFFFFF" />
    </svg>
  );
}

export function DaisyUiIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#1AD1A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="#1AD1A5" />
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    </svg>
  );
}

export function SassIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#CC6699" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.6 17.5c-1.3.4-3.5.5-4.7-.2-1.5-.9-1.6-2.5-1.1-3.6.4-1 1.4-1.7 2.4-2.2 1.8-.9 3.5-1.3 3.6-2.8 0-1.6-1.6-2.4-3.2-2.1-1.6.3-2.6 1.4-2.8 2.8h-1.8c.2-2.3 1.9-4.1 4.5-4.5 2.6-.4 5.1.7 5.2 3.6.1 2.2-1.7 3.2-3.5 4.1-1.4.7-2.3 1.3-2.6 2.1-.3.7-.1 1.6.8 2.1.9.5 2.4.4 3.4-.1l.6 1.5c-.2.2-.4.4-.8.7v-.4z" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#5FA04E" aria-hidden="true">
      <path d="M12 1.5l10.4 6v12L12 25.5 1.6 19.5v-12L12 1.5zm0 2.3L3.6 8.5v9.4l8.4 4.8 8.4-4.8V8.5L12 3.8z" />
      <path d="M12 6.5l6.5 3.75v7.5L12 21.5l-6.5-3.75v-7.5L12 6.5z" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V16h-2V8h2v2.2c.5-.7 1.4-1.2 2.5-1.2 1.7 0 3 1.3 3 3v4z" />
      <text x="12" y="16" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor" fontFamily="monospace">ex</text>
    </svg>
  );
}

export function LaravelIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF2D20" aria-hidden="true">
      <path d="M19.8 4.2L12.3.2c-.3-.2-.7-.2-1 0L3.8 4.2c-.3.2-.5.5-.5.9v8c0 .4.2.7.5.9l7.5 4c.2.1.3.1.5.1s.3 0 .5-.1l7.5-4c.3-.2.5-.5.5-.9v-8c0-.4-.2-.7-.5-.9zm-8 1.1l5.4 2.9-2.4 1.3-5.4-2.9 2.4-1.3zm-6 3.6l5.3 2.8v5.7L5.8 14.6V8.9zm7.3 8.5v-5.7l5.3-2.8v5.7l-5.3 2.8z" />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
      <path d="M23.546 10.93L13.067.452a1.503 1.503 0 00-2.128 0L8.83 2.56l3.328 3.327a1.78 1.78 0 011.64.44c.69.69.75 1.76.19 2.51l3.21 3.21a1.78 1.78 0 012.51.19c.7-.7.7-1.83 0-2.53l-3.16-3.16a1.78 1.78 0 01.44-1.64 1.78 1.78 0 012.52 0l4.03 4.03a1.503 1.503 0 010 2.13zm-13.6 4.41a1.78 1.78 0 01-2.51-.19l-3.21-3.21a1.78 1.78 0 01-.19-2.51l4.03-4.03a1.503 1.503 0 012.13 0l10.48 10.48a1.503 1.503 0 010 2.13l-4.03 4.03a1.503 1.503 0 01-2.13 0l-3.33-3.33a1.78 1.78 0 01-.44 1.64 1.78 1.78 0 01-2.52 0 1.78 1.78 0 010-2.52l3.16-3.16a1.78 1.78 0 01-.44-1.64c-.08-.09-.16-.17-.25-.25z" />
    </svg>
  );
}

export function GithubSkillIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function VsCodeIcon({ className = "w-6 h-6" }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#007ACC" aria-hidden="true">
      <path d="M23.15 2.587L18.21.21a1.49 1.49 0 0 0-1.704.29l-9.46 8.79-4.78-3.64a.88.88 0 0 0-1.18.09l-1.39 1.39a.88.88 0 0 0 0 1.24l3.86 3.86-3.86 3.86a.88.88 0 0 0 0 1.24l1.39 1.39a.88.88 0 0 0 1.18.09l4.78-3.64 9.46 8.79a1.49 1.49 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.063V3.937a1.5 1.5 0 0 0-.85-1.35zM18 17.3l-6.8-6.3L18 4.7v12.6z" />
    </svg>
  );
}

export function renderTechIcon(name: string, className = "w-6 h-6") {
  const normalized = name.toLowerCase().replace(/[^a-z0-9+]/g, "");

  switch (normalized) {
    case "html5":
    case "html":
      return <Html5Icon className={className} />;
    case "css3":
    case "css":
      return <Css3Icon className={className} />;
    case "javascript":
    case "js":
      return <JavaScriptIcon className={className} />;
    case "typescript":
    case "ts":
      return <TypeScriptIcon className={className} />;
    case "react":
      return <ReactIcon className={className} />;
    case "nextjs":
    case "next":
      return <NextjsIcon className={className} />;
    case "c":
      return <CIcon className={className} />;
    case "c++":
    case "cplusplus":
    case "cpp":
      return <CPlusPlusIcon className={className} />;
    case "python":
      return <PythonIcon className={className} />;
    case "tailwindcss":
    case "tailwind":
      return <TailwindIcon className={className} />;
    case "bootstrap":
      return <BootstrapIcon className={className} />;
    case "daisyui":
      return <DaisyUiIcon className={className} />;
    case "sass":
    case "scss":
      return <SassIcon className={className} />;
    case "figma":
      return <FigmaIcon className={className} />;
    case "nodejs":
    case "node":
      return <NodejsIcon className={className} />;
    case "expressjs":
    case "express":
      return <ExpressIcon className={className} />;
    case "laravel":
      return <LaravelIcon className={className} />;
    case "git":
      return <GitIcon className={className} />;
    case "github":
      return <GithubSkillIcon className={className} />;
    case "vscode":
    case "visualstudiocode":
      return <VsCodeIcon className={className} />;
    default:
      return null;
  }
}

