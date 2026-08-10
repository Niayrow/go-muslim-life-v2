import { ModuleShell } from "@/components/savoir/module-shell";
import {
  JEUNE_CHAPTERS,
  type JeuneChapter,
} from "@/lib/savoir/jeune-chapters";

type ChapterShellProps = {
  chapter: JeuneChapter;
  prev: JeuneChapter | null;
  next: JeuneChapter | null;
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
      basePath="/savoir/jeune"
      chapters={JEUNE_CHAPTERS}
      chapter={chapter}
      prev={prev}
      next={next}
    >
      {children}
    </ModuleShell>
  );
}
