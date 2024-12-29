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
      className="relative col-span-4 md:col-span-2"
    >
      <Card className="h-full p-6 backdrop-blur-sm border-2 border-neutral-600 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <LayoutDashboard className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-semibold">My Designs</h2>
          </div>
          <p className="mb-2">Lorem ipsum dolor, sit amet consectetur</p>
          <Link href="/projects">
            <RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
          </Link>
        </div>

      </Card>
    </motion.div >
  );
}
