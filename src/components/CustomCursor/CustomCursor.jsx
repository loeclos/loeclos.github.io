import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update trail positions
      setTrail(prevTrail => {
        const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
        const newTrail = [newPoint, ...prevTrail].slice(0, 10);
        return newTrail;
      });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div className="relative w-full h-screen  cursor-none">
     
      {/* Trail effects */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (1 - index / trail.length) * 0.3,
            transition: 'opacity 0.1s ease-out'
          }}
        >
          <div 
            className="w-16 h-16 border border-white rounded-full"
            style={{
              transform: `scale(${1 - index / trail.length})`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
      ))}

      {/* Outer circle */}
      <div
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <div className={`w-16 h-16 border-2 border-white rounded-full transition-all duration-300 ${
          isHovering ? 'scale-150 opacity-50' : 'scale-100 opacity-100'
        }`} />
      </div>

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
          isHovering ? 'scale-75' : 'scale-100'
        }`} />
      </div>
    </div>
  );
};

export default CustomCursor;