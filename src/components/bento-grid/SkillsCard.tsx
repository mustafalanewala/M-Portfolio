"use client"

import { motion } from "framer-motion"
import { Card } from "../../components/ui/card"
import { Star } from "lucide-react"
import { IconCloud } from "../../components/ui/icons"

const slugs = [
  "figma",
  "nextdotjs",
  "nodedotjs",
  "nginx",
  "react",
  "express",
  "framer",
  "django",
  "typescript",
  "canva",
  "postman",
  "mongodb",
  "cplusplus",
  "vercel",
  "sass",
  "html5",
  "postgresql",
  "appwrite",
  "redux",
  "tailwindcss",
  "css3",
  "git",
  "python",
  "visualstudiocode",
  "firebase",
  "javascript",
  "wordpress",
  "prisma",
  "drizzle",
  "docker",
]

export function SkillsCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      <Card className="card h-auto border-2 border-neutral-600 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <Star className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <div className="relative flex items-center justify-center max-w-lg overflow-hidden">
          <IconCloud iconSlugs={slugs} />
        </div>
      </Card>
    </motion.div>
  )
}
