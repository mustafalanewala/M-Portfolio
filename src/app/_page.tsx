"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useChat } from "ai/react"
import { ChevronLeft, ChevronRight, Command, Github, Instagram, Linkedin, Mail, Send, Sparkles, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import emailjs from "emailjs-com"
import { toast, Toaster } from "react-hot-toast"
import LoadingScreen from "@/components/ui/loading-screen"
import Link from "next/link"

// Dynamically import IconCloud
const IconCloud = dynamic(() => import("@/components/ui/icons").then((mod) => mod.IconCloud), {
  ssr: false,
})

const slugs = [
  "figma", "nextdotjs", "nodedotjs", "nginx", "react", "express", "framer", "django", "typescript",
  "canva", "postman", "mongodb", "cplusplus", "vercel", "sass", "html5", "postgresql", "appwrite",
  "redux", "tailwindcss", "css3", "git", "python", "firebase", "javascript", "wordpress", "prisma",
  "drizzle", "docker",
]

export default function Component() {
  const [currentProject, setCurrentProject] = useState(0)
  const [showSlashCommands, setShowSlashCommands] = useState(false)
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false) // State for chatbot toggle
  const inputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSaveContact = () => {
    const link = document.createElement('a')
    link.href = '/contact.vcf'
    link.download = 'contact.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success("Contact Saved 🎉")
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/MResume.pdf'
    link.download = 'MResume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success("Resume Downloaded 🎉")
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
    { title: "AetherX", image: "/mockuper4.png" },
    { title: "M-Tasks", image: "/mockuper1.png" },
    { title: "Ethereal Essence", image: "/mockuper2.png" },
    { title: "MSyncAI", image: "/mockuper3.png" },
  ]

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
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleInputChangeWithSlash = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    handleInputChange(e)
    if (value === "/") {
      setShowSlashCommands(true)
      setSelectedCommandIndex(0)
    } else if (value.startsWith("/") && value.length > 1) {
      const filtered = slashCommands.filter((cmd) => cmd.command.startsWith(value.toLowerCase()))
      setShowSlashCommands(filtered.length > 0)
    } else {
      setShowSlashCommands(false)
    }
  }

  const selectCommand = (command: (typeof slashCommands)[0]) => {
    setShowSlashCommands(false)
    handleInputChange({ target: { value: command.question } } as React.ChangeEvent<HTMLInputElement>)
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  const latestMessage = messages[messages.length - 1]
  const showingWelcome = messages.length === 1

  const filteredCommands = input.startsWith("/")
    ? slashCommands.filter((cmd) => cmd.command.startsWith(input.toLowerCase()))
    : slashCommands

  if (isPageLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black p-5 lg:p-6">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-3">
        {/* Profile Card */}
        <Card className="bg-gray-900 border-gray-800 text-white sm:col-span-2 lg:col-span-1">
          <CardContent className="p-4 lg:p-6 h-full flex flex-col">
            {/* ... (unchanged Profile Card content) ... */}
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
              {"I'm an AI & Full-Stack Engineer building intelligent applications with cutting-edge technologies. Specializing in ML, AI integration, and scalable web architectures."}
            </p>
            <div className="flex justify-center sm:justify-start items-start gap-3 mb-6">
              <Button size="icon" variant="ghost" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </Button>
              <Button size="icon" variant="ghost" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0077B5] to-[#00A1D6] hover:scale-110 transition-all duration-300">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </Button>
              <Button size="icon" variant="ghost" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2b3035] to-[#575757] hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Github className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </Button>
              <Button size="icon" variant="ghost" className="w-10 h-10 rounded-full bg-gradient-to-l from-[#fa5353] to-[#edd11b] hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </Button>
            </div>
            <div className="flex flex-row gap-3">
              <Button onClick={handleSaveContact} variant="default" className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 flex-1 text-xs sm:text-sm">
                Save Contact
              </Button>
              <Button onClick={handleDownload} variant="default" className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 flex-1 text-xs sm:text-sm">
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Projects & Designs Card */}
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardContent className="p-4 lg:p-6">
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
              <Button size="icon" variant="ghost" className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black hover:bg-gray-200 hover:scale-110 transition-all duration-300" onClick={prevProject}>
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black hover:bg-gray-200 hover:scale-110 transition-all duration-300" onClick={nextProject}>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            <Link href="/projects-and-designs">
              <Button variant="default" className="w-full bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 flex-1 text-sm">
                View Projects & Designs
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Enhanced AI & Full Stack Skills Card */}
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardContent className="p-4 lg:p-6">
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
          <CardContent className="p-4 lg:p-6 h-full flex flex-col">
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

        {/* AI Assistant Card (visible on sm and larger) */}
        <Card className="bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 border-purple-500/30 text-white sm:col-span-2 hidden sm:block h-full overflow-hidden">
          <CardContent className="p-4 lg:p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg sm:text-xl font-bold">🧠 AI Assistant</h2>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto"></div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 mb-3 flex-1 overflow-y-auto min-h-0">
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
            {showingWelcome && (
              <div className="mb-3">
                <p className="text-xs text-purple-300 mb-2 flex items-center gap-1">
                  <Command className="w-3 h-3" />
                  Try typing / for quick commands:
                </p>
              </div>
            )}
            <div className="relative">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChangeWithSlash}
                    placeholder="Ask me anything about Mustafa... (type / for commands)"
                    className="bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400 text-xs sm:text-sm h-10 sm:h-9"
                    disabled={isLoading}
                  />
                  {showSlashCommands && (
                    <div
                      className="absolute bottom-full left-0 right-0 mb-1 p-1 bg-gray-900/90 backdrop-blur-md border border-purple-500/50 rounded-sm shadow-xl z-10 max-h-32 lg:max-h-44 overflow-y-auto scroll-touch
                      [&::-webkit-scrollbar]:w-1
                      [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-800/50
                      [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-purple-600
                      hover:[&::-webkit-scrollbar-thumb]:bg-purple-500"
                    >
                      <div className="flex flex-col gap-1">
                        {filteredCommands.map((command, index) => (
                          <button
                            key={command.command}
                            type="button"
                            onClick={() => selectCommand(command)}
                            className={`w-full text-left p-1 transition-colors duration-200 rounded-lg text-sm sm:text-base hover:bg-gradient-to-r hover:from-purple-800/40 hover:to-blue-800/40 ${index === selectedCommandIndex
                              ? "bg-gradient-to-r from-purple-700/50 to-blue-700/50"
                              : "bg-transparent"
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-purple-300 font-mono flex-shrink-0">{command.command}</span>
                              <span className="text-gray-200 truncate">{command.description}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700 hover:scale-110 transition-all duration-300 w-9 h-10 sm:w-9 sm:h-9"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-3 h-8 sm:w-4 sm:h-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Chatbot (visible on mobile only) */}
      <div className="sm:hidden fixed bottom-4 right-5 z-50">
        {/* Chatbot Toggle Button */}
        {!isChatOpen && (
          <Button
            onClick={toggleChat}
            className="bg-purple-600 hover:bg-purple-700 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        )}

        {/* Chatbot Panel */}
        {isChatOpen && (
          <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 border border-purple-500/30 rounded-lg shadow-xl w-[90vw] max-w-[350px] h-[400px] flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-purple-500/30">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white">🧠 AI Assistant</h2>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <Button
                onClick={toggleChat}
                size="icon"
                variant="ghost"
                className="text-white hover:bg-purple-700/50 w-8 h-8"
              >
                ✕
              </Button>
            </div>
            <div className="flex-1 p-3 overflow-y-auto">
              {error ? (
                <p className="text-red-400 text-xs">
                  Connection error. Please check your API key and try again.
                </p>
              ) : isLoading ? (
                <div className="flex items-center gap-2 text-purple-300">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  <span className="text-xs">Thinking...</span>
                </div>
              ) : (
                <p className="text-xs text-gray-200 leading-relaxed">
                  {latestMessage?.content || "Hi! Ask me anything about Mustafa!"}
                </p>
              )}
            </div>
            <div className="p-3 border-t border-purple-500/30">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChangeWithSlash}
                    placeholder="Ask about Mustafa... (/ for commands)"
                    className="bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400 text-xs h-9"
                    disabled={isLoading}
                  />
                  {showSlashCommands && (
                    <div
                      className="absolute bottom-full left-0 right-0 mb-1 p-1 bg-gray-900/90 backdrop-blur-md border border-purple-500/50 rounded-sm shadow-xl z-10 max-h-44 overflow-y-auto scroll-touch
                      [&::-webkit-scrollbar]:w-1
                      [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-800/50
                      [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-purple-600
                      hover:[&::-webkit-scrollbar-thumb]:bg-purple-500"
                    >
                      <div className="flex flex-col gap-1">
                        {filteredCommands.map((command, index) => (
                          <button
                            key={command.command}
                            type="button"
                            onClick={() => selectCommand(command)}
                            className={`w-full text-left p-1 transition-colors duration-200 rounded-lg text-xs hover:bg-gradient-to-r hover:from-purple-800/40 hover:to-blue-800/40 ${index === selectedCommandIndex
                              ? "bg-gradient-to-r from-purple-700/50 to-blue-700/50"
                              : "bg-transparent"
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-purple-300 font-mono flex-shrink-0">{command.command}</span>
                              <span className="text-gray-200 truncate">{command.description}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700 w-9 h-9"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}