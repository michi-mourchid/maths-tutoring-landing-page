"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Briefcase, GraduationCap, Globe } from "lucide-react"
import { remainingSlots, totalSlots } from "@/app/page"

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
          <div className="flex items-center gap-2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {totalSlots} places disponibles seulement
            </div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-700/20 bg-red-700/5 px-4 py-1.5 text-sm font-medium text-red-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-700" />
              </span>
              {remainingSlots} places restantes
            </div>
          </div>

          <h1 className=" font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Réussir les maths avec une <span className="text-blue-600">méthode d'ingénieur</span> à La Réunion
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Accompagnement personnalisé pour <span className="font-bold text-blue-600">collégiens</span> et <span className="font-bold text-blue-600">lycéens</span> pour augmenter leur moyenne et reprendre confiance.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#rdv"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {"Réserver un appel diagnostic gratuit"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-sm text-muted-foreground">15 min, sans engagement</span>
          </div>
        </div>

        <div className="w-full max-w-sm flex-shrink-0">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-xl">
                <Image
                  src="/images/Mourchid.JPG"
                  alt="Mourchid, ingénieur et tuteur en mathématiques"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Mourchid MOUTUIDINE</h3>
                <p className="text-sm text-muted-foreground">Tuteur en mathématiques</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>{"Diplômé Ingénieur généraliste"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>{"Ingénieur Informatique logiciel en fonction"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Globe className="h-4 w-4 text-primary" />
                <span>{"Expérience pro en Amérique du Nord"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{"Basé à Saint-Denis (La Réunion)"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
