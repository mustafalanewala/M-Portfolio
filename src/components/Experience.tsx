import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { useRef } from "react";

const BriefcaseIcon = () => <Briefcase className="w-5 h-5" />;

const experiences = [
  {
    title: "Founder & CEO",
    company: "Mx Solution",
    period: "Jan 2025 – Present",
    description:
      "We help brands transform ideas into scalable digital systems designed for maximum performance and real business results.",
    link: "https://www.mxsolution.in",
  },
  {
    title: "Product Engineer",
    company: "Beem Cards",
    period: "Jan 2025 – Present",
    description:
      "Leading fullstack development of a digital smart card platform with Django REST Framework, PostgreSQL, React, and Next.js.",
    link: "https://beem.cards",
  },
  {
    title: "Product Engineer",
    company: "Cleverflow",
    period: "Mar 2024 – Present",
    description: "Led product management for Artifacts platform. Developed CRM-integrated invoices and ad templates.",
    link: "https://cleverflow.com",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
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
          <BriefcaseIcon />
          Experience
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ x: 4 }}
              className="group cursor-default"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base sm:text-lg">{exp.title}</h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{exp.description}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground shrink-0 order-first sm:order-last">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;