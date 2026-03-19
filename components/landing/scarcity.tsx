"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Users } from "lucide-react"
import { remainingSlots, takenSlots, totalSlots } from "@/app/page"

export function Scarcity() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 bg-secondary/50 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Users className="h-7 w-7 text-primary" />
        </div>

        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {"Je limite volontairement le nombre d'élèves"}
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {"Pour garantir un suivi efficace, j'accepte seulement 10 élèves maximum."}
        </p>

        <div className="mt-10 mx-auto max-w-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">{"Places occupées"}</span>
            <span className="text-sm font-semibold text-primary">
              {remainingSlots} {"places restantes"}
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-1000"
              style={{ width: `${(takenSlots / totalSlots) * 100}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between">
            {Array.from({ length: totalSlots }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${i < takenSlots ? "bg-primary" : "bg-muted"
                  }`}
              />
            ))}
          </div>
        </div>

        <a
          href="#rdv"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
        >
          {"Réserver ma place"}
        </a>
      </div>
    </section>
  )
}
