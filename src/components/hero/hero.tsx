import {
    Card,
    CardFooter,
    CardHeader,
    CardContent,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { BlurredButton } from '@/components/ui/blurred-button';
import Link from 'next/link';
import { Component } from '@/components/raycast-animated-background';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full bg-black z-0"
        >

            <div className="min-h-screen w-full bg-black relative">
                {/* Vercel Grid */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Background Component */}
                <div className="absolute inset-0 z-1">
                    {/* Your Content/Components */}
                </div>
                {/* Content Overlay */}
                <div className="relative z-10 h-fit w-full lg:py-0 md:py-0 py-20">
                    <div className='flex min-h-screen justify-center items-center'>
                        <div className="flex gap-6 max-w-[90%] md:max-w-7xl mx-auto justify-center items-center">
                            <Card className="py-12 px-3 lg:px-15 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-transparent border-none">
                                <CardHeader className="text-5xl font-serif">
                                    hello!
                                </CardHeader>
                                <CardContent className="text-sm font-mono">
                                    Gleb Zhukov, at your service. I searched far and wide for a title that would suit me, and I finally came up with &quot;agile developer&quot;
                                </CardContent>
                                <CardFooter className="w-full mx-auto text-center">
                                    <Link className="h-full w-full" href={'#skills'}>
                                        <BlurredButton className="text-sm font-mono w-full">
                                            JUMP TO MY SKILLS {'->'}
                                        </BlurredButton>
                                    </Link>
                                </CardFooter>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-20 md:pb-0">
                                    <Card className="py-12 md:px-3 flex flex-col justify-center text-white bg-transparent shadow-none border-none">
                                        <CardHeader className="text-2xl">
                                            {/* <p className="inline-flex items-center justify-center rounded-md bg-yellow-400/10 mx-5 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20 text-center mb-5 cursor-pointer"> */}
                                            {/*     Code */}
                                            {/* </p> */}
                                            <span className='font-serif'>1. featured works</span>
                                        </CardHeader>
                                        <CardContent className="text-sm font-mono min-h-1/2 max-h-1/2">
                                            Explore the code, learn about the technologies
                                            used, and understand the thought process behind
                                            my design decisions.
                                        </CardContent>
                                        <CardFooter className="w-full mx-auto text-center">
                                            <Link
                                                className="h-full w-full"
                                                href={'#projects'}
                                            >
                                                <BlurredButton className="text-sm font-mono w-full">
                                                    {'--'} PROJECTS {'--'}
                                                </BlurredButton>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                    <Card className="py-12 md:px-3 flex flex-col justify-center text-white bg-transparent shadow-none border-none">
                                        <CardHeader className="text-2xl">
                                            <span className='font-serif'>
                                                2. github profile
                                            </span>
                                        </CardHeader>
                                        <CardContent className="text-sm font-mono min-h-1/2 max-h-1/2">
                                            Discover the technical foundation that drives my
                                            work. I possess a strong command of programming
                                            languages, frameworks, and tools.
                                        </CardContent>
                                        <CardFooter className="w-full mx-auto text-center">
                                            <Link
                                                href={'https://github.com/loeclos'}
                                                target={'_blank'}
                                                className="w-full"
                                            >
                                                <BlurredButton className="text-sm font-mono w-full">
                                                    {'-- '} GITHUB {' --'}
                                                </BlurredButton>
                                            </Link>
                                        </CardFooter>
                                    </Card>

                                    <Card className="py-12  flex flex-col justify-center text-white bg-transparent shadow-none border-none w-full">
                                        <CardContent className="text-sm font-mono min-h-1/2 max-h-1/2">
                                            Other things worth checking out are <Link href={'#'} className='underline hover:text-zinc-400 transition-colors duration-150'>one link</Link> and <Link href={'#'} className='underline hover:text-zinc-400 transition-colors duration-150'>another link</Link>.
                                        </CardContent>
                                    </Card>
                                </div>

                            </Card>
                        </div>

                    </div>
                </div>
                {/* Fade to black overlay */}
                <div
                    className="pointer-events-none absolute left-0 right-0 bottom-0 h-56 z-20"
                    style={{
                        background:
                            'linear-gradient(180deg, transparent 0%, #000 100%)',
                    }}
                />

            </div>
        </section>
    );
}
