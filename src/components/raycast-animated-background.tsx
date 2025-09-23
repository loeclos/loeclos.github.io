'use client';

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const Component = () => {
  const { width, height } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Mark as mounted on client
  }, []);

  return (
    <div className={cn("flex flex-col items-center")}>
      {isMounted && width > 0 && height > 0 ? (
        <UnicornScene
          production={true}
          projectId="cbmTT38A0CcuYxeiyj5H"
          width={width}
          height={height}
        />
      ) : (
        <div
          style={{
            width: "1910px", // Fallback size for server or initial render
            height: "903px",
            background: "#000", // Optional: Add a placeholder background
          }}
        />
      )}
    </div>
  );
};