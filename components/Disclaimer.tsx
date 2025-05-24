import React from 'react'
import FadeIn from './animations/fade-in'

const Disclaimer = () => {
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="container">
                    <FadeIn direction="up">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Disclaimer</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-center max-w-4xl mx-auto">
                                The information, images, and materials presented on this website are intended solely for informational
                                and promotional purposes. They do not constitute legal documentation and shall not be used as the
                                basis for any legal or law enforcement actions. For official records or inquiries, please contact the
                                company.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}

export default Disclaimer
