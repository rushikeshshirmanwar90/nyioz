// components/Products.js
"use client"

import ProductCard from "@/components/product-card"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

import product1 from "@/public/images/products/product (1).jpg"
import product2 from "@/public/images/products/product (2).jpg"
import product3 from "@/public/images/products/product (3).jpg"
import product4 from "@/public/images/products/product (4).jpg"
import product5 from "@/public/images/products/product (5).jpg"
import product6 from "@/public/images/products/product (6).jpg"
import product7 from "@/public/images/products/product (7).jpg"
import product8 from "@/public/images/products/product (8).jpg"
import product10 from "@/public/images/products/product (10).jpg"

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

                    <ProductCard
                        name="METOFOL"
                        description="L-Methylfolate Calcium 1mg + Methylcobalamin 1500mcg + Pyridoxal-5-Phosphate 0.5mg Tablets"
                        category="Prenatal Supplement"
                        image={product7}
                        benefits={[
                            "Supports fetal brain, heart & eye development",
                            "Helps prevent neural tube defects (NTDs)",
                            "Reduces risk of low birth weight and pre-eclampsia",
                        ]}
                    />

                    <ProductCard
                        name="GIACAL-K2"
                        description="Cissus quadrangularis 500mg + Calcium Carbonate 500mg + Vitamin K2-7 45mcg Tablets"
                        category="Bone Health Supplement"
                        image={product8}
                        benefits={[
                            "Enhances mobility and improves activity",
                            "Helps in early regeneration & mineralization of bones",
                            "Reduces inflammation and boosts bone strength"
                        ]}
                    />

                    <ProductCard
                        name="GAINARD"
                        description="Syrup"
                        category="Nutritional Supplement"
                        image={product10}
                        benefits={[
                            "Supports nutritional intake",
                            "Promotes overall health",
                            "Enhances well-being"
                        ]}
                    />

                </StaggerChildren>

            </div>
        </section>
    )
}