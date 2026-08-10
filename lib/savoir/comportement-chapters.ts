import type { SavoirChapter } from "@/lib/savoir/types";
import { getAdjacentFromList } from "@/lib/savoir/types";

export type ComportementChapterId =
  | "intro"
  | "colere"
  | "famille"
  | "langue"
  | "social"
  | "bonus";

export type ComportementChapter = SavoirChapter & {
  id: ComportementChapterId;
};

export const COMPORTEMENT_CHAPTERS: ComportementChapter[] = [
  { id: "intro", title: "Le But Ultime", short: "Le But", highlight: true },
  { id: "colere", title: "La Maîtrise (Colère)", short: "Colère" },
  { id: "famille", title: "La Famille (Service)", short: "Famille" },
  { id: "langue", title: "La Langue (Silence)", short: "Langue" },
  { id: "social", title: "Les Autres (Social)", short: "Social" },
  { id: "bonus", title: "Bonus : Histoires d'Or", short: "Bonus" },
];

export function getComportementChapter(
  id: string
): ComportementChapter | undefined {
  return COMPORTEMENT_CHAPTERS.find((c) => c.id === id);
}

export function getAdjacentComportementChapters(id: string): {
  prev: ComportementChapter | null;
  next: ComportementChapter | null;
} {
  return getAdjacentFromList(
    COMPORTEMENT_CHAPTERS,
    id
  ) as { prev: ComportementChapter | null; next: ComportementChapter | null };
}
