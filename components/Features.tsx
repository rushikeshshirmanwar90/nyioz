// components/Features.js
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import StaggerChildren from "@/components/animations/stagger-children"

export default function Features() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <StaggerChildren>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white shadow-lg border-0">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6"
                                >
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
                                        className="h-8 w-8 text-green-600"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4">Quality Products</h3>
                                <p className="text-muted-foreground">
                                    We are committed to manufacturing pharmaceutical products of the highest quality and efficacy.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg border-0">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6"
                                >
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
                                        className="h-8 w-8 text-blue-600"
                                    >
                                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4">Research & Innovation</h3>
                                <p className="text-muted-foreground">
                                    We continuously invest in research to develop innovative healthcare solutions for better patient
                                    outcomes.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg border-0">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6"
                                >
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
                                        className="h-8 w-8 text-orange-600"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4">Patient-Centric Approach</h3>
                                <p className="text-muted-foreground">
                                    We prioritize patient needs and well-being in everything we do, from research to product
                                    development.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </StaggerChildren>
            </div>
        </section>
    )
}