import { ArrowUpRightIcon } from "lucide-react";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'
import Link from 'next/link';
import ProjectsCarousel from '@/components/projects/projects-carousel';

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="relative h-full w-full z-0"
      >
        <div className="relative z-10 min-h-screen h-full w-full lg:py-0 md:py-0">
          <div className='flex min-h-screen h-full justify-center items-center'>
            <div className='bg-[#776547] inset-shadow-[0_0px_5px] shadow-[#c5a98e] px-2'>
              <div className='bg-taupe-400  px-0.5'>
                <div className="flex flex-col gap-6 min-h-screen h-full w-full max-w-4xl mx-auto px-10 lg:px-20 py-10 items-start bg-black">
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
                        <Link href={"https://github.com/loeclos/slop"}>
                          Slop
                        </Link>
                        {" "}- A simple LISP written out in C lang.
                      </li>
                      <li>
                        <Link href={"https://github.com/terriblethinking/cli"}>
                          AI CLI
                        </Link>
                        {" "}- My own agentic harness, based off my{" "}
                        <Link href={"https://github.com/terriblethinking/engine"}>
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
                        <Link href={"https://github.com/terriblethinking/engine"}>
                          engine
                        </Link>
                        {" "}- A minimalistic agentic architecture, made easy for easy integration.
                      </li>
                      <li>
                        <Link href={"https://github.com/loeclos/.dotfiles"}>
                          .dotfiles
                        </Link>
                        {" "}- My extensive nixos setup.
                      </li>
                      <li>
                        <Link href={"https://github.com/loeclos/forge"}>
                          Forge
                        </Link>
                        {" "}- CLI tool for rapid AI-powered development.
                      </li>
                      <li>
                        <Link href={"https://loeclos.vercel.app"}>
                          Portfolio website
                        </Link>
                        {" "}- Personal portfolio.
                      </li>
                      <li>
                        <Link href={"https://github.com/loeclos/linear-algorithm"}>
                          Linear Regression
                        </Link>
                        {" "}- Simple linear regression with gradients.
                      </li>
                      <li>
                        <Link href={"https://minifolio-snowy.vercel.app/"}>
                          Minifolio
                        </Link>
                        {" "}- Minimal portfolio template.
                      </li>
                      <li>
                        <Link href={"https://chessgame-85747.vercel.app/"}>
                          Chess Website
                        </Link>
                        {" "}- Multiplayer chess game.
                      </li>
                      <li>
                        <Link href={"https://github.com/loeclos/aircraft-prediction"}>
                          FGCV Aircraft Prediction
                        </Link>
                        {" "}- ML model for aircraft prediction.
                      </li>
                      <li>
                        <Link href={"https://github.com/loeclos/OlharDevice"}>
                          Olhar Device
                        </Link>
                        {" "}- Ad application for taxis.
                      </li>
                    </ul>
                  </span>

                  <ProjectsCarousel />
                </div>

              </div>

            </div>
          </div>

        </div>

      </section >
    </div>
  );
}
