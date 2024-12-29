"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { RippleButton } from "../../components/ui/button";
import { Code } from 'react-feather';
import Link from "next/link";

export function ProjectCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative col-span-4"
    >
      <Card className="h-44 p-6 backdrop-blur-sm flex flex-col justify-between">
        <div>
          {/* Icon and Title in a row */}
          <div className="flex items-center gap-4 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">My Projects</h2>
          </div>
          {/* Description below */}
          <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas obcaecati sint consequatur <br />sunt libero voluptatum ad culpa quae velit blanditiis!</p>
        </div>
        <Link href="/projects" className="flex self-end">
          <RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
        </Link>
      </Card>
    </motion.div >
  );
}
