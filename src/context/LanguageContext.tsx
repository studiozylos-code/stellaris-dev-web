"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";

interface LanguageContextType {
  locale: Locale;
  setLocale: (lang: Locale) => void;
  dict: typeof dictionaries["es"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // 1. If user previously selected a language manually, respect that
    const saved = localStorage.getItem("stellaris_lang") as Locale | null;
    if (saved && (saved === "es" || saved === "en")) {
      setLocaleState(saved);
      return;
    }

    // 2. Default is English ("en"). Check if visitor is from a Spanish-speaking browser/region
    if (typeof window !== "undefined" && window.navigator) {
      const userLangs = window.navigator.languages || [window.navigator.language];
      const isSpanishSpeaker = userLangs.some(
        (lang) => lang && lang.toLowerCase().startsWith("es")
      );

      if (isSpanishSpeaker) {
        setLocaleState("es");
      } else {
        setLocaleState("en");
      }
    }
  }, []);

  const setLocale = (lang: Locale) => {
    setLocaleState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("stellaris_lang", lang);
    }
  };

  const dict = dictionaries[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
