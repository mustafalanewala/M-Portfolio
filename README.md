# Mustafa Lanewala - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and optimized performance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid interactions
- **Theme Support**: Dark/light mode with system preference detection
- **Performance Optimized**: Code splitting, lazy loading, service worker
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **PWA Ready**: Service worker for offline functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis
- **Analytics**: Vercel Analytics
- **SEO**: Next SEO

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mustafalanewala/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.*          # Favicons
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots
│   └── sw.js             # Service worker
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   └── *.tsx        # Page sections
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript interfaces
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Colors & Theme

Edit `src/app/globals.css` to customize the color scheme and design tokens.

### Content

Update personal information in the respective components:

- `src/components/Hero.tsx` - Name, title, social links
- `src/components/About.tsx` - Bio and personal details
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Technical skills
- `src/components/Contact.tsx` - Contact information

### SEO & Metadata

Update site metadata in `src/app/layout.tsx`:

- Title, description, keywords
- Open Graph and Twitter meta tags
- Structured data (JSON-LD)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform supporting Next.js:

- Netlify
- Railway
- DigitalOcean App Platform

## 🔍 SEO & Performance

- **Core Web Vitals**: Optimized for speed and user experience
- **SEO**: Comprehensive meta tags, sitemap, robots.txt
- **Performance**: Code splitting, lazy loading, optimized images
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📱 Progressive Web App (PWA)

- Installable on mobile devices
- Offline functionality via service worker
- Native app-like experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Contact

**Mustafa Lanewala**

- Email: contact@mustafalanewala.dev
- LinkedIn: [mustafalanewala](https://linkedin.com/in/mustafalanewala)
- GitHub: [mustafalanewala](https://github.com/mustafalanewala)
- Website: [mustafalanewala.dev](https://mustafalanewala.dev)

---

Built with ❤️ by Mustafa Lanewala
