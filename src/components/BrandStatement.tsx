import type { Dictionary } from "@/dictionaries/types";
import MaskReveal from "./MaskReveal";
import Reveal from "./Reveal";

export default function BrandStatement({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-brand text-ink text-[1.7rem] leading-[1.3] tracking-tight sm:text-[2.1rem] md:text-[2.6rem]">
          {dict.brandStatement.headline.map((line, i) => (
            <MaskReveal key={i} delay={i * 0.15}>
              {line}
            </MaskReveal>
          ))}
        </h2>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-lg font-sans text-base text-ink/70 md:text-lg">
            {dict.brandStatement.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
