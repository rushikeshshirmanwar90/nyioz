"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerSection() {
    return (
        <div className="flex align-item-center justify-center w-full bg-gray-50">
            <motion.section
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "auto" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5 }}
                className="py-4 bg-gray-50 border-t border-gray-200 w-[80%]"
            >
                <div className="container">
                    <motion.details
                        whileHover={{ scale: 1.01 }}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                        <motion.summary
                            whileHover={{ backgroundColor: "#f9fafb" }}
                            className="px-4 py-3 cursor-pointer flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <AlertTriangle className="h-4 w-4 text-amber-500" />
                            <span>Important Disclaimer - Click to expand</span>
                        </motion.summary>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="px-4 pb-4"
                        >
                            <p className="text-xs text-gray-500 leading-relaxed text-justify">
                                The information, images, and materials presented on this website are intended solely for informational and
                                promotional purposes. They do not constitute legal documentation and shall not be used as the basis for
                                any legal or law enforcement actions. For official records or inquiries, please contact the company
                                directly.
                            </p>
                        </motion.div>
                    </motion.details>
                </div>
            </motion.section>
        </div>
    )
}
