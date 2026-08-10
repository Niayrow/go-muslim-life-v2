import type { SavoirChapter } from "@/lib/savoir/types";

export type ZakatChapterId =
  | "definition"
  | "qui"
  | "biens"
  | "calcul"
  | "beneficiaires"
  | "fitr"
  | "faq";

export type ZakatChapter = SavoirChapter & { id: ZakatChapterId };

export const ZAKAT_CHAPTERS: ZakatChapter[] = [
  { id: "definition", title: "Qu'est-ce que la Zakat ?", short: "Définition", highlight: true },
  { id: "qui", title: "Qui doit payer ?", short: "Conditions" },
  { id: "biens", title: "Sur quoi ?", short: "Les Biens" },
  { id: "calcul", title: "Comment calculer ?", short: "Calcul", highlight: true },
  { id: "beneficiaires", title: "À qui la donner ?", short: "Bénéficiaires" },
  { id: "fitr", title: "Zakat al-Fitr", short: "Al-Fitr" },
  { id: "faq", title: "FAQ & Erreurs", short: "FAQ" },
];

export function getChapter(id: string): ZakatChapter | undefined {
  return ZAKAT_CHAPTERS.find((c) => c.id === id);
}

export function getChapterIndex(id: string): number {
  return ZAKAT_CHAPTERS.findIndex((c) => c.id === id);
}

export function getAdjacentChapters(id: string): {
  prev: ZakatChapter | null;
  next: ZakatChapter | null;
} {
  const index = getChapterIndex(id);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? ZAKAT_CHAPTERS[index - 1] : null,
    next: index < ZAKAT_CHAPTERS.length - 1 ? ZAKAT_CHAPTERS[index + 1] : null,
  };
}
