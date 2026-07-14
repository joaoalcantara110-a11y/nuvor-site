"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProductLightbox from "./ProductLightbox";

export default function ProductGallery({
  images,
  alt,
  zoomHint,
}: {
  images: string[];
  alt: string;
  zoomHint: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const hasMultiple = images.length > 1;

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse lg:gap-6">
      <div className="flex-1">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={zoomHint}
          className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl bg-white"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={reduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIndex]}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                priority
                className="object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </motion.div>
          </AnimatePresence>

          <span className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 font-sans text-[0.65rem] uppercase tracking-[0.08em] text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {zoomHint}
          </span>
        </button>
      </div>

      {hasMultiple && (
        <div className="flex gap-3 overflow-x-auto no-scrollbar md:w-20 md:flex-col md:overflow-visible">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${alt} ${i + 1}`}
              aria-current={i === activeIndex}
              className={clsx(
                "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white transition-all",
                i === activeIndex
                  ? "ring-2 ring-ink ring-offset-2 ring-offset-paper"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <ProductLightbox
          images={images}
          alt={alt}
          activeIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
}
