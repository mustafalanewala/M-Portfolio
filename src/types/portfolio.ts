// TypeScript interfaces for portfolio data structures

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  [category: string]: string[];
}

export interface ContactItem {
  label: string;
  href: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}