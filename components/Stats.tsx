import React from 'react'
import FadeIn from "@/components/animations/fade-in"
import CountUp from './animations/count-up'
import Image from 'next/image'

import img from "@/public/images/meeting.jpg"

const Stats = () => {
    return (
        <div>
            <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="container mx-auto px-4 max-w-6xl"> {/* Added mx-auto, px-4, and max-w-6xl */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <FadeIn direction="up">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to Quality and Innovation</h2>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.1}>
                                <p className="mb-8 text-green-100">
                                    At NYLOZ Pharmaceutical, we are dedicated to developing innovative healthcare solutions that improve
                                    lives. Our commitment to quality, research, and patient care drives everything we do.
                                </p>
                            </FadeIn>
                            <div className="grid grid-cols-2 gap-6">
                                <FadeIn direction="up" delay={0.3}>
                                    <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                        <div className="text-4xl font-bold mb-2">
                                            <CountUp end={50} suffix="+" className="text-4xl font-bold" />
                                        </div>
                                        <div className="text-center text-green-100">Products</div>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={0.4}>
                                    <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                        <div className="text-4xl font-bold mb-2">
                                            <CountUp end={400} suffix="+" className="text-4xl font-bold" />
                                        </div>
                                        <div className="text-center text-green-100">Healthcare Partners</div>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={0.5}>
                                    <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                        <div className="text-4xl font-bold mb-2">
                                            <CountUp end={15} suffix="+" className="text-4xl font-bold" />
                                        </div>
                                        <div className="text-center text-green-100">Collaboration with manufacturing Units</div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                        <FadeIn direction="left" delay={0.3}>
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image src={img} alt="Quality Control" fill className="object-cover" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats