"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function ProductLightbox({
  images,
  alt,
  activeIndex,
  onClose,
  onNavigate,
}: {
  images: string[];
  alt: string;
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1) {
        onNavigate((activeIndex + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && images.length > 1) {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={alt}
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduceMotion ? undefined : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-10"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20"
        >
          <span className="relative block h-4 w-4">
            <span className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper" />
            <span className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-paper" />
          </span>
        </button>

        <motion.div
          key={activeIndex}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full max-h-[85vh] w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[activeIndex]}
            alt={alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </motion.div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((activeIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20 md:left-6"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((activeIndex + 1) % images.length);
              }}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20 md:right-6"
            >
              →
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
