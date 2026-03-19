"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ClipboardCheck, ArrowRight } from "lucide-react"

export function Assessment() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)
  const [submitted, setSubmitted] = useState(false)
  const [niveau, setNiveau] = useState("")
  const [moyenne, setMoyenne] = useState("")
  const [difficulte, setDifficulte] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
          <div className="text-center">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <ClipboardCheck className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {"Test rapide : le niveau de votre enfant en maths"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {"3 questions pour mieux comprendre sa situation."}
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">
                  {"Niveau scolaire"}
                </label>
                <select
                  value={niveau}
                  onChange={(e) => setNiveau(e.target.value)}
                  required
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{"Selectionnez..."}</option>
                  <option value="6eme">{"6eme"}</option>
                  <option value="5eme">{"5eme"}</option>
                  <option value="4eme">{"4eme"}</option>
                  <option value="3eme">{"3eme"}</option>
                  <option value="2nde">{"Seconde"}</option>
                  <option value="1ere">{"Premiere"}</option>
                  <option value="terminale">{"Terminale"}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">
                  {"Moyenne actuelle en maths"}
                </label>
                <select
                  value={moyenne}
                  onChange={(e) => setMoyenne(e.target.value)}
                  required
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{"Selectionnez..."}</option>
                  <option value="moins-5">{"Moins de 5/20"}</option>
                  <option value="5-8">{"Entre 5 et 8/20"}</option>
                  <option value="8-10">{"Entre 8 et 10/20"}</option>
                  <option value="10-12">{"Entre 10 et 12/20"}</option>
                  <option value="12-plus">{"Plus de 12/20"}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">
                  {"Principale difficulte"}
                </label>
                <select
                  value={difficulte}
                  onChange={(e) => setDifficulte(e.target.value)}
                  required
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{"Selectionnez..."}</option>
                  <option value="confiance">{"Manque de confiance"}</option>
                  <option value="methode">{"Pas de methode de travail"}</option>
                  <option value="bases">{"Lacunes dans les bases"}</option>
                  <option value="motivation">{"Manque de motivation"}</option>
                  <option value="comprehension">{"Difficulte a comprendre le cours"}</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                {"Voir le resultat"}
              </button>
            </form>
          ) : (
            <div className="mt-10 text-center">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
                <p className="text-lg font-semibold text-foreground">
                  {"Merci ! Votre enfant peut progresser avec le bon accompagnement."}
                </p>
                <p className="mt-3 text-muted-foreground">
                  {"Réservez un appel diagnostic gratuit pour en discuter ensemble."}
                </p>
                <a
                  href="#rdv"
                  className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  {"Réserver mon appel diagnostic"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
