import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"
import { NavLink } from "@/types/portfolio"

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 left-1/2 z-50"
      >
        <nav
          className={`px-4 sm:px-6 py-2.5 rounded-full border border-border transition-all duration-300 -translate-x-1/2 ${
            isScrolled
              ? "bg-background/90 backdrop-blur-md shadow-lg"
              : "bg-background/70 backdrop-blur-sm"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.a
              href="#"
              className="font-display font-bold text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ML
            </motion.a>

            <ul className="hidden md:flex items-center gap-4 lg:gap-5">
              {navLinks.map((link) => (
                <motion.li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-1">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  )
}

export default Navigation
