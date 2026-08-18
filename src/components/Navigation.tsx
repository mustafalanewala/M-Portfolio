"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"
import { NavLink } from "@/types/portfolio"
import { hoverLift, transition } from "@/lib/motion"

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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium focus-ring"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}
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
            <a
              href="#"
              className="font-display font-bold text-base text-foreground focus-ring"
            >
              ML
            </a>

            <ul className="hidden md:flex items-center gap-4 lg:gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-link text-sm font-medium"
                    {...hoverLift}
                  >
                    {link.label}
                  </motion.a>
                </li>
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
