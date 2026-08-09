export type PrayerKey =
  | "Fajr"
  | "Sunrise"
  | "Dhuhr"
  | "Asr"
  | "Maghrib"
  | "Isha";

export type PrayerLocation = {
  name: string;
  lat: number;
  lng: number;
};

export type CalculationMethod = {
  id: number;
  short: string;
  label: string;
  /** Angle Fajr en degrés */
  fajr: number;
  /** Angle Isha en degrés, ou minutes après Maghrib si `ishaIsMinutes` */
  isha: number;
  ishaIsMinutes?: boolean;
};

export type PrayerSlot = {
  key: PrayerKey;
  label: string;
  time: string;
  secondary?: boolean;
};

export type NextPrayer = {
  key: PrayerKey;
  label: string;
  time: string;
  isTomorrow: boolean;
};

export type DayTimings = {
  timings: Record<string, string>;
  hijri: string;
  gregorian: string;
};

export type WeekDayRow = {
  dateKey: string;
  weekday: string;
  dayMonth: string;
  isToday: boolean;
  times: Record<PrayerKey, string>;
};

export const DEFAULT_LOCATION: PrayerLocation = {
  name: "Paris",
  lat: 48.8566,
  lng: 2.3522,
};

export const CALCULATION_METHODS: CalculationMethod[] = [
  {
    id: 12,
    short: "UOIF",
    label: "UOIF (France)",
    fajr: 12,
    isha: 12,
  },
  {
    id: 3,
    short: "MWL",
    label: "Ligue Islamique (MWL)",
    fajr: 18,
    isha: 17,
  },
  {
    id: 2,
    short: "ISNA",
    label: "ISNA",
    fajr: 15,
    isha: 15,
  },
  {
    id: 4,
    short: "Makkah",
    label: "Umm Al-Qura",
    fajr: 18.5,
    isha: 90,
    ishaIsMinutes: true,
  },
  {
    id: 5,
    short: "Egypt",
    label: "Égypte",
    fajr: 19.5,
    isha: 17.5,
  },
];

export function formatMethodAngles(method: CalculationMethod): string {
  const fajr = `Fajr ${method.fajr}°`;
  const isha = method.ishaIsMinutes
    ? `Isha ${method.isha} min après Maghrib`
    : `Isha ${method.isha}°`;
  return `${fajr} · ${isha}`;
}

export const DEFAULT_METHOD_ID = 12;

export const PRAYER_SLOTS: Omit<PrayerSlot, "time">[] = [
  { key: "Fajr", label: "Fajr" },
  { key: "Sunrise", label: "Chourouk", secondary: true },
  { key: "Dhuhr", label: "Dhuhr" },
  { key: "Asr", label: "Asr" },
  { key: "Maghrib", label: "Maghrib" },
  { key: "Isha", label: "Isha" },
];

export const STORAGE_CITY = "prayer-city";
export const STORAGE_METHOD = "prayer-method";

export function formatPrayerTime(time: string): string {
  return time?.split(" ")[0] || "--:--";
}

