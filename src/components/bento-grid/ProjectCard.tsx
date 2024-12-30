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
      transition={{ delay: 0.3 }}
      className="col-span-4 md:col-span-4"
    >
      <Card className="card h-full flex flex-col justify-between border-2 border-neutral-600 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">
              My Projects
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Discover the projects I've built with passion and creativity. Take a look!
          </p>
          <Link href="/projects">
            <RippleButton rippleColor="#ADD8E6" className="bg-transparent w-full sm:w-auto">
              View Projects
            </RippleButton>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
