import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  Clock,
  Coins,
  Crown,
  Droplets,
  Footprints,
  HandHeart,
  Headphones,
  Home,
  MessageCircleQuestion,
  Moon,
  ScrollText,
  Settings,
  Sparkles,
  Star,
  User,
} from "lucide-react";

import { MUHAMMAD_CHAPTERS } from "@/lib/histoires/muhammad-chapters";
import { INVOCATIONS } from "@/lib/invocations/data";
import { QUESTIONS } from "@/lib/questions/data";
import { COMPORTEMENT_CHAPTERS } from "@/lib/savoir/comportement-chapters";
import { JEUNE_CHAPTERS } from "@/lib/savoir/jeune-chapters";
import { PRIERE_CHAPTERS } from "@/lib/savoir/priere-chapters";
import { PURIFICATION_CHAPTERS } from "@/lib/savoir/purification-chapters";
import { ZAKAT_CHAPTERS } from "@/lib/savoir/zakat-chapters";

export type SearchCategory =
  | "page"
  | "module"
  | "chapitre"
  | "prophete"
  | "sourate"
  | "outil"
  | "invocation"
  | "question";

export type SearchEntry = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  icon: LucideIcon;
  category: SearchCategory;
  keywords: string;
};

export const CATEGORY_LABELS: Record<SearchCategory, string> = {
  page: "Pages",
  module: "Modules",
  chapitre: "Chapitres",
  prophete: "Histoires",
  sourate: "Sourates",
  outil: "Outils",
  invocation: "Invocations",
  question: "Questions",
};

/** Styles badge — palette brand (pas d’arc-en-ciel). */
export const CATEGORY_STYLES: Record<SearchCategory, string> = {
  page: "text-brand-steel-300 border-brand-steel-400/30 bg-brand-steel-400/10",
  module: "text-brand-warm border-brand-gold-400/30 bg-brand-warm/10",
  chapitre: "text-brand-gold-300 border-brand-gold-400/25 bg-brand-gold-400/10",
  prophete: "text-brand-gold-300 border-brand-gold-400/30 bg-brand-warm/12",
  sourate: "text-brand-pearl border-brand-line/40 bg-brand-panel-elevated/80",
  outil: "text-brand-soft border-brand-line/35 bg-brand-panel/70",
  invocation: "text-brand-warm border-brand-gold-400/30 bg-brand-warm/10",
  question: "text-brand-soft border-brand-gold-400/25 bg-brand-panel/70",
};

const PAGES: SearchEntry[] = [
  {
    id: "home",
    title: "Accueil",
    href: "/",
    icon: Home,
    category: "page",
    keywords: "accueil home principal",
  },
  {
    id: "sawra",
    title: "Sawra",
    subtitle: "Écouter et lire le Coran",
    href: "/sawra",
    icon: Headphones,
    category: "page",
    keywords: "sawra coran audio écouter récitation lecture quran",
  },
  {
    id: "coran",
    title: "Coran",
    subtitle: "Hub lecture & hifz",
    href: "/coran",
    icon: BookOpen,
    category: "page",
    keywords: "coran quran lecture sourate verset moushaf hifz",
  },
  {
    id: "priere-horaires",
    title: "Horaires de prière",
    subtitle: "Prochaine prière & countdown",
    href: "/priere",
    icon: Clock,
    category: "outil",
    keywords: "prière salat horaires adhan fajr dhuhr asr maghrib isha countdown",
  },
  {
    id: "savoir",
    title: "Savoir",
    subtitle: "Modules & histoires",
    href: "/savoir",
    icon: Boxes,
    category: "page",
    keywords: "savoir apprendre modules pratique",
  },
  {
    id: "invocations",
    title: "Adhkar",
    subtitle: "Douas & invocations",
    href: "/invocations",
    icon: HandHeart,
    category: "page",
    keywords:
      "adhkar invocations douas dua matin soir citadelle pardon voyage maison prière",
  },
  {
    id: "questions",
    title: "Questions & Réponses",
    subtitle: "Réponses Coran & Sunna",
    href: "/questions",
    icon: MessageCircleQuestion,
    category: "page",
    keywords: "questions réponses faq fatwa coran sunna prière jeûne",
  },
  {
    id: "histoires",
    title: "Histoires des Prophètes",
    subtitle: "Récits authentiques",
    href: "/histoires",
    icon: ScrollText,
    category: "page",
    keywords: "histoires prophètes récits sira",
  },
  {
    id: "profil",
    title: "Mon Profil",
    href: "/profil",
    icon: User,
    category: "page",
    keywords: "profil compte utilisateur",
  },
  {
    id: "settings",
    title: "Paramètres",
    href: "/settings",
    icon: Settings,
    category: "page",
    keywords: "paramètres settings configuration",
  },
  {
    id: "plus",
    title: "Plus",
    href: "/plus",
    icon: Sparkles,
    category: "page",
    keywords: "plus menu extras",
  },
];

