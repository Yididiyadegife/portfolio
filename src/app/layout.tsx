import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Yididiya',
  description: 'A modern portfolio built with Next.js + Tailwind + Framer Motion'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
