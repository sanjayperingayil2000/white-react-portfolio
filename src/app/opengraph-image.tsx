import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.fullName} — ${profile.headline[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark-theme tokens from DESIGN_SYSTEM.md (ImageResponse can't read CSS variables).
const bg = "#0c0c0e";
const text = "#f4f4f5";
const muted = "#acacb5";
const accent = "#2dd4bf";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: `radial-gradient(circle at 85% 15%, rgba(45, 212, 191, 0.22), transparent 45%), radial-gradient(circle at 10% 90%, rgba(113, 113, 122, 0.18), transparent 40%), ${bg}`,
          color: text,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: accent, letterSpacing: 2, textTransform: "uppercase" }}>
          {profile.headline[0]}
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 600, marginTop: 16, lineHeight: 1.05 }}>
          {profile.fullName}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: muted, marginTop: 24 }}>
          {profile.headline.slice(1).join("  ·  ")}
        </div>
      </div>
    ),
    size,
  );
}
