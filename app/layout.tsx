import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rumman Ahmed | Business Analyst · Educator · Researcher',
  description: 'Professional portfolio of Rumman Ahmed - Business Analyst, Educator, and Researcher. Expertise in data analytics, automation, and business research.',
  keywords: 'Business Analyst, Data Analytics, Education, Research, Python, R, SPSS',
  authors: [{ name: 'Rumman Ahmed' }],
  openGraph: {
    title: 'Rumman Ahmed | Business Analyst · Educator · Researcher',
    description: 'Dynamic Business Graduate with expertise in data analytics, automation, and research.',
    type: 'website',
    locale: 'en_US',
  },
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

