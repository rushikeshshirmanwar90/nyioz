
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-4 max-w-6xl"> {/* Added mx-auto, px-4, and max-w-6xl */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <FadeIn direction="up">
                            <div className="space-y-4">
                                <Image
                                    src="/logo-white.png"
                                    alt="NYLOZ Pharmaceutical Logo"
                                    width={150}
                                    height={60}
                                    className="h-auto"
                                />
                                <p className="text-blue-200">Blooming life with Health & Happiness</p>
                                <div className="flex space-x-4">
                                    <motion.a
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href="#"
                                        className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                                            className="h-5 w-5"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href="#"
                                        className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                                            className="h-5 w-5"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href="#"
                                        className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                                            className="h-5 w-5"
                                        ></svg>
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href="#"
                                        className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                                            className="h-5 w-5"
                                        >
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href="#"
                                        className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                                            className="h-5 w-5"
                                        >
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect width="4" height="12" x="2" y="9" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.1}>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#home" className="text-blue-200 hover:text-white transition-colors">
                                            Home
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                                            About Us
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#products" className="text-blue-200 hover:text-white transition-colors">
                                            Our Products
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                                            Contact Us
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                                            Careers
                                        </Link>
                                    </motion.li>
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Products</h3>
                                <ul className="space-y-2">
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                                            GROWKOA
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                                            DAXTON CAPSULES DSR
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                                            GIACALY TABLET
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                                            DEFNE 6 TABLET
                                        </Link>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                                            View All Products
                                        </Link>
                                    </motion.li>
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.3}>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                                <p className="text-blue-200 mb-4">
                                    Subscribe to our newsletter to receive updates on new products, company news, and healthcare insights.
                                </p>
                                <form className="space-y-4">
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full px-4 py-2 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </motion.div>
                                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Subscribe</Button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" delay={0.4}>
                        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300">
                            <p>© {new Date().getFullYear()} NYLOZ Pharmaceutical Pvt. Ltd. All rights reserved.</p>
                        </div>
                    </FadeIn>
                </div>
            </footer>
        </div>
    )
}

export default Footer