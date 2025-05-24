// components/Hero.js
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

import heroImage from "@/public/images/img-4.jpg"

export default function Hero() {
    return (
        <section id="home" className="relative">
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-20 md:py-32">
                <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <FadeIn direction="up" delay={0.2}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                Blooming Life with Health & Happiness
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.4}>
                            <p className="text-lg text-blue-100">
                                NYLOZ Pharmaceutical is dedicated to improving lives through innovative healthcare solutions and
                                quality pharmaceutical products.
                            </p>
                        </FadeIn>
                        {/* <FadeIn direction="up" delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Discover Our Products</Button>
                                <Button variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                                    Learn More About Us
                                </Button>
                            </div>
                        </FadeIn> */}
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