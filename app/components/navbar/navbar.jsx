'use client';

import React, { useState, useEffect } from 'react';
import { almendraSc } from '@/ui/lib/fonts';
import ThemeToggle from '@/ui/theme/theme-toggle';

const Navbar = ({ links }) => {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = null;

    useEffect(() => {
        lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className=" fixed lg:left-0 lg:right-0 z-50">
            <div
                className={`w-screen max-w-[90%] lg:max-w-5xl mx-auto transition-transform duration-300 backdrop-blur-2xl border dark:bg-zinc-950/35 border-white dark:border-slate-700 dark:text-white rounded-2xl  shadow-lg ${
                    almendraSc.className
                } ${isVisible ? 'translate-y-5' : '-translate-y-full'}`}
            >
                <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                    <div className="text-center py-4">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="styled-link text-black px-3 py-2 rounded-md text-2xl font-bold transition-all duration-200"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                    <div className='py-2 px-4 text-center md:text-right'>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
