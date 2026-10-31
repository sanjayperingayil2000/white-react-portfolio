import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.fullName,
    short_name: profile.shortName,
    description: site.description,
    start_url: "/",
    display: "browser",
    // Light-theme background; the dark theme is applied by the page itself.
    background_color: "#f5faff",
    theme_color: "#0284c7",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
