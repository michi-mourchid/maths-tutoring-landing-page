import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Page introuvable</h1>
      <p className="text-lg leading-8 mb-8">
        La page que vous recherchez n’existe pas ou n’est plus disponible.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800 transition"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}