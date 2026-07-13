import type { Dictionary } from "@/dictionaries/types";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";

export default function NuvorSociety({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-center md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-paper" />
        <div className="absolute -right-16 top-1/3 h-52 w-52 rounded-full border border-paper" />
      </div>

      <Reveal className="relative mx-auto max-w-xl">
        <h2 className="font-brand text-paper text-[1.7rem] leading-[1.3] tracking-tight sm:text-[2.2rem] md:text-[2.6rem]">
          {dict.society.title}
        </h2>
        <p className="mx-auto mt-5 max-w-md font-sans text-base text-paper/75">
          {dict.society.text}
        </p>
        <WhatsAppLink
          message={dict.whatsapp.general}
          className="mt-9 inline-flex rounded-full bg-accent px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-transform hover:scale-[1.03]"
        >
          {dict.cta.joinSociety}
        </WhatsAppLink>
      </Reveal>
    </section>
  );
}
