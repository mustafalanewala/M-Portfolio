import { motion } from "framer-motion"
import { GitHub as Github, Linkedin, Mail } from "react-feather"
import { SocialLink } from "@/types/portfolio"
import { person, socials } from "@/data/profile"
import { hoverLift, transition } from "@/lib/motion"

const socialLinks: SocialLink[] = [
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${person.email}`, label: "Email" },
  { icon: Github, href: socials.github, label: "GitHub" },
]

const TextReveal = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="inline-block"
    >
      {text}
    </motion.span>
  )
}

const Hero = () => {
  return (
    <section
      className="pt-24 pb-16 sm:pt-32 sm:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="section-container py-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-xs sm:text-sm font-mono text-muted-foreground mb-3 sm:mb-4"
        >
          AI & Full Stack Engineer
        </motion.p>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
          id="hero-heading"
        >
          <TextReveal text="Mustafa Lanewala" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-8 leading-relaxed"
        >
          Founder & CEO of Mx Solution. Building scalable applications &
          AI-powered products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex items-center gap-3 sm:gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button h-10 w-10 sm:h-11 sm:w-11"
              aria-label={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.05 }}
              {...hoverLift}
            >
              <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
