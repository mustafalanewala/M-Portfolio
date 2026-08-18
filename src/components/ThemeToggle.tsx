"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { applyTheme, getTheme } from "@/lib/theme"
import { hoverLift } from "@/lib/motion"

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> }
}

const REVEAL_MS = 620

/**
 * Stateless by design: the icons are driven by the `dark` class via CSS, so
 * the correct one paints on the very first frame and there is no hydration
 * mismatch to reconcile.
 */
const ThemeToggle = () => {
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = getTheme() === "dark" ? "light" : "dark"
    const root = document.documentElement
    const doc = document as ViewTransitionDocument
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (!doc.startViewTransition || reduceMotion) {
      // No circular reveal available — cross-fade the palette instead.
      if (!reduceMotion) {
        root.classList.add("theme-animating")
        window.setTimeout(
          () => root.classList.remove("theme-animating"),
          REVEAL_MS
        )
      }
      applyTheme(next)
      return
    }

    // Expand the new theme out of the button itself.
    const { top, left, width, height } =
      event.currentTarget.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    void doc
      .startViewTransition(() => applyTheme(next))
      .ready.then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: REVEAL_MS,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="icon-button icon-button-round relative h-9 w-9"
      aria-label="Toggle color theme"
      {...hoverLift}
    >
      {/* Both icons stay mounted; the `dark` class cross-fades them, so the
          right one paints on the first frame with no hydration mismatch. */}
      <Moon
        aria-hidden="true"
        className="theme-icon absolute inset-0 m-auto h-4 w-4 rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-50 dark:opacity-0"
      />
      <Sun
        aria-hidden="true"
        className="theme-icon absolute inset-0 m-auto h-4 w-4 rotate-90 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </motion.button>
  )
}

export default ThemeToggle
