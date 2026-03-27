import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import GoodGoodMenu from '@/components/GoodGoodMenu'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne-var',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GoodGood West End',
  description:
    'Café + deli in West End, Brisbane. Bold flavours, great vibes, better coffee.',
  openGraph: {
    title: 'GoodGood West End',
    description: 'Bold flavours, great vibes, better coffee.',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <GoodGoodMenu />
        {children}
      </body>
    </html>
  )
}
