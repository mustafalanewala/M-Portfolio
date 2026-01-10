import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/mustafalanewala", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@mustafalanewala.dev", label: "Email" },
  { icon: Github, href: "https://github.com/mustafalanewala", label: "GitHub" },
];

const TextReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.02,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="section-container py-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-xs sm:text-sm font-mono text-muted-foreground mb-3 sm:mb-4"
        >
          AI & Full Stack Engineer
        </motion.p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
          <TextReveal text="Mustafa Lanewala" delay={0.05} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-8 leading-relaxed"
        >
          Founder & CEO of Mx Solution. Building scalable applications & AI-powered products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex items-center gap-3 sm:gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label={link.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;