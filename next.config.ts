import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Playwright builds into its own directory (with mock EmailJS keys) so it never
  // overwrites the real .next build. See playwright.config.ts.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
