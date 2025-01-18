'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'

const Header = () => {
  const { language, setLanguage, t, isLoaded } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#features', label: t('nav.features') },
    { href: '#contact', label: t('nav.contact') },
  ]

  // Don't render until language is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return null
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-32 h-8">
                <Image
                  src="/logo.svg"
                  alt="Zahma O La"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button onClick={toggleLanguage} variant="outline" size="sm" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span suppressHydrationWarning>{language === 'en' ? 'العربية' : 'English'}</span>
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'en' ? 'right' : 'left'}>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button onClick={toggleLanguage} variant="outline" size="sm" className="flex items-center gap-2 justify-start">
                    <Globe className="h-4 w-4" />
                    <span suppressHydrationWarning>{language === 'en' ? 'العربية' : 'English'}</span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

