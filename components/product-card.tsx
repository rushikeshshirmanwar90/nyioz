"use client"

import Image, { StaticImageData } from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  description: string
  category: string
  image: string | StaticImageData
  benefits: string[]
}

export default function ProductCard({ name, description, category, image, benefits }: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 bg-blue-50">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain p-4" />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded"
          >
            {category}
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>

          <div className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
