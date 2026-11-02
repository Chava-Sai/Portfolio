/** @type {import('next').NextConfig} */

// The same build has to work in two places:
//   GitHub Pages — served from a subpath, chava-sai.github.io/Portfolio
//   Vercel       — served from the domain root
// Vercel sets VERCEL=1 during its builds, so key the basePath off that.
// NEXT_PUBLIC_BASE_PATH can still override either case by hand.
const isVercel = process.env.VERCEL === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isVercel ? "" : "/Portfolio");

// Vercel injects the project's real production domain (the custom one once
// it's attached, otherwise the generated *.vercel.app). Reading it beats
// hardcoding a guess, which silently points canonical/OG at a dead host.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost
    ? `https://${vercelHost}`
    : "https://chava-sai.github.io/Portfolio");

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // next/image optimisation needs a server; a static export serves files as-is
    unoptimized: true,
  },
  // Inlined at build time so client code and metadata agree with the host.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
