"use client";

import { useState } from "react";
import { useLang, type Lang } from "@/i18n";
import { ui } from "@/content";

function LangToggle() {
  const { lang, setLang } = useLang();
  const langs: Lang[] = ["id", "en"];
  return (
    <div className="flex items-center gap-1 rounded-full bg-white p-1 shadow-sm ring-1 ring-ink/10">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 text-sm font-bold uppercase transition ${
            lang === l ? "bg-coral text-white" : "text-ink/60 hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="font-display text-xl font-bold text-coral">
          🏡 {ui.brand}
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {ui.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/70 transition hover:text-coral"
            >
              {t(item.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={t(ui.menu)}
            aria-expanded={open}
            className="rounded-full bg-white p-2 shadow-sm ring-1 ring-ink/10 lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-4 pb-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2 pt-3">
            {ui.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-ink/80 shadow-sm ring-1 ring-ink/5"
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
