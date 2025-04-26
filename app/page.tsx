// app/page.js or pages/index.js
"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import About from "@/components/About"
import Products from "@/components/Products"
import Stats from "@/components/Stats"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Products />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

