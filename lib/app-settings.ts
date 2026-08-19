export const STORAGE_STICKY_PRAYER = "settings-sticky-prayer";
export const STORAGE_PRAYER_NAV_PROMPT = "settings-sticky-prayer-prompt";
export const APP_SETTINGS_EVENT = "gml-app-settings";

export type AppSettings = {
  /** Affiche les horaires de prière en bandeau permanent en haut */
  stickyPrayerBar: boolean;
};

export const DEFAULT_APP_SETTINGS: AppSettings = {
  stickyPrayerBar: false,
};

export function readAppSettings(): AppSettings {
  if (typeof window === "undefined") return DEFAULT_APP_SETTINGS;
  try {
    return {
      stickyPrayerBar: localStorage.getItem(STORAGE_STICKY_PRAYER) === "1",
    };
  } catch {
    return DEFAULT_APP_SETTINGS;
  }
}

export function writeStickyPrayerBar(enabled: boolean) {
  localStorage.setItem(STORAGE_STICKY_PRAYER, enabled ? "1" : "0");
  window.dispatchEvent(
    new CustomEvent(APP_SETTINGS_EVENT, {
      detail: { stickyPrayerBar: enabled } satisfies Partial<AppSettings>,
    })
  );
}

/** Première visite : proposer les horaires dans la barre, une seule fois. */
export function shouldOfferPrayerNavPrompt(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (localStorage.getItem(STORAGE_PRAYER_NAV_PROMPT) === "1") return false;
    if (localStorage.getItem(STORAGE_STICKY_PRAYER) !== null) return false;
    return true;
  } catch {
    return false;
  }
}

export function markPrayerNavPromptSeen() {
  try {
    localStorage.setItem(STORAGE_PRAYER_NAV_PROMPT, "1");
  } catch {
    /* quota / mode privé */
  }
}
