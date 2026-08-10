import type { SavoirChapter } from "@/lib/savoir/types";
import { getAdjacentFromList } from "@/lib/savoir/types";

export type MuhammadChapterId =
  | "naissance"
  | "orphelinat"
  | "mariage"
  | "revelation"
  | "persecutions"
  | "hegire"
  | "combats"
  | "adieu";

export type MuhammadChapter = SavoirChapter & { id: MuhammadChapterId; era: string };

export const MUHAMMAD_CHAPTERS: MuhammadChapter[] = [
  {
    id: "naissance",
    title: "Naissance et première enfance",
    short: "Naissance",
    era: "vers 570 – 6 ans",
    highlight: true,
  },
  {
    id: "orphelinat",
    title: "Orphelinat et jeunesse",
    short: "Jeunesse",
    era: "6 – 25 ans",
  },
  {
    id: "mariage",
    title: "Mariage et vie avant la prophétie",
    short: "Khadîja",
    era: "25 – 40 ans",
  },
  {
    id: "revelation",
    title: "La Révélation et les débuts",
    short: "Iqra'",
    era: "610 – 613",
    highlight: true,
  },
  {
    id: "persecutions",
    title: "Prédication et persécutions",
    short: "Mecque",
    era: "613 – 622",
  },
  {
    id: "hegire",
    title: "L'Hégire et Médine",
    short: "Hégire",
    era: "622 – 624",
    highlight: true,
  },
  {
    id: "combats",
    title: "Combats et consolidation",
    short: "Combats",
    era: "624 – 630",
  },
  {
    id: "adieu",
    title: "Dernières années et la mort",
    short: "Adieu",
    era: "630 – 632",
  },
];

export function getChapter(id: string): MuhammadChapter | undefined {
  return MUHAMMAD_CHAPTERS.find((c) => c.id === id);
}

export function getAdjacentChapters(id: string) {
  return getAdjacentFromList(MUHAMMAD_CHAPTERS, id);
}