const MODULES: SearchEntry[] = [
  {
    id: "mod-purification",
    title: "La Purification",
    subtitle: "Wudu, Ghusl & Tayammum",
    href: "/savoir/purification",
    icon: Droplets,
    category: "module",
    keywords: "purification wudu ablution ghusl tayammum eau propreté",
  },
  {
    id: "mod-priere",
    title: "La Prière (Salat)",
    subtitle: "Apprendre et perfectionner",
    href: "/savoir/priere",
    icon: Footprints,
    category: "module",
    keywords: "prière salat prier positions récitations module",
  },
  {
    id: "mod-comportement",
    title: "Le Comportement",
    subtitle: "L'Excellence (Ihsan)",
    href: "/savoir/comportement",
    icon: Crown,
    category: "module",
    keywords: "comportement adab ihsan caractère colère famille langue",
  },
  {
    id: "mod-jeune",
    title: "Le Jeûne",
    subtitle: "Ramadan & règles",
    href: "/savoir/jeune",
    icon: Moon,
    category: "module",
    keywords: "jeûne ramadan sawm laylat destin aïd tarawih",
  },
  {
    id: "mod-zakat",
    title: "La Zakat",
    subtitle: "Aumône obligatoire",
    href: "/savoir/zakat",
    icon: Coins,
    category: "module",
    keywords: "zakat aumône nisab calcul bénéficiaires pilier",
  },
];

const CHAPTERS: SearchEntry[] = [
  ...PURIFICATION_CHAPTERS.map((c) => ({
    id: `purif-${c.id}`,
    title: c.title,
    subtitle: `Purification · ${c.short}`,
    href: `/savoir/purification/${c.id}`,
    icon: Droplets,
    category: "chapitre" as const,
    keywords: `purification ${c.title} ${c.short} ${c.id} wudu ghusl`,
  })),
  ...PRIERE_CHAPTERS.map((c) => ({
    id: `priere-${c.id}`,
    title: c.title,
    subtitle: `Prière · ${c.short}`,
    href: `/savoir/priere/${c.id}`,
    icon: Footprints,
    category: "chapitre" as const,
    keywords: `prière salat ${c.title} ${c.short} ${c.id}`,
  })),
  ...COMPORTEMENT_CHAPTERS.map((c) => ({
    id: `comp-${c.id}`,
    title: c.title,
    subtitle: `Comportement · ${c.short}`,
    href: `/savoir/comportement/${c.id}`,
    icon: Crown,
    category: "chapitre" as const,
    keywords: `comportement ihsan ${c.title} ${c.short} ${c.id}`,
  })),
  ...JEUNE_CHAPTERS.map((c) => ({
    id: `jeune-${c.id}`,
    title: c.title,
    subtitle: `Jeûne · ${c.short}`,
    href: `/savoir/jeune/${c.id}`,
    icon: Moon,
    category: "chapitre" as const,
    keywords: `jeûne ramadan ${c.title} ${c.short} ${c.id}`,
  })),
  ...ZAKAT_CHAPTERS.map((c) => ({
    id: `zakat-${c.id}`,
    title: c.title,
    subtitle: `Zakat · ${c.short}`,
    href: `/savoir/zakat/${c.id}`,
    icon: Coins,
    category: "chapitre" as const,
    keywords: `zakat ${c.title} ${c.short} ${c.id} nisab`,
  })),
  ...MUHAMMAD_CHAPTERS.map((c) => ({
    id: `muhammad-${c.id}`,
    title: c.title,
    subtitle: `Sîra · ${c.short}`,
    href: `/histoires/muhammad/${c.id}`,
    icon: Moon,
    category: "chapitre" as const,
    keywords: `muhammad mohammed sira ${c.title} ${c.short} ${c.id} ${c.era}`,
  })),
];

