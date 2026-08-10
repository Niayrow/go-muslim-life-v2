import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PURIFICATION_CONTENT } from "@/components/savoir/purification/chapter-content";
import { ChapterShell } from "@/components/savoir/purification/chapter-shell";
import {
  getAdjacentChapters,
  getChapter,
  PURIFICATION_CHAPTERS,
  type PurificationChapterId,
} from "@/lib/savoir/purification-chapters";

type PageProps = {
  params: Promise<{ chapitre: string }>;
};

export function generateStaticParams() {
  return PURIFICATION_CHAPTERS.map((c) => ({ chapitre: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter) return { title: "Chapitre — Purification" };
  return {
    title: `${chapter.title} — Guide de la Purification`,
    description: `Chapitre ${chapter.short} du guide de la Tahâra`,
  };
}

export default async function PurificationChapitrePage({ params }: PageProps) {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter || !(chapitre in PURIFICATION_CONTENT)) notFound();

  const Content = PURIFICATION_CONTENT[chapitre as PurificationChapterId];
  const { prev, next } = getAdjacentChapters(chapitre);

  return (
    <ChapterShell chapter={chapter} prev={prev} next={next}>
      <Content />
    </ChapterShell>
  );
}
