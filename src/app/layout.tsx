import type { Metadata } from 'next';
import { Geist, Young_Serif, Geist_Mono, Playfair_Display, Google_Sans_Code } from 'next/font/google';
import { ExpandableScreen } from '@/components/ui/expandable-screen'

import './globals.css';

export const metadata: Metadata = {
  title: 'Gleb Zhukov - Developer',
  description: 'Portfolio of Gleb Zhukov - Developer, showcasing projects, skills, and experience in web development and software engineering.',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const youngSerif = Young_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400']
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-playfair'
})

const googleSansCode = Google_Sans_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-google'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${youngSerif.variable} ${googleSansCode.variable} ${playfairDisplay.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white selection:bg-zinc-700 selection:text-zinc-200`}
      >

        <ExpandableScreen
          layoutId="cta-card"
          triggerRadius="100px"
          contentRadius="24px"
        >
          {children}
        </ExpandableScreen>
      </body>
    </html>
  );
}
