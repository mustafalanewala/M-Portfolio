import { motion } from "framer-motion"
import { ArrowUpRight, Briefcase } from "lucide-react"
import { memo } from "react"
import { ExperienceItem } from "@/types/portfolio"
import {
  hoverSlide,
  revealItem,
  revealItemAt,
  revealSection,
} from "@/lib/motion"

const BriefcaseIcon = memo(function BriefcaseIcon() {
  return <Briefcase className="w-5 h-5 text-primary" />
})

const experiences: ExperienceItem[] = [
  {
    title: "Founder & CEO",
    company: "Mx Solution",
    period: "Jan 2025 – Present",
    description:
      "We help brands transform ideas into scalable digital systems designed for maximum performance and real business results.",
    link: "https://www.mxsolution.in",
  },
  {
    title: "Product Engineer",
    company: "Ruby CRM",
    period: "Jun 2025 – Present",
    description:
      "Building features and driving frontend development for the UAE's top AI-powered real estate CRM.",
    link: "https://www.rubycrm.ai",
  },
  {
    title: "Product Engineer",
    company: "Cleverflow",
    period: "Mar 2024 – May 2025",
    description:
      "Led product management for Artifacts platform. Developed CRM-integrated invoices and ad templates.",
    link: "https://cleverflow.com",
  },
]

const Experience = memo(function Experience() {
  return (
    <section
      id="experience"
      className="section-container"
      aria-labelledby="experience-heading"
    >
      <motion.div {...revealSection}>
        <motion.h2
          className="section-title"
          {...revealItem}
          id="experience-heading"
        >
          <BriefcaseIcon />
          Experience
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              {...revealItemAt(index)}
              {...hoverSlide}
              className="group cursor-default"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {exp.title}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reveal-arrow text-link focus-ring"
                        aria-label={`Visit ${exp.company}`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base mb-2">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground shrink-0 order-first sm:order-last">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default Experience
