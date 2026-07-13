import "server-only";
import type { Locale } from "@/lib/locale";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pt: () => import("./pt").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
