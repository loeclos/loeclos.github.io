import {
    Card,
    CardFooter,
    CardHeader,
    CardContent,
} from '@/components/ui/card';
import { BlurredButton } from '@/components/ui/blurred-button';
import Link from 'next/link';
import { Component } from '@/components/raycast-animated-background';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full font-mono bg-black z-0">
            {/* Background Component */}
            <div className="absolute inset-0 z-1">
                <Component />
            </div>
            {/* Content Overlay */}
            <div className="relative z-10 h-fit min-h-screen w-full">
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4 max-w-[90%] md:max-w-7xl mx-auto pt-45 md:pt-25 px-4 ">
                    <Card className="py-12 px-3 lg:px-15 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-black/20 backdrop-blur-3xl border-zinc-950">
                        <CardHeader className="text-4xl font-mono">
                            Hello!
                        </CardHeader>
                        <CardContent className="text-lg font-plex-mono">
                            My name is Gleb and I'm a agile developer
                        </CardContent>
                        <CardFooter className="w-full mx-auto text-center">
                            <BlurredButton className="text-lg font-mono w-full">
                                Jump to my skills {'->'}
                            </BlurredButton>
                        </CardFooter>
                    </Card>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="py-12 px-3 lg:px-15 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-black/20 backdrop-blur-3xl border-zinc-950">
                            <p className="inline-flex items-center justify-center rounded-md bg-yellow-400/10 mx-5 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20 text-center mb-5 cursor-pointer">
                                Code
                            </p>
                            <CardHeader className="text-2xl font-mono">
                                Featured Works
                            </CardHeader>
                            <CardContent className='font-plex-mono'>
                                Explore the code, learn about the technologies
                                used, and understand the thought process behind
                                my design decisions.
                            </CardContent>
                            <CardFooter className="w-full mx-auto text-center">
                                <Link className='h-full w-full' href={"#projects"}>
                                <BlurredButton className="text-lg font-mono w-full">
                                    {'--'} Projects {'--'}
                                </BlurredButton>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card className="py-12 px-3 lg:px-15 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-black/20 backdrop-blur-3xl border-zinc-950">
                            <p className="inline-flex items-center justify-center rounded-md bg-purple-400/10 mx-5 px-2 py-1 text-xs font-medium text-purple-400 inset-ring inset-ring-purple-400/30 text-center mb-5 cursor-pointer">
                                Socials
                            </p>
                            <CardHeader className="text-2xl font-mono">
                                Github Profile
                            </CardHeader>
                            <CardContent className="font-plex-mono">
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
                                    <BlurredButton className="text-lg font-mono w-full">
                                        {'-- '} Github {' --'}
                                    </BlurredButton>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            {/* Fade to black overlay */}
            <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 z-20" style={{background: "linear-gradient(180deg, transparent 0%, #000 100%)"}} />
        </section>
    );
}
