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
    },
    {
      icon: Linkedin,
      platform: "LinkedIn",
      href: "https://linkedin.com/in/mustafa-lanewala-m2004",
    },
    {
      icon: GitHub,
      platform: "GitHub",
      href: "https://github.com/mustafalanewala",
    },
    {
      icon: Mail,
      platform: "Email",
      href: "mailto:https.mustafalanewala@gmail.com",
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
              className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl group transition-all bg-neutral-800 transform hover:scale-110 hover:shadow-lg`}
            >
              <link.icon className="h-8 w-8 text-white group-hover:text-white transition-all" />
            </Link>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
