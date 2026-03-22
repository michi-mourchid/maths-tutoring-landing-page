"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type TrackedCalendlyLinkProps = {
  href: string;
  location: string;
  page: string;
  children?: React.ReactNode;
  className?: string;
};

export function TrackedCalendlyLink({
  href,
  location,
  page,
  children = "Réserver un diagnostic",
  className,
}: TrackedCalendlyLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("calendly_click", {
          location,
          page,
        })
      }
      className={
        className ??
        "inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition hover:opacity-90"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}