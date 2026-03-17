"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Heart, Lightbulb, MessageCircle } from "lucide-react"

const points = [
  {
    icon: Heart,
    title: "Reconstruire la confiance",
    description:
      "Chaque petit progres est valorise pour que votre enfant reprenne foi en ses capacites.",
  },
  {
    icon: Lightbulb,
    title: "Raisonnement structure",
    description:
      "J'enseigne une methode claire et logique qui s'applique a tous les exercices.",
  },
  {
    icon: MessageCircle,
    title: "Explications simples",
    description:
      "Des mots simples, des exemples concrets. Pas de jargon inutile.",
  },
]

export function Mission() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 bg-secondary/50 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Mon objectif : montrer a votre enfant qu'il en est capable"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Un accompagnement bienveillant, structure et efficace."}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
