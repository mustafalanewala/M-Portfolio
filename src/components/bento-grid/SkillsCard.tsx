"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { Star } from "lucide-react";
import { IconCloud } from "../../components/ui/icons"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function SkillsCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className={className}
    >
      <Card className="h-full p-6 bg-secondary/50 border-2 border-neutral-600 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <Star className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <div className="relative flex items-center justify-center max-w-lg overflow-hidden">
          <IconCloud iconSlugs={slugs} />
        </div>
      </Card>
    </motion.div>
  );
}
