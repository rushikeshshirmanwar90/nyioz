
import React from 'react'
import FadeIn from "@/components/animations/fade-in"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"
import { Button } from './ui/button'

const Contact = () => {
    return (
        <div>
            <section id="contact" className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-6xl"> {/* Added mx-auto, px-4, and max-w-6xl */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <FadeIn direction="up">
                                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                                    Contact Us
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.1}>
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Get in Touch With Us</h2>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.2}>
                                <p className="text-gray-600 mb-8">
                                    Have questions about our products or services? We love to hear from you. Reach out to us using the
                                    contact information below or fill out the form, and our team will get back to you as soon as
                                    possible.
                                </p>
                            </FadeIn>

                            <div className="space-y-6">
                                <FadeIn direction="up" delay={0.3}>
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0"
                                        >
                                            <MapPin className="h-6 w-6 text-blue-600" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-1">Our Location</h3>
                                            <p className="text-gray-600">
                                                123 Pharmaceutical Avenue, Healthcare District, Mumbai, Maharashtra, India - 400001
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>

                                <FadeIn direction="up" delay={0.4}>
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0"
                                        >
                                            <Mail className="h-6 w-6 text-blue-600" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-1">Email Us</h3>
                                            <p className="text-gray-600">
                                                info@nylozpharma.com
                                                <br />
                                                support@nylozpharma.com
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>

                                <FadeIn direction="up" delay={0.5}>
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0"
                                        >
                                            <Phone className="h-6 w-6 text-blue-600" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-1">Call Us</h3>
                                            <p className="text-gray-600">
                                                +91 1234 567 890
                                                <br />
                                                +91 9876 543 210
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        <FadeIn direction="left" delay={0.3}>
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="space-y-2"
                                        >
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Full Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="John Doe"
                                            />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="space-y-2"
                                        >
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="john@example.com"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="space-y-2"
                                    >
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="How can we help you?"
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="space-y-2"
                                    >
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </motion.div>

                                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Send Message</Button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
