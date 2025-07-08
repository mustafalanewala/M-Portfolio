import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"


export const metadata: Metadata = {
  title: "Mustafa Lanewala | Portfolio",
  description: "Official portfolio website of Mustafa Lanewala, showcasing projects, designs, and more.",
  keywords: "Mustafa, Lanewala, Portfolio, Website, Mustafa Lanewala, Full Stack Developer, Product Engineer",
  authors: [{ name: "Mustafa Lanewala", url: "https://mustafalanewala.vercel.app" }],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicon.svg",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mustafalanewala.vercel.app",
    title: "Mustafa Lanewala | Portfolio",
    description:
      "Official portfolio website of Mustafa Lanewala, showcasing projects, designs, and more.",
    images: [
      {
        url: "https://mustafalanewala.vercel.app/website.png",
        width: 800,
        height: 600,
        alt: "Mustafa Lanewala Portfolio",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="J40K-bGQWKTxNnp_8t6M7S0xn76akjELnU10Db5jaEk"
        />
        <meta name="robots" content="index, follow" />
      </head>
      <Toaster position="top-right" reverseOrder={false} />
      <body className="flex justify-center items-center bg-black">{children}</body>
    </html>
  )
}
