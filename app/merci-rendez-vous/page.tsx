"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, CalendarDays, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function MerciRendezVousPage() {
  useEffect(() => {
    trackEvent("diagnostic_booked", {
      appointment_type: "parent_diagnostic_15min",
      page: "merci-rendez-vous",
    });
  }, []);

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Merci, votre rendez-vous est confirmé
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            J’ai bien reçu votre réservation. Nous échangerons prochainement sur
            la situation de votre enfant, ses difficultés en mathématiques et la
            meilleure manière de l’accompagner.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 text-left">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-base font-semibold text-foreground">Avant l’appel</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Prévoyez un moment calme de 15 minutes pour pouvoir échanger
                sereinement sur la situation de votre enfant.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 text-left">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-base font-semibold text-foreground">Pendant l’échange</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Nous ferons un premier point sur les difficultés rencontrées,
                les objectifs visés et la pertinence de l’accompagnement.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-left">
            <h2 className="text-lg font-semibold text-foreground">
              Ce que nous verrons ensemble
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                Comprendre les difficultés principales de votre enfant
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                Évaluer si l’accompagnement est adapté à sa situation
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                Définir les premières étapes possibles pour progresser
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Retour à l’accueil
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}