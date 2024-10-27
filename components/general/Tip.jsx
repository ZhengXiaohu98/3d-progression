"use client";
import React, { useState, useEffect } from 'react';

export const PageTip = ({ text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="z-[30] pointer-events-none opacity-0 peer-hover:opacity-100 -translate-y-1.5 peer-hover:translate-y-1 scale-75 peer-hover:scale-100
      origin-top-left transition duration-200 absolute lg:p-3 sm:p-2  rounded-lg bg-orange-base dark:bg-purple-base dark:text-accent-white text-white hyphens-auto 
      tracking-wider font-semibold lg:max-w-96 sm:max-w-80 sm:text-xs lg:text-sm font-playwrite-gbs
      "
      style={{
        top: position.y + 35,
        left: position.x - 15,
      }}
    >
      {text}
      <div className="w-3 h-3 bg-inherit absolute left-3.5 -top-1 rotate-45" />
    </div>
  );
};
