'use client';

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from '@/components/ui/card';
import ProjectInfo from "@/components/projects/project-info";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"
import { Badge } from "../ui/badge"
import {
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowUpRightIcon } from "lucide-react";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'
import {
  Button
} from '@/components/ui/button';
import { CustomButton } from '@/components/ui/custom-button';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import GetProjects from '@/hooks/getProjects';
import { ProjectsResponse } from '@/types/projects';

export default function Hero() {
  const { request } = GetProjects();
  const [projects, setProjects] = useState<ProjectsResponse>([]);
  const [selectedId, setSelectedID] = useState<string | null>(null);

  useEffect(() => {
    setProjects(request());
  }, [request]);

  return (
    <section
      id="home"
      className="relative h-full w-full z-0"
    >
      <div className="relative z-10 min-h-screen h-full w-full lg:py-0 md:py-0">
        <div className='flex min-h-screen h-full justify-center items-center'>
          <div className='bg-[#776547] inset-shadow-[0_0px_5px] shadow-[#c5a98e] px-2'>
            <div className='bg-taupe-400  px-0.5'>
              <div className="flex flex-col gap-6 min-h-screen h-full w-full max-w-4xl mx-auto px-15 lg:px-20 py-10 items-start bg-black">
                <h1 className='text-5xl font-serif'>hello!</h1>
                <p className='font-geist text-lg'>Gleb Zhukov, at your serivce.</p>
                <div className="flex flex-col md:flex-row gap-2">
                  <Link href={'https://www.linkedin.com/in/loeclos/'}>
                    <CraftButton className="rounded-md text-md font-sans bg-[#458588]">
                      <CraftButtonLabel>LinkedIn</CraftButtonLabel>
                      <CraftButtonIcon>
                        <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                      </CraftButtonIcon>
                    </CraftButton>
                  </Link>
                  <Link href={'https://github.com/loeclos'}>
                    <CraftButton className="rounded-md text-md font-sans bg-[#b3a18f]">
                      <CraftButtonLabel>Github</CraftButtonLabel>
                      <CraftButtonIcon>
                        <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                      </CraftButtonIcon>
                    </CraftButton>
                  </Link>
                  <Link href={'https://www.youtube.com/@tekknologiia'}>
                    <CraftButton className="rounded-md text-md font-sans bg-[#cc241d]">
                      <CraftButtonLabel>YouTube</CraftButtonLabel>
                      <CraftButtonIcon>
                        <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                      </CraftButtonIcon>
                    </CraftButton>
                  </Link>
                  <Link href={'https://www.discord.gg/SQUzp8EDXk'}>
                    <CraftButton className="rounded-md text-md font-sans bg-[#b16286]">
                      <CraftButtonLabel>Discord</CraftButtonLabel>
                      <CraftButtonIcon>
                        <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                      </CraftButtonIcon>
                    </CraftButton>
                  </Link>
                </div>
                <p className='font-geist text-lg'>
                  I like coding (duh or I wouldn&apos;t be writing this). I continuosly try to do something new or revise something old. When I am not working on personal projects I am either a) learning some new coding language or b) learning something else or c) just hanging out. Fr go checkout my projects if you don&apos;t believe me.
                </p>
                <p className='font-geist text-lg'>
                  Ah yes, I also [don&apos;t play videogames, use nixos, read books] btw.
                </p>
                <span className='font-geist text-lg'>
                  <span className='font-serif text-2xl my-2'>work in progress:</span>
                  <ul className='list-disc'>
                    <li>
                      <Link href={"https://github.com/loeclos/slop"} className='underline '>
                        Slop
                      </Link>
                      {" "}- A simple LISP written out in C lang.
                    </li>
                    <li>
                      <Link href={"https://github.com/terriblethinking/cli"} className='underline '>
                        AI CLI
                      </Link>
                      {" "}- My own agentic harness, based off my{" "}
                      <Link href={"https://github.com/terriblethinking/engine"} className='underline '>
                        agentic engine
                      </Link>
                      .
                    </li>
                  </ul>
                </span>
                <span className='font-geist text-lg'>
                  <h3 className='font-serif text-2xl my-2'>showcase:</h3>
                  <ul className='list-disc'>
                    <li>
                      <Link href={"https://github.com/terriblethinking/engine"} className='underline '>
                        engine
                      </Link>
                      {" "}- A minimalistic agentic architecture, made easy for easy integration.
                    </li>
                    <li>
                      <Link href={"https://github.com/loeclos/forge"} className='underline '>
                        Forge
                      </Link>
                      {" "}- CLI tool for rapid AI-powered development.
                    </li>
                    <li>
                      <Link href={"https://loeclos.vercel.app"} className='underline '>
                        Portfolio website
                      </Link>
                      {" "}- Personal portfolio.
                    </li>
                    <li>
                      <Link href={"https://github.com/loeclos/linear-algorithm"} className='underline '>
                        Linear Regression
                      </Link>
                      {" "}- Simple linear regression with gradients.
                    </li>
                    <li>
                      <Link href={"https://minifolio-snowy.vercel.app/"} className='underline '>
                        Minifolio
                      </Link>
                      {" "}- Minimal portfolio template.
                    </li>
                    <li>
                      <Link href={"https://chessgame-85747.vercel.app/"} className='underline '>
                        Chess Website
                      </Link>
                      {" "}- Multiplayer chess game.
                    </li>
                    <li>
                      <Link href={"https://github.com/loeclos/aircraft-prediction"} className='underline '>
                        FGCV Aircraft Prediction
                      </Link>
                      {" "}- ML model for aircraft prediction.
                    </li>
                    <li>
                      <Link href={"https://github.com/loeclos/OlharDevice"} className='underline '>
                        Olhar Device
                      </Link>
                      {" "}- Ad application for taxis.
                    </li>
                  </ul>
                </span>

                <Carousel className="w-full max-w-[12rem] sm:max-w-xs self-center">
                  <CarouselContent>
                    {projects.map((card, index) => (
                      <CarouselItem className="w-full" key={index}>
                        <ExpandableScreenTrigger key={card.title} className="cursor-pointer w-full">
                          <button className="h-full w-full" onClick={() => setSelectedID(card.id)}>
                            <MinimalCard className="relative">
                              <MinimalCardImage src={card.thumbnailUrl} alt={card.description} />
                              <div className="w-full absolute top-0 right-0 text-left py-1 px-3">
                                <MinimalCardTitle className="flex justify-between">
                                  <span className="font-mono text-xs  border-1 border-black text-black px-2 py-1 h-8/12 flex justify-center items-center rounded-md backdrop-blur-md bg-transparent bg-white/40">{card.title.toUpperCase()}</span>
                                  <Badge className="rounded-sm py-[1px] border-1 border-zinc-700 bg-black text-white font-mono text-xs ">{card.date}</Badge>
                                </MinimalCardTitle>
                                <MinimalCardDescription>
                                </MinimalCardDescription>
                              </div>
                            </MinimalCard>
                          </button>
                        </ExpandableScreenTrigger>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <ExpandableScreenContent className="bg-black border-1 border-zinc-700 z-50 flex justify-center">
                  <ProjectInfo projectId={selectedId} />
                </ExpandableScreenContent>


                {/* <Card className="py-12 px-3 lg:px-15 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-transparent border-none"> */}
                {/*   <CardHeader className="text-5xl font-serif"> */}
                {/*     hello! */}
                {/*   </CardHeader> */}
                {/*   <CardContent className="text-sm font-mono"> */}
                {/*     Gleb Zhukov, at your service. */}
                {/*     <ul className='max-w-md space-y-1 text-body list-disc list-inside'> */}
                {/*       <li>hello</li> */}
                {/*     </ul> */}
                {/**/}
                {/*   </CardContent> */}
                {/*   <CardFooter className="w-full mx-auto text-center"> */}
                {/*     <Link className="h-full w-full" href={'#about'}> */}
                {/*       <Button className="text-sm font-mono w-full"> */}
                {/*         LEARN MORE ABOUT ME {'->'} */}
                {/*       </Button> */}
                {/*     </Link> */}
                {/*   </CardFooter> */}
                {/*     <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-20 md:pb-0"> */}
                {/*       <Card className="py-12 md:px-3 flex flex-col justify-center text-white bg-transparent shadow-none border-none"> */}
                {/*         <CardHeader className="text-2xl"> */}
                {/*           <span className='font-serif'>1. featured works</span> */}
                {/*         </CardHeader> */}
                {/*         <CardContent className="text-sm font-mono min-h-1/2 max-h-1/2"> */}
                {/*           Explore the code, learn about the technologies */}
                {/*           used, and understand the thought process behind */}
                {/*           my design decisions. */}
                {/*         </CardContent> */}
                {/*         <CardFooter className="w-full mx-auto text-center"> */}
                {/*           <Link */}
                {/*             className="h-full w-full" */}
                {/*             href={'#projects'} */}
                {/*           > */}
                {/*             <BlurredButton className="text-sm font-mono w-full"> */}
                {/*               {'--'} PROJECTS {'--'} */}
                {/*             </BlurredButton> */}
                {/*           </Link> */}
                {/*         </CardFooter> */}
                {/*       </Card> */}
                {/*       <Card className="py-12 md:px-3 flex flex-col justify-center text-white bg-transparent shadow-none border-none"> */}
                {/*         <CardHeader className="text-2xl"> */}
                {/*           <span className='font-serif'> */}
                {/*             2. github profile */}
                {/*           </span> */}
                {/*         </CardHeader> */}
                {/*         <CardContent className="text-sm font-mono min-h-1/2 max-h-1/2"> */}
                {/*           Discover the technical foundation that drives my */}
                {/*           work. I possess a strong command of programming */}
                {/*           languages, frameworks, and tools. */}
                {/*         </CardContent> */}
                {/*         <CardFooter className="w-full mx-auto text-center"> */}
                {/*           <Link */}
                {/*             href={'https://github.com/loeclos'} */}
                {/*             target={'_blank'} */}
                {/*             className="w-full" */}
                {/*           > */}
                {/*             <BlurredButton className="text-sm font-mono w-full"> */}
                {/*               {'-- '} GITHUB {' --'} */}
                {/*             </BlurredButton> */}
                {/*           </Link> */}
                {/*         </CardFooter> */}
                {/*       </Card> */}
                {/**/}
                {/*       <Card className="py-12  flex flex-col justify-center text-white bg-transparent shadow-none border-none w-full"> */}
                {/*         <CardContent className="text-sm font-mono min-h-1/2 max-h-1/2"> */}
                {/*           Another thing worth checking out is <Link href={'/ai'} className='underline hover:text-zinc-400 transition-colors duration-150'>my ai policy</Link>. */}
                {/*         </CardContent> */}
                {/*       </Card> */}
                {/*     </div> */}
                {/* </Card> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
