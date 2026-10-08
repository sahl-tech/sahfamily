"use client";

import { useLang } from "@/i18n";
import { struggles } from "@/content";
import Section from "@/components/Section";

export default function Struggles() {
  const { t } = useLang();
  return (
    <Section
      id="perjuangan"
      emoji="💪"
      title={struggles.title}
      subtitle={struggles.subtitle}
      alt
    >
      <div className="grid gap-5 md:grid-cols-2">
        {struggles.items.map((item) => (
          <div
            key={item.title.en}
            className="rounded-blob bg-white p-6 shadow-md ring-1 ring-ink/5"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-display text-lg font-bold text-ink">
                {t(item.title)}
              </h3>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-coral/10 p-4 ring-1 ring-coral/20">
                <p className="text-xs font-bold uppercase tracking-wide text-coral">
                  {t(struggles.labels.struggle)}
                </p>
                <p className="mt-1 text-sm text-ink/70">{t(item.struggle)}</p>
              </div>
              <div className="rounded-2xl bg-teal/10 p-4 ring-1 ring-teal/20">
                <p className="text-xs font-bold uppercase tracking-wide text-teal">
                  {t(struggles.labels.growth)}
                </p>
                <p className="mt-1 text-sm text-ink/70">{t(item.growth)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
