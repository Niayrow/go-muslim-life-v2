import type { SavoirChapter } from "@/lib/savoir/types";
import { getAdjacentFromList } from "@/lib/savoir/types";

export type PurificationChapterId =
  | "intro"
  | "wudu"
  | "ghusl"
  | "tayammum"
  | "annulatifs"
  | "menstrues";

export type PurificationChapter = SavoirChapter & {
  id: PurificationChapterId;
};

export const PURIFICATION_CHAPTERS: PurificationChapter[] = [
  { id: "intro", title: "La Clé du Paradis", short: "Intro", highlight: true },
  { id: "wudu", title: "Le Wudu (Pas à pas)", short: "Wudu" },
  { id: "ghusl", title: "Le Ghusl (Grandes Ablutions)", short: "Ghusl" },
  { id: "tayammum", title: "Le Tayammum (Sans eau)", short: "Tayammum" },
  { id: "annulatifs", title: "Ce qui annule tout", short: "Annulatifs" },
  { id: "menstrues", title: "Règles & Lochies", short: "Règles" },
];

export function getChapter(id: string): PurificationChapter | undefined {
  return PURIFICATION_CHAPTERS.find((c) => c.id === id);
}

export function getAdjacentChapters(id: string): {
  prev: PurificationChapter | null;
  next: PurificationChapter | null;
} {
  return getAdjacentFromList(PURIFICATION_CHAPTERS, id) as {
    prev: PurificationChapter | null;
    next: PurificationChapter | null;
  };
}
