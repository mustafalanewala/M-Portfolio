"use client";

import { motion } from "framer-motion";
import { Mail, X } from "lucide-react"; // X for the close icon
import { useState } from "react";
import { RippleButton } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

// Define ContactCardProps type
type ContactCardProps = {
  className?: string;
};

// Modal Component
const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="bg-black text-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Contact Form</h2>
          <button
            type="button"
            className="text-white"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <RippleButton
              className="bg-primary hover:bg-primary/90 transition-colors w-full"
              onClick={(e) => {
                e.preventDefault();
                alert("Message Sent!");
                onClose();
              }}
            >
              Send Message
            </RippleButton>
          </div>
        </form>
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
      transition={{ delay: 0.9 }}
      className={`${className} col-span-4 md:col-span-2`}
    >
      <Card className="h-full p-6 backdrop-blur-sm border-2 border-neutral-600 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Mail className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-semibold">Contact Me</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur
          </p>
          <RippleButton
            rippleColor="#ADD8E6" className="w-full sm:w-auto"
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
