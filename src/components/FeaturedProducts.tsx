import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/locale";
import { featuredProductIds, getProductById } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function FeaturedProducts({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const items = featuredProductIds
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="destaque" className="bg-paper px-6 py-24 md:px-10 lg:px-14">
      <Reveal>
        <div className="mb-12 text-center">
          <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
            {dict.featured.eyebrow.toUpperCase()}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
            {dict.featured.title}
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
        {items.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.06}>
            <ProductCard product={product} dict={dict} lang={lang} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 flex justify-center">
          <a
            href="#coleccao"
            className="rounded-full border border-ink/20 px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {dict.cta.viewCollection}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
