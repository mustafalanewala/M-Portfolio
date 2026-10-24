"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { skills } from "@/data/profile"
import { memo } from "react"
import { revealItem, revealItemAt, revealSection } from "@/lib/motion"

const SparkleIcon = memo(function SparkleIcon() {
  return <Sparkles className="w-5 h-5 text-primary" />
})

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

        {/* 1 column on mobile, 2 on small screens, 3 (two rows of three) from tablet up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-card rounded-xl border border-border p-4 md:p-5"
              {...revealItemAt(categoryIndex)}
            >
              <h3 className="font-semibold text-sm sm:text-base mb-3 text-foreground">
                {category}
              </h3>

              {/* Mobile: items sit side-by-side; from sm up they stack as a vertical list */}
              <ul className="flex flex-wrap sm:flex-col gap-x-3 gap-y-1.5">
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
