import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Send } from "lucide-react"
import { ContactItem } from "@/types/portfolio"
import { memo } from "react"

const SendIcon = memo(() => <Send className="w-5 h-5" />)

const contacts: ContactItem[] = [
  {
    label: "contact@mustafalanewala.dev",
    href: "mailto:contact@mustafalanewala.dev",
  },
  {
    label: "github.com/mustafalanewala",
    href: "https://github.com/mustafalanewala",
  },
  {
    label: "linkedin.com/in/mustafalanewala",
    href: "https://linkedin.com/in/mustafalanewala",
  },
  {
    label: "instagram.com/mustafa.lanewala",
    href: "https://www.instagram.com/mustafa.lanewala",
  },
]

const Contact = memo(() => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      className="section-container"
      ref={ref}
      aria-labelledby="contact-heading"
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
          id="contact-heading"
        >
          <SendIcon />
          Contact
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-6 leading-relaxed text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? I'm always open to
          discussing new opportunities.
        </motion.p>

        <div className="space-y-2 sm:space-y-3">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                contact.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-2 text-sm sm:text-base transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {contact.label}
              </span>
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowUpRight className="w-3 h-3" />
              </motion.span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default Contact
