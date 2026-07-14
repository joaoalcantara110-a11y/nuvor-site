import type { Locale } from "@/lib/locale";
import type { Dictionary } from "./types";
import pt from "./pt";
import en from "./en";
import es from "./es";
import fr from "./fr";

export const clientDictionaries: Record<Locale, Dictionary> = {
  pt,
  en,
  es,
  fr,
};
