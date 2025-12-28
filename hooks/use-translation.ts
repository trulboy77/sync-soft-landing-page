"use client"

import { create } from "zustand"
import { type Language, translations } from "@/lib/translations"

interface TranslationStore {
  lang: Language
  setLang: (lang: Language) => void
  t: (typeof translations)["en"]
}

export const useTranslation = create<TranslationStore>((set) => ({
  lang: "en",
  setLang: (lang) => set({ lang, t: translations[lang] }),
  t: translations["en"],
}))
