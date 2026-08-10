import {
  FALLBACK_GOLD_PRICE_EUR_PER_G,
  type GoldPriceQuote,
} from "@/lib/zakat/constants";

export const runtime = "edge";

type GoldpriceDevResponse = {
  currency?: string;
  timestamp?: string;
  price_gram_24k?: string;
};

export async function GET() {
  try {
    const res = await fetch(
      "https://api.goldprice.dev/v1/carat?currency=EUR",
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/json" },
      }
    );

    if (!res.ok) {
      throw new Error(`Upstream ${res.status}`);
    }

    const data = (await res.json()) as GoldpriceDevResponse;
    const price = Number.parseFloat(data.price_gram_24k ?? "");

    if (!Number.isFinite(price) || price <= 0) {
      throw new Error("Invalid gold price");
    }

    const quote: GoldPriceQuote = {
      currency: "EUR",
      timestamp: data.timestamp ?? new Date().toISOString(),
      priceGram24k: price,
      source: "live",
    };

    return Response.json(quote, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    const quote: GoldPriceQuote = {
      currency: "EUR",
      timestamp: new Date().toISOString(),
      priceGram24k: FALLBACK_GOLD_PRICE_EUR_PER_G,
      source: "fallback",
    };
    return Response.json(quote, { status: 200 });
  }
}
