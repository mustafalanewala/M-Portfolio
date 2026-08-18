import { ImageResponse } from "next/og"
import { SITE_URL, person, socials } from "@/data/profile"

export const alt = `${person.name} — ${person.jobTitle}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Generated at build time so social cards and AI previews always match the
 * live copy. Uses system-stack fonts only — no network fetch during build.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#000000",
        color: "#ffffff",
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#9a9a9a",
          }}
        >
          {person.jobTitle}
        </div>
        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 20,
            letterSpacing: -2,
          }}
        >
          {person.name}
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#c4c4c4",
            marginTop: 26,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Founder &amp; CEO of Mx Solution. Building scalable applications &amp;
          AI-powered products.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #262626",
          paddingTop: 28,
          fontSize: 26,
          color: "#9a9a9a",
        }}
      >
        <div style={{ display: "flex" }}>
          {SITE_URL.replace("https://", "")}
        </div>
        <div style={{ display: "flex" }}>
          {socials.github.replace("https://", "")}
        </div>
      </div>
    </div>,
    size
  )
}
