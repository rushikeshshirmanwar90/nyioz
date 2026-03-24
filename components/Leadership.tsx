import React from 'react'
import FadeIn from './animations/fade-in'
import { motion } from "framer-motion"
import Image from 'next/image'

import ceo from "@/public/images/ceo.jpg"
import md from "@/public/images/md.jpg"


const Leadership = () => {
    return (
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
                <FadeIn direction="up">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        Leadership Team
                    </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Meet Our Leadership Team</h2>
                </FadeIn>
                <FadeIn direction="up" delay={0.2}>
                    <p className="text-gray-600 max-w-4xl mx-auto">
                        At NYLOZ Pharmaceutical, our leadership is the foundation of our success. With a combined experience
                        of over 40 years in the pharmaceutical industry, our CEO and Directors bring unmatched expertise,
                        vision, and integrity to every aspect of our operations. Their leadership reflects a shared
                        commitment to innovation, quality, and improving lives through science.
                    </p>
                </FadeIn>
            </div>

            {/* CEO Section */}
            <div className="mb-16">
                <FadeIn direction="up" delay={0.3}>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/3">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative w-64 h-80 mx-auto rounded-2xl overflow-hidden shadow-lg"
                            >
                                <Image src={ceo} alt="Mrs. Thakur P.S - CEO" fill className="object-cover" />
                            </motion.div>
                            <div className="text-center mt-4">
                                <h3 className="text-xl font-bold text-blue-800">Mrs. Thakur P.S</h3>
                                <p className="text-orange-600 font-medium center">Chief Executive Officer (CEO)</p>
                            </div>
                        </div>
                        <div className="lg:w-2/3 space-y-4">
                            <h4 className="text-2xl font-bold text-blue-800">Chief Executive Officer (CEO)</h4>
                            <p className="text-gray-600">
                                With over 15 years of experience in the pharmaceutical industry, our CEO is a dynamic leader
                                whose strategic vision and unwavering dedication have shaped the company&#39;s mission and long-term
                                goals. Under their leadership, NYLOZ Pharmaceutical has navigated complex regulatory landscapes,
                                entered new markets, and significantly expanded its research capabilities. Known for a
                                forward-thinking approach and a deep understanding of both scientific and commercial dimensions,
                                our CEO fosters a culture of excellence and innovation.
                            </p>
                            <p className="text-gray-600">
                                They have previously held senior leadership roles in multinational pharmaceutical firms and have
                                a proven track record of scaling operations, driving product development, and leading
                                high-performance teams. Their people-first philosophy and belief in ethical practices have
                                helped cultivate strong relationships with partners, clients, and healthcare professionals
                                across the globe. The CEO&#39;s leadership is instrumental in keeping NYLOZ Pharmaceutical at the
                                forefront of therapeutic advancement and patient care.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default Leadership