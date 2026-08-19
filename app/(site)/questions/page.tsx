import type { Metadata } from "next";

import { QuestionsView } from "@/components/questions/questions-view";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Questions & Réponses",
  description:
    "Réponses sourcées basées sur le Coran et la Sunna — prière, jeûne, spiritualité et vie quotidienne.",
  path: "/questions",
});

export default function QuestionsPage() {
  return <QuestionsView />;
}
