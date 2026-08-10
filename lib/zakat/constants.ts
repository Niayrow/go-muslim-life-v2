/** Nisab classique en or : 20 mithqâl ≈ 85 grammes d'or pur (24K). */
export const NISAB_GOLD_GRAMS = 85;

/** Taux de la Zakat sur les biens monétaires / or / commerce : 1/40. */
export const ZAKAT_RATE = 0.025;

export type GoldKarat = 24 | 22 | 21 | 18;

export const GOLD_KARAT_OPTIONS: { karat: GoldKarat; label: string; purity: number }[] = [
  { karat: 24, label: "24K (pur)", purity: 1 },
  { karat: 22, label: "22K", purity: 22 / 24 },
  { karat: 21, label: "21K", purity: 21 / 24 },
  { karat: 18, label: "18K", purity: 18 / 24 },
];

export type GoldPriceQuote = {
  currency: "EUR";
  timestamp: string;
  priceGram24k: number;
  source: "live" | "manual" | "fallback";
};

/** Cours de repli si l'API est indisponible (€ / g 24K). */
export const FALLBACK_GOLD_PRICE_EUR_PER_G = 120;
