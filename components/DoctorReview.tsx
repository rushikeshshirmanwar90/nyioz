"use client"

import { motion } from "framer-motion"
import { Star, Quote, Stethoscope, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

const doctorReviews = [
    {
        name: "Dr. Sarang Chobe",
        specialty: "Gynaecologist",
        hospital: "Women's Health Clinic",
        rating: 5,
        review:
            "Nyloz Pharmaceuticals consistently delivers high-quality formulations that are ideal for women's health. Their tablets and supplements are well-tolerated and produce excellent therapeutic outcomes. I have observed noticeable improvements in my patients' recovery and compliance. I wholeheartedly recommend Nyloz to my colleagues in gynecology.",
        experience: "15+ years",
        patients: "4500+",
    },
    {
        name: "Dr. Sunil Thadke",
        specialty: "Paediatrician",
        hospital: "Children's Healthcare Center",
        rating: 5,
        review:
            "The pediatric medicines from Nyloz have become a trusted part of my practice. From multivitamin syrups to antibiotics, the efficacy, palatability, and quality control are outstanding. Nyloz has set a new benchmark in pediatric care.",
        experience: "18+ years",
        patients: "6000+",
    },
    {
        name: "Dr. Shushma Bhartiya",
        specialty: "Gynaecologist",
        hospital: "Maternal Care Hospital",
        rating: 5,
        review:
            "Nyloz Pharmaceuticals has truly impressed me with their range of gynecological products. Their attention to detail in dosage and patient-centric formulations makes them a top choice. I have seen exceptional patient compliance and rapid therapeutic results. Highly recommended for OB-GYN professionals.",
        experience: "20+ years",
        patients: "7500+",
    },
    {
        name: "Dr. Sakhib Shaikh",
        specialty: "Paediatrician",
        hospital: "Kids Care Medical Center",
        rating: 5,
        review:
            "Nyloz Pharmaceuticals offers a range of pediatric syrups that have shown remarkable results in my young patients. The taste is child-friendly, and the formulations are scientifically crafted to ensure safety and efficacy. I confidently recommend Nyloz products to pediatricians seeking reliable, well-researched medications.",
        experience: "12+ years",
        patients: "3800+",
    },
    {
        name: "Dr. Irfan Khan",
        specialty: "Orthopaedic Surgeon",
        hospital: "Bone & Joint Specialty Hospital",
        rating: 5,
        review:
            "Nyloz's orthopedic range, including pain management and calcium supplements, delivers impressive clinical outcomes. The bioavailability of their tablets is excellent, and patient feedback has been overwhelmingly positive. I highly recommend Nyloz to my orthopedic peers.",
        experience: "22+ years",
        patients: "5200+",
    },
]

export default function DoctorsReviewSection() {
    return (
        <section className="py-16 md:py-24 bg-gray-50 flex align-items-center justify-center p-4">
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
                            Doctor Testimonials for Nyloz Pharmaceuticals
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-gray-600 text-lg text-justify">
                            The testimonials from medical professionals highlight Nyloz Pharmaceuticals as a trusted and effective pharmaceutical brand across various specialties, including pediatrics, gynecology, and orthopedics. Doctors consistently praise the brand’s commitment to safety, efficacy, and patient-friendly formulations. Nyloz is commended for its child-friendly flavors, bioavailability, strict quality control, and positive patient outcomes. Across all reviews, there is a strong recommendation for Nyloz as a reliable partner in medical care, making it a preferred choice among healthcare professionals.

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
