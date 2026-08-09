"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  DEFAULT_LOCATION,
  DEFAULT_METHOD_ID,
  STORAGE_CITY,
  STORAGE_METHOD,
  fetchDayTimings,
  formatCountdown,
  formatCountdownShort,
  getMsUntilPrayer,
  getNextPrayer,
  getPrayerSlots,
  reverseGeocodeFr,
  searchFrenchCities,
  type CitySearchResult,
  type DayTimings,
  type NextPrayer,
  type PrayerLocation,
  type PrayerSlot,
} from "@/lib/prayer-times";

export function usePrayerTimes() {
  const [location, setLocationState] =
    useState<PrayerLocation>(DEFAULT_LOCATION);
  const [methodId, setMethodIdState] = useState(DEFAULT_METHOD_ID);
  const [hydrated, setHydrated] = useState(false);

  const [day, setDay] = useState<DayTimings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [next, setNext] = useState<NextPrayer | null>(null);
  const [msLeft, setMsLeft] = useState(0);

  const [cityQuery, setCityQuery] = useState("");
  const [cityResults, setCityResults] = useState<CitySearchResult[]>([]);
  const [searchingCity, setSearchingCity] = useState(false);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    try {
      const savedCity = localStorage.getItem(STORAGE_CITY);
      const savedMethod = localStorage.getItem(STORAGE_METHOD);
      if (savedCity) setLocationState(JSON.parse(savedCity));
      if (savedMethod) setMethodIdState(Number.parseInt(savedMethod, 10) || DEFAULT_METHOD_ID);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const setLocation = useCallback((loc: PrayerLocation) => {
    setLocationState(loc);
    localStorage.setItem(STORAGE_CITY, JSON.stringify(loc));
  }, []);

  const setMethodId = useCallback((id: number) => {
    setMethodIdState(id);
    localStorage.setItem(STORAGE_METHOD, String(id));
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDayTimings(location, methodId);
        if (cancelled) return;
        setDay(data);
        setNext(getNextPrayer(data.timings));
      } catch {
        if (!cancelled) {
          setError("Impossible de charger les horaires.");
          setDay(null);
          setNext(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [hydrated, location, methodId]);

  useEffect(() => {
    if (!day) return;

    const tick = () => {
      const current = getNextPrayer(day.timings);
      setNext(current);
      setMsLeft(getMsUntilPrayer(current.time, current.isTomorrow));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [day]);

  useEffect(() => {
    if (cityQuery.trim().length < 2) {
      setCityResults([]);
      return;
    }

    const id = window.setTimeout(async () => {
      setSearchingCity(true);
      try {
        const results = await searchFrenchCities(cityQuery);
        setCityResults(results);
      } finally {
        setSearchingCity(false);
      }
    }, 280);

    return () => window.clearTimeout(id);
  }, [cityQuery]);

  const locateMe = useCallback((): Promise<PrayerLocation> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const message = "Géolocalisation non disponible.";
        setError(message);
        reject(new Error(message));
        return;
      }

      setLocating(true);
      setError(null);

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const name = await reverseGeocodeFr(lat, lng);
            const loc = { name, lat, lng };
            setLocation(loc);
            resolve(loc);
          } catch {
            const message = "Impossible d’obtenir la position.";
            setError(message);
            reject(new Error(message));
          } finally {
            setLocating(false);
          }
        },
        () => {
          const message = "Permission de localisation refusée.";
          setError(message);
          setLocating(false);
          reject(new Error(message));
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
      );
    });
  }, [setLocation]);

  const slots: PrayerSlot[] = useMemo(
    () => (day ? getPrayerSlots(day.timings) : []),
    [day]
  );

  return {
    hydrated,
    location,
    methodId,
    setLocation,
    setMethodId,
    day,
    slots,
    next,
    msLeft,
    countdown: formatCountdown(msLeft),
    countdownShort: formatCountdownShort(msLeft),
    loading,
    error,
    cityQuery,
    setCityQuery,
    cityResults,
    searchingCity,
    locating,
    locateMe,
  };
}
