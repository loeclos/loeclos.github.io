'use client';

import Link from 'next/link';
import { CraftButton, CraftButtonLabel } from '@/components/ui/craft-button'

interface NavbarLink {
    id: string;
    url: string;
    text: string;
}

const Navbar = ({ links }: { links: NavbarLink[] }) => {
    return (
        <nav>
            <div
                className={`relative w-full transition-transform duration-300 backdrop-blur-md bg-black/20 border-b border-zinc-900 text-white shadow-lg`}
            >
                {/* <div className="hidden relative md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2"> */}
                <div className="relative">
                    <div className="flex flex-row justify-center border-x-1 border-zinc-700">

                        {links.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="relative"
                            >
                                <CraftButton className='rounded-none bg-black font-mono text-white w-full h-full min-h-[50px]'>
                                    <CraftButtonLabel>{link.text.toUpperCase()}</CraftButtonLabel>
                                </CraftButton>

                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
