/** @type {import('next').NextConfig} */

// The same build has to work in two places:
//   GitHub Pages — served from a subpath, chava-sai.github.io/Portfolio
//   Vercel       — served from the domain root
// Vercel sets VERCEL=1 during its builds, so key the basePath off that.
// NEXT_PUBLIC_BASE_PATH can still override either case by hand.
const isVercel = process.env.VERCEL === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isVercel ? "" : "/Portfolio");

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isVercel
    ? "https://srinivasa-sai-chava.vercel.app"
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
