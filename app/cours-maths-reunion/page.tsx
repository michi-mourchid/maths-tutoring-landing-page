import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Cours de maths à La Réunion | Maths & Réussite",
  description:
    "Cours particuliers de maths à La Réunion pour collégiens et lycéens. Méthode d’ingénieur, progression, confiance et accompagnement personnalisé.",
  alternates: {
    canonical: "https://maths-et-reussite.re/cours-maths-reunion",
  },
  openGraph: {
    title: "Cours de maths à La Réunion | Maths & Réussite",
    description:
      "Cours particuliers de maths à La Réunion pour collégiens et lycéens. Méthode d’ingénieur, progression et confiance.",
    url: "https://maths-et-reussite.re/cours-maths-reunion",
    type: "website",
  },
};

export default function CoursMathsReunionPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Maths & Réussite
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Cours de maths à La Réunion
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Maths & Réussite propose un accompagnement en mathématiques pour les
            collégiens et lycéens de La Réunion. L’objectif est d’aider chaque
            élève à mieux comprendre les notions, augmenter sa moyenne et
            reprendre confiance grâce à une méthode claire, structurée et
            rassurante.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Collège et lycée</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Un accompagnement adapté aux besoins des collégiens et lycéens,
              avec un cadre clair et progressif.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Objectif progression</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Reprendre les bases, mieux comprendre les chapitres, préparer les
              contrôles et progresser durablement.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Basé à Saint-Denis</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Basé à Saint-Denis, avec ouverture à d’autres zones de La Réunion
              selon l’organisation et les besoins.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-4xl space-y-8 text-base leading-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Pourquoi prendre des cours de maths à La Réunion ?
            </h2>
            <p className="mt-4">
              Beaucoup d’élèves rencontrent des difficultés en mathématiques non
              pas parce qu’ils ne sont pas capables, mais parce qu’ils manquent
              de méthode, de confiance ou de repères clairs. Un accompagnement
              structuré permet de repartir sur de bonnes bases, de lever les
              blocages et de rendre les mathématiques plus accessibles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Une méthode d’ingénieur, mais adaptée à l’élève
            </h2>
            <p className="mt-4">
              L’approche repose sur la logique, la progression et la pédagogie.
              L’objectif n’est pas seulement de faire des exercices, mais de
              donner à l’élève une vraie manière de réfléchir, comprendre et
              résoudre. Cela permet de renforcer l’autonomie et de redonner une
              confiance durable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Pour quels objectifs ?
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Augmenter la moyenne en mathématiques",
                "Mieux comprendre les notions du programme",
                "Préparer un contrôle, le brevet ou le bac",
                "Reprendre confiance et gagner en méthode",
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

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Comment se déroule l’accompagnement ?
            </h2>
            <p className="mt-4">
              Le parcours commence par un échange de 15 minutes avec le parent,
              afin de comprendre la situation de l’élève, ses difficultés et les
              objectifs visés. Ensuite, une première séance gratuite en visio
              permet de faire un premier point avec l’élève avant la mise en
              place d’un plan de progression personnalisé.
            </p>
          </section>
        </div>

        <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Réserver un diagnostic parent gratuit
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-7">
            Un premier échange de 15 minutes permet de voir si l’accompagnement
            est adapté à votre enfant et comment l’aider à progresser en maths à
            La Réunion.
          </p>
          <div className="mt-8">
            <Link
              href="https://calendly.com/mourchidmoutuidine/diagnostic-cours-maths-la-reunion"
              target="_blank"
              onClick={() =>
                trackEvent("calendly_click", {
                  location: "page_cours_reunion",
                  page: "annexe",
                })
              }
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Réserver un diagnostic
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}