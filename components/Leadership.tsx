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
                                <p className="text-orange-600 font-medium">Chief Executive Officer (CEO)</p>
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

            {/* Directors Section */}
            <div className="space-y-12">
                <FadeIn direction="up" delay={0.4}>
                    <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Board of Directors</h3>
                </FadeIn>

                {/* Director 1 - Md. Yaseen S. */}
                <FadeIn direction="up" delay={0.5}>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/3">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative w-64 h-80 mx-auto rounded-2xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={md}
                                    alt="Md. Yaseen S. - Director"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="text-center mt-4">
                                <h4 className="text-xl font-bold text-blue-800">Md. Yaseen S.</h4>
                                <p className="text-orange-600 font-medium">Director of Operations</p>
                            </div>
                        </div>
                        <div className="lg:w-2/3 space-y-4">
                            <h4 className="text-xl font-bold text-blue-800">Director of Operations</h4>
                            <p className="text-gray-600">
                                With more than 15 years of hands-on experience in pharmaceutical operations, Md. Yaseen S. plays
                                a central role in optimizing our internal systems and ensuring operational efficiency across
                                departments. Their expertise lies in strategic planning, supply chain management, and execution
                                of GMP-compliant processes. Known for their methodical mindset and solution-oriented approach,
                                they ensure that day-to-day operations align seamlessly with the company&#39;s broader strategic
                                goals.
                            </p>
                            <p className="text-gray-600">
                                Throughout their career, they have led numerous successful scale-ups and implemented
                                transformative operational frameworks that have improved productivity and cost-effectiveness.
                                Their leadership ensures that our teams work cohesively to deliver on our promise of quality and
                                reliability to customers worldwide.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Director 2 - Khan Z. R */}
                <FadeIn direction="up" delay={0.6}>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <div className="text-center mb-4">
                            <h4 className="text-xl font-bold text-blue-800">Khan Z. R</h4>
                            <p className="text-orange-600 font-medium">Director of Regulatory Affairs & Quality Assurance</p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-lg font-semibold text-blue-800">
                                Director of Regulatory Affairs & Quality Assurance
                            </h5>
                            <p className="text-gray-600">
                                Khan Z. R brings over 15 years of specialized experience in regulatory affairs, compliance, and
                                quality assurance. Their in-depth knowledge of global regulatory frameworks, including FDA, EMA,
                                and WHO-GMP standards, ensures that every product we manufacture meets the highest safety and
                                efficacy requirements. They have successfully led multiple product approvals across diverse
                                markets and have been instrumental in implementing robust quality management systems throughout
                                the organization.
                            </p>
                            <p className="text-gray-600">
                                Their role is critical in maintaining the integrity of our products and processes. With an
                                unwavering focus on patient safety and compliance, Khan Z. R guides our teams through the
                                complex regulatory environment with diligence and precision. Their leadership not only protects
                                our reputation but also builds trust with our stakeholders, healthcare providers, and regulatory
                                authorities.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Director 3 - Md. Nisar M. */}
                <FadeIn direction="up" delay={0.7}>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <div className="text-center mb-4">
                            <h4 className="text-xl font-bold text-blue-800">Md. Nisar M.</h4>
                            <p className="text-orange-600 font-medium">Director of Research & Development</p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-lg font-semibold text-blue-800">Director of Research & Development</h5>
                            <p className="text-gray-600">
                                A passionate innovator and seasoned researcher, Md. Nisar M. brings more than 15 years of
                                expertise in pharmaceutical R&D. Their scientific leadership drives the discovery and
                                development of novel formulations, ensuring that NYLOZ Pharmaceutical stays ahead of evolving
                                therapeutic needs. With a background in pharmacology and drug delivery systems, they have
                                overseen the successful development of several breakthrough products, some of which have made a
                                significant impact in niche treatment areas.
                            </p>
                            <p className="text-gray-600">
                                Their collaborative approach encourages cross-functional synergy between scientists, regulatory
                                experts, and manufacturing teams. Under their guidance, our R&D division remains a hub of
                                creativity, driven by data, patient needs, and emerging technologies. Md. Nisar M.&#39;s vision
                                continues to shape the future of our product pipeline and research investments.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default Leadership