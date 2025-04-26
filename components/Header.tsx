// components/Header.js
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                >
                    <Image src="/logo.png" alt="NYLOZ Pharmaceutical Logo" width={150} height={60} className="h-auto" />
                </motion.div>
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:flex gap-6"
                >
                    <Link
                        href="#home"
                        className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors relative group"
                    >
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors relative group"
                    >
                        About Us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="#products"
                        className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors relative group"
                    >
                        Our Products
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors relative group"
                    >
                        Contact Us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
                    </Link>
                </motion.nav>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600">Get in Touch</Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                            className="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </Button>
                </motion.div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t py-4">
                    <div className="container mx-auto px-4 flex flex-col space-y-3">
                        <Link href="#home" className="text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="#about" className="text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
                            About Us
                        </Link>
                        <Link href="#products" className="text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
                            Our Products
                        </Link>
                        <Link href="#contact" className="text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
                            Contact Us
                        </Link>
                        <Button className="bg-orange-500 hover:bg-orange-600 w-full mt-2">Get in Touch</Button>
                    </div>
                </div>
            )}
        </header>
    )
}