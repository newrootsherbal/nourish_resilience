import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nourish Resilience - Clinically Informed, Organic Vegan Protein Supplement for Women in Recovery',
  description: 'Nourish Resilience is a clinically informed, organic vegan protein supplement designed to support women in their recovery journey after serious illness, including breast cancer. This functional nutrition formula combines bioavailable proteins, powerful antioxidants, adaptogenic medicinal mushrooms, fermented botanicals, and gut-supportive prebiotics.',
  generator: 'Vitazan Professional',
  keywords: [
    'Nourish Resilience',
    'recovery',
    'organic vegan protein supplement',
    'breast cancer',
    'functional nutrition',
    'clinically informed',
    'healthy living',
    'wellness'
  ],
  icons: {
    icon: '/favicon.jpg', // Path relative to the public directory
  },
  openGraph: {
    title: 'Nourish Resilience - Clinically Informed, Organic Vegan Protein Supplement for Women in Recovery',
    description: 'Nourish Resilience is a clinically informed, organic vegan protein supplement designed to support women in their recovery journey after serious illness, including breast cancer.',
    images: [
      {
        url: '/3173-Nourish-Resilience-476g.png', // Use actual image path from public folder
        alt: 'An image representing the Nourish Resilience brand',
      },
    ],
    url: 'https://nourishresilience.ca',
    type: 'website',
    siteName: 'Nourish Resilience',
  },
  twitter: {
    title: 'Nourish Resilience - Clinically Informed, Organic Vegan Protein Supplement for Women in Recovery',
    description: 'Nourish Resilience is a clinically informed, organic vegan protein supplement designed to support women in their recovery journey after serious illness, including breast cancer.',
    images: [
      {
        url: '/3173-Nourish-Resilience-476g.png',
        alt: 'An image representing the Nourish Resilience brand',
      },
    ],
    card: 'summary_large_image',
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
