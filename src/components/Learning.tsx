"use client";

import { useLang } from "@/i18n";
import { learning } from "@/content";
import Section from "@/components/Section";

export default function Learning() {
  const { t } = useLang();
  return (
    <Section id="belajar" emoji="📚" title={learning.title} subtitle={learning.subtitle} alt>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {learning.items.map((item) => (
          <div
            key={item.title.en}
            className="group rounded-blob bg-white p-6 shadow-md ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl text-white shadow-md ${item.color}`}
            >
              {item.emoji}
            </span>
            <h3 className="font-display mt-4 text-lg font-bold text-ink">
              {t(item.title)}
            </h3>
            <p className="mt-1 text-sm text-ink/60">{t(item.desc)}</p>
            <div className="mt-4">
              <div className="h-2.5 overflow-hidden rounded-full bg-cream">
                <div
                  className={`h-full rounded-full ${item.color} transition-all`}
                  style={{ width: `${item.level}%` }}
                />
              </div>
              <p className="mt-1 text-xs font-semibold text-ink/40">{item.level}%</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
