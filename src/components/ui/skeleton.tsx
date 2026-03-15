"use client"

import { motion } from "framer-motion"

interface SkeletonProps {
  className?: string
}

export const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-muted rounded-md ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    />
  )
}

export const HeroSkeleton = () => (
  <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
    <div className="section-container py-0">
      <Skeleton className="h-4 w-48 mb-4" />
      <Skeleton className="h-12 sm:h-16 md:h-20 lg:h-24 w-full max-w-4xl mb-6" />
      <Skeleton className="h-6 w-full max-w-xl mb-8" />
      <div className="flex gap-4">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-12 w-12 rounded-lg" />
      </div>
    </div>
  </section>
)

export const AboutSkeleton = () => (
  <section className="section-container">
    <div className="flex items-center gap-2 mb-8">
      <Skeleton className="h-5 w-5" />
      <Skeleton className="h-6 w-20" />
    </div>
    <div className="space-y-4">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-3/4" />
    </div>
  </section>
)

export const ExperienceSkeleton = () => (
  <section className="section-container">
    <div className="flex items-center gap-2 mb-8">
      <Skeleton className="h-5 w-5" />
      <Skeleton className="h-6 w-24" />
    </div>
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:justify-between gap-4"
        >
          <div className="flex-1">
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-4 w-full" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  </section>
)

export const SkillsSkeleton = () => (
  <section className="section-container">
    <div className="flex items-center gap-2 mb-8">
      <Skeleton className="h-5 w-5" />
      <Skeleton className="h-6 w-16" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="rounded-xl border p-5">
          <Skeleton className="h-4 w-16 mb-3" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((j) => (
              <Skeleton key={j} className="h-3 w-20" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export const ContactSkeleton = () => (
  <section className="section-container">
    <div className="flex items-center gap-2 mb-8">
      <Skeleton className="h-5 w-5" />
      <Skeleton className="h-6 w-16" />
    </div>
    <Skeleton className="h-5 w-full mb-6" />
    <div className="space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-4 w-48" />
      ))}
    </div>
  </section>
)
