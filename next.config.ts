import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Playwright builds into its own directory (with mock EmailJS keys) so it never
  // overwrites the real .next build. See playwright.config.ts.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Dev only: let phones/tablets on the local network load the dev server's scripts.
  // Without this, Next.js blocks /_next/* for LAN IPs, the page never hydrates,
  // the theme toggle is dead and every scroll-reveal block stays invisible.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*", "*.local"],
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
