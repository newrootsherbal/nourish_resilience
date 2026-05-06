import type { Metadata } from 'next'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nourishresilience.ca'),
  title: 'Nourish Resilience - Clinically Informed, Whole-food supplement for Women in Recovery',
  description: 'Nourish Resilience is a clinically informed, Whole-food supplement designed to support women in their recovery journey after serious illness, including breast cancer. This functional nutrition formula combines bioavailable proteins, powerful antioxidants, adaptogenic medicinal mushrooms, fermented botanicals, and gut-supportive prebiotics.',
  generator: 'Vitazan Professional',
  keywords: [
    'Nourish Resilience',
    'recovery',
    'Whole-food supplement',
    'breast cancer',
    'functional nutrition',
    'clinically informed',
    'healthy living',
    'wellness'
  ],
  icons: {
    icon: '/favicon.jpg',
  },
  openGraph: {
    title: 'Nourish Resilience - Clinically Informed, Whole-food supplement for Women in Recovery',
    description: 'Nourish Resilience is a clinically informed, Whole-food supplement designed to support women in their recovery journey after serious illness, including breast cancer.',
    images: [
      {
        url: '/3173-Nourish-Resilience-476g.png',
        alt: 'An image representing the Nourish Resilience brand',
      },
    ],
    url: 'https://nourishresilience.ca',
    type: 'website',
    siteName: 'Nourish Resilience',
  },
  twitter: {
    title: 'Nourish Resilience - Clinically Informed, Whole-food supplement for Women in Recovery',
    description: 'Nourish Resilience is a clinically informed, Whole-food supplement designed to support women in their recovery journey after serious illness, including breast cancer.',
    images: [
      {
        url: '/3173-Nourish-Resilience-476g.png',
        alt: 'An image representing the Nourish Resilience brand',
      },
    ],
    card: 'summary_large_image',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
