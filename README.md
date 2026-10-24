# Mustafa Lanewala - Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS v4. Live at [mustafalanewala.tech](https://mustafalanewala.tech).

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, Figtree via `next/font`
- **Motion**: Framer Motion, Lenis
- **Icons**: Lucide React, React Feather
- **SEO**: Next.js Metadata API (incl. sitemap), JSON-LD, IndexNow

## 📦 Getting Started

```bash
git clone https://github.com/mustafalanewala/M-Portfolio.git
cd M-Portfolio
npm install
npm run dev
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run seo:ping` - Notify Bing and Yandex via IndexNow (run after a deploy is live)

## 🏗️ Project Structure

```
├── public/              # Icons, manifest, robots.txt, llms.txt, ai.txt, sw.js
├── scripts/             # IndexNow ping
└── src/
    ├── app/             # Layout, page, global styles, sitemap, Open Graph image
    ├── components/      # Page sections
    ├── data/profile.ts  # All personal facts in one place
    └── lib/             # SEO graph, motion presets, theme
```

## ✏️ Editing Content

- Update details in `src/data/profile.ts` (profile, socials, experience, education, skills). Keep every skill group the same length so the grid stays even.
- The hero tagline and About text live in `src/components/Hero.tsx` and `src/components/About.tsx`.
- When a fact changes, update `public/llms.txt` and `public/ai.txt` to match.
- When replacing icons, bump the `?v=` number in `src/app/layout.tsx` and `public/manifest.json`.

## 🚀 Deployment

Pushing to `main` deploys on Vercel. After a deploy is live:

1. Run `npm run seo:ping`
2. In Google Search Console, submit `sitemap.xml` and request indexing for the home page

## 📄 License

This project is private and proprietary.
