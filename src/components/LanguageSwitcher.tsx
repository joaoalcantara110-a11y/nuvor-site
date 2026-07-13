"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { locales, localeNames, type Locale } from "@/lib/locale";

export default function LanguageSwitcher({
  lang,
  tone = "dark",
}: {
  lang: Locale;
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const rest = pathname?.split("/").slice(2).join("/") ?? "";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={clsx(
          "font-brand text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 border rounded-full transition-colors cursor-pointer",
          tone === "dark"
            ? "border-ink/25 text-ink hover:bg-ink/5"
            : "border-paper/40 text-paper hover:bg-paper/10"
        )}
      >
        {lang}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-ink/10 bg-paper text-ink shadow-xl z-50"
        >
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={`/${l}${rest ? `/${rest}` : ""}`}
                onClick={() => setOpen(false)}
                className={clsx(
                  "block px-4 py-2.5 text-sm hover:bg-ink/5 transition-colors",
                  l === lang && "font-semibold text-accent"
                )}
              >
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
