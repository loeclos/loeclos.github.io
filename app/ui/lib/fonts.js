import { Almendra_SC, Merriweather, Space_Grotesk, DM_Mono } from 'next/font/google';

export const almendraSc = Almendra_SC({
    variable: '--font-almendra-sc',
    subsets: ['latin'],
    weight: ['400'],
});

export const merriweather = Merriweather({
    variable: '--font-merriweather',
    subsets: ['latin'],
    weight: ['400'],
});

export const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'], 
});


export const dmMono = DM_Mono({
    variable: '--font-dm-mono',
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500'],
});