import Link from 'next/link';
import { CraftButton, CraftButtonLabel } from '@/components/ui/craft-button'

interface NavbarLink {
    id: string;
    url: string;
    text: string;
}

export default function Navbar({ links }: { links: NavbarLink[] }) {
    return (
        <nav>
            <div
                className={`relative w-full transition-transform duration-300 backdrop-blur-md bg-black/20 border-b border-zinc-900 text-white shadow-lg`}
            >
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

