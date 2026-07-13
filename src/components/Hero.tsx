import Image from "next/image";
import type { Dictionary } from "@/dictionaries/types";
import HeroContent from "./HeroContent";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/campaign/man-lisboa-plain.jpeg"
          alt="NUVOR Eyewear — homem junto ao rio Tejo em Lisboa"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="hero-ken-burns object-cover object-[70%_18%] md:object-[62%_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/50 md:from-ink/80 md:via-ink/10 md:to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      <HeroContent dict={dict} />

      <style>{`
        @keyframes hero-ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.09); }
        }
        .hero-ken-burns {
          animation: hero-ken-burns 14s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ken-burns { animation: none; }
        }
      `}</style>
    </section>
  );
}
