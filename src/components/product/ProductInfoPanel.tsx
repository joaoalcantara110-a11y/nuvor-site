import Link from "next/link";
import type { Product } from "@/data/products";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/locale";
import { collectionHref } from "@/lib/routes";
import { formatPriceEUR, formatWhatsAppProductMessage } from "@/lib/whatsapp";
import WhatsAppLink from "../WhatsAppLink";

const categoryKey = {
  sol: "sun",
  graduados: "optical",
  desporto: "sport",
} as const;

export default function ProductInfoPanel({
  product,
  dict,
  lang,
}: {
  product: Product;
  dict: Dictionary;
  lang: Locale;
}) {
  const price = formatPriceEUR(product.price);
  const message = formatWhatsAppProductMessage(
    dict.whatsapp.productTemplate,
    product.name,
    price
  );

  return (
    <div className="flex flex-col">
      <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
        {dict.nav[categoryKey[product.category]].toUpperCase()}
      </span>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {product.name}
      </h1>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-sans text-2xl font-semibold text-ink">
          {price}
        </span>
        <span className="font-sans text-base text-ink/40 line-through">
          {formatPriceEUR(product.originalPrice)}
        </span>
      </div>

      <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink/70">
        {product.description}
      </p>

      <div className="mt-9 flex flex-col gap-4">
        <WhatsAppLink
          message={message}
          className="flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-center font-sans text-sm font-semibold uppercase tracking-[0.08em] text-ink transition-transform hover:scale-[1.02] active:scale-[0.99] sm:w-fit"
        >
          {dict.product.buyOnWhatsapp}
        </WhatsAppLink>

        <Link
          href={collectionHref(lang)}
          className="font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink/60 underline underline-offset-4 transition-colors hover:text-ink"
        >
          ← {dict.product.backToCollection}
        </Link>
      </div>
    </div>
  );
}
