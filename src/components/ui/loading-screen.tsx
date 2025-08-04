"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function PremiumLoadingScreen() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!showLoader) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center space-y-4"
      >
        <Loader2 className="h-10 w-10 animate-spin text-white" />
        <p className="text-sm text-white/70 tracking-wider">Loading...</p>
      </motion.div>
    </div>
  )
}
