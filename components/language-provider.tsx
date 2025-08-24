"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, Language } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  t: (key: keyof typeof translations.en) => string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    // Detectar idioma del navegador
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en'
    const detectedLanguage = browserLanguage.startsWith('es') ? 'es' : 'en'
    setLanguage(detectedLanguage)
  }, [])

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key]
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
