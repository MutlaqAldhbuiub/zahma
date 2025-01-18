'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { en } from '@/locales/en'
import { ar } from '@/locales/ar'

type Language = 'en' | 'ar'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start with 'en' as default to match server-side rendering
  const [language, setLanguage] = useState<Language>('en')
  const [translations, setTranslations] = useState<Translations>(en)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // After hydration, check for stored preference or system language
    const storedLang = localStorage.getItem('preferredLanguage') as Language
    const systemLang = navigator.language.startsWith('ar') ? 'ar' : 'en'
    const initialLang = storedLang || systemLang
    
    setLanguage(initialLang)
    setTranslations(initialLang === 'en' ? en : ar)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('preferredLanguage', language)
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
      document.body.style.fontFamily = language === 'ar' ? "'Almarai', sans-serif" : 'inherit'
    }
  }, [language, isLoaded])

  const t = (key: string): string => {
    const keys = key.split('.')
    let result: any = translations
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key
      }
    }
    return typeof result === 'string' ? result : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

