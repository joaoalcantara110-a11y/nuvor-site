"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/dictionaries/types";
import WhatsAppLink from "./WhatsAppLink";

export default function HeroContent({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
      <div className="max-w-2xl">
        <h1 className="font-brand text-paper text-[2rem] leading-[1.15] tracking-tight sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4rem]">
          {dict.hero.headline.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 max-w-md font-sans text-base text-paper/85 md:text-lg"
        >
          {dict.hero.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#coleccao"
            className="rounded-full bg-paper px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-transform hover:scale-[1.03]"
          >
            {dict.cta.discoverCollection}
          </a>
          <WhatsAppLink
            message={dict.whatsapp.general}
            className="rounded-full border border-paper/50 px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-paper/10"
          >
            {dict.cta.talkToUs}
          </WhatsAppLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-brand text-[0.55rem] tracking-[0.3em] text-paper/70">
          SCROLL
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-paper/50"
        />
      </motion.div>
    </div>
  );
}