const PROPHETS: SearchEntry[] = [
  {
    id: "prophet-muhammad",
    title: "Muhammad ﷺ",
    subtitle: "Le Sceau des Prophètes — 8 chapitres",
    href: "/histoires/muhammad",
    icon: Moon,
    category: "prophete",
    keywords:
      "muhammad mohammed mohamed prophète sceau révélation hira mecque médine sira",
  },
  {
    id: "prophet-ibrahim",
    title: "Ibrâhîm (Abraham) AS",
    subtitle: "Bientôt",
    href: "/histoires",
    icon: Star,
    category: "prophete",
    keywords: "ibrahim abraham kaaba monothéisme sacrifice",
  },
  {
    id: "prophet-moussa",
    title: "Mûsâ (Moïse) AS",
    subtitle: "Bientôt",
    href: "/histoires",
    icon: Star,
    category: "prophete",
    keywords: "moussa mûsâ moïse pharaon mer rouge",
  },
];

const ALL_SURAHS = [
  "Al-Fatiha",
  "Al-Baqarah",
  "Al-Imran",
  "An-Nisa",
  "Al-Ma'idah",
  "Al-An'am",
  "Al-A'raf",
  "Al-Anfal",
  "At-Tawbah",
  "Yunus",
  "Hud",
  "Yusuf",
  "Ar-Ra'd",
  "Ibrahim",
  "Al-Hijr",
  "An-Nahl",
  "Al-Isra",
  "Al-Kahf",
  "Maryam",
  "Ta-Ha",
  "Al-Anbiya",
  "Al-Hajj",
  "Al-Mu'minun",
  "An-Nur",
  "Al-Furqan",
  "Ash-Shu'ara",
  "An-Naml",
  "Al-Qasas",
  "Al-Ankabut",
  "Ar-Rum",
  "Luqman",
  "As-Sajdah",
  "Al-Ahzab",
  "Saba",
  "Fatir",
  "Ya-Sin",
  "As-Saffat",
  "Sad",
  "Az-Zumar",
  "Ghafir",
  "Fussilat",
  "Ash-Shura",
  "Az-Zukhruf",
  "Ad-Dukhan",
  "Al-Jathiyah",
  "Al-Ahqaf",
  "Muhammad",
  "Al-Fath",
  "Al-Hujurat",
  "Qaf",
  "Ad-Dhariyat",
  "At-Tur",
  "An-Najm",
  "Al-Qamar",
  "Ar-Rahman",
  "Al-Waqi'ah",
  "Al-Hadid",
  "Al-Mujadila",
  "Al-Hashr",
  "Al-Mumtahanah",
  "As-Saff",
  "Al-Jumu'ah",
  "Al-Munafiqun",
  "At-Taghabun",
  "At-Talaq",
  "At-Tahrim",
  "Al-Mulk",
  "Al-Qalam",
  "Al-Haqqah",
  "Al-Ma'arij",
  "Nuh",
  "Al-Jinn",
  "Al-Muzzammil",
  "Al-Muddathir",
  "Al-Qiyamah",
  "Al-Insan",
  "Al-Mursalat",
  "An-Naba",
  "An-Nazi'at",
  "Abasa",
  "At-Takwir",
  "Al-Infitar",
  "Al-Mutaffifin",
  "Al-Inshiqaq",
  "Al-Buruj",
  "At-Tariq",
  "Al-A'la",
  "Al-Ghashiyah",
  "Al-Fajr",
  "Al-Balad",
  "Ash-Shams",
  "Al-Layl",
  "Ad-Duha",
  "Ash-Sharh",
  "At-Tin",
  "Al-Alaq",
  "Al-Qadr",
  "Al-Bayyinah",
  "Az-Zalzalah",
  "Al-Adiyat",
  "Al-Qari'ah",
  "At-Takathur",
  "Al-Asr",
  "Al-Humazah",
  "Al-Fil",
  "Quraysh",
  "Al-Ma'un",
  "Al-Kawthar",
  "Al-Kafirun",
  "An-Nasr",
  "Al-Masad",
  "Al-Ikhlas",
  "Al-Falaq",
  "An-Nas",
];

const INVOCATION_ENTRIES: SearchEntry[] = INVOCATIONS.map((inv) => ({
  id: `inv-${inv.id}`,
  title: inv.title,
  subtitle: `Adhkar · ${inv.category}`,
  href: "/invocations",
  icon: HandHeart,
  category: "invocation" as const,
  keywords: `${inv.title} ${inv.category} ${inv.phonetic} ${inv.translation} doua adhkar invocation`,
}));

