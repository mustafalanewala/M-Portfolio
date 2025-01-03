import { Project, Design } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "M-Tasks",
    description: "MTask is an innovative task management platform designed to streamline productivity for individuals and teams.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    technologies: ["React.js", "JavaScript", "TailwindCSS", "Redux", "Axios", "Firebase"],
    link: "https://mtasks.vercel.app"
  },
  {
    id: 2,
    title: "BlogBox",
    description: "BlogBox is sleek and modern blogging platform that empowers users to create, share, and manage their own blogs with ease.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    technologies: ["React.js", "Appwrite", "Tailwind", "JavaScript", "Redux"],
    link: "https://blogsbox.vercel.app"
  },
  {
    id: 3,
    title: "SkAttireHub",
    description: "Created a responsive clothing e- commerce website for Skattirehub offering seamless navigation and secure payments.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    technologies: ["WooCommerce", "Wordpress"],
    link: "https://skattirehub.in"
  },
  {
    id: 4,
    title: "Crime Detection Model",
    description: "A modern e-commerce solution built with Next.js and TypeScript",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    technologies: ["Python", "JupiterNotebook"],
    link: "https://github.com/mustafalanewala/Crime-Detection"
  }
];

export const designs: Design[] = [
  {
    id: 1,
    title: "Smoothie Bowl",
    mediaType: "video",
    mediaPath: "d1.mp4"
  },
  {
    id: 2,
    title: "Ice Cream Transition",
    mediaType: "video",
    mediaPath: "d2.mp4"
  },
  {
    id: 3,
    title: "ExoVanguard Prime",
    mediaType: "video",
    mediaPath: "d3.mp4"
  }
];