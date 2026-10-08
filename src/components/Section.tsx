"use client";

import { useLang, type L } from "@/i18n";

export default function Section({
  id,
  emoji,
  title,
  subtitle,
  alt = false,
  children,
}: {
  id: string;
  emoji: string;
  title: L;
  subtitle: L;
  alt?: boolean;
  children: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <section
      id={id}
      className={`scroll-mt-16 px-4 py-16 sm:py-20 ${alt ? "bg-white/60" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sunny/30 text-3xl ring-4 ring-sunny/20">
            {emoji}
          </span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {t(title)}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-ink/60">{t(subtitle)}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
