"use client"

import React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  viewOffset?: number
}

export default function StaggerChildren({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  viewOffset = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: viewOffset })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
