"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { BookOpen, Calculator, Award } from "lucide-react"

export function Program() {
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
            {"Pour qui ?"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Un accompagnement adapte a chaque niveau."}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground">{"Collegiens"}</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calculator className="h-4 w-4 text-primary flex-shrink-0" />
                {"Consolider les bases en calcul et geometrie"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calculator className="h-4 w-4 text-primary flex-shrink-0" />
                {"Comprendre les concepts cles du programme"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-primary flex-shrink-0" />
                {"Preparer le brevet sereinement"}
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground">{"Lyceens"}</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calculator className="h-4 w-4 text-primary flex-shrink-0" />
                {"Augmenter sa moyenne de maniere durable"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calculator className="h-4 w-4 text-primary flex-shrink-0" />
                {"Maitriser les notions avancees"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-primary flex-shrink-0" />
                {"Preparer le bac avec confiance"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
