"use client"

import { motion } from "framer-motion"
import { Card } from "../../components/ui/card"
import { Briefcase, GraduationCap, TreePalm } from "lucide-react"

export function BioCard({ className = "" }: { className?: string }) {
  const bioData = [
    {
      icon: GraduationCap,
      title: "B.Tech CSE (AI and DS)",
      description:
        "Currently pursuing B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence and Data Science.",
    },
    {
      icon: Briefcase,
      title: "Product Engineer at Cleverflow",
      description:
        "Currently leading Beem Card development for digital networking, with prior product management experience for Artifacts.",
    },
    {
      icon: TreePalm,
      title: "Hobbies",
      description:
        "I enjoy coding, traveling, exploring new tech, while finding peace in my spiritual practices.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      <Card className="card h-auto flex flex-col justify-between border-2 border-neutral-600 backdrop-blur-sm">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">About Me</h2>
          {bioData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 text-white">
              <div className="flex-shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-md font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
