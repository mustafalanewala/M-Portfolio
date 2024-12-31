"use client";

import { Code, Mail, Star, Terminal, Briefcase } from "lucide-react";
import { ProfileCard } from "./ProfileCard";
import { StatCard } from "./StatCard";
import { SocialLinksCard } from "./SocialCard";
import { ProjectCard } from "./ProjectCard";
import { SkillsCard } from "./SkillsCard";
import { ContactCard } from "./ConatctCard";
import { DesignCard } from "./DesignCard";
import { BioCard } from "./BioCard";
import { BackgroundBeamsWithCollision } from "../ui/background";

export function BentoGrid() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-2 md:min-h-[100vh] md:max-w-[100vw] mx-auto overflow-hidden md:overflow-auto p-4 h-full md:p-4">

        <ProfileCard />

        <BioCard />

        <StatCard
          title="Total Hours Coded"
          value="1000+"
          description="Logged"
          icon={Terminal}
          delay={0.3}
          className="col-span-2 md:col-span-1"
        />

        {/* Industry Experience */}
        <StatCard
          title="Industry Experience"
          value="1.5+ Years"
          description="In Corporate"
          icon={Briefcase}
          delay={0.3}
          className="col-span-2 md:col-span-1"
        />

        <SocialLinksCard />

        <ProjectCard />

        <SkillsCard className="col-span-4 row-span-2 md:col-span-2" />

        <DesignCard />

        <ContactCard className="col-span-4 md:col-span-2" />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
