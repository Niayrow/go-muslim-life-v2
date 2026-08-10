import { ModuleShell } from "@/components/savoir/module-shell";
import {
  PURIFICATION_CHAPTERS,
  type PurificationChapter,
} from "@/lib/savoir/purification-chapters";

type ChapterShellProps = {
  chapter: PurificationChapter;
  prev: PurificationChapter | null;
  next: PurificationChapter | null;
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
      basePath="/savoir/purification"
      chapters={PURIFICATION_CHAPTERS}
      chapter={chapter}
      prev={prev}
      next={next}
    >
      {children}
    </ModuleShell>
  );
}
