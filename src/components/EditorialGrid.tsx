import Image from "next/image";
import type { Dictionary } from "@/dictionaries/types";
import Reveal from "./Reveal";

export default function EditorialGrid({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-paper px-6 pb-24 md:px-10 lg:px-14">
      <Reveal>
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
              {dict.editorial.eyebrow.toUpperCase()}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
              {dict.editorial.title}
            </h2>
          </div>
          <a
            href="#historia"
            className="hidden shrink-0 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink/70 underline underline-offset-4 hover:text-ink md:block"
          >
            {dict.cta.knowNuvor}
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <Reveal
          delay={0.05}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-4 md:row-span-2 md:aspect-auto"
        >
          <Image
            src="/images/campaign/man-saint-tropez.jpg"
            alt="NUVOR Eyewear — estilo urbano europeu"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-[50%_25%] transition-transform duration-700 hover:scale-105"
          />
        </Reveal>

        <Reveal
          delay={0.12}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-5 md:row-span-2 md:aspect-auto"
        >
          <Image
            src="/images/campaign/woman-bold-orange-see-the-future.png"
            alt="NUVOR Eyewear — See the future campaign"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-[60%_20%] transition-transform duration-700 hover:scale-105"
          />
        </Reveal>

        <Reveal
          delay={0.18}
          className="relative aspect-square overflow-hidden rounded-2xl bg-white md:col-span-3"
        >
          <Image
            src="/images/campaign/product-hero-square-navy.png"
            alt="NUVOR Eyewear — Square Navy"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>

        <Reveal
          delay={0.24}
          className="relative aspect-square overflow-hidden rounded-2xl md:col-span-3"
        >
          <Image
            src="/images/campaign/woman-optical-selfie.jpg"
            alt="NUVOR Eyewear — óculos pretos"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover object-[50%_30%] transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
