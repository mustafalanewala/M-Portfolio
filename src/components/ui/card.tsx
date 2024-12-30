import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl px-6 py-5 text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
