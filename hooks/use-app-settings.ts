"use client";

import { useCallback, useEffect, useState } from "react";

import {
  APP_SETTINGS_EVENT,
  DEFAULT_APP_SETTINGS,
  readAppSettings,
  writeStickyPrayerBar,
  type AppSettings,
} from "@/lib/app-settings";

export function useAppSettings() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_APP_SETTINGS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSettings(readAppSettings());
    setHydrated(true);

    const sync = () => setSettings(readAppSettings());
    window.addEventListener(APP_SETTINGS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(APP_SETTINGS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const setStickyPrayerBar = useCallback((enabled: boolean) => {
    writeStickyPrayerBar(enabled);
    setSettings((prev) => ({ ...prev, stickyPrayerBar: enabled }));
  }, []);

  return {
    hydrated,
    settings,
    stickyPrayerBar: settings.stickyPrayerBar,
    setStickyPrayerBar,
  };
}
