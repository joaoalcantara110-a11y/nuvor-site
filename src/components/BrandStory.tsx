import type { Dictionary } from "@/dictionaries/types";
import Reveal from "./Reveal";

export default function BrandStory({ dict }: { dict: Dictionary }) {
  return (
    <section id="historia" className="bg-paper px-6 py-24 md:px-10 lg:px-14">
      <Reveal>
        <div className="mb-16 text-center">
          <span className="font-brand text-[0.65rem] tracking-[0.3em] text-accent">
            {dict.story.eyebrow.toUpperCase()}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
            {dict.story.title}
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3 md:gap-8">
        {dict.story.chapters.map((chapter, i) => (
          <Reveal key={chapter.number} delay={i * 0.12}>
            <div className="relative border-t border-ink/10 pt-6">
              <span className="font-brand text-4xl text-ink/15 md:text-5xl">
                {chapter.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                {chapter.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/65 md:text-base">
                {chapter.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
