import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers } from "lucide-react";

const LayersIcon = () => <Layers className="w-5 h-5" />;

const projects = [
  {
    title: "Beem Cards",
    description: "Digital card platform with Django REST, PostgreSQL, React, Next.js.",
    link: "https://beem.cards/",
    tags: ["Django", "Next.js", "React.js"],
  },
  {
    title: "Mx Solution",
    description: "We turn ideas into scalable digital systems for real business results.",
    link: "https://www.mxsolution.in/",
    tags: ["Full Stack", "Business"],
  },
  {
    title: "SkAttireHub",
    description: "E-commerce platform with Razorpay integration and inventory management.",
    link: "https://www.skattirehub.in/",
    tags: ["E-commerce", "Woocommerce", "Wordpress"],
  },
  {
    title: "Guidance Tamil Nadu",
    description: "Government website with responsive design and CMS integration.",
    link: "https://guidancetamilnadu.vercel.app/",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Howdy Chats",
    description: "Landing website for a social app with WhatsApp and Instagram features.",
    link: "https://howdy-chats.vercel.app/",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Mubarak Collection",
    description: "E-commerce website for a traditional Topis brand since 2011.",
    link: "https://mubarakcollection.in/",
    tags: ["E-commerce", "Next.js", "TypeScript"],
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-container" ref={ref}>
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
          <LayersIcon />
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
              className="group flex items-start justify-between gap-4 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-lg transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-base sm:text-lg">{project.title}</h3>
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h4.992c.551 0 .999.443.999.993v16.014a1 1 0 0 1-.993 1H3.993A.993.993 0 0 1 3 20.007V3.993A1 1 0 0 1 4.009 3H9m6 0v6m0-6L9 9" />
                    </svg>
                  </motion.span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;