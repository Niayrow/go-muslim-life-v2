import { ModuleShell } from "@/components/savoir/module-shell";
import {
  PRIERE_CHAPTERS,
  type PriereChapter,
} from "@/lib/savoir/priere-chapters";

type ChapterShellProps = {
  chapter: PriereChapter;
  prev: PriereChapter | null;
  next: PriereChapter | null;
  children: React.ReactNode;
};

export function ChapterShell({
  chapter,
  prev,
  next,
  children,
}: ChapterShellProps) {
  return (
    <ModuleShell
      basePath="/savoir/priere"
      chapters={PRIERE_CHAPTERS}
      chapter={chapter}
      prev={prev}
      next={next}
    >
      {children}
    </ModuleShell>
  );
}
