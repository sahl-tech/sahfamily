"use client";

import { useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { createContext } from "react";

export type Lang = "id" | "en";

/** Bilingual string pair used throughout content. */
export type L = { id: string; en: string };

/* Tiny external store backed by localStorage, so language choice
 * survives reloads without setState-in-effect (hydration safe). */

let listeners: Array<() => void> = [];

function subscribe(cb: () => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

function getSnapshot(): Lang {
  const saved = window.localStorage.getItem("sahfamily-lang");
  if (saved === "id" || saved === "en") return saved;
  return window.navigator.language.startsWith("en") ? "en" : "id";
}

function getServerSnapshot(): Lang {
  return "id";
}

function saveLang(lang: Lang) {
  window.localStorage.setItem("sahfamily-lang", lang);
  for (const l of listeners) l();
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value: L) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLang = useCallback((next: Lang) => saveLang(next), []);
  const t = useCallback((value: L) => value[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
