import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/locale";
import { productHref } from "@/lib/routes";
import { formatPriceEUR, formatWhatsAppProductMessage } from "@/lib/whatsapp";
import WhatsAppLink from "./WhatsAppLink";

const categoryKey = {
  sol: "sun",
  graduados: "optical",
  desporto: "sport",
} as const;

export default function ProductCard({
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

  const href = productHref(lang, product.id);

  return (
    <div className="group flex flex-col">
      <Link
        href={href}
        className="relative block aspect-square overflow-hidden rounded-2xl bg-white"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <span className="font-brand text-[0.6rem] tracking-[0.25em] text-ink/45">
            {dict.nav[categoryKey[product.category]].toUpperCase()}
          </span>
          <h3 className="mt-1 font-display text-base font-semibold tracking-tight text-ink">
            {product.name}
          </h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-sans text-sm font-semibold text-ink">
              {price}
            </span>
            <span className="font-sans text-xs text-ink/40 line-through">
              {formatPriceEUR(product.originalPrice)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <Link
          href={href}
          className="font-sans text-xs font-semibold uppercase tracking-[0.06em] text-ink/70 underline underline-offset-4 transition-colors hover:text-ink"
        >
          {dict.cta.viewModel} →
        </Link>
        <WhatsAppLink
          message={message}
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink/70 transition-colors hover:bg-accent hover:text-ink"

        >
          <span className="sr-only">WhatsApp</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.29-1.38a9.9 9.9 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.26-8.25M8.53 6.65c-.16 0-.43.06-.66.31s-.86.85-.86 2.07.88 2.4 1 2.57c.13.16 1.72 2.75 4.28 3.75 2.12.83 2.55.67 3.01.63.46-.04 1.5-.61 1.71-1.2s.21-1.1.15-1.2c-.06-.11-.23-.17-.48-.3s-1.5-.74-1.73-.83-.4-.13-.56.13-.65.82-.79.99-.29.18-.54.06c-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72s-.02-.38.11-.51c.11-.11.25-.29.38-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43z" />
          </svg>
        </WhatsAppLink>
      </div>
    </div>
  );
}
