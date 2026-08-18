import { motion } from "framer-motion"
import { User } from "lucide-react"
import { memo } from "react"
import { revealItem, revealSection } from "@/lib/motion"

const UserIcon = memo(function UserIcon() {
  return <User className="w-5 h-5 text-primary" />
})

const About = memo(function About() {
  return (
    <section
      id="about"
      className="section-container"
      aria-labelledby="about-heading"
    >
      <motion.div {...revealSection}>
        <motion.h2 className="section-title" {...revealItem} id="about-heading">
          <UserIcon />
          About
        </motion.h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
          <motion.p {...revealItem}>
            I&rsquo;m <span className="text-foreground">Mustafa Lanewala</span>,
            a 22-year-old AI & Full Stack Engineer with 3+ years of experience
            building scalable web applications, working on AI and automation,
            and designing microservices architecture.
          </motion.p>

          <motion.p {...revealItem}>
            Proficient in frontend & backend development, UI/UX design, and
            product management. Beyond tech, I&rsquo;m calm and curious. I enjoy
            traveling, photography, cooking, and spending time with family.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
})

export default About
