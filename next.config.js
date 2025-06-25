// next.config.js
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Webpack alias for production/Vercel
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },

  // Turbopack alias for local dev
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
};

export default nextConfig;