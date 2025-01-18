'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MessageCircle, Users, Map, Bell, Shield, Settings, Zap } from 'lucide-react'

const features = [
  {
    icon: <Calendar className="h-8 w-8" />,
    titleEn: 'Jadwals',
    titleAr: 'جداول',
    descriptionEn: 'Create and share personalized plans with friends.',
    descriptionAr: 'إنشاء ومشاركة الخطط الشخصية مع الأصدقاء.',
    badgeEn: 'Core Feature',
    badgeAr: 'ميزة أساسية'
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    titleEn: 'Posts & Collections',
    titleAr: 'المنشورات والمجموعات',
    descriptionEn: 'Share updates and organize your favorite content.',
    descriptionAr: 'شارك التحديثات ونظم محتواك المفضل.',
    badgeEn: 'Social',
    badgeAr: 'اجتماعي'
  },
  {
    icon: <Users className="h-8 w-8" />,
    titleEn: 'Friend Management',
    titleAr: 'إدارة الأصدقاء',
    descriptionEn: 'Connect with friends and manage your social circle.',
    descriptionAr: 'تواصل مع الأصدقاء وأدر دائرتك الاجتماعية.',
    badgeEn: 'Community',
    badgeAr: 'مجتمع'
  },
  {
    icon: <Map className="h-8 w-8" />,
    titleEn: 'Timeline',
    titleAr: 'الجدول الزمني',
    descriptionEn: 'Stay updated with a central feed of friends\' activities.',
    descriptionAr: 'ابق على اطلاع من خلال تغذية مركزية لأنشطة الأصدقاء.',
    badgeEn: 'Engagement',
    badgeAr: 'تفاعل'
  },
  {
    icon: <Bell className="h-8 w-8" />,
    titleEn: 'Smart Notifications',
    titleAr: 'إشعارات ذكية',
    descriptionEn: 'Get real-time updates on important app activities.',
    descriptionAr: 'احصل على تحديثات فورية لأهم أنشطة التطبيق.',
    badgeEn: 'User Experience',
    badgeAr: 'تجربة المستخدم'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    titleEn: 'Edah System',
    titleAr: 'نظام العدة',
    descriptionEn: 'Promotes meaningful connections with smart friend management.',
    descriptionAr: 'يعزز الروابط الهادفة مع إدارة ذكية للأصدقاء.',
    badgeEn: 'Unique',
    badgeAr: 'فريد'
  },
  {
    icon: <Settings className="h-8 w-8" />,
    titleEn: 'Admin Dashboard',
    titleAr: 'لوحة تحكم المشرف',
    descriptionEn: 'Comprehensive tool for overseeing all aspects of the app.',
    descriptionAr: 'أداة شاملة للإشراف على جميع جوانب التطبيق.',
    badgeEn: 'Management',
    badgeAr: 'إدارة'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    titleEn: 'Direct Messaging',
    titleAr: 'الرسائل المباشرة',
    descriptionEn: 'Chat privately with friends within the app.',
    descriptionAr: 'دردش بشكل خاص مع الأصدقاء داخل التطبيق.',
    badgeEn: 'Communication',
    badgeAr: 'تواصل'
  }
]

export function FeaturesSection() {
  const { language, t } = useLanguage()

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {t('features.newTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.newSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift hover-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {feature.icon}
                    </div>
                    <Badge variant="secondary">
                      {language === 'en' ? feature.badgeEn : feature.badgeAr}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">
                    {language === 'en' ? feature.titleEn : feature.titleAr}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {language === 'en' ? feature.descriptionEn : feature.descriptionAr}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

