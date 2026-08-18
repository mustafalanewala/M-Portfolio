import { motion } from "framer-motion"
import { ArrowUpRight, Send } from "lucide-react"
import { ContactItem } from "@/types/portfolio"
import { person, socials } from "@/data/profile"
import {
  hoverSlide,
  revealItem,
  revealItemAt,
  revealSection,
} from "@/lib/motion"
import { memo } from "react"

const SendIcon = memo(function SendIcon() {
  return <Send className="w-5 h-5 text-primary" />
})

const contacts: ContactItem[] = [
  { label: person.email, href: `mailto:${person.email}` },
  { label: socials.github.replace("https://", ""), href: socials.github },
  { label: socials.linkedin.replace("https://", ""), href: socials.linkedin },
  {
    label: socials.instagram.replace("https://www.", ""),
    href: socials.instagram,
  },
]

const Contact = memo(function Contact() {
  return (
    <section
      id="contact"
      className="section-container"
      aria-labelledby="contact-heading"
    >
      <motion.div {...revealSection}>
        <motion.h2
          className="section-title"
          {...revealItem}
          id="contact-heading"
        >
          <SendIcon />
          Contact
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-6 leading-relaxed text-base sm:text-lg"
          {...revealItem}
        >
          Have a project in mind or want to collaborate? I&rsquo;m always open
          to discussing new opportunities.
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
              className="group focus-ring flex w-fit items-center gap-2 text-sm sm:text-base"
              {...revealItemAt(index)}
              {...hoverSlide}
            >
              <span className="text-link">{contact.label}</span>
              <span className="reveal-arrow text-link">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default Contact
