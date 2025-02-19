"use client";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useState, useEffect } from 'react';

function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true} storageKey="theme">
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;