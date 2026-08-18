import type { Transition } from "framer-motion"

/** One easing curve and one duration for the whole site. */
export const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
export const DURATION = 0.45

export const transition: Transition = { duration: DURATION, ease: EASE }

/** Snappier curve for hover/tap, so pointer feedback never feels laggy. */
export const interactionTransition: Transition = {
  duration: 0.2,
  ease: EASE,
}

/**
 * Shared viewport trigger.
 *
 * No negative `margin`: shrinking the root box meant anything sitting near the
 * bottom of the first screen was "visible but not triggered", so it stayed at
 * opacity 0 until you scrolled. `amount: "some"` fires as soon as any pixel of
 * the element is on screen, which is what you want for content above the fold.
 */
const viewport = { once: true, amount: "some" } as const

/** Section-level reveal. Every section uses this exact entrance. */
export const revealSection = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition,
} as const

/** Item-level reveal for headings, paragraphs and cards. */
export const revealItem = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition,
} as const

/**
 * Staggered variant of `revealItem`. The delay is capped so long lists never
 * leave the last item waiting — on a phone the whole group is on screen at once.
 */
export const revealItemAt = (index: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition: { ...transition, delay: Math.min(index, 3) * 0.05 },
})

/* Hover/tap timing lives inside each variant rather than on a shared
   `transition` prop, so spreading these never clobbers an entrance animation. */

/** Icon buttons and social links: lift on hover, press in on tap. */
export const hoverLift = {
  whileHover: { y: -2, transition: interactionTransition },
  whileTap: { scale: 0.94, transition: interactionTransition },
} as const

/** Text links and rows: slide right on hover. */
export const hoverSlide = {
  whileHover: { x: 4, transition: interactionTransition },
  whileTap: { scale: 0.99, transition: interactionTransition },
} as const
