"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Kamlati A.",
    role: "Maman de Youmna, 4ème",
    text: "Youmna est passée de 12 à 16 de moyenne en maths en seulement 3 mois. Mourchid a su lui redonner confiance avec une patience incroyable. Je recommande vivement !",
  },
  {
    name: "Rahada M.",
    role: "Grande soeur de Rachida, Terminale",
    text: "Ma soeur avait complètement abandonné les maths et enchaînait les notes basses. Grâce à l'accompagnement structuré de Mourchid, elle a non seulement rattrapé son retard mais elle a l'air de comprendre enfin ce qu'elle fait.",
  },
  {
    name: "Maryline H.",
    role: "Maman de Maïly, Première",
    text: "Maïly a commencé avec des 3/20. Elle détestait les maths. Après quelques séances avec Mourchid, elle est passée à 13 puis 15 ! Elle m'a dit \"en fait, c'est pas si compliqué\" lol. C'est exactement ce dont elle avait besoin.",
  },
]

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section
      ref={ref}
      id="temoignages"
      className={`py-20 md:py-28 bg-secondary/50 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Ce que disent les parents"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Des résultats concrets, des parents rassurés et des élèves confiants."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
