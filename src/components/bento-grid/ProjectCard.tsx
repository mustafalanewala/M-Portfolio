"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { RippleButton } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay: number;
  className?: string;
}

export function ProjectCard({ title, description, icon: Icon, link, delay, className = "" }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={className}
    >
      <Card className="h-full p-6 bg-secondary/50 backdrop-blur-sm group">
        <div className="flex justify-between items-start">
          <div>
            <Icon className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <Link href={link}>
            <RippleButton className="group-hover:translate-x-2 transition-transform">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </RippleButton>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}