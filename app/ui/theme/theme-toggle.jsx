'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Button from '@/ui/button';

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
        <Button
            variant={`${theme === 'light' ? '' : ''}`} // Leave blank for default
            className={`pl-2 pr-2 ${className}`}
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
                console.log(theme);
            }}
        >
            {theme === 'light' ? <Moon /> : <Sun />}
        </Button>
    );
}

export default ThemeToggle;
