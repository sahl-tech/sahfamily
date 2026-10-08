"use client";

import { useLang } from "@/i18n";
import { moments } from "@/content";
import Section from "@/components/Section";

export default function Moments() {
  const { t } = useLang();
  return (
    <Section id="momen" emoji="📸" title={moments.title} subtitle={moments.subtitle} alt>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {moments.items.map((m) => (
          <figure
            key={m.caption.en}
            className={`group relative flex aspect-[4/3] items-end overflow-hidden rounded-blob bg-gradient-to-br p-4 shadow-md ${m.gradient}`}
          >
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center text-6xl opacity-90 transition group-hover:scale-110"
            >
              {m.emoji}
            </span>
            <figcaption className="relative w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink shadow-sm">
              {t(m.caption)}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-ink/40">{t(moments.note)}</p>
    </Section>
  );
}
