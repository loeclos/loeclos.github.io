'use client';

import  { useState, useEffect, useRef } from 'react';
import { almendraSc } from '@/ui/lib/fonts';
import ThemeToggle from '@/ui/theme/theme-toggle';

const Navbar = ({ links }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0 });
    const navRef = useRef(null);
    let lastScrollY = null;

    useEffect(() => {
        lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setIsVisible(currentScrollY <= lastScrollY);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHover = (e, link) => {
        if (!navRef.current) return;
        const rect = e.target.getBoundingClientRect();
        setHoverPosition({ left: rect.left - navRef.current.offsetLeft, width: rect.width });
        setHoveredLink(link.id);
    };

    return (
        <nav className="fixed lg:left-0 lg:right-0 z-50">
            <div
                ref={navRef}
                className={`relative w-screen max-w-[90%] lg:max-w-5xl mx-auto transition-transform duration-300 backdrop-blur-md bg-zinc-100/50 dark:bg-zinc-950/35 dark:text-white rounded-2xl shadow-lg ${
                    almendraSc.className
                } ${isVisible ? 'translate-y-5' : '-translate-y-full'}`}
            >
                <div className="relative grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                    <div className="relative text-left py-4 px-3">
                        {/* Hover background effect */}
                        <div
                            className="absolute bottom-3 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl transition-all duration-300"
                            style={{
                                left: hoverPosition.left,
                                width: hoverPosition.width,
                                opacity: hoveredLink ? 1 : 0,
                            }}
                        />

                        {/* Links */}
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="relative text-black dark:text-white px-3 py-2 rounded-md text-2xl font-bold transition-all duration-200 z-10"
                                onMouseEnter={(e) => handleHover(e, link)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                    <div className="py-2 px-4 text-center md:text-right">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
