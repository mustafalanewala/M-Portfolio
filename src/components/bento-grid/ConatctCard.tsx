"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { RippleButton } from "../../components/ui/button";

interface ContactCardProps {
  className?: string;
}

export function ContactCard({ className = "" }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className={className}
    >
      <div className="border-2 rounded h-full">
        <div className="h-full p-6">
          <div className="flex justify-between items-center">
            <div>
              <Mail className="h-8 w-8 mb-4 text-primary" />
              <h2 className="text-2xl font-semibold mb-2">Let's Connect</h2>
              <p className="text-muted-foreground">Have a project in mind?</p>
            </div>
            <RippleButton className="bg-primary hover:bg-primary/90 transition-colors">
              Get in Touch
            </RippleButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}