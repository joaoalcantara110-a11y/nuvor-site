import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/locale";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function CollectionGrid({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <section id="coleccao" className="bg-paper px-6 py-24 md:px-10 lg:px-14">
      <Reveal>
        <div className="mb-12 text-center">
          <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
            {dict.collection.eyebrow.toUpperCase()}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
            {dict.collection.title}
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={(i % 4) * 0.05}>
            <ProductCard product={product} dict={dict} lang={lang} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
