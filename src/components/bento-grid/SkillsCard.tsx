"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { Star } from "lucide-react";

interface SkillsCardProps {
  className?: string;
}

export function SkillsCard({ className = "" }: SkillsCardProps) {
  const skills = ["TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind", "React.js", "Next.js", "Node.js", "Express.js", "Redux", "MongoDb",];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className={className}
    >
      <Card className="h-full p-6 bg-secondary/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Star className="h-8 w-8 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="px-3 py-1 rounded-full text-sm border border-primary/50 bg-primary/10 text-primary-foreground"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}