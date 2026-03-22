import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://maths-et-reussite.re/sitemap.xml",
    host: "https://maths-et-reussite.re",
  };
}
