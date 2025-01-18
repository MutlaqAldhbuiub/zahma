'use client'

import { useLanguage } from '../contexts/LanguageContext'
import Link from 'next/link'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import { PatternBackground } from './ui/pattern-background'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className="relative bg-muted/50 border-t">
      <PatternBackground />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className={`text-${language === 'en' ? 'left' : 'right'}`}>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'About Zahma O La' : 'عن زحمة أو لا'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'Your trusted companion for real-time traffic updates on King Fahd Causeway.'
                : 'رفيقك الموثوق للحصول على تحديثات حركة المرور في الوقت الفعلي على جسر الملك فهد.'}
            </p>
          </div>
          <div className={`text-${language === 'en' ? 'left' : 'right'}`}>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  {language === 'en' ? 'Home' : 'الرئيسية'}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  {language === 'en' ? 'Features' : 'المميزات'}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {language === 'en' ? 'Contact' : 'اتصل بنا'}
                </Link>
              </li>
            </ul>
          </div>
          <div className={`text-${language === 'en' ? 'left' : 'right'}`}>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Connect With Us' : 'تواصل معنا'}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/zahmaola_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com/zahmaola_?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/company/zahma-o-la/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="mb-2">
            {language === 'en'
              ? 'Operated by Promotion Efficiency'
              : 'تشغيل بواسطة Promotion Efficiency'}
          </p>
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

