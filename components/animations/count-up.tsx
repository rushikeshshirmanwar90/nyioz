"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export default function CountUp({ end, duration = 2, className = "", suffix = "", prefix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? count : 0}
      {suffix}
    </span>
  )
}
