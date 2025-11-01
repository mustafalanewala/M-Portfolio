"use client"

import {
  Moon,
  Sun,
  Code,
  Briefcase,
  User,
  Instagram,
  Linkedin,
  Github,
  Globe,
  MessageCircle,
  Mail,
} from "lucide-react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import portfolio from "@/data/portfolio.json"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

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
  // Load data from JSON
  const projects = portfolio.projects
  const skills = portfolio.skills
  const name = portfolio.name
  const tagline = portfolio.tagline
  const about = portfolio.about
  const experience = portfolio.experience
  const contacts = portfolio.contacts

  const displayedProjects = showAll ? projects : projects.slice(0, 6)
  const aboutParagraphs = about.split("\n\n")

  const getIcon = (type: string) => {
    switch (type) {
      case "mail":
        return (
          <Mail className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
        )
      case "linkedin":
        return (
          <Linkedin className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
        )
      case "github":
        return (
          <Github className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
        )
      case "instagram":
        return (
          <Instagram className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
        )
      case "website":
        return (
          <Globe className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
        )
      default:
        return (
          <Globe className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
        )
    }
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row flex-wrap justify-between items-center gap-4 mb-12 sm:mb-16"
        >
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-poppins">
              {name}
            </h1>
            <p className="text-lg sm:text-xl font-medium flex items-center gap-2 mt-2 font-inter">
              <Code className="h-5 w-5" /> {tagline}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className={`rounded-full ${
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
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4 font-poppins">
            <User className="h-5 w-5" /> About Me
          </h2>
          <div className="leading-relaxed">
            {aboutParagraphs.map((para, i) => (
              <p key={i} className="text-base sm:text-lg font-inter mb-4">
                {para}
              </p>
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
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4 font-poppins">
            <Briefcase className="h-5 w-5" /> Experience
          </h2>
          <ol className="list-decimal pl-5 space-y-6">
            {experience.map((exp, idx) => (
              <li key={idx}>
                <h3 className="text-base sm:text-lg font-medium font-inter">
                  {exp.title}
                  {exp.company ? `, ${exp.company}` : ""}{" "}
                  {exp.period ? ` (${exp.period})` : ""}
                </h3>
                <ul className="list-disc pl-5 mt-2 text-sm sm:text-base font-inter">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
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
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4 font-poppins">
            <Briefcase className="h-5 w-5" /> Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border text-sm font-inter shadow-sm hover:shadow-md transition-shadow ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 text-black border-gray-200"}`}
              >
                <h3 className="text-lg font-semibold font-inter mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base font-inter mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className={`underline ${darkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-500`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {projects.length > 6 && (
            <div className="text-center mt-6">
              <Button
                onClick={() => setShowAll(!showAll)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 border ${darkMode ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700" : "bg-gray-100 text-black border-gray-200 hover:bg-gray-200"}`}
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
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
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4 font-poppins">
            <Code className="h-5 w-5" /> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className={`px-4 py-1.5 rounded-full text-sm font-medium font-inter ${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                } transition-colors duration-200 shadow-sm hover:shadow-md`}
                whileHover={{ scale: 1.05, y: -2 }}
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
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4 font-poppins">
            <MessageCircle className="h-5 w-5" /> Contact
          </h2>
          <div className="flex items-center gap-4">
            {contacts.map((c, i) => (
              <a key={i} href={c.url} target="_blank" rel="noopener noreferrer">
                {getIcon(c.type)}
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