const QUESTION_ENTRIES: SearchEntry[] = QUESTIONS.map((q) => ({
  id: `q-${q.id}`,
  title: q.question,
  subtitle: `Q&R · ${q.category}`,
  href: "/questions",
  icon: MessageCircleQuestion,
  category: "question" as const,
  keywords: `${q.question} ${q.answer} ${q.category} ${q.source} faq`,
}));

const SURAHS: SearchEntry[] = ALL_SURAHS.map((name, i) => ({
  id: `surah-${i + 1}`,
  title: `${i + 1}. ${name}`,
  subtitle: `Sourate ${i + 1} · via Sawra`,
  href: "/sawra",
  icon: BookOpen,
  category: "sourate" as const,
  keywords: `${name.toLowerCase()} sourate ${i + 1} coran quran`,
}));

export const SITE_SEARCH_ENTRIES: SearchEntry[] = [
  ...PAGES,
  ...MODULES,
  ...CHAPTERS,
  ...PROPHETS,
  ...INVOCATION_ENTRIES,
  ...QUESTION_ENTRIES,
  ...SURAHS,
];

export const POPULAR_SEARCH_IDS = [
  "sawra",
  "invocations",
  "questions",
  "priere-horaires",
  "mod-priere",
  "prophet-muhammad",
  "surah-36",
  "surah-55",
] as const;

export function getPopularEntries(): SearchEntry[] {
  return POPULAR_SEARCH_IDS.map(
    (id) => SITE_SEARCH_ENTRIES.find((e) => e.id === id)!
  ).filter(Boolean);
}

export function normalizeSearch(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[''`]/g, "'")
    .replace(/[-_]/g, " ");
}

function fuzzyMatch(query: string, target: string): number {
  const q = normalizeSearch(query);
  const t = normalizeSearch(target);
  if (!q) return 0;
  if (t === q) return 100;
  if (t.startsWith(q)) return 90;
  if (t.includes(q)) return 70;
  for (const word of t.split(/\s+/)) {
    if (word.startsWith(q)) return 80;
  }
  let qi = 0;
  let consecutive = 0;
  let maxConsecutive = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      qi++;
      consecutive++;
      maxConsecutive = Math.max(maxConsecutive, consecutive);
    } else {
      consecutive = 0;
    }
  }
  if (qi === q.length) return 30 + Math.min(30, maxConsecutive * 10);
  return 0;
}

const CATEGORY_PRIORITY: Record<SearchCategory, number> = {
  page: 1,
  module: 2,
  outil: 3,
  invocation: 4,
  question: 5,
  chapitre: 6,
  prophete: 7,
  sourate: 8,
};

export function searchSite(
  query: string,
  entries = SITE_SEARCH_ENTRIES
): SearchEntry[] {
  if (!query.trim()) return [];
  const results: { entry: SearchEntry; score: number }[] = [];

  for (const entry of entries) {
    const titleScore = fuzzyMatch(query, entry.title);
    const subtitleScore = entry.subtitle
      ? fuzzyMatch(query, entry.subtitle) * 0.8
      : 0;
    const keywordsScore = fuzzyMatch(query, entry.keywords) * 0.6;
    let numScore = 0;
    const numQuery = Number.parseInt(query, 10);
    if (!Number.isNaN(numQuery) && entry.category === "sourate") {
      const surahNum = Number.parseInt(entry.title, 10);
      if (surahNum === numQuery) numScore = 95;
    }
    const best = Math.max(titleScore, subtitleScore, keywordsScore, numScore);
    if (best > 25) results.push({ entry, score: best });
  }

  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (
      CATEGORY_PRIORITY[a.entry.category] - CATEGORY_PRIORITY[b.entry.category]
    );
  });

  return results.slice(0, 15).map((r) => r.entry);
}

export function groupSearchResults(
  results: SearchEntry[]
): Partial<Record<SearchCategory, SearchEntry[]>> {
  const groups: Partial<Record<SearchCategory, SearchEntry[]>> = {};
  for (const entry of results) {
    const list = groups[entry.category] ?? [];
    list.push(entry);
    groups[entry.category] = list;
  }
  return groups;
}

export function highlightMatch(
  text: string,
  query: string
): { before: string; match: string; after: string } | null {
  if (!query) return null;
  const nq = normalizeSearch(query);
  const nt = normalizeSearch(text);
  const idx = nt.indexOf(nq);
  if (idx === -1) return null;
  return {
    before: text.slice(0, idx),
    match: text.slice(idx, idx + query.length),
    after: text.slice(idx + query.length),
  };
}

export const RECENT_SEARCHES_KEY = "gml-v2-recent-searches";
