import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ZAKAT_CONTENT } from "@/components/savoir/zakat/chapter-content";
import { ChapterShell } from "@/components/savoir/zakat/chapter-shell";
import {
  getAdjacentChapters,
  getChapter,
  ZAKAT_CHAPTERS,
  type ZakatChapterId,
} from "@/lib/savoir/zakat-chapters";

type PageProps = {
  params: Promise<{ chapitre: string }>;
};

export function generateStaticParams() {
  return ZAKAT_CHAPTERS.map((c) => ({ chapitre: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter) return { title: "Chapitre — Zakat" };
  return {
    title: `${chapter.title} — Guide de la Zakat`,
    description: `Chapitre ${chapter.short} du guide de la Zakat`,
  };
}

export default async function ZakatChapitrePage({ params }: PageProps) {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter || !(chapitre in ZAKAT_CONTENT)) notFound();

  const Content = ZAKAT_CONTENT[chapitre as ZakatChapterId];
  const { prev, next } = getAdjacentChapters(chapitre);

  return (
    <ChapterShell chapter={chapter} prev={prev} next={next}>
      <Content />
    </ChapterShell>
  );
}
