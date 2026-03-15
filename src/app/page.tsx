"use client"

import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
// import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import SectionDivider from "@/components/SectionDivider"
import useLenis from "@/hooks/useLenis"
import { Suspense } from "react"
import {
  HeroSkeleton,
  AboutSkeleton,
  ExperienceSkeleton,
  SkillsSkeleton,
  ContactSkeleton,
} from "@/components/ui/skeleton"

export default function Home() {
  useLenis()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<ExperienceSkeleton />}>
          <Experience />
        </Suspense>
        <SectionDivider />
        {/* <Portfolio /> */}
        <SectionDivider />
        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
