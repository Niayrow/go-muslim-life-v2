export type SavoirChapter = {
  id: string;
  title: string;
  short: string;
  highlight?: boolean;
};

export function getAdjacentFromList(
  chapters: SavoirChapter[],
  id: string
): { prev: SavoirChapter | null; next: SavoirChapter | null } {
  const index = chapters.findIndex((c) => c.id === id);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
