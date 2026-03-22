import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script';

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://maths-et-reussite.re"),
  title: 'Maths & Réussite | Cours particuliers de maths à La Réunion - Ingénieur',
  description: 'Accompagnement personnalisé en mathématiques pour collégiens et lycéens à La Réunion. Méthode d\'ingénieur, résultats concrets. Première séance gratuite.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '192x192', type: 'image/png' },
    ]
  },
  applicationName: "Maths & Réussite",
  alternates: {
    canonical: "https://maths-et-reussite.re",
  },
  keywords: [
    "cours de maths La Réunion",
    "cours particuliers maths La Réunion",
    "soutien scolaire maths Réunion",
    "cours maths Saint-Denis",
    "prof de maths La Réunion",
    "maths et réussite",
    "cours particuliers collège lycée Réunion",
  ],
  authors: [{ name: "Mourchid MOUTUIDINE" }],
  creator: "Mourchid",
  publisher: "Maths & Réussite",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Maths & Réussite | Cours particuliers de maths à La Réunion - Ingénieur",
    description: "Accompagnement personnalisé en mathematiques pour collégiens et lycéens à La Réunion. Méthode d'ingénieur, résultats concrets. Première séance gratuite.",
    url: "https://maths-et-reussite.re",
    siteName: "Maths & Réussite",
    images: [
      {
        url: "/previsu-lien.png",
        width: 1200,
        height: 630,
        alt: "Maths & Réussite - Cours particuliers de maths à La Réunion - Ingénieur",
      },
    ],
    type: "website",
  },
  verification: {
    google: "OOh9J8Ajc7nX-cgYSawaRES--3nXRqNKPBKKSKqvlgA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maths & Réussite | Cours particuliers de maths à La Réunion - Ingénieur",
    description: "Accompagnement personnalisé en mathematiques pour collégiens et lycéens à La Réunion. Méthode d'ingénieur, résultats concrets. Première séance gratuite.",
    images: ["/previsu-lien.png"],
  },
}

export const viewport: Viewport = {
  themeColor: '#2d5ab8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}

        <Analytics />
      </body>
    </html>
  );
}