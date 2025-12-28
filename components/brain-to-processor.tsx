"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function BrainToProcessor() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full aspect-square max-w-[500px] flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="brain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Brain Cells / Neurons Representation */}
            <svg viewBox="0 0 200 200" className="w-full h-full text-primary/80 fill-current">
              {/* Central Brain Structure */}
              <path d="M100,40 C140,40 160,70 160,100 C160,130 140,160 100,160 C60,160 40,130 40,100 C40,70 60,40 100,40 Z" />
              {/* Neurons/Nodes */}
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={100 + 40 * Math.cos((i * 30 * Math.PI) / 180)}
                  cy={100 + 40 * Math.sin((i * 30 * Math.PI) / 180)}
                  r="4"
                  className="text-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                />
              ))}
              {/* Connecting Lines */}
              {[...Array(6)].map((_, i) => (
                <line
                  key={i}
                  x1={100 + 40 * Math.cos((i * 60 * Math.PI) / 180)}
                  y1={100 + 40 * Math.sin((i * 60 * Math.PI) / 180)}
                  x2={100 + 40 * Math.cos(((i + 2) * 60 * Math.PI) / 180)}
                  y2={100 + 40 * Math.sin(((i + 2) * 60 * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}
            </svg>
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>
        ) : (
          <motion.div
            key="processor"
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Processor Core Representation */}
            <div className="relative w-4/5 h-4/5 border-4 border-primary/50 rounded-xl flex items-center justify-center p-8 bg-background/50 backdrop-blur-sm shadow-[0_0_50px_rgba(var(--primary),0.2)]">
              {/* Inner Die */}
              <div className="w-full h-full bg-primary/20 rounded-lg flex flex-wrap gap-2 p-4 overflow-hidden relative">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-[22%] h-[22%] bg-primary/40 rounded-sm border border-primary/60"
                  />
                ))}
                {/* Circuit Traces */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/30" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/30" />
                </div>
              </div>
              {/* External Pins */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`top-${i}`}
                  className="absolute -top-4 w-1 h-4 bg-primary/40"
                  style={{ left: `${15 + i * 10}%` }}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`bottom-${i}`}
                  className="absolute -bottom-4 w-1 h-4 bg-primary/40"
                  style={{ left: `${15 + i * 10}%` }}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`left-${i}`}
                  className="absolute -left-4 h-1 w-4 bg-primary/40"
                  style={{ top: `${15 + i * 10}%` }}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`right-${i}`}
                  className="absolute -right-4 h-1 w-4 bg-primary/40"
                  style={{ top: `${15 + i * 10}%` }}
                />
              ))}
            </div>
            {/* Pulse Glow */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full blur-2xl animate-pulse -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
