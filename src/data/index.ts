import { Project, Design } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with Next.js and TypeScript",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com"
  }
];

export const designs: Design[] = [
  {
    id: 1,
    title: "Mobile App Design",
    category: "UI/UX",
    mediaType: "image",
    mediaPath: "designs/mobile-app.jpg"
  }
];