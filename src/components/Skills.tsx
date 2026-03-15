"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"

const SparkleIcon = () => <Sparkles className="w-5 h-5 text-primary" />

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Python", "Django", "REST API", "Express.js"],
  Database: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "SQLite"],
  Tools: ["Docker", "Git", "Figma", "AWS", "VS Code"],
  "AI Tools": ["ChatGPT", "GitHub Copilot", "Claude Code", "Cursor", "Ollama"],
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="skills"
      className="section-container"
      ref={ref}
      aria-labelledby="skills-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="section-title flex items-center gap-2 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
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
              className="rounded-xl border border-border p-4 md:p-5 transition-colors hover:border-primary/40"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold text-sm sm:text-base mb-3 text-foreground">
                {category}
              </h3>

              {/* Mobile: flex-wrap + gap-2 sits them side-by-side 
                Desktop: md:flex-col keeps your original vertical list
              */}
              <ul className="flex flex-wrap md:flex-col gap-x-3 gap-y-1.5 md:gap-y-1.5">
                {items.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="text-sm text-muted-foreground whitespace-nowrap"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ x: 3, color: "hsl(var(--foreground))" }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
