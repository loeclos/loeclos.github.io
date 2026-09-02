import Link from "next/link"
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'
import { ArrowUpRightIcon } from "lucide-react";
import AudioPlayer from "./audio-player";

export default function Hero() {
  return (
    <div className="text-white shadow-3xl shadow-zin-900 flex flex-col flex-1 items-center justify-center">
      <div className="lg:max-w-1/2 backdrop-blur-2xl bg-amber-300/4 h-full flex flex-col gap-4 py-10">
        <div className="bg-black mx-2 lg:mx-5 rounded-3xl shadow-lg shadow-amber-800/10 flex flex-col items-center justify-center">
          <div className="p-5">
            <p className='font-serif text-center text-xl'>Gleb Zhukov, at your serivce.</p>

            <br />

            <p className='font-geist text-lg'>
              I like coding (well... duh). I continuosly try to do something new or revise something old. When I am not working on personal projects I am either a) learning some new coding language or b) learning something else or c) just hanging out. Fr go checkout my projects if you don&apos;t believe me.
            </p>

            <br />

            <p className='font-geist text-lg'>
              Ah yes, I also [don&apos;t play videogames, <Link href="https://github.com/loeclos/.dotfiles">use nixos</Link>, read books] btw.
            </p>
          </div>
          <br />
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-1 p-2 w-full">
            <Link href={'https://www.linkedin.com/in/loeclos/'}>
              <CraftButton className="rounded-xl shadow-lg text-md font-sans w-full bg-linear-to-t from-[#458588]  to-[#6ad0c7]  shadow-[inset_0_2px_4px_0_rgba(159, 141, 111,0.35)]">
                <CraftButtonLabel>LinkedIn</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                </CraftButtonIcon>
              </CraftButton>
            </Link>

            <Link href={'https://github.com/loeclos'}>
              <CraftButton className="rounded-xl shadow-lg  text-md font-sans w-full bg-linear-to-t from-[#8a7d6f] to-[#dac4ae] shadow-[inset_0_2px_4px_0_rgba(159, 141, 111,0.35)]">
                <CraftButtonLabel>Github</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                </CraftButtonIcon>
              </CraftButton>
            </Link>

            <Link href={'https://www.youtube.com/@tekknologiia'}>
              <CraftButton className="rounded-xl shadow-lg  text-md font-sans w-full bg-linear-to-t from-[#cc241d] to-[#ff564f] shadow-[inset_0_2px_4px_0_rgba(159, 141, 111,0.35)]">
                <CraftButtonLabel>YouTube</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                </CraftButtonIcon>
              </CraftButton>
            </Link>

            <Link href={'https://www.discord.gg/SQUzp8EDXk'}>
              <CraftButton className="rounded-xl shadow-lg  text-md font-sans w-full bg-linear-to-t from-[#804b7d] to-[#ba87b7] shadow-[inset_0_2px_4px_0_rgba(159, 141, 111,0.35)]">
                <CraftButtonLabel>Discord</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                </CraftButtonIcon>
              </CraftButton>
            </Link>

          </div>
        </div>

        <div className="text-black mx-2 lg:mx-5 rounded-3xl p-2 flex flex-col items-center justify-center">
          <div>
            <span className='font-geist text-lg'>
              <h3 className='font-serif text-2xl my-2'>wip (not working yet):</h3>
              <ul>
                <li>
                  <Link href={"https://github.com/loeclos/slop"}>
                    Slop
                  </Link>
                  {" "}- A simple LISP written out in C lang.
                </li>
              </ul>
            </span>
            <span className='font-geist text-lg'>
              <h3 className='font-serif text-2xl my-2'>wip (alpha kinda version):</h3>
              <ul>
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
              <h3 className='font-serif text-2xl my-2'>wip, stable:</h3>
              <ul>
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
                  <Link href={"https://loeclos.vercel.app"}>
                    Portfolio website
                  </Link>
                  {" "}- Personal portfolio.
                </li>
              </ul>
            </span>
            <span className='font-geist text-lg'>
              <h3 className='font-serif text-2xl my-2'>stuff im finished with:</h3>
              <ul>
                <li>
                  <Link href={"https://github.com/loeclos/forge"}>
                    Forge
                  </Link>
                  {" "}- CLI tool for rapid AI-powered development.
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
          </div>
        </div>

        <div className="bg-black mx-2 lg:mx-5 rounded-3xl shadow-lg shadow-amber-800/10 flex flex-col items-center justify-center">
          <div className="p-5">
            <p className='font-serif text-center text-xl'>ai policy</p>

            <br />

            <p className='font-geist text-lg'>
              When at home, I will tend to use AI only for quick one-time fixes, ideas I just want to iterate on quickly, or testing whatever new harness/ai skill is popular. For personal projects, I choose to write all the code myself. I love coding, so why should I give up that position to a clanker?
            </p>

            <br />

            <p className='font-geist text-lg'>
              When working professionally, I see no reason for why not to use artificial intelligence. It is fast, smart, and a pretty great tool to use. In this kind of situation, if I decide that I do not want to use AI, there could be a chance that I produce less than others, and that makes me the guy who gets fired. Really, my actions here would depend on what the workspace allows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

