"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ShieldAlert, Brain, BookX } from "lucide-react"

const problems = [
  {
    icon: ShieldAlert,
    title: "Perte de confiance",
    description:
      "Votre enfant se dit \"nul en maths\" et abandonne avant même d'essayer.",
  },
  {
    icon: Brain,
    title: "Méthodes inefficaces",
    description:
      "Il travaille beaucoup mais ses notes ne progressent pas. La méthode n'est pas la bonne.",
  },
  {
    icon: BookX,
    title: "Bases mal comprises",
    description:
      "Des lacunes accumulées rendent chaque nouveau chapitre incompréhensible.",
  },
]

export function Problem() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Pourquoi certains élèves <span className="text-blue-600">bloquent en maths</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Comprendre le problème, c'est déjà commencer à le résoudre."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="font-serif text-xl font-semibold text-foreground md:text-2xl">
            {"\"Les maths ne sont pas une question d'intelligence mais de méthode.\""}
          </p>
        </div>
      </div>
    </section>
  )
}
