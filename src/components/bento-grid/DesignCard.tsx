"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { RippleButton } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DesignCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay: number;
  className?: string;
}

export function DesignCard({
  title,
  description,
  icon: Icon,
  link,
  delay,
  className = "",
}: DesignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={className}
    >
      <Card className="h-full flex justify-between p-6 bg-secondary/50 backdrop-blur-lg rounded-xl shadow-lg group transition-all hover:shadow-2xl">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2 text-primary-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        </div>
        <Link href={link}>
          <RippleButton className="group-hover:translate-x-2 transition-transform">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </RippleButton>
        </Link>
      </Card>
    </motion.div>
  );
}
