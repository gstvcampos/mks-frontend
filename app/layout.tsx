import { Header } from '@/components/Header'
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
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
