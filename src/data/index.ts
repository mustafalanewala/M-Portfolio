import { Project, Design } from "../types"

export const projects: Project[] = [
  {
    id: 1,
    title: "M-Tasks",
    description:
      "MTask is an innovative task management platform designed to streamline productivity for individuals and teams.",
    imageUrl: "MTasks.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "Redux",
      "Axios",
      "Firebase",
    ],
    link: "https://mtasks.vercel.app",
  },
  {
    id: 2,
    title: "BlogBox",
    description:
      "BlogBox is sleek and modern blogging platform that empowers users to create, share, and manage their own blogs with ease.",
    imageUrl: "BlogBox.png",
    technologies: ["React", "Appwrite", "Tailwind", "JavaScript", "Redux"],
    link: "https://blogsbox.vercel.app",
  },
  {
    id: 3,
    title: "SkAttireHub",
    description:
      "Created a responsive clothing e-commerce website for Skattirehub offering seamless navigation and secure payments.",
    imageUrl: "SkAttireHub.png",
    technologies: ["WooCommerce", "Wordpress", "SEO", "Payment Gateway"],
    link: "https://skattirehub.in",
  },
  {
    id: 4,
    title: "MsyncAI",
    description:
      "MsyncAI is AI-powered website generator, with instant live previews and downloadable project files.",
    imageUrl: "MsyncAI.png",
    technologies: [
      "Gen AI",
      "React",
      "TypeScript",
      "Tailwind",
      "React-Dom",
    ],
    link: "https://msyncai.vercel.app",
  },
  {
    id: 5,
    title: "Elysium",
    description: "Elysium is a Wallpaper App that offers high-quality wallpapers free of cost.",
    imageUrl: "Elysium.png",
    technologies: ["ReactNative", "Expo", "Typescript", "Axios", "Unsplash"],
    link: "https://github.com/mustafalanewala/Elysium",
  },
  {
    id: 6,
    title: "MxStream",
    description:
      "Enginered full backend for scalable multimedia platform inspired by YouTube and Twitter.",
    imageUrl: "MxStream.png",
    technologies: ["JavaScript", "Node.js", "Express", "Cloudinary", "MongoDB"],
    link: "https://github.com/mustafalanewala/MxStream",
  },
  {
    id: 7,
    title: "Crime Detection Model",
    description:
      "This project uses machine learning to predict crime hotspots, types, and timings based on spatial and temporal crime data.",
    imageUrl: "CrimePrediction.png",
    technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    link: "https://github.com/mustafalanewala/Crime-Detection",
  },
]

export const designs: Design[] = [
  {
    id: 1,
    title: "Smoothie Bowl",
    mediaType: "video",
    mediaPath: "SmoothieBowl.mp4",
  },
  {
    id: 2,
    title: "AetherX",
    mediaType: "image",
    mediaPath: "AetherX.png",
  },
  {
    id: 3,
    title: "Ethereal Essence",
    mediaType: "image",
    mediaPath: "EtherealEssence.png",
  },
  {
    id: 4,
    title: "ExoVanguard Prime",
    mediaType: "video",
    mediaPath: "ExoVanguard Prime.mp4",
  },
  {
    id: 5,
    title: "Bento Grid",
    mediaType: "image",
    mediaPath: "BentoGrid.png",
  },
  {
    id: 6,
    title: "Ice Cream Transition",
    mediaType: "video",
    mediaPath: "IceCream.mp4",
  },
  {
    id: 7,
    title: "Balenciaga",
    mediaType: "video",
    mediaPath: "Balenciaga.mp4",
  },
  {
    id: 8,
    title: "MWatch",
    mediaType: "image",
    mediaPath: "MWatch.png",
  },
]
