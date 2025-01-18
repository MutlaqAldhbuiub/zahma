'use client'

import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { LanguageLayout } from '@/components/LanguageLayout'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <LanguageLayout>{children}</LanguageLayout>
      </LanguageProvider>
    </ThemeProvider>
  )
}

