"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export function StatCard({ title, value, description, icon: Icon, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="col-span-2 row-span-1 md:col-span-1"
    >
      <Card className="h-full p-6 bg-secondary/50 backdrop-blur-sm hover:glow transition-all duration-300">
        <Icon className="h-8 w-8 mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-1">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-xs text-muted-foreground/80">{description}</p>
      </Card>
    </motion.div>
  );
}