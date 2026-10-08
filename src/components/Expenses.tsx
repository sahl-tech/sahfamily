"use client";

import { useLang } from "@/i18n";
import { expenses } from "@/content";
import Section from "@/components/Section";

export default function Expenses() {
  const { t } = useLang();
  return (
    <Section id="biaya" emoji="💰" title={expenses.title} subtitle={expenses.subtitle} alt>
      <div className="grid gap-5 lg:grid-cols-2">
        {/* monthly */}
        <div className="rounded-blob bg-white p-6 shadow-md ring-1 ring-ink/5">
          <h3 className="font-display text-lg font-bold text-ink">
            🗓️ {t(expenses.monthly.title)}
          </h3>
          <ul className="mt-4 divide-y divide-ink/5">
            {expenses.monthly.rows.map((row) => (
              <li
                key={row.label.en}
                className="flex items-center justify-between gap-3 py-2.5 text-sm"
              >
                <span className="text-ink/70">{t(row.label)}</span>
                <span className="font-bold text-ink">{row.amount}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between rounded-2xl bg-coral/10 px-4 py-3 ring-1 ring-coral/20">
            <span className="text-sm font-bold text-coral">
              {t(expenses.monthly.total)}
            </span>
            <span className="font-display text-lg font-bold text-ink">
              {expenses.monthly.totalAmount}
            </span>
          </div>
        </div>

        <div className="grid gap-5">
          {/* annual travel budget */}
          <div className="rounded-blob bg-white p-6 shadow-md ring-1 ring-ink/5">
            <h3 className="font-display text-lg font-bold text-ink">
              ✈️ {t(expenses.annual.title)}
            </h3>
            <ul className="mt-4 space-y-2">
              {expenses.annual.items.map((item) => (
                <li
                  key={item.label.en}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-2.5 text-sm"
                >
                  <span className="text-ink/70">{t(item.label)}</span>
                  <span className="font-bold text-teal">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* saving tips */}
          <div className="rounded-blob bg-white p-6 shadow-md ring-1 ring-ink/5">
            <h3 className="font-display text-lg font-bold text-ink">
              🐷 {t(expenses.tips.title)}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {expenses.tips.items.map((tip) => (
                <li key={tip.text.en} className="flex items-start gap-3 text-sm">
                  <span className="text-lg">{tip.emoji}</span>
                  <span className="text-ink/70">{t(tip.text)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
