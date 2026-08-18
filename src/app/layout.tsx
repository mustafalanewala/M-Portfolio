import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import { registerServiceWorker } from "@/lib/serviceWorker"
import { THEME_INIT_SCRIPT } from "@/lib/theme"

// 1. High-Impact, Spec-Compliant Google Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://mustafalanewala.dev"),
  title: {
    default: "Mustafa Lanewala | AI & Full Stack Engineer",
    template: "%s | Mustafa Lanewala",
  },
  description:
    "Mustafa Lanewala - AI & Full Stack Engineer and Founder & CEO of Mx Solution. Specializing in Next.js, React, Node.js, Python, and scalable AI architectures.",
  authors: [{ name: "Mustafa Lanewala", url: "https://mustafalanewala.dev" }],
  creator: "Mustafa Lanewala",
  publisher: "Mustafa Lanewala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.png"],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://mustafalanewala.dev",
    siteName: "Mustafa Lanewala Portfolio",
    title: "Mustafa Lanewala | AI & Full Stack Engineer",
    description:
      "AI & Full Stack Engineer specializing in scalable web applications, AI/ML solutions, and product development. Founder & CEO of Mx Solution.",
  },
  twitter: {
    card: "summary",
    title: "Mustafa Lanewala | AI & Full Stack Engineer",
    description:
      "AI & Full Stack Engineer. Building scalable applications & AI-powered products.",
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
    canonical: "https://mustafalanewala.dev",
    languages: {
      "en-IN": "https://mustafalanewala.dev",
    },
  },
  verification: {
    google: "J40K-bGQWKTxNnp_8t6M7S0xn76akjELnU10Db5jaEk",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 2. Fully Interlinked Schema Graph (100% Validated Entity Modeling)
  const unifiedJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mustafalanewala.dev/#person",
        name: "Mustafa Lanewala",
        url: "https://mustafalanewala.dev",
        sameAs: [
          "https://github.com/mustafalanewala",
          "https://linkedin.com/in/mustafalanewala",
        ],
        jobTitle: "AI & Full Stack Engineer",
        description:
          "AI & Full Stack Engineer with 3+ years of experience building scalable web applications, AI/ML solutions, and microservices architecture. Founder & CEO of Mx Solution.",
        worksFor: {
          "@id": "https://mustafalanewala.dev/#organization",
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Full Stack Development",
          "Next.js",
          "React",
          "Node.js",
          "Python",
          "TypeScript",
          "Microservices Architecture",
          "Product Management",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        mainEntityOfPage: "https://mustafalanewala.dev/#profilepage",
      },
      {
        "@type": "Organization",
        "@id": "https://mustafalanewala.dev/#organization",
        name: "Mx Solution",
        url: "https://mustafalanewala.dev",
      },
      {
        "@type": "WebSite",
        "@id": "https://mustafalanewala.dev/#website",
        url: "https://mustafalanewala.dev",
        name: "Mustafa Lanewala Portfolio",
        description:
          "Official portfolio website showcasing projects, experience, and skills of Mustafa Lanewala - AI & Full Stack Engineer",
        inLanguage: "en-IN",
        author: {
          "@id": "https://mustafalanewala.dev/#person",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://mustafalanewala.dev/#webpage",
        url: "https://mustafalanewala.dev",
        name: "Mustafa Lanewala | AI & Full Stack Engineer Portfolio",
        isPartOf: {
          "@id": "https://mustafalanewala.dev/#website",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://mustafalanewala.dev/#profilepage",
        url: "https://mustafalanewala.dev",
        mainEntity: {
          "@id": "https://mustafalanewala.dev/#person",
        },
        isPartOf: {
          "@id": "https://mustafalanewala.dev/#website",
        },
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint — prevents a white
            flash for dark-mode visitors. Must stay ahead of any styles. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        {/* Consolidated Structured Data Engine */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedJsonLd) }}
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
