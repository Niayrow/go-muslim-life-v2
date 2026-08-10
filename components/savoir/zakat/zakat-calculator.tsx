"use client";

import { useEffect, useMemo, useState } from "react";
import { Calculator, Loader2, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  calculateZakat,
  formatEur,
} from "@/lib/zakat/calc";
import {
  FALLBACK_GOLD_PRICE_EUR_PER_G,
  GOLD_KARAT_OPTIONS,
  NISAB_GOLD_GRAMS,
  type GoldKarat,
  type GoldPriceQuote,
} from "@/lib/zakat/constants";
import { cn } from "@/lib/utils";

function parseAmount(raw: string): number {
  const normalized = raw.replace(/\s/g, "").replace(",", ".");
  const n = Number.parseFloat(normalized);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function Field({
  label,
  hint,
  value,
  onChange,
  suffix,
  inputMode = "decimal",
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  inputMode?: "decimal" | "numeric";
}) {
  return (
    <label className="block space-y-1.5">
      <span className="block text-sm font-medium text-brand-pearl">{label}</span>
      {hint ? (
        <span className="block text-xs text-brand-steel-400">{hint}</span>
      ) : null}
      <div className="relative">
        <Input
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(suffix && "pr-12")}
          placeholder="0"
        />
        {suffix ? (
          <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs font-semibold text-brand-steel-400">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

export function ZakatCalculator() {
  const [cash, setCash] = useState("");
  const [otherAssets, setOtherAssets] = useState("");
  const [goldGrams, setGoldGrams] = useState("");
  const [goldKarat, setGoldKarat] = useState<GoldKarat>(24);
  const [silverValue, setSilverValue] = useState("");
  const [tradeGoods, setTradeGoods] = useState("");
  const [receivables, setReceivables] = useState("");
  const [debts, setDebts] = useState("");

  const [goldPrice, setGoldPrice] = useState(FALLBACK_GOLD_PRICE_EUR_PER_G);
  const [priceSource, setPriceSource] = useState<GoldPriceQuote["source"]>("fallback");
  const [priceUpdatedAt, setPriceUpdatedAt] = useState<string | null>(null);
  const [priceLoading, setPriceLoading] = useState(true);
  const [manualPrice, setManualPrice] = useState(false);
  const [priceInput, setPriceInput] = useState(String(FALLBACK_GOLD_PRICE_EUR_PER_G));

  async function loadGoldPrice() {
    setPriceLoading(true);
    try {
      const res = await fetch("/api/gold-price");
      const data = (await res.json()) as GoldPriceQuote;
      if (!manualPrice) {
        setGoldPrice(data.priceGram24k);
        setPriceInput(String(data.priceGram24k));
      }
      setPriceSource(data.source);
      setPriceUpdatedAt(data.timestamp);
    } catch {
      if (!manualPrice) {
        setGoldPrice(FALLBACK_GOLD_PRICE_EUR_PER_G);
        setPriceInput(String(FALLBACK_GOLD_PRICE_EUR_PER_G));
      }
      setPriceSource("fallback");
    } finally {
      setPriceLoading(false);
    }
  }

  useEffect(() => {
    void loadGoldPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- load once on mount
  }, []);

  const effectivePrice = manualPrice
    ? parseAmount(priceInput)
    : goldPrice;

  const result = useMemo(
    () =>
      calculateZakat({
        cash: parseAmount(cash),
        otherAssets: parseAmount(otherAssets),
        goldGrams: parseAmount(goldGrams),
        goldKarat,
        silverValue: parseAmount(silverValue),
        tradeGoods: parseAmount(tradeGoods),
        receivables: parseAmount(receivables),
        debts: parseAmount(debts),
        goldPricePerGram24k: effectivePrice,
      }),
    [
      cash,
      otherAssets,
      goldGrams,
      goldKarat,
      silverValue,
      tradeGoods,
      receivables,
      debts,
      effectivePrice,
    ]
  );

  return (
    <div className="space-y-6 rounded-2xl border border-brand-gold-400/25 bg-gradient-to-br from-brand-panel-elevated/70 to-brand-night-soft/90 p-5 md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-brand-warm uppercase">
            <Calculator className="size-3.5" />
            Calculateur · Nisab or
          </p>
          <h4 className="text-lg font-bold text-brand-pearl md:text-xl">
            Calculez votre Zakat précisément
          </h4>
          <p className="max-w-xl text-sm text-brand-mist">
            Basé sur le Nisab de{" "}
            <strong className="text-brand-pearl">{NISAB_GOLD_GRAMS}&nbsp;g</strong>{" "}
            d&apos;or pur (24K) et le taux de 2,5&nbsp;%.
          </p>
        </div>
      </div>

      {/* Cours de l'or */}
      <div className="rounded-xl border border-brand-line/35 bg-brand-panel/50 p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-wider text-brand-gold-400 uppercase">
              Cours de l&apos;or 24K
            </p>
            <p className="mt-1 text-2xl font-extrabold tabular-nums text-brand-pearl">
              {priceLoading && !manualPrice ? (
                <span className="inline-flex items-center gap-2 text-base font-medium text-brand-mist">
                  <Loader2 className="size-4 animate-spin" /> Chargement…
                </span>
              ) : (
                <>
                  {formatEur(effectivePrice)}
                  <span className="ml-1 text-sm font-medium text-brand-mist">
                    / g
                  </span>
                </>
              )}
            </p>
            <p className="mt-1 text-xs text-brand-steel-400">
              Nisab actuel ≈ {formatEur(result.nisabValue)} · source{" "}
              {manualPrice
                ? "manuelle"
                : priceSource === "live"
                  ? "cours live"
                  : "estimation"}
              {priceUpdatedAt && !manualPrice
                ? ` · ${new Date(priceUpdatedAt).toLocaleString("fr-FR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}`
                : null}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              disabled={priceLoading || manualPrice}
              onClick={() => void loadGoldPrice()}
            >
              <RefreshCw className={cn("size-3.5", priceLoading && "animate-spin")} />
              Actualiser
            </Button>
            <Button
              type="button"
              variant={manualPrice ? "default" : "secondary"}
              size="sm"
              onClick={() => {
                setManualPrice((v) => !v);
                if (!manualPrice) setPriceInput(String(goldPrice));
              }}
            >
              {manualPrice ? "Utiliser le cours live" : "Saisir le cours"}
            </Button>
          </div>
        </div>
        {manualPrice ? (
          <Field
            label="Prix de l'or 24K (€ / gramme)"
            value={priceInput}
            onChange={setPriceInput}
            suffix="€/g"
          />
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Espèces & comptes bancaires"
          hint="Liquidités disponibles"
          value={cash}
          onChange={setCash}
          suffix="€"
        />
        <Field
          label="Autres actifs liquides"
          hint="Actions, fonds, crypto liquides…"
          value={otherAssets}
          onChange={setOtherAssets}
          suffix="€"
        />
        <Field
          label="Or détenu"
          hint="Poids total avant pureté"
          value={goldGrams}
          onChange={setGoldGrams}
          suffix="g"
        />
        <label className="block space-y-1.5">
          <span className="block text-sm font-medium text-brand-pearl">
            Pureté de l&apos;or
          </span>
          <span className="block text-xs text-brand-steel-400">
            Le calcul convertit en or pur (24K)
          </span>
          <select
            value={goldKarat}
            onChange={(e) =>
              setGoldKarat(Number(e.target.value) as GoldKarat)
            }
            className="flex h-11 w-full rounded-xl border border-brand-line bg-brand-panel/80 px-4 text-sm text-brand-pearl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-400/50"
          >
            {GOLD_KARAT_OPTIONS.map((opt) => (
              <option key={opt.karat} value={opt.karat}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <Field
          label="Argent / bijoux argent"
          hint="Valeur marchande estimée"
          value={silverValue}
          onChange={setSilverValue}
          suffix="€"
        />
        <Field
          label="Marchandises commerciales"
          hint="Stock destiné à la vente"
          value={tradeGoods}
          onChange={setTradeGoods}
          suffix="€"
        />
        <Field
          label="Créances récupérables"
          hint="Argent qu'on vous doit et que vous pouvez récupérer"
          value={receivables}
          onChange={setReceivables}
          suffix="€"
        />
        <Field
          label="Dettes à court terme"
          hint="Exigibles dans l'année (à déduire)"
          value={debts}
          onChange={setDebts}
          suffix="€"
        />
      </div>

      {/* Résultat */}
      <div
        className={cn(
          "rounded-xl border p-5 md:p-6 space-y-4",
          result.aboveNisab
            ? "border-brand-gold-400/35 bg-brand-warm/10"
            : "border-brand-line/35 bg-brand-panel/40"
        )}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.16em] text-brand-gold-400 uppercase">
              {result.aboveNisab ? "Zakat due" : "Sous le Nisab"}
            </p>
            <p className="mt-1 text-3xl font-extrabold tabular-nums text-brand-pearl md:text-4xl">
              {formatEur(result.zakatDue)}
            </p>
          </div>
          <p className="text-sm text-brand-mist">
            {result.aboveNisab
              ? "2,5 % de votre richesse nette"
              : "Aucune Zakat obligatoire tant que le Nisab n'est pas atteint (et le Hawl)."}
          </p>
        </div>

        <dl className="grid gap-3 border-t border-brand-line/25 pt-4 sm:grid-cols-2">
          <div className="flex justify-between gap-3 text-sm sm:block sm:space-y-0.5">
            <dt className="text-brand-steel-400">Valeur de votre or</dt>
            <dd className="font-semibold tabular-nums text-brand-pearl">
              {formatEur(result.goldValue)}
            </dd>
          </div>
          <div className="flex justify-between gap-3 text-sm sm:block sm:space-y-0.5">
            <dt className="text-brand-steel-400">Richesse brute</dt>
            <dd className="font-semibold tabular-nums text-brand-pearl">
              {formatEur(result.grossWealth)}
            </dd>
          </div>
          <div className="flex justify-between gap-3 text-sm sm:block sm:space-y-0.5">
            <dt className="text-brand-steel-400">Richesse nette</dt>
            <dd className="font-semibold tabular-nums text-brand-pearl">
              {formatEur(result.netWealth)}
            </dd>
          </div>
          <div className="flex justify-between gap-3 text-sm sm:block sm:space-y-0.5">
            <dt className="text-brand-steel-400">
              Nisab ({NISAB_GOLD_GRAMS} g × cours)
            </dt>
            <dd className="font-semibold tabular-nums text-brand-pearl">
              {formatEur(result.nisabValue)}
            </dd>
          </div>
        </dl>
      </div>

      <p className="text-xs leading-relaxed text-brand-steel-400">
        Outil pédagogique selon le Nisab or classique (85&nbsp;g). Consultez un
        savant de confiance pour les cas particuliers (bijoux portés, dettes
        longues, avis d&apos;école). Le Hawl (un an lunaire) reste une condition
        distincte du calcul de montant.
      </p>
    </div>
  );
}
