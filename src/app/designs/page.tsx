"use client";

import { motion } from "framer-motion";
import { designs } from "../../data";
import { NeonGradientCard } from "@/components/ui/gradientcard";
import { getMediaPath, isVideoFile } from "@/lib/media";
import { Play } from "lucide-react";

interface MediaContentProps {
  mediaPath: string;
  title: string;
}

const MediaContent = ({ mediaPath, title }: MediaContentProps) => {
  const isVideo = isVideoFile(mediaPath);
  const displayPath = getMediaPath(mediaPath, isVideo ? "video" : "image");

  return (
    <div className="relative w-full h-52">
      {isVideo ? (
        <video
          src={displayPath}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-52 object-cover rounded-xl"
          title={title}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={displayPath}
          alt={title}
          className="absolute inset-0 w-full h-52 object-cover rounded-xl"
        />
      )}
    </div>
  );
};

export default function DesignsPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10">
        Our Designs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {designs.map((design, index) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={design.link} target="_blank" rel="noopener noreferrer">
              <NeonGradientCard className="w-[26vw] items-center justify-center bg-gray-300">
                <MediaContent mediaPath={design.mediaPath} title={design.title} />
                <h2 className="text-lg text-center font-semibold text-white pt-2">
                  {design.title}
                </h2>
              </NeonGradientCard>
            </a>
          </motion.div>
        ))}
      </div>
    </div>

  );
}