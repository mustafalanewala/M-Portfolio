import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User } from "lucide-react"
import { memo } from "react"

const UserIcon = memo(() => <User className="w-5 h-5" />)

const About = memo(() => {
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          id="about-heading"
        >
          <UserIcon />
          About
        </motion.h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
          >
            I'm <span className="text-foreground">Mustafa Lanewala</span>, a
            21-year-old AI & Full Stack Engineer with 3+ years of experience
            building scalable web applications, working on AI and automation,
            and designing microservices architecture.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
          >
            Proficient in frontend & backend development, UI/UX design, and
            product management. Beyond tech, I'm calm and curious. I enjoy
            traveling, photography, cooking, and spending time with family.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
})

export default About
