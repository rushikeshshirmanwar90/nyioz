
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