import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { memo } from "react"
import { education } from "@/data/profile"
import { revealItem, revealItemAt, revealSection } from "@/lib/motion"

const GraduationCapIcon = memo(function GraduationCapIcon() {
  return <GraduationCap className="w-5 h-5 text-primary" />
})

const Education = memo(function Education() {
  return (
    <section
      id="education"
      className="section-container"
      aria-labelledby="education-heading"
    >
      <motion.div {...revealSection}>
        <motion.h2
          className="section-title"
          {...revealItem}
          id="education-heading"
        >
          <GraduationCapIcon />
          Education
        </motion.h2>

        <motion.div {...revealItemAt(0)}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-base sm:text-lg mb-1">
                {education.degree}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-2">
                {education.school}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Specialization in {education.field}.
              </p>
            </div>
            <span className="text-xs font-mono text-muted-foreground shrink-0 order-first sm:order-last">
              {education.period}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default Education
