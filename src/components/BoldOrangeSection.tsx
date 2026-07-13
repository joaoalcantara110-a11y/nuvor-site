import Image from "next/image";
import type { Dictionary } from "@/dictionaries/types";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";
import { getProductById } from "@/data/products";
import { formatPriceEUR, formatWhatsAppProductMessage } from "@/lib/whatsapp";

export default function BoldOrangeSection({ dict }: { dict: Dictionary }) {
  const product = getProductById("bold-orange");
  const price = product ? formatPriceEUR(product.price) : "";
  const message = product
    ? formatWhatsAppProductMessage(dict.whatsapp.productTemplate, product.name, price)
    : dict.whatsapp.general;

  return (
    <section className="flex flex-col overflow-hidden bg-ink md:flex-row">
      <div className="relative aspect-[4/5] w-full md:aspect-auto md:w-3/5">
        <Image
          src="/images/campaign/woman-bold-orange-see-the-future.png"
          alt="NUVOR Eyewear — Bold Orange"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-[62%_22%]"
        />
      </div>

      <div className="flex w-full flex-col justify-center px-6 py-16 md:w-2/5 md:px-14 md:py-0">
        <Reveal>
          <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
            {dict.boldOrange.eyebrow.toUpperCase()}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-paper md:text-[2.6rem] md:leading-[1.1]">
            {dict.boldOrange.title}
          </h2>
          <p className="mt-5 max-w-sm font-sans text-base text-paper/75">
            {dict.boldOrange.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppLink
              message={message}
              className="rounded-full bg-accent px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-transform hover:scale-[1.03]"
            >
              {dict.cta.discoverBoldOrange}
            </WhatsAppLink>
            {product && (
              <span className="font-sans text-sm text-paper/70">
                {price}{" "}
                <span className="text-paper/40 line-through">
                  {formatPriceEUR(product.originalPrice)}
                </span>
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
