"use client";

import { useLang } from "@/i18n";
import { journey } from "@/content";
import Section from "@/components/Section";

export default function Journey() {
  const { t } = useLang();
  return (
    <Section id="perjalanan" emoji="🧭" title={journey.title} subtitle={journey.subtitle}>
      <ol className="relative mx-auto max-w-3xl space-y-8 before:absolute before:bottom-4 before:left-[27px] before:top-4 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-sunny before:via-coral before:to-teal">
        {journey.milestones.map((m) => (
          <li key={m.year} className="relative flex gap-5 pl-0">
            <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-md ring-4 ring-cream">
              {m.emoji}
            </span>
            <div className="flex-1 rounded-blob bg-white p-5 shadow-md ring-1 ring-ink/5">
              <p className="font-display text-sm font-bold text-coral">{m.year}</p>
              <h3 className="font-display text-lg font-bold text-ink">{t(m.title)}</h3>
              <p className="mt-1 text-sm text-ink/60">{t(m.desc)}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
