export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground font-serif">M</span>
          </div>
          <span className="text-base font-semibold text-foreground">
            Mourchid <span className="text-primary">Maths</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {"Cours particuliers de mathematiques a La Reunion"}
        </p>
        <p className="text-xs text-muted-foreground">
          {"\u00A9 "}{new Date().getFullYear()}{" Mourchid Maths. Tous droits reserves."}
        </p>
      </div>
    </footer>
  )
}
