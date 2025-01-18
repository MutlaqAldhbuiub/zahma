'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, ArrowLeft, Apple, PlayCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { GeometricShapes } from '@/components/shapes/geometric-shapes'
import { FeaturesSection } from '@/components/FeaturesSection'
import { PatternBackground } from '@/components/ui/pattern-background'

export default function Home() {
  const { language, t } = useLanguage()

  const Arrow = language === 'en' ? ArrowRight : ArrowLeft

  return (
    <AnimatePresence>
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
          {t('accessibility.skipToContent')}
        </a>
        <main id="main-content">
          <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary/10 to-background dark:from-primary/5 dark:to-background">
            <GeometricShapes />
            <PatternBackground />
            
            <div className="container mx-auto px-4 py-20 md:py-32 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-center z-10`}
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {t('hero.title')}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8 text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {t('hero.subtitle')}
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="relative overflow-hidden group"
                  >
                    <a 
                      href="https://apps.apple.com/us/app/%D8%B2%D8%AD%D9%85%D8%A9-%D8%A3%D9%88-%D9%84%D8%A7-zahma-o-la/id654895985"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('hero.appStore')}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent group-hover:translate-x-full transition-transform duration-300" />
                      <Apple className="mr-2 h-5 w-5" aria-hidden="true" />
                      <span>{t('hero.appStore')}</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="relative overflow-hidden group"
                  >
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.zahmaola.zahma"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('hero.googlePlay')}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent group-hover:translate-x-full transition-transform duration-300" />
                      <PlayCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                      <span>{t('hero.googlePlay')}</span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <FeaturesSection />

          <section id="contact" className="relative py-20 md:py-32">
            <GeometricShapes />
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('contact.title')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('contact.subtitle')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="relative overflow-hidden">
                  <PatternBackground />
                  <CardContent className="p-6 md:p-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="space-y-4 mb-8">
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">+966 59 555 4477</p>
                            </div>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Contact@zahmaola.com</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                      <form className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <Input 
                            placeholder={t('contact.form.name')}
                            className="bg-background"
                            aria-label={t('contact.form.name')}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <Input 
                            placeholder={t('contact.form.email')}
                            type="email"
                            className="bg-background"
                            aria-label={t('contact.form.email')}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <Textarea 
                            placeholder={t('contact.form.message')}
                            rows={4}
                            className="bg-background"
                            aria-label={t('contact.form.message')}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <Button type="submit" className="w-full group">
                            {t('contact.form.send')}
                            <Arrow className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </Button>
                        </motion.div>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  )
}

