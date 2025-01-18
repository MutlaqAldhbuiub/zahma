import { Inter, Almarai } from 'next/font/google'
import { Metadata } from 'next'
import { Providers } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const almarai = Almarai({ subsets: ['arabic'], weight: ['300', '400', '700', '800'] })

export const metadata: Metadata = {
  title: 'Zahma O La - Your Fastest Destination for King Fahd Causeway Traffic',
  description: 'Get real-time updates and forecasts for traffic conditions on the King Fahd Causeway between KSA and Bahrain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className} ${almarai.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

