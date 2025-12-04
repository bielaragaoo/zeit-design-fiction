import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zeit Design Fiction - Mangás',
  description: 'Explore histórias de mangá criativas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

