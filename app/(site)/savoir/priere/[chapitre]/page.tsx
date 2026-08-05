import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PRIERE_CONTENT } from "@/components/savoir/priere/chapter-content";
import { ChapterShell } from "@/components/savoir/priere/chapter-shell";
import {
  getAdjacentChapters,
  getChapter,
  PRIERE_CHAPTERS,
  type PriereChapterId,
} from "@/lib/savoir/priere-chapters";

type PageProps = {
  params: Promise<{ chapitre: string }>;
};

export function generateStaticParams() {
  return PRIERE_CHAPTERS.map((c) => ({ chapitre: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter) return { title: "Chapitre — Prière" };
  return {
    title: `${chapter.title} — Guide de la Prière`,
    description: `Chapitre ${chapter.short} du guide de la Salat`,
  };
}

export default async function PriereChapitrePage({ params }: PageProps) {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter || !(chapitre in PRIERE_CONTENT)) notFound();

  const Content = PRIERE_CONTENT[chapitre as PriereChapterId];
  const { prev, next } = getAdjacentChapters(chapitre);

  return (
    <ChapterShell chapter={chapter} prev={prev} next={next}>
      <Content />
    </ChapterShell>
  );
}
