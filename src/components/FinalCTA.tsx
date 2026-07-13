import Image from "next/image";
import type { Dictionary } from "@/dictionaries/types";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";

export default function FinalCTA({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative h-[80vh] min-h-[480px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/campaign/man-saint-tropez.jpg"
        alt="NUVOR Eyewear — encontra o teu modelo"
        fill
        sizes="100vw"
        className="object-cover object-[62%_15%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-center md:pb-20">
        <Reveal>
          <h2 className="font-brand text-paper text-[1.8rem] leading-[1.25] tracking-tight sm:text-[2.3rem] md:text-[2.9rem]">
            {dict.finalCta.headline[0]}
            <br />
            {dict.finalCta.headline[1]}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#coleccao"
              className="rounded-full bg-paper px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-transform hover:scale-[1.03]"
            >
              {dict.cta.findMine}
            </a>
            <WhatsAppLink
              message={dict.whatsapp.general}
              className="rounded-full border border-paper/50 px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-paper/10"
            >
              {dict.cta.talkToUs}
            </WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
