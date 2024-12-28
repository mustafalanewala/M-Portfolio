"use client";

import { motion } from "framer-motion";
import { RippleButton } from "../../components/ui/button";
import Image from "next/image";

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-2 row-span-2 shadow-lg rounded-lg overflow-hidden border border-gray-200 backdrop-blur-sm"
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-6 p-6 border-b border-gray-200">
          <div className="relative w-24 h-24">
            <Image
              src="../../../public/avatar.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-2 border-primary"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              className="text-3xl font-bold bg-clip-text text-transparent bg-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Mustafa Lanewala
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Engineer
            </motion.p>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-4 flex-1">
          <motion.p
            className="text-sm text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Passionate about building scalable web applications and designing user-friendly interfaces. Experienced in modern web technologies like React, Next.js, and TailwindCSS and more.
          </motion.p>
          <div className="mt-auto">
            <RippleButton rippleColor="#ffffff">Contact Me</RippleButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
