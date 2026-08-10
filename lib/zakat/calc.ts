import {
  GOLD_KARAT_OPTIONS,
  NISAB_GOLD_GRAMS,
  ZAKAT_RATE,
  type GoldKarat,
} from "@/lib/zakat/constants";

export type ZakatInputs = {
  /** Espèces + comptes bancaires (€) */
  cash: number;
  /** Autres liquidités / investissements liquides (€) */
  otherAssets: number;
  /** Or détenu en grammes (avant pureté) */
  goldGrams: number;
  goldKarat: GoldKarat;
  /** Argent / bijoux argent en valeur (€) — simplifié */
  silverValue: number;
  /** Marchandises commerciales (€) */
  tradeGoods: number;
  /** Créances récupérables (€) */
  receivables: number;
  /** Dettes exigibles à court terme (€) */
  debts: number;
  /** Prix de l'or 24K en € / gramme */
  goldPricePerGram24k: number;
};

export type ZakatBreakdown = {
  goldValue: number;
  grossWealth: number;
  netWealth: number;
  nisabValue: number;
  nisabGrams: number;
  goldPricePerGram24k: number;
  aboveNisab: boolean;
  zakatDue: number;
  rate: number;
};

function purityFor(karat: GoldKarat): number {
  return GOLD_KARAT_OPTIONS.find((o) => o.karat === karat)?.purity ?? 1;
}

export function computeGoldValueEur(
  grams: number,
  karat: GoldKarat,
  pricePerGram24k: number
): number {
  if (!Number.isFinite(grams) || grams <= 0) return 0;
  if (!Number.isFinite(pricePerGram24k) || pricePerGram24k <= 0) return 0;
  return grams * purityFor(karat) * pricePerGram24k;
}

export function computeNisabValue(pricePerGram24k: number): number {
  if (!Number.isFinite(pricePerGram24k) || pricePerGram24k <= 0) return 0;
  return NISAB_GOLD_GRAMS * pricePerGram24k;
}

export function calculateZakat(inputs: ZakatInputs): ZakatBreakdown {
  const cash = Math.max(0, inputs.cash || 0);
  const otherAssets = Math.max(0, inputs.otherAssets || 0);
  const silverValue = Math.max(0, inputs.silverValue || 0);
  const tradeGoods = Math.max(0, inputs.tradeGoods || 0);
  const receivables = Math.max(0, inputs.receivables || 0);
  const debts = Math.max(0, inputs.debts || 0);
  const goldPrice = Math.max(0, inputs.goldPricePerGram24k || 0);

  const goldValue = computeGoldValueEur(
    inputs.goldGrams,
    inputs.goldKarat,
    goldPrice
  );

  const grossWealth =
    cash + otherAssets + goldValue + silverValue + tradeGoods + receivables;
  const netWealth = Math.max(0, grossWealth - debts);
  const nisabValue = computeNisabValue(goldPrice);
  const aboveNisab = nisabValue > 0 && netWealth >= nisabValue;
  const zakatDue = aboveNisab ? netWealth * ZAKAT_RATE : 0;

  return {
    goldValue,
    grossWealth,
    netWealth,
    nisabValue,
    nisabGrams: NISAB_GOLD_GRAMS,
    goldPricePerGram24k: goldPrice,
    aboveNisab,
    zakatDue,
    rate: ZAKAT_RATE,
  };
}

export function formatEur(value: number, digits = 2): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}
