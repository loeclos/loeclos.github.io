'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle({ className }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`inline-flex cursor-pointer h-12 w-full md:w-12 items-center justify-center rounded-2xl ${theme === 'light' ? 'bg-zinc-600/35' : 'bg-zinc-700/35'} px-3 font-medium text-neutral-50 transition active:scale-110 ${className}`}
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
                console.log(theme);
            }}
        >
            {theme === 'light' ? <Moon /> : <Sun />}
        </button>
    );
}

export default ThemeToggle;
