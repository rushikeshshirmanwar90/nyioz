// components/Products.js
"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

import product1 from "@/public/images/products/product (1).jpg"
import product2 from "@/public/images/products/product (2).jpg"
import product3 from "@/public/images/products/product (3).jpg"
import product4 from "@/public/images/products/product (4).jpg"
import product5 from "@/public/images/products/product (5).jpg"
import product6 from "@/public/images/products/product (6).jpg"

export default function Products() {
    return (
        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn direction="up">
                        <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Our Products
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"> Healthcare Solutions</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-gray-600">
                            Discover our range of high-quality pharmaceutical products designed to improve health and well-being.
                            We offer medications across various therapeutic categories to address diverse healthcare needs.
                        </p>
                    </FadeIn>
                </div>

                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                    <ProductCard
                        name="GROWKOA"
                        description="Cyproheptadine Hydrochloride I.P. 2mg & Tricholine Citrate 275mg Syrup"
                        category="Appetite Stimulant"
                        image={product1}
                        benefits={["Stimulates appetite", "Helps with weight gain", "Free from GI adverse effects"]}
                    />

                    <ProductCard
                        name="DAXTON CAPSULES DSR"
                        description="Pantoprazole 40mg Gastro-Resistant & Domperidone 30mg Prolonged-Release Capsules I.P."
                        category="GERD & Dyspepsia"
                        image={product2}
                        benefits={["Checks hyperacidity", "Prevents ulcers", "Controls gastric reflux"]}
                    />

                    <ProductCard
                        name="GIACALY TABLET"
                        description="Calcium Citrate 1000mg, Magnesium Hydroxide 100mg, Zinc 4mg & Vitamin D3 200 I.U."
                        category="Calcium Supplement"
                        image={product3}
                        benefits={["Improves bone mineral density", "Reduces risk of osteoporosis", "Vital for normal growth"]}
                    />

                    <ProductCard
                        name="DEFNE 6 TABLET"
                        description="Deflazacort 6mg"
                        category="Anti-inflammatory"
                        image={product4}
                        benefits={["Anti-allergic effects", "Anti-inflammatory properties", "Immunosuppressant effects"]}
                    />

                    <ProductCard
                        name="FEBRIXA DS"
                        description="Mefenamic Acid 100mg + Paracetamol 250mg Syrup"
                        category="Fever & Pain Relief"
                        image={product5}
                        benefits={["Rapid fever reduction", "Effective pain relief", "Well-established safety profile"]}
                    />

                    <ProductCard
                        name="MOMOFER-HB"
                        description="Ferrous Ascorbate 100mg + Folic Acid 1.5mg + Zinc Sulphate 61.8mg Tablets"
                        category="Iron Supplement"
                        image={product6}
                        benefits={[
                            "Treats iron deficiency anemia",
                            "Enhanced iron absorption",
                            "Supports growth and development",
                        ]}
                    />
                </StaggerChildren>

                <FadeIn direction="up" delay={0.4} className="mt-12 text-center">
                    <Button className="bg-blue-700 hover:bg-blue-800">
                        View All Products <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </FadeIn>
            </div>
        </section>
    )
}