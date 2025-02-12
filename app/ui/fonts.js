import { Geist, Geist_Mono, Almendra_SC, Montserrat, Inter, Grenze_Gotisch, Rubik_Mono_One } from 'next/font/google';

export const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const almendraSc = Almendra_SC({
    variable: '--font-almendra-sc',
    subsets: ['latin'],
    weight: ['400'],
});

export const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const grenzeGotisch = Grenze_Gotisch({
    variable: '--font-grenze-gotisch',
    subsets: ['latin'],
});

export const rubikMonoOne = Rubik_Mono_One({
    variable: '--font-rubik-mono-one',
    subsets: ['latin'],
    weight: ['400'],
});