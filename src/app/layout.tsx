import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import Main from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind + Next.js',
}

export default function RootLayout() {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid-cols-app grid min-h-screen">
          <Sidebar />
          <Main />
        </div>
      </body>
    </html>
  )
}
