"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { Briefcase, GraduationCap, TreePalm } from "lucide-react"; // Icons from lucide-react

export function BioCard() {
  const bioData = [
    {
      icon: GraduationCap,
      title: "B.Tech CSE (AI and DS)",
      description:
        "Currently pursuing B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence and Data Science at ITM University.",
    },
    {
      icon: Briefcase,
      title: "Product Engineer at CleverFlow",
      description:
        "Currently, I work as a Product Engineer at CleverFlow for Artifacts, focusing on creating a centralized platform that streamlines and enhances communications ",
    },
    {
      icon: TreePalm,
      title: "Hobbies",
      description:
        "In my free time, I enjoy coding, traveling, exploring new technologies, while finding peace in my spiritual practices.",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="col-span-4 row-span-2 md:col-span-2"
    >
      <Card className="card h-full flex flex-col justify-between border-2 border-neutral-600 backdrop-blur-sm">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">About Me</h2>
          {bioData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 text-white">
              <item.icon />
              <div>
                <h4 className="text-md font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}