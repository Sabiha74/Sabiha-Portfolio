/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Fix: lucide-react v1 calls createContext() at module level.
    // When a Server Component (like /projects/[slug]/page.tsx) imports lucide-react,
    // Webpack evaluates the module under the react-server bundle condition which
    // does NOT expose createContext — making the module factory undefined and
    // causing "__webpack_modules__[moduleId] is not a function" at runtime.
    // optimizePackageImports rewrites barrel imports to direct sub-path imports
    // before Webpack processes them, bypassing the module-level createContext call.
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;

