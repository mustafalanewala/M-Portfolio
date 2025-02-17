"use client"

import { motion } from "framer-motion"
import { projects } from "../../data"
import { NeonGradientCard } from "@/components/ui/gradientcard"
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="bg-black container mx-auto px-6 py-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <NeonGradientCard className="max-w-md items-center justify-center bg-neutral-900">
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fill
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col flex-grow py-3">
                  <h2 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </NeonGradientCard>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
