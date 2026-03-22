import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Mission } from "@/components/landing/mission";
import { Method } from "@/components/landing/method";
import { Program } from "@/components/landing/program";
import { Pricing } from "@/components/landing/pricing";
import { Scarcity } from "@/components/landing/scarcity";
import { Assessment } from "@/components/landing/assessment";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export const totalSlots = 10;
export const takenSlots = 3;
export const remainingSlots = totalSlots - takenSlots;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maths & Réussite",
  url: "https://maths-et-reussite.re",
  image: "https://maths-et-reussite.re/previsu-lien.png",
  description:
    "Cours particuliers de mathématiques pour collégiens et lycéens à La Réunion. Accompagnement structuré par un ingénieur diplômé.",
  areaServed: "La Réunion",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint-Denis",
    addressRegion: "La Réunion",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Mathématiques",
    "Soutien scolaire",
    "Collège",
    "Lycée",
    "Méthode d’apprentissage",
    "Confiance en soi",
  ],
};

export default function MathsLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Mission />
        <Method />
        <Program />
        <Pricing />
        <Scarcity />
        <Assessment />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}