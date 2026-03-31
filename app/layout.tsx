import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import GoodGoodMenu from '@/components/GoodGoodMenu'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
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
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body>
        <GoodGoodMenu />
        {children}
      </body>
    </html>
  )
}
