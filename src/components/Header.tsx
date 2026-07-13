"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { Locale } from "@/lib/locale";
import type { Dictionary } from "@/dictionaries/types";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: { label: string; href: string }[] = [
    { label: dict.nav.shop, href: "#coleccao" },
    { label: dict.nav.news, href: "#destaque" },
    { label: dict.nav.sun, href: "#coleccao" },
    { label: dict.nav.optical, href: "#coleccao" },
    { label: dict.nav.sport, href: "#coleccao" },
    { label: dict.nav.about, href: "#historia" },
    { label: dict.nav.contact, href: "#rodape" },
  ];

  const tone: "dark" | "light" = scrolled ? "dark" : "light";

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(20,20,20,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <Logo lang={lang} tone={tone} />

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={`${item.label}-${i}`}
              href={item.href}
              className={clsx(
                "font-sans text-[0.8rem] tracking-[0.08em] uppercase transition-colors",
                tone === "dark"
                  ? "text-ink/80 hover:text-ink"
                  : "text-paper/85 hover:text-paper"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher lang={lang} tone={tone} />
          <a
            href="#coleccao"
            className={clsx(
              "font-sans text-[0.75rem] font-semibold uppercase tracking-[0.08em] px-5 py-2.5 rounded-full transition-colors",
              tone === "dark"
                ? "bg-ink text-paper hover:bg-ink/85"
                : "bg-paper text-ink hover:bg-paper/90"
            )}
          >
            {dict.cta.findMine}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher lang={lang} tone={tone} />
          <MobileMenu lang={lang} dict={dict} navItems={navItems} tone={tone} />
        </div>
      </div>
    </header>
  );
}
