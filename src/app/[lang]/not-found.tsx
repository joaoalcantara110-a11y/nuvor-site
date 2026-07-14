"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { defaultLocale, isLocale } from "@/lib/locale";
import { collectionHref } from "@/lib/routes";
import { clientDictionaries } from "@/dictionaries/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const pathname = usePathname();
  const first = pathname?.split("/")[1] ?? "";
  const lang = isLocale(first) ? first : defaultLocale;
  const dict = clientDictionaries[lang];

  return (
    <>
      <Header lang={lang} dict={dict} solid />
      <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 pt-28 text-center md:pt-32">
        <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
          {dict.product.notFoundEyebrow.toUpperCase()}
        </span>
        <h1 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {dict.product.notFoundTitle}
        </h1>
        <p className="mt-4 max-w-md font-sans text-base text-ink/65">
          {dict.product.notFoundText}
        </p>
        <Link
          href={collectionHref(lang)}
          className="mt-9 rounded-full bg-ink px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-ink/85"
        >
          {dict.product.notFoundCta}
        </Link>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
