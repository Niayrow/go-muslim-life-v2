export type JeuneChapterId =
  | "sens"
  | "regles"
  | "qui"
  | "exemptions"
  | "journee"
  | "interdits"
  | "tarawih"
  | "destin"
  | "zakat"
  | "aid";

export type JeuneChapter = {
  id: JeuneChapterId;
  title: string;
  short: string;
  highlight?: boolean;
};

export const JEUNE_CHAPTERS: JeuneChapter[] = [
  { id: "sens", title: "L'Esprit du Jeûne", short: "L'Esprit", highlight: true },
  { id: "regles", title: "La Règle d'Or (Horaires)", short: "Règles" },
  { id: "qui", title: "Qui est obligé ?", short: "Obligation" },
  { id: "exemptions", title: "Maladie & Voyage", short: "Exemptions" },
  { id: "journee", title: "Une Journée Type", short: "Journée" },
  { id: "interdits", title: "Les Interdits", short: "Interdits" },
  { id: "tarawih", title: "Les Nuits (Tarawih)", short: "Tarawih" },
  { id: "destin", title: "Laylatul Qadr", short: "Destin", highlight: true },
  { id: "zakat", title: "Zakat al-Fitr", short: "Zakat" },
  { id: "aid", title: "L'Aïd & Shawwal", short: "L'Aïd" },
];

export function getChapter(id: string): JeuneChapter | undefined {
  return JEUNE_CHAPTERS.find((c) => c.id === id);
}

export function getChapterIndex(id: string): number {
  return JEUNE_CHAPTERS.findIndex((c) => c.id === id);
}

export function getAdjacentChapters(id: string): {
  prev: JeuneChapter | null;
  next: JeuneChapter | null;
} {
  const index = getChapterIndex(id);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? JEUNE_CHAPTERS[index - 1] : null,
    next: index < JEUNE_CHAPTERS.length - 1 ? JEUNE_CHAPTERS[index + 1] : null,
  };
}
