import type { Locale } from "./locale";

export const productSegment: Record<Locale, string> = {
  pt: "produtos",
  en: "products",
  es: "productos",
  fr: "produits",
};

export function productHref(locale: Locale, slug: string): string {
  return `/${locale}/${productSegment[locale]}/${slug}`;
}

export function collectionHref(locale: Locale): string {
  return `/${locale}#coleccao`;
}

export function homeHref(locale: Locale): string {
  return `/${locale}`;
}
