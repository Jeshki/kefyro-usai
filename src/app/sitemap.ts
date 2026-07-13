import type { MetadataRoute } from "next";

const BASE = "https://kefyrousai.lt";
const pages = ["", "/menu", "/about", "/gallery", "/reservations", "/contact"];
const locales = ["lt", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const prefix = locale === "lt" ? "" : `/${locale}`;
      entries.push({
        url: `${BASE}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            lt: `${BASE}${page}`,
            en: `${BASE}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}
