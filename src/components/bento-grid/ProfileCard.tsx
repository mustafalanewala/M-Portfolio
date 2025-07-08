"use client"

import { motion } from "framer-motion"
import { RippleButton } from "../../components/ui/button"
import Image from "next/image"
import { Card } from "../../components/ui/card"
import Link from "next/link"

const generateVCard = () => {
  const vCard = `
BEGIN:VCARD
VERSION:2.0
FN:Mustafa Lanewala
TEL:+91 9157302004
EMAIL:https.mustafalanewala@gmail.com
END:VCARD
  `;
  return new Blob([vCard], { type: "text/vcard" });
};

const downloadVCard = () => {
  try {
    const vCardBlob = generateVCard();
    const link = document.createElement("a");
    const url = URL.createObjectURL(vCardBlob);
    link.href = url;
    link.download = "Mustafa_Lanewala.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading vCard:", error);
    alert("An error occurred while trying to download the contact.");
  }
};

export function ProfileCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      <Card className="card h-auto backdrop-blur-sm border-2 border-neutral-600 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-2 md:mb-6">
          {/* Avatar Section */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
            <div className="w-full h-full rounded-full border-2 border-primary overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                width={128}
                height={128}
                quality={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center sm:text-left">
            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              👋 Hie! I'm <br />
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

        <div className="flex-1 mb-4 text-center sm:text-left">
          <motion.p
            className="text-sm sm:text-base text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm a Full-Stack Engineer with a strong foundation in both frontend
            and backend technologies, Specializing on AI and DS.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-1 mb-2">
          <RippleButton
            rippleColor="#ADD8E6"
            className="bg-transparent"
            onClick={downloadVCard}
          >
            Save Contact
          </RippleButton>
          <Link target="_blank" href="https://i.ibb.co/Y4CWx72J/MResume.jpg">
            <RippleButton
              rippleColor="#ADD8E6"
              className="bg-transparent w-full"
            >
              View Resume
            </RippleButton>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}