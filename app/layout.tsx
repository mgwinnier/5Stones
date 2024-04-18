import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '5 Stones Roofing',
  description: '5 Stones Roofing is roofing company located in Central Texas. Our main goal is to always achieve a high level of customer satifsfaction with the services and products we provide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
