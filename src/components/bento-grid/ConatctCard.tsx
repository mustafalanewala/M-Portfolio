"use client";

import { motion } from "framer-motion";
import { Mail, X } from "lucide-react"; // X for the close icon
import { useState } from "react";
import emailjs from "emailjs-com";
import { RippleButton } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

// Define ContactCardProps type
type ContactCardProps = {
  className?: string;
};

// Modal Component
const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus("Sending...");

    try {
      const serviceId = "service_mustafa30";
      const templateId = "template_9jycvia";
      const publicKey = "4DihErRruoSz8W8n7";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      // Auto-close the modal after 1 second
      setTimeout(() => {
        setFormStatus("");
        onClose();
      }, 1000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setFormStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="bg-neutral-800 text-white p-4 rounded-2xl max-w-sm w-11/12 sm:w-10/12 md:w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Contact Form</h2>
          <button type="button" className="text-white" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
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
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
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
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
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
              className="bg-primary hover:bg-primary/90 transition-colors w-full sm:w-auto"
              type="submit"
            >
              Send Message
            </RippleButton>
          </div>
        </form>
        {formStatus && <p className="mt-4 text-center text-sm">{formStatus}</p>}
      </div>
    </div>
  );
};

export function ContactCard({ className = "" }: ContactCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`${className} col-span-4 md:col-span-2`}
    >
      <Card className="card h-full backdrop-blur-sm border-2 border-neutral-600 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Mail className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-semibold">Contact Me</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            I'd love to hear from you. Feel free to get in touch!
          </p>
          <RippleButton
            rippleColor="#ADD8E6"
            className="bg-transparent w-full sm:w-auto"
            onClick={handleModalToggle}
          >
            Get in Touch
          </RippleButton>
        </div>
      </Card>

      {/* Modal Popup */}
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
    </motion.div>
  );
}
