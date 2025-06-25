// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Webpack alias (used on Vercel)
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },

  // Turbopack alias (used locally)
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
};

module.exports = nextConfig;
