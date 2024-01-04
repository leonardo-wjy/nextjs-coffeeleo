import siteConfig from '../../site-config';
import Layout from '../components/layout';
import '../styles/main.scss';
import Head from 'next/head';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.tagline,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.tagline,
    url: siteConfig.url,
    // images: `${siteConfig.url}/og-image.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.tagline,
    url: siteConfig.url,
    // images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: new URL(siteConfig.url),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: './favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags as needed for OpenGraph, Twitter, etc. */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        {/* Add other OpenGraph meta tags as needed */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:url" content={metadata.twitter.url} />
        {/* Add other Twitter meta tags as needed */}
        <link rel="canonical" href={metadata.alternates.canonical} />
        {/* Add other meta tags, links, and icons as needed */}
        <meta name="viewport" content={`width=${viewport.width}, initial-scale=${viewport.initialScale}`} />
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
