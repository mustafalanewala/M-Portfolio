import { motion } from "framer-motion"
import { ArrowUpRight, Layers } from "lucide-react"
import { memo } from "react"
import { Project } from "@/types/portfolio"
import {
  hoverSlide,
  revealItem,
  revealItemAt,
  revealSection,
} from "@/lib/motion"

const LayersIcon = memo(function LayersIcon() {
  return <Layers className="w-5 h-5 text-primary" />
})

const projects: Project[] = [
  {
    title: "Beem Cards",
    description:
      "Digital card platform with Django REST, PostgreSQL, React, Next.js.",
    link: "https://beem.cards/",
    tags: ["Django", "Next.js", "React.js"],
  },
  {
    title: "SkAttireHub",
    description:
      "E-commerce platform with Razorpay integration and inventory management.",
    link: "https://www.skattirehub.in/",
    tags: ["E-commerce", "Woocommerce", "Wordpress"],
  },
  {
    title: "Guidance Tamil Nadu",
    description: "Official investment portal for Guidance Tamil Nadu.",
    link: "https://investingintamilnadu.com/",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Mubarak Collection",
    description: "E-commerce website for a traditional Topis brand since 2011.",
    link: "https://mubarakcollection.in/",
    tags: ["E-commerce", "Next.js", "TypeScript"],
  },
]

const Portfolio = memo(function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-container"
      aria-labelledby="portfolio-heading"
    >
      <motion.div {...revealSection}>
        <motion.h2
          className="section-title"
          {...revealItem}
          id="portfolio-heading"
        >
          <LayersIcon />
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              {...revealItemAt(index)}
              {...hoverSlide}
              className="project-card group focus-ring flex items-start justify-between gap-4 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-lg"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {project.title}
                  </h3>
                  <span className="reveal-arrow text-link">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default Portfolio
