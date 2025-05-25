// components/Hero.js
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

import heroImage from "@/public/images/img-4.jpg"
import { Button } from "./ui/button"

export default function Hero() {
    return (
        <section id="home" className="relative">
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 min-h-screen flex items-center justify-center">
                <div className="container grid gap-8 md:grid-cols-2 items-center justify-center text-center md:text-left">
                    <div className="space-y-6">
                        <FadeIn direction="up" delay={0.2}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                NYLOZ Pharmaceutical Pvt. Ltd.
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.3}>
                            <motion.div
                                animate={{
                                    opacity: [1, 0.3, 1],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className="inline-block"
                            >
                                <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-full text-lg md:text-xl font-bold shadow-lg border-2 border-orange-300">
                                    <motion.span
                                        animate={{
                                            textShadow: [
                                                "0 0 5px rgba(255,255,255,0.5)",
                                                "0 0 20px rgba(255,255,255,0.8)",
                                                "0 0 5px rgba(255,255,255,0.5)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        🏆 Fastest Growing Company in 2025 🏆
                                    </motion.span>
                                </div>
                            </motion.div>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.4}>
                            <p className="text-lg text-blue-100">
                                Leading the pharmaceutical industry with innovative healthcare solutions, cutting-edge research, and
                                unwavering commitment to quality. NYLOZ Pharmaceutical is transforming lives through science and
                                dedication to excellence in every product we deliver.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Discover Our Products</Button>
                                <Button variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                                    Learn More About Us
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                    <FadeIn direction="left" delay={0.4}>
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(74, 222, 128, 0)",
                                        "0 0 0 10px rgba(74, 222, 128, 0.2)",
                                        "0 0 0 20px rgba(74, 222, 128, 0)",
                                    ],
                                }}
                                transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    duration: 3,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-lg z-10"
                            ></motion.div>
                            <Image
                                src={heroImage}
                                alt="Healthcare professionals"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
