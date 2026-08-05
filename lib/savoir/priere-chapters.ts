export type PriereChapterId =
  | "pourquoi"
  | "qui"
  | "conditions"
  | "wudu"
  | "minimum"
  | "etapes"
  | "recitations"
  | "sens"
  | "sunnah"
  | "erreurs"
  | "waswas"
  | "quotidien"
  | "apres";

export type PriereChapter = {
  id: PriereChapterId;
  title: string;
  short: string;
  highlight?: boolean;
};

export const PRIERE_CHAPTERS: PriereChapter[] = [
  { id: "pourquoi", title: "Pourquoi la prière ?", short: "L'Essence", highlight: true },
  { id: "qui", title: "C'est obligatoire pour qui ?", short: "Obligation" },
  { id: "conditions", title: "Conditions de validité", short: "Validité" },
  { id: "wudu", title: "Les Ablutions (Wudu)", short: "Purification" },
  { id: "minimum", title: "Le Minimum Vital (MVP)", short: "MVP", highlight: true },
  { id: "etapes", title: "La Prière pas à pas", short: "Guide" },
  { id: "recitations", title: "Les Récitations", short: "Paroles" },
  { id: "sens", title: "Comprendre le sens", short: "Sens" },
  { id: "sunnah", title: "Les Bonus (Sunnah)", short: "Bonus" },
  { id: "erreurs", title: "Erreurs Fréquentes", short: "Erreurs" },
  { id: "waswas", title: "Gérer les doutes", short: "Doutes" },
  { id: "quotidien", title: "Cas du quotidien", short: "Pratique" },
  { id: "apres", title: "Après la prière", short: "Post-Prière" },
];

export function getChapter(id: string): PriereChapter | undefined {
  return PRIERE_CHAPTERS.find((c) => c.id === id);
}

export function getChapterIndex(id: string): number {
  return PRIERE_CHAPTERS.findIndex((c) => c.id === id);
}

export function getAdjacentChapters(id: string): {
  prev: PriereChapter | null;
  next: PriereChapter | null;
} {
  const index = getChapterIndex(id);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? PRIERE_CHAPTERS[index - 1] : null,
    next: index < PRIERE_CHAPTERS.length - 1 ? PRIERE_CHAPTERS[index + 1] : null,
  };
}
