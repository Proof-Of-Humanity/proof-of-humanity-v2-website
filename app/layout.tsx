import type { Metadata } from "next";
import { Montserrat, Urbanist } from "next/font/google";
import "./globals.css";
import SkipLink from "./components/SkipLink";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['700'],
  variable: "--font-montserrat",
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: "--font-urbanist",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Proof of Humanity - Registry of Verified Humans",
  description: "Join the world's first registry of verified humans. Prove your humanity with decentralized identity verification powered by Kleros arbitration.",
  keywords: ["proof of humanity", "decentralized identity", "human verification", "blockchain", "kleros", "registry", "web3"],
  authors: [{ name: "Kleros", url: "https://kleros.io" }],
  creator: "Kleros",
  publisher: "Kleros",
  metadataBase: new URL('https://v2.proofofhumanity.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Proof of Humanity - Registry of Verified Humans',
    description: 'Join the world\'s first registry of verified humans. Prove your humanity with decentralized identity verification.',
    siteName: 'Proof of Humanity',
    images: [
      {
        url: '/assets/illustrations/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'Proof of Humanity - Registry of Verified Humans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proof of Humanity - Registry of Verified Humans',
    description: 'Join the world\'s first registry of verified humans. Prove your humanity with decentralized identity verification.',
    images: ['/assets/illustrations/hero-illustration.png'],
    creator: '@Kleros_io',
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
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${montserrat.variable} ${urbanist.variable} antialiased focus-within:outline-none`}
      >
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
