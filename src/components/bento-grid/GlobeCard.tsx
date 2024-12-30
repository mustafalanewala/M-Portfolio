"use client";

import createGlobe from "cobe";
import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { Analytics } from "@vercel/analytics/react"

export function GlobeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="col-span-4 h-80 md:h-full row-span-2 md:col-span-2"
    >
      <Card className="h-full p-6 backdrop-blur-sm overflow-hidden border-2 border-neutral-600 relative group">
        <h2 className="text-xl font-semibold mb-2 relative z-20">Global Reach</h2>
        <p className="text-muted-foreground relative z-20">Working with clients worldwide</p>
        <Analytics />
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity" />
      </Card>
    </motion.div>
  );
}
