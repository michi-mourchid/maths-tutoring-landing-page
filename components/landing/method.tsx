"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Phone, Video, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Appel diagnostic gratuit",
    subtitle: "15 min",
    description:
      "On fait le point ensemble sur la situation de votre enfant, ses difficultés et vos préoccupations.",
  },
  {
    icon: Video,
    number: "02",
    title: "Séance découverte gratuite",
    subtitle: "30min en visio avec l'élève",
    description:
      "Je travaille directement avec votre enfant pour évaluer son profil et adapter mon approche.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Plan de progression personnalisé",
    subtitle: "Sur mesure",
    description:
      "Un programme adapté avec un planning clair et des objectifs clairs pour des résultats visibles.",
  },
]

export function Method() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section
      ref={ref}
      id="methode"
      className={`py-20 md:py-28 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Une approche simple en <span className="text-blue-600">3 étapes</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Un parcours clair et transparent pour aider votre enfant."}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-border bg-card p-8 transition-all hover:shadow-md"
            >
              <span className="mb-4 block font-serif text-4xl font-bold text-primary/20">
                {step.number}
              </span>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{step.title}</h3>
              <span className="mb-3 block text-sm font-medium text-primary">{step.subtitle}</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
