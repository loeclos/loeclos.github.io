import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./ExplodingChicken.css";

export default function ExplodingChicken() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [level, setLevel] = useState(1);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isExploded, setIsExploded] = useState(false);
  const [showLevel, setShowLevel] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isExploded) return;

    const dx = e.clientX - position.x;
    const dy = e.clientY - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < level * 15) {
      const angle = Math.atan2(dy, dx);
      const offsetX = Math.cos(angle) * 50;
      const offsetY = Math.sin(angle) * 50;

      let newX = Math.min(Math.max(position.x - offsetX, 0), windowSize.width - 50);
      let newY = Math.min(Math.max(position.y - offsetY, 0), windowSize.height - 50);

      if ((newX === 0 || newX === windowSize.width - 50) &&
          (newY === 0 || newY === windowSize.height - 50)) {
        const escapeX = newX === 0 ? 100 : windowSize.width - 150;
        const escapeY = newY === 0 ? 100 : windowSize.height - 150;
        newX = escapeX;
        newY = escapeY;
      }

      setPosition({ x: newX, y: newY });
    }
  };

  const handleClick = () => {
    setIsExploded(true);
    setShowLevel(true);
    setTimeout(() => {
      setIsExploded(false);
      setShowLevel(false);
      setPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      setLevel(level + 1);
    }, 1000);
  };

  useEffect(() => {
    if (isVisible) {
      setPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
  }, [isVisible, windowSize]);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="inline-flex justify-center items-center transition-all py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-[#45707a] active:bg-[#395c64] hover:bg-[#304d53] focus:ring-4  focus:ring-[#45707a]"
      >
        {isVisible ? "Hide Game" : "Show Game"}
      </button>
      {isVisible && (
        <div onMouseMove={handleMouseMove} className="w-full overflow-hidden bg-gray-100 z-50">
          {!isExploded && (
            <motion.div
              className="absolute w-12 h-12 bg-yellow-500 rounded-md"
              animate={{ left: position.x, top: position.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ position: "absolute", cursor: "pointer" }}
              onClick={handleClick}
            >
              <div className="absolute w-2 h-2 bg-red-500 rounded-full -top-1 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-4 h-3 bg-red-500 rounded-full -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-2 h-2 bg-red-500 rounded-full -top-1 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-2 h-2 bg-black rounded-full top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-yellow-700 top-1/2 -left-1 transform -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>
          )}

          {isExploded && (
            <div
              className="explosion-container"
              style={{ position: "absolute", top: position.y, left: position.x }}
            >
              <div className="explosive"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          )}
          {showLevel && (
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              style={{ zIndex: 100 }}
            >
              <div className="text-white text-6xl font-bold">
                Level {level}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

