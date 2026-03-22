import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, BookOpen, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Cours de maths à Saint-Denis | Maths & Réussite",
  description:
    "Cours particuliers de maths à Saint-Denis pour collégiens et lycéens. Accompagnement personnalisé, méthode d’ingénieur et première séance gratuite en visio.",
  alternates: {
    canonical: "https://maths-et-reussite.re/cours-maths-saint-denis",
  },
  openGraph: {
    title: "Cours de maths à Saint-Denis | Maths & Réussite",
    description:
      "Cours particuliers de maths à Saint-Denis pour collégiens et lycéens. Méthode d’ingénieur et accompagnement personnalisé.",
    url: "https://maths-et-reussite.re/cours-maths-saint-denis",
    type: "website",
  },
};

export default function CoursMathsSaintDenisPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Saint-Denis · La Réunion
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Cours de maths à Saint-Denis
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Si vous cherchez un accompagnement en mathématiques à Saint-Denis
            pour votre enfant, Maths & Réussite propose un suivi structuré pour
            les collégiens et lycéens qui souhaitent progresser avec une méthode
            claire, rigoureuse et rassurante.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Basé à Saint-Denis</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Une présence locale pour proposer un accompagnement cohérent,
              rassurant et organisé autour des besoins de la famille.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Méthode structurée</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Comprendre les notions, reprendre les bases et avancer avec un
              vrai plan de progression.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Objectif résultats</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Augmenter la moyenne, préparer les échéances scolaires et redonner
              confiance à l’élève.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-4xl space-y-8 text-base leading-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Un accompagnement en maths à Saint-Denis pour collège et lycée
            </h2>
            <p className="mt-4">
              Cet accompagnement s’adresse aux élèves de Saint-Denis qui ont du
              mal à suivre le rythme, manquent de méthode ou veulent simplement
              sécuriser leur niveau. Le cadre est pensé pour être à la fois
              exigeant, encourageant et adapté à la réalité de chaque élève.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Reprendre confiance avant de viser la performance
            </h2>
            <p className="mt-4">
              Beaucoup d’élèves finissent par croire qu’ils ne sont “pas faits
              pour les maths”. L’objectif est précisément de déconstruire cette
              idée, de montrer à l’élève qu’il est capable de progresser, puis
              de construire des résultats concrets sur cette base.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Un fonctionnement simple et professionnel
            </h2>
            <p className="mt-4">
              Le parcours commence par un diagnostic parent de 15 minutes, suivi
              d’une première séance gratuite en visio avec l’élève. Ensuite, un
              plan de progression est mis en place pour travailler sur les bons
              chapitres, au bon rythme, avec des objectifs clairs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Ce que l’accompagnement peut apporter
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Mieux comprendre les cours et les exercices",
                "Préparer les contrôles avec plus de sérénité",
                "Gagner en méthode et en autonomie",
                "Progression plus régulière sur le trimestre",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Faire un premier point sur la situation de votre enfant
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-7">
            Cet échange gratuit de 15 minutes permet de comprendre les
            difficultés rencontrées et de voir si l’accompagnement est adapté à
            votre enfant à Saint-Denis.
          </p>
          <div className="mt-8">
            <Link
              href="https://calendly.com/mourchidmoutuidine/diagnostic-cours-maths-la-reunion"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("calendly_click", {
                  location: "page_cours_saint_denis",
                  page: "annexe",
                })
              }
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Réserver un appel pour commencer les cours
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}