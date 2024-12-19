import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FloatingRegisterButton from '@/components/floating-register-button'
import WhatsAppButton from '@/components/whatsapp-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ROTATHON 2025',
  description: 'Join us for Goa\'s largest Rotaract-organised marathon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        <FloatingRegisterButton />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}

