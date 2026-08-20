import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Syne } from "next/font/google"
import { Toaster } from "react-hot-toast"
import { registerServiceWorker } from "@/lib/serviceWorker"
import { THEME_INIT_SCRIPT } from "@/lib/theme"
import { SITE_URL, person, socials } from "@/data/profile"
import { buildStructuredData, keywords } from "@/lib/seo"

/**
 * Self-hosted at build time. The previous `@import url(fonts.googleapis.com)`
 * inside globals.css forced a render-blocking chain — stylesheet, then Google's
 * CSS, then the font files, each on a fresh connection — which delayed LCP.
 * next/font emits the @font-face locally with size-adjust metrics to stop the
 * swap from shifting layout.
 */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
})

const title = `${person.name} | ${person.jobTitle}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${person.name}`,
  },
  description: person.summary,
  keywords,
  applicationName: `${person.name} Portfolio`,
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.ico", sizes: "48x48" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "profile",
    firstName: person.givenName,
    lastName: person.familyName,
    username: "mustafalanewala",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: SITE_URL,
    siteName: `${person.name} Portfolio`,
    title,
    description: person.summary,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: person.summary,
    creator: "@mustafa_l53",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  category: "technology",
  other: {
    "profile:username": "mustafalanewala",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Build timestamp — gives crawlers an honest `dateModified` per deploy.
  const structuredData = buildStructuredData(new Date().toISOString())

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies the stored theme before first paint — prevents a white
            flash for dark-mode visitors. Must stay ahead of any styles. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        {/* Consolidated Structured Data Engine */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (${registerServiceWorker.toString()})();
            `,
          }}
        />
      </body>
    </html>
  )
}
