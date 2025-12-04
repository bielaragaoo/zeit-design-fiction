import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body>
        <Header />
        <main style={{ paddingTop: '70px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

