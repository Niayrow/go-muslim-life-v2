import type { Metadata } from "next";

import { QuestionsView } from "@/components/questions/questions-view";

export const metadata: Metadata = {
  title: "Questions & Réponses",
  description:
    "Réponses sourcées basées sur le Coran et la Sunna — prière, jeûne, spiritualité et vie quotidienne.",
};

export default function QuestionsPage() {
  return <QuestionsView />;
}
