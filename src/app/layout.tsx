import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  metadataBase: new URL("https://mustafalanewala.dev"),
  title: {
    default: "Mustafa Lanewala | AI & Full Stack Engineer | Portfolio",
    template: "%s | Mustafa Lanewala",
  },
  description:
    "Mustafa Lanewala - 21-year-old AI & Full Stack Engineer with 3+ years of experience. Founder & CEO of Mx Solution. Expert in Next.js, React, Node.js, Python, AI/ML, and scalable web applications. Based in India, available globally.",
  keywords: [
    "Mustafa Lanewala",
    "AI Engineer",
    "Full Stack Developer",
    "Product Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Software Engineer",
    "Mx Solution",
    "CEO",
    "Founder",
    "Portfolio",
    "India",
    "Microservices Architecture",
    "UI/UX Design",
    "Product Management",
  ],
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
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    url: "https://mustafalanewala.dev",
    siteName: "Mustafa Lanewala Portfolio",
    title: "Mustafa Lanewala | AI & Full Stack Engineer",
    description:
      "Experienced AI & Full Stack Engineer specializing in scalable web applications, AI/ML solutions, and product development. Founder & CEO of Mx Solution.",
    images: [
      {
        url: "https://mustafalanewala.dev/website.png",
        width: 1200,
        height: 630,
        alt: "Mustafa Lanewala - AI & Full Stack Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Lanewala | AI & Full Stack Engineer",
    description:
      "AI & Full Stack Engineer with 3+ years of experience. Building scalable applications & AI-powered products.",
    images: ["https://mustafalanewala.dev/website.png"],
    creator: "@mustafalanewala",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mustafalanewala.dev",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mustafalanewala.dev/#person",
    name: "Mustafa Lanewala",
    url: "https://mustafalanewala.dev",
    image: "https://mustafalanewala.dev/website.png",
    sameAs: [
      "https://github.com/mustafalanewala",
      "https://linkedin.com/in/mustafalanewala",
    ],
    jobTitle: "AI & Full Stack Engineer",
    description:
      "21-year-old AI & Full Stack Engineer with 3+ years of experience building scalable web applications, AI/ML solutions, and microservices architecture. Founder & CEO of Mx Solution.",
    worksFor: {
      "@type": "Organization",
      name: "Mx Solution",
      url: "https://mustafalanewala.dev",
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
      "JavaScript",
      "Microservices Architecture",
      "UI/UX Design",
      "Product Management",
      "Web Development",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-Taught Developer",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@mustafalanewala.dev",
      contactType: "Professional",
    },
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mustafalanewala.dev/#website",
    url: "https://mustafalanewala.dev",
    name: "Mustafa Lanewala Portfolio",
    description:
      "Official portfolio website showcasing projects, experience, and skills of Mustafa Lanewala - AI & Full Stack Engineer",
    inLanguage: "en-US",
    author: {
      "@id": "https://mustafalanewala.dev/#person",
    },
  }

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://mustafalanewala.dev/#profilepage",
    url: "https://mustafalanewala.dev",
    mainEntity: {
      "@id": "https://mustafalanewala.dev/#person",
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <link rel="canonical" href="https://mustafalanewala.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
      </head>
      <body className="transition-colors duration-300">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  )
}