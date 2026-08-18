/**
 * Single source of truth for every fact about the site owner.
 *
 * Rendered copy, JSON-LD, metadata and the AI-crawler files all read from
 * here. Search engines and LLMs weight an entity higher when the same facts
 * repeat identically across sources — and contradictions actively hurt, which
 * is how `ai.txt` ended up claiming a different age than the About section.
 */

export const SITE_URL = "https://mustafalanewala.dev"

export const person = {
  name: "Mustafa Lanewala",
  givenName: "Mustafa",
  familyName: "Lanewala",
  jobTitle: "AI & Full Stack Engineer",
  headline: "AI & Full Stack Engineer | Founder & CEO of Mx Solution",
  email: "contact@mustafalanewala.dev",
  yearsOfExperience: 3,
  country: "India",
  countryCode: "IN",
  locale: "en-IN",
  languages: ["English", "Hindi", "Gujarati"],
  summary:
    "Mustafa Lanewala is an AI & Full Stack Engineer with 3+ years of experience building scalable web applications, working on AI and automation, and designing microservices architecture. He is the Founder & CEO of Mx Solution and a Product Engineer at Ruby CRM.",
  interests: [
    "Traveling",
    "Photography",
    "Cooking",
    "Spending time with family",
  ],
} as const

export const socials = {
  github: "https://github.com/mustafalanewala",
  linkedin: "https://linkedin.com/in/mustafalanewala",
  instagram: "https://www.instagram.com/mustafa.lanewala",
} as const

export const organization = {
  name: "Mx Solution",
  url: "https://www.mxsolution.in",
  foundingDate: "2025-01",
  description:
    "Mx Solution helps brands transform ideas into scalable digital systems designed for maximum performance and real business results.",
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
      "We help brands transform ideas into scalable digital systems designed for maximum performance and real business results.",
  },
  {
    title: "Product Engineer",
    company: "Ruby CRM",
    companyUrl: "https://www.rubycrm.ai",
    startDate: "2025-06",
    period: "Jun 2025 – Present",
    description:
      "Building features and driving frontend development for the UAE's top AI-powered real estate CRM.",
  },
  {
    title: "Product Engineer",
    company: "Cleverflow",
    companyUrl: "https://cleverflow.com",
    startDate: "2024-03",
    endDate: "2025-05",
    period: "Mar 2024 – May 2025",
    description:
      "Led product management for Artifacts platform. Developed CRM-integrated invoices and ad templates.",
  },
]

export const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Python", "Django", "REST API", "Express.js"],
  Database: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "SQLite"],
  Tools: ["Docker", "Git", "Figma", "AWS", "VS Code"],
  "AI Tools": ["ChatGPT", "GitHub Copilot", "Claude Code", "Cursor", "Ollama"],
} as const

/** Flat, de-duplicated skill list used for `knowsAbout` and keywords. */
export const allSkills: string[] = Array.from(
  new Set(Object.values(skills).flat())
)

export const expertise = [
  "Artificial Intelligence",
  "Machine Learning",
  "Full Stack Development",
  "Microservices Architecture",
  "Product Management",
  "UI/UX Design",
  "Automation",
  "Scalable Web Applications",
]
