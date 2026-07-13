import Image from "next/image";
import type { Dictionary } from "@/dictionaries/types";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";

export default function MaleCampaign({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/campaign/man-lisboa-branded.png"
        alt="NUVOR Eyewear — campanha Lisboa"
        fill
        sizes="100vw"
        className="object-cover object-[55%_50%] md:object-[58%_42%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-20 lg:px-14">
        <Reveal>
          <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
            {dict.maleCampaign.eyebrow.toUpperCase()}
          </span>
          <h2 className="mt-4 max-w-xl font-brand text-paper text-[1.8rem] leading-[1.2] tracking-tight sm:text-[2.3rem] md:text-[3rem]">
            {dict.maleCampaign.headline[0]}
            <br />
            {dict.maleCampaign.headline[1]}
          </h2>
          <p className="mt-5 max-w-md font-sans text-base text-paper/80">
            {dict.maleCampaign.text}
          </p>
          <WhatsAppLink
            message={dict.whatsapp.general}
            className="mt-8 inline-flex rounded-full bg-paper px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-transform hover:scale-[1.03]"
          >
            {dict.cta.exploreCollection}
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}
