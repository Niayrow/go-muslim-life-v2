import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JEUNE_CONTENT } from "@/components/savoir/jeune/chapter-content";
import { ChapterShell } from "@/components/savoir/jeune/chapter-shell";
import {
  getAdjacentChapters,
  getChapter,
  JEUNE_CHAPTERS,
  type JeuneChapterId,
} from "@/lib/savoir/jeune-chapters";

type PageProps = {
  params: Promise<{ chapitre: string }>;
};

export function generateStaticParams() {
  return JEUNE_CHAPTERS.map((c) => ({ chapitre: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter) return { title: "Chapitre — Jeûne" };
  return {
    title: `${chapter.title} — Guide du Jeûne`,
    description: `Chapitre ${chapter.short} du guide du Ramadan`,
  };
}

export default async function JeuneChapitrePage({ params }: PageProps) {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter || !(chapitre in JEUNE_CONTENT)) notFound();

  const Content = JEUNE_CONTENT[chapitre as JeuneChapterId];
  const { prev, next } = getAdjacentChapters(chapitre);

  return (
    <ChapterShell chapter={chapter} prev={prev} next={next}>
      <Content />
    </ChapterShell>
  );
}
