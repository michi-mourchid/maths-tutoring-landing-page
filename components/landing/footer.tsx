import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center ">
            {/*<span className="text-sm font-bold text-primary-foreground font-serif">M</span>*/}
            <div className="relative w-8 h-8 overflow-hidden">
              <Image
                src="/images/logo-maths-reussite.png"
                alt="Maths & Réussite - cours particuliers de maths à La Réunion"
                fill
              />
            </div>
          </div>
          <span className="text-base font-semibold text-foreground">
            Maths & <span className="text-primary">Réussite</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {"Cours particuliers de mathématiques à La Réunion"}
        </p>
        <p className="text-xs text-muted-foreground">
          {"\u00A9 "}{new Date().getFullYear()}{" Maths & Réussite. Tous droits reserves."}
        </p>
      </div>
    </footer>
  )
}
