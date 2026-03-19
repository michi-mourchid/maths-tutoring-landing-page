import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Mission } from "@/components/landing/mission"
import { Method } from "@/components/landing/method"
import { Program } from "@/components/landing/program"
import { Pricing } from "@/components/landing/pricing"
import { Scarcity } from "@/components/landing/scarcity"
import { Assessment } from "@/components/landing/assessment"
import { Testimonials } from "@/components/landing/testimonials"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export const totalSlots = 10
export const takenSlots = 3
export const remainingSlots = totalSlots - takenSlots

export default function MathsLandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Mission />
        <Method />
        <Program />
        <Pricing />
        <Scarcity />
        <Assessment />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
