"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { Instagram, GitHub, Linkedin, Mail } from 'react-feather';
import Link from "next/link";

export function SocialLinksCard() {
  const socialLinks = [
    {
      icon: Instagram,
      platform: "Instagram",
      href: "https://instagram.com/mustafa.lanewala",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500",
    },
    {
      icon: Linkedin,
      platform: "LinkedIn",
      href: "https://linkedin.com/in/mustafa-lanewala-m2004",
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      icon: GitHub,
      platform: "GitHub",
      href: "https://github.com/mustafalanewala",
      color: "bg-gradient-to-r from-gray-800 to-gray-500",
    },
    {
      icon: Mail,
      platform: "Email",
      href: "mailto:https.mustafalanewala@gmail.com",
      color: "bg-gradient-to-r from-green-400 to-teal-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-4 row-span-1 md:col-span-2"
    >
      <Card className="h-full p-6 backdrop-blur-sm border-2 border-neutral-600">
        <h2 className="text-xl font-bold mb-4">
          Connect with Me
        </h2>
        <div className="flex justify-between gap-6">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl group transition-all ${link.color} transform hover:scale-110 hover:shadow-lg`}
            >
              <link.icon className="h-8 w-8 text-white group-hover:text-white transition-all" />
            </Link>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
