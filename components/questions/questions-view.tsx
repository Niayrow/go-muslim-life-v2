"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircleQuestion, Search, X } from "lucide-react";

import { QuestionItem } from "@/components/questions/question-item";
import { Input } from "@/components/ui/input";
import {
  QUESTION_CATEGORIES,
  QUESTIONS,
  type QuestionCategory,
} from "@/lib/questions/data";
import { cn } from "@/lib/utils";

type FilterCategory = "Tout" | QuestionCategory;

const CATEGORY_ORDER: QuestionCategory[] = [
  "Prière",
  "Jeûne",
  "Spiritualité",
  "Vie quotidienne",
  "Voyage",
  "Autre",
];

export function QuestionsView() {
  const [category, setCategory] = useState<FilterCategory>("Tout");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = useMemo(() => {
    const present = new Set(QUESTIONS.map((q) => q.category));
    return [
      "Tout" as const,
      ...CATEGORY_ORDER.filter((c) => present.has(c)),
      ...QUESTION_CATEGORIES.filter(
        (c) => present.has(c) && !CATEGORY_ORDER.includes(c)
      ),
    ];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return QUESTIONS.filter((item) => {
      const catOk = category === "Tout" || item.category === category;
      if (!catOk) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  const selectCategory = (cat: FilterCategory) => {
    setCategory(cat);
    setOpenId(null);
  };

  const setSearch = (value: string) => {
    setQuery(value);
    setOpenId(null);
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-8 md:gap-10 md:px-8 md:py-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          Accueil
        </Link>
      </div>

      <header className="space-y-3 border-b border-brand-line/25 pb-8">
        <p className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-warm uppercase">
          <MessageCircleQuestion className="size-3.5" />
          Coran & Sunna
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
          Questions & Réponses
        </h1>
        <p className="max-w-lg text-sm text-brand-mist md:text-base">
          Des réponses claires et sourcées — {QUESTIONS.length} questions pour
          éclairer la pratique quotidienne.
        </p>
      </header>

      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-brand-steel-400" />
          <Input
            value={query}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une question…"
            className="h-11 rounded-xl border-brand-line/35 bg-brand-panel/60 pl-10 pr-10"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-brand-mist hover:text-brand-warm"
              aria-label="Effacer"
            >
              <X className="size-3.5" />
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-300",
                  active
                    ? "border-brand-gold-400/40 bg-brand-warm/12 text-brand-warm"
                    : "border-brand-line/30 text-brand-soft hover:border-brand-gold-400/25 hover:text-brand-pearl"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-brand-steel-500">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-brand-line/25 bg-brand-panel/40 px-6 py-14 text-center">
          <p className="text-sm text-brand-mist">Aucun résultat.</p>
          {category !== "Tout" || query ? (
            <button
              type="button"
              onClick={() => {
                selectCategory("Tout");
                setSearch("");
              }}
              className="mt-4 text-sm font-semibold text-brand-warm hover:text-brand-gold-300"
            >
              Réinitialiser
            </button>
          ) : null}
        </div>
      ) : (
        <ul className="flex flex-col gap-3 md:gap-4">
          {filtered.map((item) => (
            <li key={item.id}>
              <QuestionItem
                question={item}
                open={openId === item.id}
                onToggle={() =>
                  setOpenId((current) => (current === item.id ? null : item.id))
                }
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
