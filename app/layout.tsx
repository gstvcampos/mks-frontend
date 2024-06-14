import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CartProvider } from '@/contexts/ProductContexts'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS',
  description: 'MKS sitemas marketplace, frontend challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-theme="light">
      <CartProvider>
        <body className={montserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  )
}
