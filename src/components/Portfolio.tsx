"use client";

import { useLang } from "@/i18n";
import { portfolio } from "@/content";
import Section from "@/components/Section";

export default function Portfolio() {
  const { t } = useLang();
  return (
    <Section
      id="portofolio"
      emoji="🏆"
      title={portfolio.title}
      subtitle={portfolio.subtitle}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.items.map((item) => (
          <article
            key={item.title.en}
            className="overflow-hidden rounded-blob bg-white shadow-md ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            {/* placeholder "artwork" — ganti dengan foto/gambar karya asli */}
            <div
              className={`flex h-36 items-center justify-center bg-gradient-to-br text-6xl ${item.gradient}`}
            >
              <span className="drop-shadow-md">{item.emoji}</span>
            </div>
            <div className="p-5">
              <span className="inline-block rounded-full bg-cream px-2.5 py-0.5 text-xs font-bold text-ink/50">
                {item.year}
              </span>
              <h3 className="font-display mt-2 text-lg font-bold text-ink">
                {t(item.title)}
              </h3>
              <p className="mt-1 text-sm text-ink/60">{t(item.desc)}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
