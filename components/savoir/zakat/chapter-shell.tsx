import { ModuleShell } from "@/components/savoir/module-shell";
import {
  ZAKAT_CHAPTERS,
  type ZakatChapter,
} from "@/lib/savoir/zakat-chapters";

type ChapterShellProps = {
  chapter: ZakatChapter;
  prev: ZakatChapter | null;
  next: ZakatChapter | null;
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
      basePath="/savoir/zakat"
      chapters={ZAKAT_CHAPTERS}
      chapter={chapter}
      prev={prev}
      next={next}
    >
      {children}
    </ModuleShell>
  );
}
