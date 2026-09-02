import type { Metadata } from 'next';
import { Geist, Young_Serif, Geist_Mono, Google_Sans_Code } from 'next/font/google';
import { ExpandableScreen } from '@/components/ui/expandable-screen'
import { ShaderBackground } from '@/components/ui/manu';
import { TooltipProvider } from "@/components/ui/tooltip"

import './globals.css';
import BayerBackground from '@/components/bayer-background/bayer-background';


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

const googleSansCode = Google_Sans_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-google'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark h-full w-full" lang="en">
      <body
        className={`${youngSerif.variable} ${googleSansCode.variable} ${geistSans.variable} ${geistMono.variable} relative bg-[#ffe8ba] h-full antialiased selection:bg-amber-400/90 selection:text-white`}
      >
        <BayerBackground />

        {/* <ShaderBackground className='absolute'/> */}

        <ExpandableScreen
          layoutId="cta-card"
          triggerRadius="100px"
          contentRadius="24px"
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ExpandableScreen>
      </body>
    </html>
  );
}
