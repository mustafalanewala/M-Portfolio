"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { RippleButton } from "../../components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function DesignCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="col-span-4 md:col-span-2"
    >
      <Card className="h-full p-6 flex flex-col justify-between bg-secondary/50 backdrop-blur-sm border-2 border-neutral-600 hover:glow transition-all duration-300">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-semibold">My Designs</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Explore my design portfolio, showcasing design projects.
          </p>
          <Link href="/projects">
            <RippleButton rippleColor="#ADD8E6" className="bg-transparent w-full sm:w-auto">
              View Designs
            </RippleButton>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
