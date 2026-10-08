"use client";

import { useLang } from "@/i18n";
import { travel } from "@/content";
import Section from "@/components/Section";

export default function Travel() {
  const { t } = useLang();
  return (
    <Section id="travel" emoji="✈️" title={travel.title} subtitle={travel.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2">
        {travel.items.map((item) => (
          <article
            key={item.city.en}
            className="rounded-blob bg-white p-6 shadow-md ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-2xl">
                  {item.emoji}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {t(item.city)}
                  </h3>
                  <p className="text-xs font-semibold text-ink/50">{t(item.vibe)}</p>
                </div>
              </div>
              <span
                className="rounded-full bg-sunny/20 px-2.5 py-1 text-xs font-bold text-ink/60"
                title={t(travel.labels.kidFriendly)}
              >
                {t(travel.labels.kidFriendly)} {"⭐".repeat(item.rating)}
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-cream p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-coral">
                💡 {t(travel.labels.tip)}
              </p>
              <p className="mt-1 text-sm text-ink/70">{t(item.tip)}</p>
            </div>

            <p className="mt-3 text-sm font-bold text-teal">
              💰 {t(travel.labels.budget)}: <span className="text-ink">{item.budget}</span>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
