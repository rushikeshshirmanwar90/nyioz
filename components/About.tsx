// components/About.js
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

import img1 from "@/public/images/img-1.jpg"
import img2 from "@/public/images/img-2.jpg"
import img3 from "@/public/images/img-3.jpg"
import img4 from "@/public/images/img4.jpg"

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 space-y-6">
                        <FadeIn direction="up">
                            <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                                About NYLOZ Pharmaceutical
                            </div>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.1}>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                                Committed to Improving Lives Through Quality Healthcare
                            </h2>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.2}>
                            <p className="text-gray-600">
                                NYLOZ Pharmaceutical Pvt. Ltd. is a leading pharmaceutical company dedicated to developing,
                                manufacturing, and marketing high-quality pharmaceutical products. With a focus on innovation and
                                excellence, we strive to improve the health and well-being of people worldwide.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.3}>
                            <p className="text-gray-600">
                                Our state-of-the-art manufacturing facilities and rigorous quality control processes ensure that all
                                our products meet the highest standards of safety and efficacy. We are committed to ethical business
                                practices and maintaining the trust of healthcare professionals and patients alike.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.4}>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-blue-600"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">Quality Assurance</span>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-blue-600"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">Research & Development</span>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-blue-600"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">Ethical Practices</span>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-blue-600"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">Customer Satisfaction</span>
                                </motion.div>
                            </div>
                        </FadeIn>
                    </div>
                    <FadeIn direction="left" className="w-full md:w-1/2 relative">
                        {/* Mobile image display - visible only on small screens */}
                        <div className="block md:hidden">
                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-full h-48 relative rounded-lg overflow-hidden"
                                >
                                    <Image src={img1} alt="Pharmaceutical Research" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-full h-48 relative rounded-lg overflow-hidden"
                                >
                                    <Image src={img2} alt="Quality Control" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-full h-48 relative rounded-lg overflow-hidden"
                                >
                                    <Image src={img3} alt="Manufacturing Facility" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-full h-48 relative rounded-lg overflow-hidden"
                                >
                                    <Image src={img4} alt="Research Team" fill className="object-cover" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Desktop image display - visible only on medium screens and up */}
                        <div className="hidden md:block">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="aspect-square relative rounded-lg overflow-hidden"
                                >
                                    <Image src={img1} alt="Pharmaceutical Research" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="aspect-square relative rounded-lg overflow-hidden mt-8"
                                >
                                    <Image src={img2} alt="Quality Control" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="aspect-square relative rounded-lg overflow-hidden -mt-8"
                                >
                                    <Image src={img3} alt="Manufacturing Facility" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="aspect-square relative rounded-lg overflow-hidden"
                                >
                                    <Image src={img4} alt="Research Team" fill className="object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}