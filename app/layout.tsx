import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nourish Resilience ',
  description: 'Created By Saloni',
  generator: 'saloni',
  icons: {
    icon: '/favicon.jpg', // Path relative to the public directory
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
