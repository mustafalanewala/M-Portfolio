"use client";

import { motion } from "framer-motion";
import { RippleButton } from "../../components/ui/button";
import Image from "next/image";
import { Card } from "../../components/ui/card";

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
  const vCardBlob = generateVCard();
  const link = document.createElement("a");
  const url = URL.createObjectURL(vCardBlob);
  link.href = url;
  link.download = "Mustafa_Lanewala.vcf";
  link.click();
  URL.revokeObjectURL(url);
};

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="col-span-4 row-span-2 md:col-span-2"
    >
      <Card className="h-full p-4 md:p-6 backdrop-blur-sm border-2 border-neutral-600 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          {/* Avatar Section */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32">
            <Image
              src="/avatar.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-2 border-primary"
            />
          </div>

          {/* Text Section */}
          <div className="text-center sm:text-left">
            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-white"
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

        <div className="flex-1 mb-4 text-center sm:text-left">
          <motion.p
            className="text-sm sm:text-base text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack Developer with expertise in frontend and backend technologies, specializing in AI and Data Science.
          </motion.p>
        </div>

        <RippleButton
          rippleColor="#ADD8E6"
          className="mt-auto bg-transparent"
          onClick={downloadVCard}
        >
          Save Contact
        </RippleButton>
      </Card>
    </motion.div>
  );
}
