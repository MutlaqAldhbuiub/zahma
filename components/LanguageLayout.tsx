'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  return (
    <div lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {children}
    </div>
  )
}

