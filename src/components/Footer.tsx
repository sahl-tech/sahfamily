"use client";

import { useLang } from "@/i18n";
import { footer } from "@/content";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-8 bg-ink px-4 py-12 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="font-display text-2xl font-bold">🏡 SahFamily</p>
        <p className="max-w-md text-sm text-cream/70">{t(footer.tagline)}</p>

        <a
          href="https://tech.sahfamily.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-sunny px-5 py-2.5 text-sm font-bold text-ink shadow-md transition hover:-translate-y-0.5 hover:bg-sunny/90"
        >
          {t(footer.techLink)}
        </a>

        <p className="mt-4 text-xs text-cream/50">
          © {footer.year} sahfamily.my.id · {t(footer.rights)}
        </p>
      </div>
    </footer>
  );
}
