/** @type {import('next').NextConfig} */
// Static export so the site keeps living at chava-sai.github.io/Portfolio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Portfolio";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // next/image optimisation needs a server; static export serves the files as-is
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
