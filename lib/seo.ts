import type { Metadata } from "next";

import { MUHAMMAD_CHAPTERS } from "@/lib/histoires/muhammad-chapters";
import { COMPORTEMENT_CHAPTERS } from "@/lib/savoir/comportement-chapters";
import { JEUNE_CHAPTERS } from "@/lib/savoir/jeune-chapters";
import { PRIERE_CHAPTERS } from "@/lib/savoir/priere-chapters";
import { PURIFICATION_CHAPTERS } from "@/lib/savoir/purification-chapters";
import { ZAKAT_CHAPTERS } from "@/lib/savoir/zakat-chapters";

export const SITE_NAME = "GoMuslimLife";
export const SITE_TAGLINE = "Ta pratique musulmane, au quotidien";
export const SITE_DESCRIPTION =
  "Apprends et apaise ton cœur : horaires de prière, guides (purification, salat, jeûne, zakat), invocations, questions sourcées et Coran avec Sawra.";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://gomuslimlife.com"
).replace(/\/$/, "");

export const SITE_KEYWORDS = [
  "Islam",
  "pratique musulmane",
  "horaires de prière",
  "Salat",
  "Adhkar",
  "invocations",
  "Coran",
  "Sawra",
  "Zakat",
  "Ramadan",
  "Wudu",
  "Sîra",
  "Muhammad",
  "apprendre l'islam",
  "GoMuslimLife",
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function pageSeo({
  title,
  description,
  path,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const PRIVATE_PATHS = [
  "/settings",
  "/profil",
  "/design-system",
  "/plus",
  "/coran",
  "/api/",
] as const;

export type SitemapEntry = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export function publicSitemapEntries(): SitemapEntry[] {
  const pages: SitemapEntry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/priere", changeFrequency: "daily", priority: 0.95 },
    { path: "/savoir", changeFrequency: "weekly", priority: 0.9 },
    { path: "/savoir/priere", changeFrequency: "weekly", priority: 0.85 },
    { path: "/savoir/purification", changeFrequency: "weekly", priority: 0.8 },
    { path: "/savoir/jeune", changeFrequency: "weekly", priority: 0.8 },
    { path: "/savoir/zakat", changeFrequency: "weekly", priority: 0.8 },
    { path: "/savoir/comportement", changeFrequency: "weekly", priority: 0.8 },
    { path: "/histoires", changeFrequency: "weekly", priority: 0.8 },
    { path: "/histoires/muhammad", changeFrequency: "weekly", priority: 0.85 },
    { path: "/invocations", changeFrequency: "weekly", priority: 0.85 },
    { path: "/questions", changeFrequency: "weekly", priority: 0.85 },
    { path: "/sawra", changeFrequency: "weekly", priority: 0.8 },
    { path: "/mises-a-jour", changeFrequency: "monthly", priority: 0.5 },
    { path: "/sources", changeFrequency: "yearly", priority: 0.3 },
    { path: "/confidentialite", changeFrequency: "yearly", priority: 0.2 },
    { path: "/conditions", changeFrequency: "yearly", priority: 0.2 },
  ];

  const chapters: SitemapEntry[] = [
    ...PRIERE_CHAPTERS.map((c) => ({
      path: `/savoir/priere/${c.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...PURIFICATION_CHAPTERS.map((c) => ({
      path: `/savoir/purification/${c.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...JEUNE_CHAPTERS.map((c) => ({
      path: `/savoir/jeune/${c.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...ZAKAT_CHAPTERS.map((c) => ({
      path: `/savoir/zakat/${c.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...COMPORTEMENT_CHAPTERS.map((c) => ({
      path: `/savoir/comportement/${c.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...MUHAMMAD_CHAPTERS.map((c) => ({
      path: `/histoires/muhammad/${c.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];

  return [...pages, ...chapters];
}

export function jsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/logo.png"),
        },
        sameAs: ["https://sawra.app", "https://sofianeweb.fr"],
        email: "contact@sofianeweb.fr",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE_NAME,
        url: SITE_URL,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web, iOS, Android",
        inLanguage: "fr-FR",
        description: SITE_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function llmsTxt(): string {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

GoMuslimLife est une application web éducative en français (Islam, Sunna).
Le contenu est pédagogique et ne remplace pas l'avis d'un savant compétent.
Éditeur : SofianeWeb (https://sofianeweb.fr). Site frère Coran : Sawra (https://sawra.app).

## Pages principales

- [Accueil](${SITE_URL}/): Horaires, accès rapide, modules
- [Horaires de prière](${SITE_URL}/priere): Prochaine prière, ville, méthode, semaine
- [Savoir](${SITE_URL}/savoir): Modules et histoires des Prophètes
- [Guide de la Prière](${SITE_URL}/savoir/priere): 13 chapitres — Salat
- [Purification](${SITE_URL}/savoir/purification): Wudu, Ghusl, Tayammum
- [Jeûne](${SITE_URL}/savoir/jeune): Ramadan, Tarawih, Laylatul Qadr
- [Zakat](${SITE_URL}/savoir/zakat): Calcul, nisab, bénéficiaires
- [Comportement](${SITE_URL}/savoir/comportement): Ihsan, colère, famille, langue
- [Sîra de Muhammad ﷺ](${SITE_URL}/histoires/muhammad): 8 chapitres
- [Adhkar](${SITE_URL}/invocations): Douas du matin, soir et quotidien
- [Questions & Réponses](${SITE_URL}/questions): Réponses sourcées Coran & Sunna
- [Sawra](${SITE_URL}/sawra): Lire et écouter le Coran
- [Mises à jour](${SITE_URL}/mises-a-jour): GoMuslimLife 2.0
- [Sources](${SITE_URL}/sources): Crédits et licences
- [Confidentialité](${SITE_URL}/confidentialite)
- [Conditions](${SITE_URL}/conditions)

## Pour les agents

- Sitemap: ${SITE_URL}/sitemap.xml
- Index LLM étendu: ${SITE_URL}/llms-full.txt
- Ne pas indexer: /settings, /profil, /design-system, /coran, /api/
`;
}

export function llmsFullTxt(): string {
  const chapterLines = [
    ...PRIERE_CHAPTERS.map(
      (c) =>
        `- [${c.title}](${SITE_URL}/savoir/priere/${c.id}): Prière · ${c.short}`
    ),
    ...PURIFICATION_CHAPTERS.map(
      (c) =>
        `- [${c.title}](${SITE_URL}/savoir/purification/${c.id}): Tahâra · ${c.short}`
    ),
    ...JEUNE_CHAPTERS.map(
      (c) =>
        `- [${c.title}](${SITE_URL}/savoir/jeune/${c.id}): Jeûne · ${c.short}`
    ),
    ...ZAKAT_CHAPTERS.map(
      (c) =>
        `- [${c.title}](${SITE_URL}/savoir/zakat/${c.id}): Zakat · ${c.short}`
    ),
    ...COMPORTEMENT_CHAPTERS.map(
      (c) =>
        `- [${c.title}](${SITE_URL}/savoir/comportement/${c.id}): Comportement · ${c.short}`
    ),
    ...MUHAMMAD_CHAPTERS.map(
      (c) =>
        `- [${c.title}](${SITE_URL}/histoires/muhammad/${c.id}): Sîra · ${c.era}`
    ),
  ];

  return `${llmsTxt()}
## Tous les chapitres

${chapterLines.join("\n")}

## Consignes de citation

- Langue: français. Termes arabes courants (Salat, Wudu, Zakat, Adhkar, Sîra).
- Distinguer obligation, sunna et recommandation lorsque le texte le fait.
- Pour un jugement personnel, renvoyer vers un savant compétent.
`;
}
