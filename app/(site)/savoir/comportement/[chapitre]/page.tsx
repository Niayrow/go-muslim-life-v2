import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { COMPORTEMENT_CONTENT } from "@/components/savoir/comportement/chapter-content";
import { ChapterShell } from "@/components/savoir/comportement/chapter-shell";
import {
  getAdjacentComportementChapters,
  getComportementChapter,
  COMPORTEMENT_CHAPTERS,
  type ComportementChapterId,
} from "@/lib/savoir/comportement-chapters";

type PageProps = {
  params: Promise<{ chapitre: string }>;
};

export function generateStaticParams() {
  return COMPORTEMENT_CHAPTERS.map((c) => ({ chapitre: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapitre } = await params;
  const chapter = getComportementChapter(chapitre);
  if (!chapter) return { title: "Chapitre — Comportement" };
  return {
    title: `${chapter.title} — Le Comportement Musulman`,
    description: `Chapitre ${chapter.short} du guide du comportement`,
  };
}

export default async function ComportementChapitrePage({ params }: PageProps) {
  const { chapitre } = await params;
  const chapter = getComportementChapter(chapitre);
  if (!chapter || !(chapitre in COMPORTEMENT_CONTENT)) notFound();

  const Content = COMPORTEMENT_CONTENT[chapitre as ComportementChapterId];
  const { prev, next } = getAdjacentComportementChapters(chapitre);

  return (
    <ChapterShell chapter={chapter} prev={prev} next={next}>
      <Content />
    </ChapterShell>
  );
}
