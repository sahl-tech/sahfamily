"use client";

import { useLang } from "@/i18n";
import { hero } from "@/content";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-12 sm:pt-16">
      {/* decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sunny/30 blur-3xl" />
        <div className="absolute -right-20 top-40 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <span className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold text-ink/70 shadow-sm ring-1 ring-ink/10">
          {t(hero.badge)}
        </span>

        <h1 className="font-display mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
          {t(hero.title1)}
          <br />
          <span className="bg-gradient-to-r from-coral via-sunny to-teal bg-clip-text text-transparent">
            {t(hero.title2)}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
          {t(hero.subtitle)}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#belajar"
            className="rounded-full bg-coral px-6 py-3 font-bold text-white shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 hover:bg-coral/90"
          >
            {t(hero.ctaPrimary)} 🚀
          </a>
          <a
            href="#travel"
            className="rounded-full bg-white px-6 py-3 font-bold text-ink shadow-md ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:ring-teal"
          >
            {t(hero.ctaSecondary)} ✈️
          </a>
        </div>

        {/* family members */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {hero.members.map((m) => (
            <div
              key={m.name}
              className="rounded-blob bg-white p-5 shadow-md ring-1 ring-ink/5 transition hover:-translate-y-1"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream text-4xl">
                {m.emoji}
              </div>
              <p className="font-display mt-3 font-bold text-ink">{m.name}</p>
              <p className="text-xs text-ink/50">{t(m.role)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
