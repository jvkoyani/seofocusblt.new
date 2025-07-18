import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PowerMySEO - Professional SEO Services & Digital Marketing',
  description: 'Transform your online presence with professional SEO services. Boost rankings, drive traffic, and grow your business with our expert SEO strategies.',
  keywords: 'SEO services, digital marketing, search engine optimization, local SEO, technical SEO, link building',
  authors: [{ name: 'PowerMySEO' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seo.powermyseo.com',
    title: 'PowerMySEO - Professional SEO Services',
    description: 'Transform your online presence with professional SEO services.',
    siteName: 'PowerMySEO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerMySEO - Professional SEO Services',
    description: 'Transform your online presence with professional SEO services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}