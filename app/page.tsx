"use client";

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Contact } from "@/components/contact"
import { Careers } from "@/components/careers"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Careers />
      <Contact />
      <Footer />
    </main>
  )
}
