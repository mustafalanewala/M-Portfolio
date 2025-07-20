"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useChat } from "ai/react"
import { ChevronLeft, ChevronRight, Command, Github, Instagram, Linkedin, Mail, Send, Sparkles } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import emailjs from "emailjs-com"
import { toast } from "react-hot-toast"
import LoadingScreen from "@/components/ui/loading-screen"

// Dynamically import IconCloud to prevent hydration issues
const IconCloud = dynamic(() => import("@/components/ui/icons").then((mod) => mod.IconCloud), {
  ssr: false,
})

const slugs = [
  "figma",
  "nextdotjs",
  "nodedotjs",
  "nginx",
  "react",
  "express",
  "framer",
  "django",
  "typescript",
  "canva",
  "postman",
  "mongodb",
  "cplusplus",
  "vercel",
  "sass",
  "html5",
  "postgresql",
  "appwrite",
  "redux",
  "tailwindcss",
  "css3",
  "git",
  "python",
  "visualstudiocode",
  "firebase",
  "javascript",
  "wordpress",
  "prisma",
  "drizzle",
  "docker",
]

export default function Component() {
  const [currentProject, setCurrentProject] = useState(0)
  const [showSlashCommands, setShowSlashCommands] = useState(false)
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    // Simulate page load time
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const serviceId = "service_mustafa30"
      const templateId = "template_9jycvia"
      const publicKey = "4DihErRruoSz8W8n7"

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      )

      toast.success("Message sent successfully 🎉")

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send message:", error)
      toast.error("Failed to send message. Please try again.")
    }
  }

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi! I'm Mustafa's AI assistant. I know all about his skills, experience, and projects. What would you like to know about him? (Type / for quick commands)",
      },
    ],
  })

  const projects = [
    {
      title: "M-Tasks",
      image: "/mockuper1.png",
    },
    {
      title: "Ethereal Essence",
      image: "/mockuper2.png",
    },
    {
      title: "MSyncAI",
      image: "/mockuper3.png",
    },
    {
      title: "AetherX",
      image: "/mockuper4.png",
    },
  ]

  // Slash commands for quick questions
  const slashCommands = [
    {
      command: "/about",
      description: "Get details about Mustafa's background",
      question: "Who is Mustafa Lanewala, including his title, location, age, education, and social links?"
    },
    {
      command: "/experience",
      description: "Learn about his professional experience",
      question: "What is Mustafa's professional experience, including his role at Cleverflow and past work?"
    },
    {
      command: "/technical",
      description: "Explore his technical expertise",
      question: "What are Mustafa's technical skills across frontend, backend, AI/ML, DevOps, and core areas?"
    },
    {
      command: "/projects",
      description: "Check out his current projects",
      question: "What projects is Mustafa currently working on, including their features and technologies?"
    },
    {
      command: "/personality",
      description: "Discover his personality and interests",
      question: "What are Mustafa's personality traits and personal interests?"
    },
    {
      command: "/unique",
      description: "Understand what makes him unique",
      question: "What makes Mustafa unique as an AI and full-stack developer?"
    },
    {
      command: "/availability",
      description: "Find out if he's open to opportunities",
      question: "Is Mustafa available for new opportunities, and what kind of work is he seeking?"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Handle input changes and slash command detection
  const handleInputChangeWithSlash = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    handleInputChange(e)

    // Show slash commands when user types "/"
    if (value === "/") {
      setShowSlashCommands(true)
      setSelectedCommandIndex(0)
    } else if (value.startsWith("/") && value.length > 1) {
      // Filter commands based on input
      const filtered = slashCommands.filter((cmd) => cmd.command.startsWith(value.toLowerCase()))
      setShowSlashCommands(filtered.length > 0)
    } else {
      setShowSlashCommands(false)
    }
  }

  // Handle keyboard navigation for slash commands
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSlashCommands) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedCommandIndex((prev) => (prev + 1) % slashCommands.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedCommandIndex((prev) => (prev - 1 + slashCommands.length) % slashCommands.length)
    } else if (e.key === "Enter" && showSlashCommands) {
      e.preventDefault()
      selectCommand(slashCommands[selectedCommandIndex])
    } else if (e.key === "Escape") {
      setShowSlashCommands(false)
    }
  }

  // Select a slash command
  const selectCommand = (command: (typeof slashCommands)[0]) => {
    setShowSlashCommands(false)
    // Set the input value to the full question without submitting
    handleInputChange({ target: { value: command.question } } as React.ChangeEvent<HTMLInputElement>)
  }

  // Get the latest AI response
  const latestMessage = messages[messages.length - 1]
  const showingWelcome = messages.length === 1

  // Filter commands based on current input
  const filteredCommands = input.startsWith("/")
    ? slashCommands.filter((cmd) => cmd.command.startsWith(input.toLowerCase()))
    : slashCommands

  if (isPageLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black p-5 lg:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-4">
        {/* Profile Card */}
        <Card className="bg-gray-900 border-gray-800 text-white sm:col-span-2 lg:col-span-1">
          <CardContent className="p-3 sm:p-4 lg:p-6 h-full flex flex-col">
            <div className="flex flex-row items-center justify-center lg:items-start gap-3 mb-4">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-blue-200 flex-shrink-0 sm:mx-0 border-2 border-purple-500/50">
                <Image
                  src="/avatar.jpg"
                  alt="Mustafa Lanewala"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xl lg:text-2xl mb-1">🤖 {"Hie! I'm"}</div>
                <h1 className="text-xl lg:text-2xl font-bold mb-1">Mustafa Lanewala</h1>
                <p className="text-gray-400 text-sm lg:text-base">AI & Full Stack Engineer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-3 mt-1 text-xs sm:text-sm leading-relaxed text-center sm:text-left flex-1">
              {
                "I'm an AI & Full-Stack Engineer building intelligent applications with cutting-edge technologies. Specializing in ML, AI integration, and scalable web architectures."
              }
            </p>
            {/* Social Links */}
            <div className="flex justify-center sm:justify-start items-start gap-2 mb-6">
              <Button
                size="icon"
                variant="ghost"
                className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-gradient-to-r hover:from-[#E1306C]/70 hover:to-[#FCAF45]/70 hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-gradient-to-r hover:from-[#0A66C2]/70 hover:to-[#33C4FF]/70 hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-gradient-to-r hover:from-[#181717]/70 hover:to-[#4B4B4B]/70 hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-gradient-to-r hover:from-[#EA4335]/70 hover:to-[#F28B82]/70 hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            <div className="flex flex-row gap-3">
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex-1 bg-transparent text-xs sm:text-sm"
              >
                Save Contact
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex-1 bg-transparent text-xs sm:text-sm"
              >
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Projects & Designs Card */}
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold">💻 Projects & Designs</h2>
            </div>
            <div className="relative mb-4 sm:mb-6">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black hover:bg-gray-200 hover:scale-110 transition-all duration-300"
                onClick={prevProject}
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black hover:bg-gray-200 hover:scale-110 transition-all duration-300"
                onClick={nextProject}
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            <div className="flex flex-row gap-3">
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex-1 bg-transparent text-sm"
              >
                View Projects & Designs
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced AI & Full Stack Skills Card */}
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="text-yellow-400">⚡</div>
              <h2 className="text-lg sm:text-xl font-bold">AI & Tech Stack</h2>
            </div>
            <div className="relative flex items-center justify-center max-w-lg overflow-hidden">
              <IconCloud iconSlugs={slugs} />
            </div>
          </CardContent>
        </Card>

        {/* Contact Me Card */}
        <Card className="bg-gray-900 border-gray-800 text-white sm:col-span-2 lg:col-span-1 h-full overflow-hidden">
          <CardContent className="p-3 sm:p-4 lg:p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg sm:text-xl font-bold">📧 Contact Me</h2>
            </div>
            <form onSubmit={handleContactSubmit}>
              <div className="space-y-2 sm:space-y-3 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Name</label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleContactInputChange}
                      placeholder="Your Name"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 text-xs sm:text-sm h-8 sm:h-9"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Email</label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleContactInputChange}
                      placeholder="Your Email"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 text-xs sm:text-sm h-8 sm:h-9"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-400 mb-1 block">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleContactInputChange}
                    placeholder="Your Message"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 text-xs sm:text-sm resize-none h-16 sm:h-20"
                  />
                </div>
              </div>
              <Button
                className="w-full bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-xs sm:text-sm mt-3 h-8 sm:h-9"
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* AI Assistant Card with Slash Commands */}
        <Card className="bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 border-purple-500/30 text-white sm:col-span-2 h-full overflow-hidden">
          <CardContent className="p-3 sm:p-4 lg:p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg sm:text-xl font-bold">🧠 AI Assistant</h2>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto"></div>
            </div>

            {/* AI Response Display */}
            <div className="bg-black/30 rounded-lg p-2 sm:p-3 mb-3 flex-1 overflow-y-auto min-h-0">
              {error ? (
                <p className="text-red-400 text-xs sm:text-sm">
                  Connection error. Please check your API key and try again.
                </p>
              ) : isLoading ? (
                <div className="flex items-center gap-2 text-purple-300">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                  <span className="text-xs sm:text-sm">Thinking...</span>
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {latestMessage?.content || "Hi! Ask me anything about Mustafa!"}
                </p>
              )}
            </div>

            {/* Quick Question Buttons (only on welcome) */}
            {showingWelcome && (
              <div className="mb-3">
                <p className="text-xs text-purple-300 mb-2 flex items-center gap-1">
                  <Command className="w-3 h-3" />
                  Try typing / for quick commands:
                </p>
              </div>
            )}

            {/* Chat Input with Slash Commands */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChangeWithSlash}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything about Mustafa... (type / for commands)"
                    className="bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400 text-xs sm:text-sm h-10 sm:h-9"
                    disabled={isLoading}
                  />

                  {/* Slash Commands Dropdown */}
                  {showSlashCommands && (
                    <div className="absolute bottom-full left-0 right-0 mb-1 p-1 bg-gray-900/90 backdrop-blur-md border border-purple-500/50 rounded-xl shadow-xl z-10 max-h-32 sm:max-h-48 overflow-y-auto">
                      {filteredCommands.map((command, index) => (
                        <button
                          key={command.command}
                          type="button"
                          onClick={() => selectCommand(command)}
                          className={`w - full text - left px - 4 py - 2 mr-2 mb-1 text - sm sm: text - base hover: bg - gradient - to - r hover: from - purple - 800 / 40 hover: to - blue - 800 / 40 last: border rounded-lg  - b - 0 transition - colors duration - 200 ${index === selectedCommandIndex ? "bg-gradient-to-r from-purple-700/50 to-blue-700/50" : ""
                            } `}
                        >
                          <div className="flex items-center gap-2 p-[2px]">
                            <span className="text-purple-300 font-mono">{command.command}</span>
                            <span className="text-gray-200 truncate">{command.description}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700 hover:scale-110 transition-all duration-300 w-8 h-9 sm:w-9 sm:h-9"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
