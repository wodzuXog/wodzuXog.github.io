import './globals.css';
import './service-cards.css';
import './portfolio.css';
import { Manrope } from 'next/font/google';
const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-manrope',
});
const url = 'https://filipkepka.pl/';
const title = 'Filip Kępka — Projektant graficzny';
const description =
  'Logo i branding, projekty menu oraz strony internetowe. Projektuję materiały dla firm, które zapewniają efekty.';
export const metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url,
    title,
    description,
    images: [
      {
        url: '/assets/filip-kepka-logo.png',
        width: 800,
        height: 657,
        alt: 'FK — Filip Kępka, projektant graficzny',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/filip-kepka-logo.png'],
  },
};
const structured = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': url + '#autor',
      name: 'Filip Kępka',
      jobTitle: 'Projektant graficzny',
      url,
      email: 'filip.kepka2503@gmail.com',
      telephone: '+48726492987',
    },
    {
      '@type': 'WebSite',
      url,
      name: title,
      author: { '@id': url + '#autor' },
      inLanguage: 'pl',
    },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={manrope.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\u003c') }}
        />
      </body>
    </html>
  );
}
