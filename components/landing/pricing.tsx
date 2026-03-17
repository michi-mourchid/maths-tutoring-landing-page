"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Check } from "lucide-react"

export function Pricing() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section
      ref={ref}
      id="tarifs"
      className={`py-20 md:py-28 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Un accompagnement accessible"}
          </h2>
          <div className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {"A partir de 20\u20AC/h"}
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h3 className="text-lg font-semibold text-muted-foreground">{"College"}</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="font-serif text-5xl font-bold text-foreground">20</span>
              <span className="text-xl text-muted-foreground">{"\u20AC/h"}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3 text-left">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                {"Suivi personnalise"}
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                {"Exercices adaptes"}
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                {"Bilan de progression regulier"}
              </li>
            </ul>
            <a
              href="#rdv"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              {"Commencer"}
            </a>
          </div>

          <div className="relative rounded-xl border-2 border-primary bg-card p-8 text-center shadow-lg">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
              {"Populaire"}
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground">{"Lycee"}</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="font-serif text-5xl font-bold text-foreground">25</span>
              <span className="text-xl text-muted-foreground">{"\u20AC/h"}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3 text-left">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                {"Suivi personnalise"}
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                {"Preparation bac incluse"}
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                {"Support entre les seances"}
              </li>
            </ul>
            <a
              href="#rdv"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {"Commencer"}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {"Premiere seance en visio gratuite. Sans engagement."}
        </p>
      </div>
    </section>
  )
}
