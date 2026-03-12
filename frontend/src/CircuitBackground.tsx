import React, { useEffect, useState } from 'react';

const CircuitBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. Base dim circuit static pattern */}
      <div className="circuit-bg-base"></div>
      
      {/* 2. Bright neon overlay pattern that is masked by the radial glow of the cursor */}
      <div 
        className="circuit-bg-glow"
        style={{
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 1), transparent 80%)`,
          maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 1), transparent 80%)`,
        }}
      ></div>
      
      {/* 3. Soft ambient light following the cursor, simulating signal glow below the traces */}
      <div 
        className="cursor-glow"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
      ></div>
    </>
  );
};

export default CircuitBackground;
