"use client"

import { motion } from "framer-motion"
import { designs } from "../../data"
import { NeonGradientCard } from "@/components/ui/gradientcard"
import { getMediaPath, isVideoFile } from "@/lib/media"
import Image from 'next/image';

interface MediaContentProps {
  mediaPath: string
  title: string
}

const MediaContent = ({ mediaPath, title }: MediaContentProps) => {
  const isVideo = isVideoFile(mediaPath)
  const displayPath = getMediaPath(mediaPath, isVideo ? "video" : "image")

  return (
    <div className="relative w-full h-48 md:h-60">
      {isVideo ? (
        <video
          src={displayPath}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-48 md:h-60 object-cover rounded-xl"
          title={title}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={displayPath}
          alt={title}
          quality={75}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
          className="absolute inset-0 w-full h-48 md:h-60 object-cover rounded-xl"
        />
      )}
    </div>
  )
}

export default function DesignsPage() {
  return (
    <div className="mx-auto px-6 py-6 bg-black">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        My Designs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={design.link} target="_blank" rel="noopener noreferrer">
              <NeonGradientCard className="max-w-md items-center justify-center bg-neutral-900">
                <MediaContent
                  mediaPath={design.mediaPath}
                  title={design.title}
                />
                <h2 className="text-lg font-semibold text-center text-white pt-2">
                  {design.title}
                </h2>
              </NeonGradientCard>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
