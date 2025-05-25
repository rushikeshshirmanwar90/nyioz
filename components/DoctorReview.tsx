"use client"

import { motion } from "framer-motion"
import { Star, Quote, Stethoscope, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

const doctorReviews = [
    {
        name: "Dr. Rajesh Kumar",
        specialty: "Cardiologist",
        hospital: "Apollo Hospital, Mumbai",
        rating: 5,
        review:
            "NYLOZ Pharmaceutical has consistently delivered high-quality medications that I trust for my patients. Their GIACALY tablets have shown remarkable results in improving bone health in elderly patients. The quality control and efficacy are outstanding.",
        experience: "15+ years",
        patients: "5000+",
    },
    {
        name: "Dr. Priya Sharma",
        specialty: "Pediatrician",
        hospital: "Fortis Healthcare, Delhi",
        rating: 5,
        review:
            "I've been prescribing GROWKOA syrup for children with appetite issues, and the results have been exceptional. Parents consistently report improved appetite and healthy weight gain. NYLOZ's commitment to child-friendly formulations is commendable.",
        experience: "12+ years",
        patients: "3500+",
    },
    {
        name: "Dr. Mohammed Ali",
        specialty: "Gastroenterologist",
        hospital: "Max Super Speciality Hospital",
        rating: 5,
        review:
            "DAXTON Capsules DSR has been a game-changer for my GERD patients. The dual-release formulation provides excellent symptom control with minimal side effects. I highly recommend NYLOZ products for their reliability and effectiveness.",
        experience: "18+ years",
        patients: "4200+",
    },
    {
        name: "Dr. Sunita Patel",
        specialty: "General Physician",
        hospital: "Lilavati Hospital, Mumbai",
        rating: 5,
        review:
            "FEBRIXA DS has proven to be highly effective for fever and pain management in both adults and children. The rapid onset of action and safety profile make it my go-to choice. NYLOZ maintains excellent pharmaceutical standards.",
        experience: "20+ years",
        patients: "8000+",
    },
]

export default function DoctorsReviewSection() {
    return (
        <section className="py-16 md:py-24 bg-gray-50 flex align-items-center justify-center">
            <div className="container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-medium mb-4">
                            <Stethoscope className="h-4 w-4" />
                            Doctor&#39;s Reviews
                            <Heart className="h-4 w-4 text-red-500" />
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                            Trusted by Healthcare Professionals Nationwide
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-gray-600 text-lg text-justify">
                            Our commitment to excellence is reflected in the trust and confidence that healthcare professionals place
                            in our products. Here&#39;s what leading doctors across India have to say about NYLOZ Pharmaceutical&#39;s quality
                            and effectiveness.
                        </p>
                    </FadeIn>
                </div>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.2}>
                    {doctorReviews.map((doctor, index) => (
                        <motion.div key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="h-full bg-white shadow-lg border-0">
                                <CardContent className="p-8">
                                    {/* Quote Icon */}
                                    <div className="absolute top-4 right-4">
                                        <Quote className="h-8 w-8 text-blue-200" />
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                                                {doctor.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-blue-800">{doctor.name}</h3>
                                                <p className="text-orange-600 font-medium">{doctor.specialty}</p>
                                                <p className="text-sm text-gray-500">{doctor.hospital}</p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex gap-4 mb-4">
                                            <div className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
                                                <Award className="h-4 w-4 text-blue-600" />
                                                <span className="text-sm font-medium text-blue-700">{doctor.experience}</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                                                <Heart className="h-4 w-4 text-green-600" />
                                                <span className="text-sm font-medium text-green-700">{doctor.patients} Patients</span>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(doctor.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <span className="ml-2 text-sm font-medium text-gray-600">({doctor.rating}.0)</span>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-700 text-justify leading-relaxed italic">&quot;{doctor.review}&quot;</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerChildren>

                {/* Trust Indicators */}
                <FadeIn direction="up" delay={0.6}>
                    <div className="mt-16 bg-blue-600 text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">🏥 Trusted by 10,000+ Healthcare Professionals 🏥</h3>
                        <p className="text-blue-100 text-lg">
                            Join the growing community of doctors who trust NYLOZ Pharmaceutical for their patients&#39; health and
                            well-being.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
