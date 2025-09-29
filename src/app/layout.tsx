import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { DM_Sans, DM_Mono, IBM_Plex_Mono } from 'next/font/google';
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


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${dmMono.variable} ${ibmPlexMono.variable} antialiased bg-black`}
            >
                
                {children}
            </body>
        </html>
    );
}
