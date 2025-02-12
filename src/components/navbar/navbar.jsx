import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navLinks = ['Home', 'Projects', 'Contact'];
    const navLink = {
        Home: '/',
        Projects: '/projects',
        Contact: '/contact',
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className="fixed top-0 left-0 m-4 right-0">
            <div
                className={`${
                    isVisible ? 'translate-y-0' : '-translate-y-24'
                } w-full mx-auto max-w-screen-xl p-4 z-50 backdrop-blur-lg border border-slate-700 shadow-xl rounded-xl transition-transform duration-300 bg-black/50`}
            >
                <ul className="flex justify-center">
                    {navLinks.map((link, index) => (
                        <li key={index} className="mx-4">
                            <strong>
                                <Link
                                    to={`${navLink[link]}`}
                                    className="link text-neutral-300 transition-colors duration-300 ease-in-out"
                                >
                                    {link}
                                </Link>
                            </strong>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
