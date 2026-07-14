import type { Locale } from "@/lib/locale";
import type { Dictionary } from "@/dictionaries/types";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppLink from "./WhatsAppLink";

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  return (
    <footer id="rodape" className="bg-ink px-6 pb-8 pt-16 text-paper md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <Logo lang={lang} tone="light" />
          <p className="mt-4 font-brand text-[0.7rem] tracking-[0.15em] text-paper/60">
            {dict.footer.tagline.toUpperCase()}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-paper/50">
              {dict.footer.collection}
            </h4>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-paper/80">
              <li>
                <a href="#coleccao" className="hover:text-paper">
                  {dict.nav.sun}
                </a>
              </li>
              <li>
                <a href="#coleccao" className="hover:text-paper">
                  {dict.nav.optical}
                </a>
              </li>
              <li>
                <a href="#coleccao" className="hover:text-paper">
                  {dict.nav.sport}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-paper/50">
              {dict.footer.about}
            </h4>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-paper/80">
              <li>
                <a href="#historia" className="hover:text-paper">
                  {dict.nav.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-paper">
                  {dict.footer.shipping}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-paper">
                  {dict.footer.returns}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-paper/50">
              {dict.footer.contact}
            </h4>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-paper/80">
              <li>
                <WhatsAppLink message={dict.whatsapp.general} className="hover:text-paper">
                  {dict.footer.whatsapp}
                </WhatsAppLink>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nuvor.eyewear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper"
                >
                  {dict.footer.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="shrink-0">
          <LanguageSwitcher lang={lang} tone="light" />
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1600px] flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} NUVOR Eyewear. {dict.footer.rights}
        </p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-paper/80">
            {dict.footer.privacy}
          </a>
          <a href="#" className="hover:text-paper/80">
            {dict.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
