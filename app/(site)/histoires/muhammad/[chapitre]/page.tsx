import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MUHAMMAD_CONTENT } from "@/components/histoires/muhammad/chapter-content";
import { MuhammadShell } from "@/components/histoires/muhammad/chapter-shell";
import {
  getAdjacentChapters,
  getChapter,
  MUHAMMAD_CHAPTERS,
  type MuhammadChapterId,
} from "@/lib/histoires/muhammad-chapters";

type PageProps = {
  params: Promise<{ chapitre: string }>;
};

export function generateStaticParams() {
  return MUHAMMAD_CHAPTERS.map((c) => ({ chapitre: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter) return { title: "Chapitre — Muhammad ﷺ" };
  return {
    title: `${chapter.title} — Sîra de Muhammad ﷺ`,
    description: `${chapter.era} · ${chapter.title}`,
  };
}

export default async function MuhammadChapitrePage({ params }: PageProps) {
  const { chapitre } = await params;
  const chapter = getChapter(chapitre);
  if (!chapter || !(chapitre in MUHAMMAD_CONTENT)) notFound();

  const Content = MUHAMMAD_CONTENT[chapitre as MuhammadChapterId];
  const adjacent = getAdjacentChapters(chapitre);
  const prev = adjacent.prev ? getChapter(adjacent.prev.id) ?? null : null;
  const next = adjacent.next ? getChapter(adjacent.next.id) ?? null : null;

  return (
    <MuhammadShell chapter={chapter} prev={prev} next={next}>
      <Content />
    </MuhammadShell>
  );
}
