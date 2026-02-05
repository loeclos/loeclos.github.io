'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';


interface NavbarLink {
    id: string;
    url: string;
    text: string;
}

interface HandleHover {
    (e: React.MouseEvent<HTMLElement>, link: NavbarLink): void;
}

const Navbar = ({ links }: { links: NavbarLink[] }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0 });
    const navRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef<number | null>(null);

    useEffect(() => {
        lastScrollY.current = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setIsVisible(currentScrollY <= (lastScrollY.current ?? 0));
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHover: HandleHover = (e, link) => {
        if (!navRef.current) return;
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setHoverPosition({
            left: rect.left - navRef.current.offsetLeft,
            width: rect.width,
        });
        setHoveredLink(link.id);
    };

    return (
        <nav className="fixed lg:left-0 lg:right-0 z-50">
            <div
                ref={navRef}
                className={`relative w-screen max-w-[90%] lg:max-w-5xl mx-auto transition-transform duration-300 backdrop-blur-md bg-black/20 border border-zinc-950 text-white rounded-2xl shadow-lg ${
                    isVisible ? 'translate-y-5' : '-translate-y-full'
                }`}
            >
                {/* <div className="hidden relative md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2"> */}
                <div className="relative">
                    <div className="relative text-center py-4 px-3">
                        {/* Hover background effect */}
                        <div
                            className="absolute bottom-3 h-8 bg-zinc-900 rounded-lg transition-all duration-300"
                            style={{
                                left: hoverPosition.left,
                                width: hoverPosition.width,
                                opacity: hoveredLink ? 1 : 0,
                            }}
                        />
                        {/* Links */}
                        {links.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="relative text-white px-3 py-2 rounded-md text-md font-sans font-bold transition-all duration-200 z-10"
                                onMouseEnter={(e) => handleHover(e, link)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
