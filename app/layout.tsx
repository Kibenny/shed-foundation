import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.shedfoundation.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SHED Foundation — Health, Education & Development in Shirati, Tanzania',
    template: '%s | SHED Foundation',
  },
  description:
    'SHED Foundation delivers primary healthcare, education grants and community development to underserved villages in Shirati, Rorya District, Tanzania, since 2006.',
  openGraph: {
    siteName: 'SHED Foundation',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'SHED Foundation — Health, Education & Development in Shirati, Tanzania',
    description:
      'Provider of health, education and development programs to underserved communities in Shirati, Rorya District, Tanzania since 2006.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
