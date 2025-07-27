"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Play, Pause, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

interface ProjectItem {
  id: string
  title: string
  description: string
  image: string
  gif?: string
  category: "project" | "design" | "concept"
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
}

const projectsData: ProjectItem[] = [
  {
    id: "p-1",
    title: "M-Tasks",
    description: "MTask is an innovative task management platform designed to streamline productivity for individuals and teams.",
    image: "MTasks.png",
    gif: undefined,
    category: "project",
    technologies: ["React", "JavaScript", "Tailwind", "Redux", "Axios", "Firebase"],
    liveUrl: "https://mtasks.vercel.app",
    githubUrl: "https://github.com/mustafalanewala/M-Task"
  },
  {
    id: "d-4",
    title: "ExoVanguard Prime",
    description: "A video design for ExoVanguard Prime, featuring dynamic motion graphics and visual storytelling.",
    image: "ExoVanguard.png",
    gif: "ExoVanguard Prime.gif",
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1442829907230346002/exovanguard-prime",
    githubUrl: undefined
  },
  {
    id: "p-2",
    title: "BlogBox",
    description: "BlogBox is sleek and modern blogging platform that empowers users to create, share, and manage their own blogs with ease.",
    image: "BlogBox.png",
    gif: undefined,
    category: "project",
    technologies: ["React", "Appwrite", "Tailwind", "JavaScript", "Redux"],
    liveUrl: "https://blogsbox.vercel.app",
    githubUrl: "https://github.com/mustafalanewala/BlogBox"
  },
  {
    id: "d-1",
    title: "Smoothie Bowl",
    description: "A video design showcasing a Smoothie Bowl, emphasizing smooth transitions and appealing visuals for culinary presentation.",
    image: "SmoothieBowl.png",
    gif: "SmoothieBowl.gif",
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1445708163811090992/smoothie-bowl",
    githubUrl: undefined
  },
  {
    id: "p-4",
    title: "MsyncAI",
    description: "MsyncAI is AI-powered website generator, with instant live previews and downloadable project files.",
    image: "MsyncAI.png",
    gif: undefined,
    category: "project",
    technologies: ["Gen AI", "React", "TypeScript", "Tailwind", "React-Dom"],
    liveUrl: "https://msyncai.vercel.app",
    githubUrl: "https://github.com/mustafalanewala/MsyncAI",
  },
  {
    id: "d-8",
    title: "BentoGrid",
    description: "A design showcasing modern BentoGrid, emphasizing clean and minimalist aesthetics.",
    image: "BentoGrid.png",
    gif: undefined,
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1445708163811090992/bentogrid",
    githubUrl: undefined
  },
  {
    id: "p-5",
    title: "Elysium",
    description: "Elysium is a Wallpaper App that offers high-quality wallpapers free of cost.",
    image: "Elysium.png",
    gif: undefined,
    category: "project",
    technologies: ["ReactNative", "Expo", "Typescript", "Axios", "Unsplash"],
    liveUrl: undefined,
    githubUrl: "https://github.com/mustafalanewala/Elysium"
  },
  {
    id: "d-7",
    title: "MWatch",
    description: "An image-based design for MWatch, focusing on the user interface and aesthetic of a modern smartwatch.",
    image: "MWatch.png",
    gif: undefined,
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1442829907230346002/mwatch",
    githubUrl: undefined
  },
  {
    id: "p-6",
    title: "MxStream",
    description: "Enginered full backend for scalable multimedia platform inspired by YouTube and Twitter.",
    image: "MxStream.png",
    gif: undefined,
    category: "project",
    technologies: ["JavaScript", "Node.js", "Express", "Cloudinary", "MongoDB"],
    liveUrl: undefined,
    githubUrl: "https://github.com/mustafalanewala/MxStream"
  },
  {
    id: "d-2",
    title: "AetherX",
    description: "An image-based design for AetherX, focusing on futuristic interfaces and detailed static elements.",
    image: "AetherX.png",
    gif: undefined,
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1441046856982665756/aetherx",
    githubUrl: undefined
  },
  {
    id: "p-7",
    title: "Crime Detection Model",
    description: "This project uses machine learning to predict crime hotspots, types, and timings based on spatial and temporal crime data.",
    image: "CrimePrediction.png",
    gif: undefined,
    category: "project",
    technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    liveUrl: undefined,
    githubUrl: "https://github.com/mustafalanewala/Crime-Detection"
  },
  {
    id: "d-3",
    title: "Ethereal Essence",
    description: "An image-based design for Ethereal Essence, conveying refined beauty through minimalist aesthetics.",
    image: "EtherealEssence.png",
    gif: undefined,
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1440988996373788204/ethereal-essence",
    githubUrl: undefined
  },
  {
    id: "p-3",
    title: "SkAttireHub",
    description: "Created a responsive clothing e-commerce website for Skattirehub offering seamless navigation and secure payments.",
    image: "SkAttireHub.png",
    gif: undefined,
    category: "project",
    technologies: ["WooCommerce", "Wordpress", "SEO", "Payment Gateway"],
    liveUrl: "https://skattirehub.in",
    githubUrl: undefined,
  },
  {
    id: "d-5",
    title: "Ice Cream Transition",
    description: "A video design showcasing an Ice Cream Transition, using animation for smooth and delightful visual effects.",
    image: "IceCream.png",
    gif: "IceCream.gif",
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1442039011845968196/ice-cream-transition",
    githubUrl: undefined
  },
  {
    id: "d-6",
    title: "Balenciaga",
    description: "A video design for Balenciaga, capturing luxury and modern aesthetics through sleek motion.",
    image: "Balenciaga.png",
    gif: "Balenciaga.gif",
    category: "design",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/community/file/1443919596373788204/balenciaga",
    githubUrl: undefined
  }
]

