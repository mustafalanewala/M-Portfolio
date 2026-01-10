import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const SparkleIcon = () => <Sparkles className="w-5 h-5" />;

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "Django", "REST API"],
  Database: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
  Tools: ["Docker", "Git", "Figma", "AWS"],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SparkleIcon />
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">{category}</h3>
              <ul className="space-y-1 sm:space-y-1.5">
                {items.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="text-sm sm:text-base text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ x: 2, color: "hsl(var(--foreground))" }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;