export function timeToMinutes(time: string): number {
  const [h, m] = formatPrayerTime(time).split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

export function formatCountdown(ms: number): string {
  if (ms <= 0) return "00:00:00";
  const totalSec = Math.floor(ms / 1000);
  const hh = Math.floor(totalSec / 3600);
  const mm = Math.floor((totalSec % 3600) / 60);
  const ss = totalSec % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
}

export function formatCountdownShort(ms: number): string {
  if (ms <= 0) return "maintenant";
  const totalMin = Math.floor(ms / 60000);
  if (totalMin < 60) return `dans ${totalMin} min`;
  const hh = Math.floor(totalMin / 60);
  const mm = totalMin % 60;
  return mm > 0 ? `dans ${hh} h ${mm}` : `dans ${hh} h`;
}

function aladhanDatePath(date = new Date()): string {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export async function fetchDayTimings(
  location: PrayerLocation,
  methodId: number,
  date = new Date()
): Promise<DayTimings> {
  const url = `https://api.aladhan.com/v1/timings/${aladhanDatePath(date)}?latitude=${location.lat}&longitude=${location.lng}&method=${methodId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Impossible de charger les horaires");
  const data = await res.json();
  if (data.code !== 200) throw new Error("Réponse Aladhan invalide");

  const hijri = data.data.date.hijri;
  const gregorian = data.data.date.gregorian;
  const gDay = Number(gregorian.day);
  const gMonth = Number(gregorian.month.number);
  const gYear = Number(gregorian.year);
  const gregorianDate = new Date(gYear, gMonth - 1, gDay);
  const gregorianFr = gregorianDate.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {
    timings: data.data.timings,
    hijri: `${hijri.day} ${hijri.month.en} ${hijri.year}`,
    gregorian: gregorianFr.charAt(0).toUpperCase() + gregorianFr.slice(1),
  };
}

function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Horaires pour les 7 prochains jours (aujourd’hui inclus). */
export async function fetchWeekTimings(
  location: PrayerLocation,
  methodId: number,
  from = new Date()
): Promise<WeekDayRow[]> {
  const start = new Date(from);
  start.setHours(12, 0, 0, 0);
  const todayKey = toDateKey(start);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });

  const days = await Promise.all(
    dates.map((d) => fetchDayTimings(location, methodId, d))
  );

  return dates.map((date, i) => {
    const weekday = date.toLocaleDateString("fr-FR", { weekday: "short" });
    const dayMonth = date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    });
    const times = Object.fromEntries(
      PRAYER_SLOTS.map((slot) => [
        slot.key,
        formatPrayerTime(days[i].timings[slot.key]),
      ])
    ) as Record<PrayerKey, string>;

    return {
      dateKey: toDateKey(date),
      weekday: weekday.charAt(0).toUpperCase() + weekday.slice(1),
      dayMonth,
      isToday: toDateKey(date) === todayKey,
      times,
    };
  });
}

export function getPrayerSlots(
  timings: Record<string, string>
): PrayerSlot[] {
  return PRAYER_SLOTS.map((slot) => ({
    ...slot,
    time: formatPrayerTime(timings[slot.key]),
  }));
}

/** Prochaine prière parmi les 5 obligatoires (+ Chourouk ignoré pour « next ») */
export function getNextPrayer(
  timings: Record<string, string>,
  now = new Date()
): NextPrayer {
  const currentMins = now.getHours() * 60 + now.getMinutes();
  const obligatory = PRAYER_SLOTS.filter((p) => !p.secondary);

  for (const p of obligatory) {
    const mins = timeToMinutes(timings[p.key]);
    if (mins > currentMins) {
      return {
        key: p.key,
        label: p.label,
        time: formatPrayerTime(timings[p.key]),
        isTomorrow: false,
      };
    }
  }

  return {
    key: "Fajr",
    label: "Fajr",
    time: formatPrayerTime(timings.Fajr),
    isTomorrow: true,
  };
}

export function getMsUntilPrayer(
  time: string,
  isTomorrow: boolean,
  now = new Date()
): number {
  const [h, m] = formatPrayerTime(time).split(":").map(Number);
  const target = new Date(now);
  target.setHours(h, m, 0, 0);
  if (isTomorrow || target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1);
  }
  return target.getTime() - now.getTime();
}

export type CitySearchResult = {
  name: string;
  lat: number;
  lng: number;
  postcode?: string;
};

export async function searchFrenchCities(
  query: string
): Promise<CitySearchResult[]> {
  const q = query.trim();
  if (q.length < 2) return [];

  const res = await fetch(
    `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(q)}&fields=nom,centre,codesPostaux&boost=population&limit=8`
  );
  if (!res.ok) return [];
  const data = await res.json();

  return (data as Array<{
    nom: string;
    centre?: { coordinates: [number, number] };
    codesPostaux?: string[];
  }>)
    .filter((c) => c.centre?.coordinates)
    .map((c) => ({
      name: c.nom,
      lng: c.centre!.coordinates[0],
      lat: c.centre!.coordinates[1],
      postcode: c.codesPostaux?.[0],
    }));
}

export async function reverseGeocodeFr(
  lat: number,
  lng: number
): Promise<string> {
  // 1) BAN — forcer le niveau commune (jamais une rue)
  try {
    const res = await fetch(
      `https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}&type=municipality`
    );
    if (res.ok) {
      const data = await res.json();
      const props = data?.features?.[0]?.properties;
      const city = props?.city?.trim();
      const postcode = props?.postcode?.trim();
      if (city) {
        return postcode ? `${city} (${postcode})` : city;
      }
    }
  } catch {
    /* continue */
  }

  // 2) Communes geo.api.gouv
  try {
    const communesRes = await fetch(
      `https://geo.api.gouv.fr/communes?lat=${lat}&lon=${lng}&fields=nom,codesPostaux&limit=1`
    );
    if (communesRes.ok) {
      const communes = (await communesRes.json()) as Array<{
        nom?: string;
        codesPostaux?: string[];
      }>;
      const nom = communes[0]?.nom?.trim();
      const postcode = communes[0]?.codesPostaux?.[0];
      if (nom) {
        return postcode ? `${nom} (${postcode})` : nom;
      }
    }
  } catch {
    /* continue */
  }

  // 3) BAN sans filtre — prendre uniquement .city
  try {
    const res = await fetch(
      `https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}`
    );
    if (res.ok) {
      const data = await res.json();
      const props = data?.features?.[0]?.properties;
      const city = props?.city?.trim();
      const postcode = props?.postcode?.trim();
      if (city) {
        return postcode ? `${city} (${postcode})` : city;
      }
    }
  } catch {
    /* continue */
  }

  // 4) Nominatim (hors France)
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=12&addressdetails=1`,
      {
        headers: {
          Accept: "application/json",
          "Accept-Language": "fr",
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      const a = data?.address;
      const name = (
        a?.city ||
        a?.town ||
        a?.village ||
        a?.municipality ||
        ""
      ).trim();
      if (name) return name;
    }
  } catch {
    /* continue */
  }

  return "Position actuelle";
}
