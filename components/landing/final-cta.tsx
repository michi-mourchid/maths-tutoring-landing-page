"use client"

import { useEffect, useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRight, Shield, Clock, Phone } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      trackEvent("final_cta_view", {
        page: "home",
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="rdv"
      className={`py-20 md:py-28 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-14 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Réservez votre diagnostic gratuit"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Parlons de la situation de votre enfant et voyons comment je peux l'aider."}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              {"15 minutes"}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              {"Google Meet"}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              {"Sans engagement"}
            </div>
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex flex-col items-center justify-center p-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-2 text-lg font-semibold text-foreground">
                {"Google Meet - Prendre rendez-vous"}
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                {"Sélectionnez un créneau qui vous convient"}
              </p>
              <a
                href="https://calendly.com/mourchidmoutuidine/diagnostic-cours-maths-la-reunion"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("calendly_click", {
                    location: "final_cta",
                    page: "home",
                  })
                }
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                {"Réserver un appel diagnostic gratuit"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {"Appel de 15 minutes, sans engagement. Gratuit."}
          </p>
        </div>
      </div>
    </section>
  )
}
