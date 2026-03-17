"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Briefcase, GraduationCap } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (el) {
      el.style.opacity = "0"
      el.style.transform = "translateY(24px)"
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            10 places disponibles seulement
          </div>

          <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {"Reussir les maths avec une methode d'ingenieur"}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {"Accompagnement personnalise pour collegiens et lyceens pour augmenter leur moyenne et reprendre confiance."}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#rdv"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {"Reserver un appel diagnostic gratuit"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-sm text-muted-foreground">15 min, sans engagement</span>
          </div>
        </div>

        <div className="w-full max-w-sm flex-shrink-0">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                <Image
                  src="/images/tutor.jpg"
                  alt="Mourchid, tuteur en mathematiques"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Mourchid</h3>
                <p className="text-sm text-muted-foreground">Tuteur en mathematiques</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>{"Ingenieur diplome"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>{"Experience internationale au Canada"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{"Base a Saint-Denis (La Reunion)"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
