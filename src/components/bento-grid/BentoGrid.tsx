"use client";

import { Code, Mail, Star, Github, Linkedin, Palette, Terminal } from "lucide-react";
import { ProfileCard } from "./ProfileCard";
import { StatCard } from "./StatCard";
import { SocialLinksCard } from "./SocialCard";
import { ProjectCard } from "./ProjectCard";
import { SkillsCard } from "./SkillsCard";
import { ContactCard } from "./ConatctCard";
import { GlobeCard } from "./GlobeCard";
import { DesignCard } from "./DesignCard";
import { BackgroundBeamsWithCollision } from "../../components/ui/BackgroundBeamsWithCollision";

export function BentoGrid() {
  return (
    <BackgroundBeamsWithCollision className="dark">
      <div className="grid grid-cols-6 gap-3 p-4 min-h-screen max-w-[95vw] mx-auto">

        <ProfileCard />

        <GlobeCard />

        <StatCard
          title="Projects"
          value="50+"
          description="Completed"
          icon={Terminal}
          delay={0.2}
        />

        <StatCard
          title="Designs"
          value="100+"
          description="Created"
          icon={Palette}
          delay={0.3}
        />

        <SocialLinksCard />

        <ProjectCard
          className="col-span-4"
          title="Latest Projects"
          description="Explore my recent development work"
          icon={Code}
          link="/projects"
          delay={0.6}
        />

        <SkillsCard className="col-span-2 row-span-2" />

        <DesignCard
          className="col-span-2 row-span-1"
          title="Latest Designs"
          description="Explore my recent design work"
          icon={Code}
          link="/design"
          delay={0.6}
        />

        <ContactCard className="col-span-2" />
      </div>
    </BackgroundBeamsWithCollision>
  );
}