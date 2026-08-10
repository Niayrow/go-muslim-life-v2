import { ModuleShell } from "@/components/savoir/module-shell";
import {
  COMPORTEMENT_CHAPTERS,
  type ComportementChapter,
} from "@/lib/savoir/comportement-chapters";

type ChapterShellProps = {
  chapter: ComportementChapter;
  prev: ComportementChapter | null;
  next: ComportementChapter | null;
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
      basePath="/savoir/comportement"
      chapters={COMPORTEMENT_CHAPTERS}
      chapter={chapter}
      prev={prev}
      next={next}
    >
      {children}
    </ModuleShell>
  );
}
