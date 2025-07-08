"use client"

import { motion } from "framer-motion"
import { Card } from "../ui/card"
import { Instagram, GitHub, Linkedin, Mail } from "react-feather"
import { Briefcase, Terminal } from "lucide-react"
import Link from "next/link"

export default function StatsAndSocialCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      <div className="card h-auto backdrop-blur-sm flex flex-col gap-2">
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-start border-2 border-neutral-600 p-6 rounded-3xl h-44">
            <Terminal className="h-6 w-6 text-primary mb-2" />
            <h3 className="text-2xl font-bold">1800+</h3>
            <p className="text-sm text-muted-foreground">Total Hours</p>
            <p className="text-xs text-muted-foreground/80">Coded</p>
          </div>
          <div className="flex flex-col items-start border-2 border-neutral-600 p-6 rounded-3xl">
            <Briefcase className="h-6 w-6 text-primary mb-2" />
            <h3 className="text-2xl font-bold">2+ Years</h3>
            <p className="text-sm text-muted-foreground">Industry Experience</p>
            <p className="text-xs text-muted-foreground/80">In Corporate</p>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="w-full flex flex-col border-2 border-neutral-600 p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
          <div className="flex justify-between items-center flex-wrap gap-4 mb-1">
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/mustafa.lanewala",
                gradient: "from-pink-500 to-orange-500",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/mustafa-lanewala-m2004",
                gradient: "from-blue-500 to-blue-700",
              },
              {
                icon: GitHub,
                href: "https://github.com/mustafalanewala",
                gradient: "from-gray-800 to-gray-600",
              },
              {
                icon: Mail,
                href: "mailto:https.mustafalanewala@gmail.com",
                gradient: "from-yellow-500 to-green-400",
              },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl group transition-all bg-neutral-800 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r ${link.gradient}`}
              >
                <link.icon className="h-6 w-6 text-white group-hover:text-white transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
