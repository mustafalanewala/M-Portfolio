import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User } from "lucide-react"

const UserIcon = () => <User className="w-5 h-5" />

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      className="section-container"
      ref={ref}
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="about-heading"
        >
          <UserIcon />
          About
        </motion.h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm <span className="text-foreground">Mustafa Lanewala</span>, a
            21-year-old AI & Full Stack Engineer with 3+ years of experience
            building scalable web applications, working on AI and automation,
            and designing microservices architecture.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Proficient in frontend & backend development, UI/UX design, and
            product management. Beyond tech, I'm calm and curious. I enjoy
            traveling, photography, cooking, and spending time with family.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
