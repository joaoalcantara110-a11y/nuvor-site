import Link from "next/link";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/locale";
import { collectionHref, homeHref } from "@/lib/routes";

export default function Breadcrumb({
  lang,
  dict,
  productName,
}: {
  lang: Locale;
  dict: Dictionary;
  productName: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.06em] text-ink/50"
    >
      <Link href={homeHref(lang)} className="transition-colors hover:text-ink">
        {dict.product.breadcrumbHome}
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href={collectionHref(lang)}
        className="transition-colors hover:text-ink"
      >
        {dict.product.breadcrumbCollection}
      </Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page" className="text-ink/80 normal-case">
        {productName}
      </span>
    </nav>
  );
}
