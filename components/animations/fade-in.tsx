"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  duration?: number
  viewOffset?: number
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
  viewOffset = 0.1,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: viewOffset })

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { y: 20 }
      case "down":
        return { y: -20 }
      case "left":
        return { x: 20 }
      case "right":
        return { x: -20 }
      default:
        return {}
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionVariants(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
