import './globals.css'
import type { Metadata } from 'next'
import { Moderustic } from 'next/font/google'
import {} from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { Navbar } from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme/theme-provider'

const moderustic = Moderustic({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
})

export const metadata: Metadata = {
  title: 'lynk.it',
  description: 'URL shorter app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${moderustic.className} antialiased w-full`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
