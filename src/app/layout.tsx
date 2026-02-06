import type { Metadata } from 'next';
import { Geist, Geist_Mono, } from 'next/font/google';
import { DM_Sans, DM_Mono, IBM_Plex_Mono, Young_Serif, Playfair_Display, } from 'next/font/google';
import { ExpandableScreen } from '@/components/ui/expandable-screen'
import './globals.css';
import './embla.css';

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


const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-dm-mono',
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-ibm-plex-mono',
});


const youngSerif = Young_Serif({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-serif'
})

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-playfair'
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="dark" lang="en">
            <body
                className={`${youngSerif.variable} ${playfairDisplay.variable} ${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${dmMono.variable} ${ibmPlexMono.variable} antialiased bg-black`}
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