export default function ProjectsAndDesigns() {
  const [filter, setFilter] = useState<"all" | "project" | "design">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isGifPlaying, setIsGifPlaying] = useState<{ [key: string]: boolean }>({})

  const filteredProjects = projectsData.filter((item) => {
    const matchesFilter = filter === "all" || item.category === filter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.technologies && item.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())))
    return matchesFilter && matchesSearch
  })

  const toggleGif = (itemId: string) => {
    setIsGifPlaying((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start lg:items-center gap-4">
            <Link href="/">
              <Button variant="default" size="sm" className="bg-white text-gray-800 hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Projects & Designs
              </h1>
              <p className="text-gray-400 text-sm">Showcasing my latest work and creative projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={
                filter === "all"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border-gray-600 text-gray-800 hover:bg-gray-200"
              }
            >
              <Filter className="w-4 h-4 mr-2" />
              All ({projectsData.length})
            </Button>
            <Button
              variant={filter === "project" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("project")}
              className={
                filter === "project"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border-gray-600 text-gray-800 hover:bg-gray-200"
              }
            >
              Projects ({projectsData.filter((p) => p.category === "project").length})
            </Button>
            <Button
              variant={filter === "design" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("design")}
              className={
                filter === "design"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border-gray-600 text-gray-800 hover:bg-gray-200"
              }
            >
              Designs ({projectsData.filter((p) => p.category === "design").length})
            </Button>
          </div>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence>
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="aspect-video bg-gray-800">
                        <Image
                          src={isGifPlaying[item.id] && item.gif ? item.gif : item.image}
                          alt={item.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Play/Pause GIF Button */}
                      {item.gif && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="absolute top-3 right-3 bg-gray-100/60 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleGif(item.id)
                          }}
                        >
                          {isGifPlaying[item.id] ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        </Button>
                      )}

                      {/* Category Badge */}
                      <Badge
                        className={`absolute top-3 left-3 bg-neutral-800 text-purple-400 border-purple-500/30`}
                      >
                        {item.category === "project" ? "💻 Project" : "🎨 Design"}
                      </Badge>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-400">
                              {tech}
                            </Badge>
                          ))}
                          {item.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                              +{item.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {item.liveUrl && (
                          <Button
                            size="sm"
                            className="flex-1 bg-purple-600 hover:bg-purple-700"
                            onClick={() => window.open(item.liveUrl, "_blank")}
                          >
                            <ExternalLink className="w-3 h-3 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {item.githubUrl && (
                          <Button
                            size="sm"
                            className={`${item.liveUrl ? "" : "flex-1"} bg-purple-600 hover:bg-purple-700`}
                            onClick={() => window.open(item.githubUrl, "_blank")}
                          >
                            <Github className="w-3 h-3 " />
                            {item.liveUrl ? "" : "View Code"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              onClick={() => {
                setFilter("all")
                setSearchQuery("")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
