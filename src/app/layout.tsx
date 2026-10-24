import "./globals.css"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
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
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
})

const title = `${person.name} | ${person.jobTitle}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${person.name}`,
  },
  description: person.description,
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
  // ?v= busts the sticky favicon cache in Safari and Chrome — bump it whenever the icon changes.
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "32x32" },
      { url: "/icon.svg?v=3", type: "image/svg+xml" },
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png?v=3",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "profile",
    firstName: person.givenName,
    lastName: person.familyName,
    username: "mustafalanewala",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    url: SITE_URL,
    siteName: person.name,
    title,
    description: person.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: person.description,
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
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
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
