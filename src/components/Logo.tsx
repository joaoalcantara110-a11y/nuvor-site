import Link from "next/link";
import clsx from "clsx";
import type { Locale } from "@/lib/locale";

export default function Logo({
  lang,
  tone = "dark",
  className,
}: {
  lang: Locale;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={`/${lang}`}
      className={clsx(
        "flex flex-col leading-none select-none",
        tone === "dark" ? "text-ink" : "text-paper",
        className
      )}
      aria-label="NUVOR Eyewear"
    >
      <span className="font-display text-2xl md:text-[1.7rem] font-bold tracking-tight">
        NUVOR
      </span>
      <span className="font-brand text-[0.5rem] md:text-[0.55rem] tracking-[0.45em] pl-[0.1em] opacity-80">
        eyewear
      </span>
    </Link>
  );
}
