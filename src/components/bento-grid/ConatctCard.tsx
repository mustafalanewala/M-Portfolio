"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { useState } from "react"
import emailjs from "emailjs-com"
import { RippleButton } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import toast from "react-hot-toast"

type ContactCardProps = {
  className?: string
}

export function ContactCard({ className = "" }: ContactCardProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
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
        publicKey
      )

      toast.success("Message sent successfully 🎉")

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send message:", error)
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`${className} col-span-4 md:col-span-2 row-span-2`}
    >
      <Card className="card h-auto backdrop-blur-sm border-2 border-neutral-600 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">Contact Me</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-3.5">
            I'd love to hear from you. Feel free to get in touch!
          </p>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-neutral-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-neutral-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-neutral-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <RippleButton
                rippleColor="#ADD8E6"
                className="bg-primary hover:bg-primary/90 transition-colors w-full sm:w-auto"
                type="submit"
              >
                Send Message
              </RippleButton>
            </div>
          </form>
        </div>
      </Card>
    </motion.div>
  )
}
