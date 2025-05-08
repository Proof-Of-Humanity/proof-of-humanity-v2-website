import type { Metadata } from "next";
import { Montserrat, Urbanist } from "next/font/google";
import "./globals.css";

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
  title: "Proof of Humanity",
  description: "Registry of verified humans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
