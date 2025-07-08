"use client"

import { motion } from "framer-motion"
import { Card } from "../../components/ui/card"
import { RippleButton } from "../../components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Award } from "react-feather"

const images = [
  "/mockuper1.png",
  "/mockuper2.png",
  "/mockuper3.png",
  "/mockuper4.png",
]

export function ProjectCard({ className = "" }: { className?: string }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      <Card className="card h-auto border-2 border-neutral-600 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Projects & Designs</h2>
        </div>
        <div className="relative w-full h-56 flex justify-center items-center">
          <button
            onClick={prevImage}
            className="absolute left-2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
          >
            <Image
              src={images[currentImage]}
              alt="Project Mockup"
              width={400}
              height={400}
              className="w-80 h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <button
            onClick={nextImage}
            className="absolute right-2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="/projects">
            <RippleButton
              rippleColor="#ADD8E6"
              className="bg-transparent w-full sm:w-auto"
            >
              View Projects
            </RippleButton>
          </Link>
          <Link href="/designs">
            <RippleButton
              rippleColor="#ADD8E6"
              className="bg-transparent w-full sm:w-auto"
            >
              View Designs
            </RippleButton>
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}
