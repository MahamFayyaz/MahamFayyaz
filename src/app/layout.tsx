import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import Header from './Essentials/Header'
const inter = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maham Fayyaz',
  description: 'the portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
     <main className='p-5 m-15'> <Header/>
      {children}</main></body>
  </html>
  )
}
