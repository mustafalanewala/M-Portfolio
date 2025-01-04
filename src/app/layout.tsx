import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mustafa Lanewala | Portfolio',
  description: 'Official portfolio website of Mustafa Lanewala, showcasing projects, designs, and more.',
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://mustafalanewala.vercel.app',
    title: 'Mustafa Lanewala | Portfolio',
    description: 'Official portfolio website of Mustafa Lanewala, showcasing projects, designs, and more.',
    images: [
      {
        url: 'https://mustafalanewala.vercel.app/website.png',
        width: 800,
        height: 600,
        alt: 'Mustafa Lanewala Portfolio',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
