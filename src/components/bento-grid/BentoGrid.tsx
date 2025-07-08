"use client"

import { Code, Mail, Star, Terminal, Briefcase } from "lucide-react"
import { ProfileCard } from "./ProfileCard"
import { StatCard } from "./StatCard"
import { SocialLinksCard } from "./SocialCard"
import { ProjectCard } from "./ProjectCard"
import { SkillsCard } from "./SkillsCard"
import { ContactCard } from "./ConatctCard"
import { BioCard } from "./BioCard"
import StatsAndSocialCard from "./StatsAndSocialCard"

export function BentoGrid() {
  return (
    <div className="bg-black text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
         gap-3 2xl:gap-10 md:max-w-[1440px] overflow-hidden md:overflow-auto p-4 lg:h-screen h-auto justify-center items-center">
      <ProfileCard className="col-span-4 row-span-1 md:col-span-2" />

      <BioCard className="col-span-4 row-span-1 md:col-span-2" />

      {/* <StatCard
        title="Total Hours"
        value="1500+"
        description="Coded"
        icon={Terminal}
        delay={0.3}
        className="col-span-2 md:col-span-1"
      />

      <StatCard
        title="Industry Experience"
        value="1.5+ Years"
        description="In Corporate"
        icon={Briefcase}
        delay={0.3}
        className="col-span-2 md:col-span-1"
      />

      <SocialLinksCard className="col-span-4 row-span-1 md:col-span-2" /> */}

      <StatsAndSocialCard className="col-span-4 md:col-span-2" />

      <ProjectCard className="col-span-4 md:col-span-2 row-span-2" />

      <SkillsCard className="col-span-4 row-span-2 md:col-span-2" />

      <ContactCard className="col-span-4 md:col-span-2" />
    </div>
  )
}
