"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { SkillCategory } from "@/types/portfolio"
import { memo } from "react"
import { revealItem, revealItemAt, revealSection } from "@/lib/motion"

const SparkleIcon = memo(function SparkleIcon() {
  return <Sparkles className="w-5 h-5 text-primary" />
})

const skills: SkillCategory = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Python", "Django", "REST API", "Express.js"],
  Database: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "SQLite"],
  Tools: ["Docker", "Git", "Figma", "AWS", "VS Code"],
  "AI Tools": ["ChatGPT", "GitHub Copilot", "Claude Code", "Cursor", "Ollama"],
}

const Skills = memo(function Skills() {
  return (
    <section
      id="skills"
      className="section-container"
      aria-labelledby="skills-heading"
    >
      <motion.div {...revealSection}>
        <motion.h2
          className="section-title"
          {...revealItem}
          id="skills-heading"
        >
          <SparkleIcon />
          Skills
        </motion.h2>

        {/* 1 Column on mobile, 5 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-card rounded-xl border border-border p-4 md:p-5"
              {...revealItemAt(categoryIndex)}
            >
              <h3 className="font-semibold text-sm sm:text-base mb-3 text-foreground">
                {category}
              </h3>

              {/* Mobile: flex-wrap + gap-2 sits them side-by-side 
                Desktop: md:flex-col keeps your original vertical list
              */}
              <ul className="flex flex-wrap md:flex-col gap-x-3 gap-y-1.5 md:gap-y-1.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="skill-item text-sm whitespace-nowrap"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default Skills
