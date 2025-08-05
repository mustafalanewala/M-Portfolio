"use client"

import {
  Moon,
  Sun,
  Code,
  Briefcase,
  User,
  Mail,
  FileCode,
  Instagram,
  Linkedin,
  Github,
  Globe,
} from "lucide-react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  // Sync dark mode with localStorage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode")
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  // Simulate loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500" />
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-inter ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16"
        >
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Mustafa Lanewala
            </h1>
            <p className="text-lg sm:text-xl font-medium flex items-center justify-center sm:justify-start gap-2 mt-2">
              <Code className="h-5 w-5" /> AI & Full Stack Engineer
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className={`rounded-full mt-4 sm:mt-0 ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            } transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.header>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
            <User className="h-5 w-5" /> About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I'm a 21-year-old AI & Full Stack Engineer with 2+ years of
            experience building scalable web applications, working on AI and
            automation, and designing microservices architecture. Proficient in
            frontend & backend development, UI/UX design, and product
            management.
            <br />
            <br />A calm and composed tech enthusiast, I love traveling to
            explore diverse cultures, igniting my creativity. As a Dawoodi
            Bohra, I find balance through prayer and community rituals. I enjoy
            photography, cooking, and cherishing family moments. My curiosity
            drives me to experiment with new tech stacks and create side
            projects that blend art and code, while I stay updated through tech
            blogs and courses.
          </p>
          <hr
            className={`my-8 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5" /> Experience
          </h2>
          <ol className="list-decimal pl-5 space-y-6">
            <li>
              <h3 className="text-base sm:text-lg font-medium">
                Product Engineer, Cleverflow, Dubai, UAE (Mar 2024–Present)
              </h3>
              <ul className="list-disc pl-5 mt-2 text-sm sm:text-base">
                <li>
                  Led product management for Artifacts, creating a centralized
                  platform to enhance communication, improving operational
                  efficiency by 30%.
                </li>
                <li>
                  Developed CRM-integrated invoices, ad templates, and
                  documents, enabling one-click generation and reducing manual
                  effort by 70%.
                </li>
                <li>
                  Led UI/UX design efforts, creating branding elements, custom
                  layouts, and interactive features, enhancing user engagement
                  and visual appeal.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-base sm:text-lg font-medium">
                Product Engineer, Beem Cards, Dubai, UAE (Jan 2025–Present)
              </h3>
              <ul className="list-disc pl-5 mt-2 text-sm sm:text-base">
                <li>
                  Leading fullstack development of Beem Cards — a digital smart
                  card platform for seamless professional networking.
                </li>
                <li>
                  Built scalable systems with Django REST Framework, PostgreSQL,
                  Docker Compose, and modular APIs, and developed responsive
                  frontends using React, Next.js, TypeScript, and Axios for
                  seamless UX.
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">
                Founder & CEO, MxNoor Solutions (Jan 2025–Present)
              </h3>
              <ul className="list-disc pl-5 mt-2 text-sm sm:text-base">
                <li>
                  Founded a tech solutions company focused on innovative AI and
                  full-stack development, delivering tailored web and app
                  solutions.
                </li>
              </ul>
            </li>
          </ol>
          <hr
            className={`my-8 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
            <FileCode className="h-5 w-5" /> Projects
          </h2>
          <ol className="list-decimal pl-5 space-y-6">
            <li>
              <h3 className="text-base sm:text-lg font-medium">Beem Cards</h3>
              <p className="text-sm sm:text-base">
                A digital networking platform that allows professionals to
                create, share, and manage digital business profiles with ease.
                Supports dynamic updates, analytics, and personalized profiles
                for streamlined networking.{" "}
                <a
                  href="https://beem.cards"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500 mr-2`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </p>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">M-Tasks</h3>
              <p className="text-sm sm:text-base">
                A full-featured task management platform with real-time updates,
                priority tagging, team collaboration, and dashboards. Built with
                modern UI/UX and Firebase for instant notification and data
                sync.{" "}
                <a
                  href="https://mtasks.vercel.app"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500 mr-2`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mustafalanewala/M-Task"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">MsyncAI</h3>
              <p className="text-sm sm:text-base">
                lightning-fast AI-powered website generator that produces clean
                HTML, CSS, and JavaScript code, with instant live previews and
                downloadable project files.{" "}
                <a
                  href="https://msyncai.vercel.app"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500 mr-2`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mustafalanewala/msyncai"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">BlogBox</h3>
              <p className="text-sm sm:text-base">
                A blogging platform that empowers users to create, share, and
                manage their own blogs with ease. Built with an emphasis on
                accessibility and performance.{" "}
                <a
                  href="https://blogbox.vercel.app"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500 mr-2`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mustafalanewala/blogbox"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">SkattireHub</h3>
              <p className="text-sm sm:text-base">
                An e-commerce website for a fashion brand offering secure
                payment integration (Razorpay), dynamic product listings,
                inventory management, and mobile responsiveness.{" "}
                <a
                  href="https://www.skattirehub.in"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500 mr-2`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </p>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">Elysium</h3>
              <p className="text-sm sm:text-base">
                A beautiful wallpaper application that integrates with the
                Unsplash API to provide high-quality background images. Supports
                download, search, and light/dark themes.{" "}
                <a
                  href="https://github.com/mustafalanewala/elysium"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">MxNoor</h3>
              <p className="text-sm sm:text-base">
                A full stack digital solutions company that empowers modern
                businesses and specializes in web design, e-commerce, apps,
                graphics, multimedia, and AI.{" "}
                <a
                  href="https://www.mxnoor.in"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500 mr-2`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </p>
            </li>

            <li>
              <h3 className="text-base sm:text-lg font-medium">
                Crime Detection Model
              </h3>
              <p className="text-sm sm:text-base">
                A machine learning model for predicting potential crime hotspots
                based on spatial and temporal data. Utilizes clustering
                algorithms, heatmaps, and geospatial analytics to assist in law
                enforcement planning.{" "}
                <a
                  href="https://github.com/mustafalanewala/crime-detection"
                  className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </li>
          </ol>

          <hr
            className={`my-8 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Python",
              "Django",
              "Flask",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "PostgreSQL",
              "MongoDB",
              "Firebase",
              "MySQL",
              "Redis",
              "Tailwind CSS",
              "Material-UI",
              "AWS",
              "Docker",
              "Git",
              "Figma",
              "Canva",
              "WordPress",
              "Woocommerce",
              "Shopify",
            ].map((skill) => (
              <motion.span
                key={skill}
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                } transition-colors duration-200`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <hr
            className={`my-8 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
            <Mail className="h-5 w-5" /> Contact
          </h2>

          <div className="flex items-center gap-4">
            <a
              href="mailto:https.mustafalanewala@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/mustafa-lanewala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
            </a>

            <a
              href="https://github.com/mustafalanewala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
            </a>

            <a
              href="https://www.instagram.com/mustafa.lanewala/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
            </a>

            <a
              href="https://www.mustafalanewala.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
