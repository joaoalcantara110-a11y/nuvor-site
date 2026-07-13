"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import type { Locale } from "@/lib/locale";
import type { Dictionary } from "@/dictionaries/types";
import WhatsAppLink from "./WhatsAppLink";

export default function MobileMenu({
  dict,
  navItems,
  tone,
}: {
  lang: Locale;
  dict: Dictionary;
  navItems: { label: string; href: string }[];
  tone: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menu"
        aria-expanded={open}
        className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={clsx(
            "h-[1.5px] w-6 transition-colors",
            tone === "dark" ? "bg-ink" : "bg-paper"
          )}
        />
        <span
          className={clsx(
            "h-[1.5px] w-6 transition-colors",
            tone === "dark" ? "bg-ink" : "bg-paper"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink text-paper"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-xl font-bold tracking-tight">
                NUVOR
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="relative flex h-9 w-9 items-center justify-center"
              >
                <span className="absolute h-[1.5px] w-6 rotate-45 bg-paper" />
                <span className="absolute h-[1.5px] w-6 -rotate-45 bg-paper" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={`${item.label}-${i}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="font-display text-3xl font-semibold uppercase tracking-tight py-2 text-paper/95"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-10">
              <WhatsAppLink
                message={dict.whatsapp.general}
                className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-ink"
              >
                {dict.cta.talkToUs}
              </WhatsAppLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
