import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Set to true to allow TypeScript errors to block production builds
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set to true to allow ESLint errors to block production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
