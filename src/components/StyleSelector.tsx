"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import type { Dictionary } from "@/dictionaries/types";
import type { StyleTag } from "@/data/products";
import { getProductsByStyle } from "@/data/products";
import { formatPriceEUR, formatWhatsAppProductMessage } from "@/lib/whatsapp";
import WhatsAppLink from "./WhatsAppLink";
import Reveal from "./Reveal";

const STYLE_ORDER: StyleTag[] = [
  "bold",
  "classic",
  "minimal",
  "sport",
  "sophisticated",
  "creative",
];

export default function StyleSelector({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState<StyleTag>("bold");

  const product = useMemo(() => {
    const matches = getProductsByStyle(active);
    return matches[0];
  }, [active]);

  const price = product ? formatPriceEUR(product.price) : "";
  const message = product
    ? formatWhatsAppProductMessage(dict.whatsapp.productTemplate, product.name, price)
    : "";

  return (
    <section className="bg-paper px-6 py-24 md:px-10 lg:px-14">
      <Reveal>
        <div className="mb-10 text-center">
          <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
            {dict.styleSelector.eyebrow.toUpperCase()}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
            {dict.styleSelector.title}
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto flex max-w-2xl gap-3 overflow-x-auto no-scrollbar pb-2 md:flex-wrap md:justify-center">
        {STYLE_ORDER.map((style) => (
          <button
            key={style}
            type="button"
            onClick={() => setActive(style)}
            className={clsx(
              "shrink-0 rounded-full px-5 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.04em] transition-colors",
              active === style
                ? "bg-ink text-paper"
                : "bg-ink/5 text-ink/70 hover:bg-ink/10"
            )}
          >
            {dict.styleSelector.styles[style]}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <AnimatePresence mode="wait">
          {product && (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-8 rounded-3xl bg-white/60 p-8 md:flex-row md:p-12"
            >
              <div className="relative aspect-square w-full max-w-xs shrink-0 overflow-hidden rounded-2xl bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-contain p-6"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {product.name}
                </h3>
                <p className="mt-3 max-w-sm font-sans text-sm text-ink/65">
                  {product.description}
                </p>
                <div className="mt-4 flex items-baseline justify-center gap-2 md:justify-start">
                  <span className="font-sans text-lg font-semibold text-ink">
                    {price}
                  </span>
                  <span className="font-sans text-sm text-ink/40 line-through">
                    {formatPriceEUR(product.originalPrice)}
                  </span>
                </div>
                <WhatsAppLink
                  message={message}
                  className="mt-6 inline-flex rounded-full bg-ink px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-paper transition-transform hover:scale-[1.03]"
                >
                  {dict.cta.viewModel}
                </WhatsAppLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
