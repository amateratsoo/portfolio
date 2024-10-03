import {
  Poppins,
  Space_Grotesk,
  Bricolage_Grotesque,
  Libre_Baskerville,
  Playfair_Display
} from 'next/font/google'
import type { Metadata } from 'next'
import type { Viewport } from 'next'

import './globals.css'
import { Root } from '@/components/_root'
import { themes } from '@/utils/themes'
import { cn } from '@/utils/cn'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque'
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
})

export const metadata: Metadata = {
  title: 'Jossani da Cruz',
  description: 'my little corner on the web',
  keywords: [
    'portfolio',
    'frontend',
    'backend',
    'web',
    'dev',
    'developer',
    'web dev',
    'blog',
    'tech',
    'tech blog'
  ]
}

export const viewport: Viewport = {
  themeColor: themes.dark.background.primary
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          `${poppins.variable} ${spaceGrotesk.variable} ${bricolageGrotesque.variable} ${playfairDisplay.variable} font-sans`
        )}
      >
        <Root>{children}</Root>
      </body>
    </html>
  )
}
