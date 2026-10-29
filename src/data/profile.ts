/**
 * Single source of truth for every fact about the site owner.
 *
 * Rendered copy, JSON-LD, metadata and the AI-crawler files all read from
 * here. Search engines and LLMs weight an entity higher when the same facts
 * repeat identically across sources — and contradictions actively hurt, which
 * is how `ai.txt` ended up claiming a different age than the About section.
 */

export const SITE_URL = "https://mustafalanewala.tech"

export const person = {
  name: "Mustafa Lanewala",
  givenName: "Mustafa",
  familyName: "Lanewala",
  jobTitle: "AI & Full Stack Engineer",
  headline: "AI & Full Stack Engineer | Founder & CEO of Mx Solution",
  yearsOfExperience: 2,
  locale: "en",
  languages: ["English"],
  description:
    "Mustafa Lanewala is an AI & Full Stack Engineer, Founder & CEO of Mx Solution and Product Engineer at Ruby CRM and Beem Cards.",
  summary:
    "Mustafa Lanewala is an AI & Full Stack Engineer with 2+ years of experience building scalable web applications, AI and automation solutions, and API integrations. He is the Founder & CEO of Mx Solution and a Product Engineer at Ruby CRM and Beem Cards.",
  interests: [
    "Traveling",
    "Photography",
    "Cooking",
    "Spending time with family",
  ],
} as const

export const socials = {
  github: "https://github.com/mustafalanewala",
  linkedin: "https://linkedin.com/in/mustafa-lanewala",
  instagram: "https://www.instagram.com/mustafa.lanewala",
  x: "https://x.com/mustafa_l53",
} as const

export const organization = {
  name: "Mx Solution",
  url: "https://www.mxsolution.in",
  foundingDate: "2025-01",
  description:
    "Mx Solution is a technology partner that builds custom software, e-commerce platforms, automation and SEO-driven websites for growing businesses.",
} as const

export interface Role {
  title: string
  company: string
  companyUrl: string
  startDate: string
  endDate?: string
  period: string
  description: string
}

export const roles: Role[] = [
  {
    title: "Founder & CEO",
    company: "Mx Solution",
    companyUrl: "https://www.mxsolution.in",
    startDate: "2025-01",
    period: "Jan 2025 – Present",
    description:
      "Founded and lead a technology studio that builds custom software, e-commerce platforms, automation and SEO-driven websites for growing businesses. Delivered a government investment portal and a shopify storefront for a beauty brand, along with commercial websites and business management systems.",
  },
  {
    title: "Product Engineer",
    company: "Ruby CRM",
    companyUrl: "https://www.rubycrm.ai",
    startDate: "2025-06",
    period: "Jun 2025 – Present",
    description:
      "Delivered 50+ core features across frontend, backend services, integrations and platform improvements. Worked on lead management, property listings, portal syndication and WhatsApp integration, turning product requirements into production-ready features.",
  },
  {
    title: "Product Engineer",
    company: "Beem Cards",
    companyUrl: "https://beem.cards",
    startDate: "2025-01",
    period: "Jan 2025 – Present",
    description:
      "Leading full-stack development of Beem Cards, a scalable digital smart card platform for professional networking, built with Django, PostgreSQL, React, Next.js and TypeScript.",
  },
]

export const education = {
  school: "ITM SLS University",
  degree: "B.Tech Computer Science",
  field: "Artificial Intelligence & Data Science",
  startDate: "2022",
  endDate: "2026",
  period: "2022 – 2026",
} as const

export const skills = {
  "Frontend & Mobile": [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React Native",
  ],
  "Backend & APIs": ["Node.js", "Express.js", "Python", "Django", "WebSockets"],
  Databases: ["PostgreSQL", "Supabase", "Prisma", "MongoDB", "Redis"],
  "Cloud & Dev Tools": ["AWS", "Firebase", "Docker", "Git & GitHub", "Postman"],
  "AI Engineering": [
    "Claude Code",
    "Ollama",
    "OpenRouter",
    "MCP",
    "Hugging Face",
  ],
  "Design & Growth": [
    "Figma",
    "UI/UX Design",
    "Technical SEO",
    "Shopify",
    "Payment Gateways",
  ],
} as const

/** Flat, de-duplicated skill list used for `knowsAbout` and keywords. */
export const allSkills: string[] = Array.from(
  new Set(Object.values(skills).flat())
)

export const expertise = [
  "Artificial Intelligence",
  "Machine Learning",
  "Full Stack Development",
  "API Integrations",
  "Product Management",
  "UI/UX Design",
  "Automation",
  "Scalable Web Applications",
]
