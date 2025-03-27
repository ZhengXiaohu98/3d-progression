"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils';

interface ViewProps {
  children: React.ReactNode;
}

export const View: React.FC<ViewProps> = ({ children }) => {

  const divRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      setPosition({
        left: (viewportWidth / 2) - (rect.width / 2),
        top: (viewportHeight / 2) - (rect.height / 2),
      });
    }
  }, [isOpen]);

  return (
    <>
      <motion.div
        ref={divRef}
        layout
        className={cn("group/view", isOpen ? "z-100 fixed top-1/2 left-1/2" : "relative")}
        style={{
          left: isOpen ? `${position.left}px` : "",
          top: isOpen ? `${position.top}px` : "",
        }}
      >
        {children}
        <div
          className={cn("absolute inset-0 bg-black/10 dark:bg-black/65 z-1 transition ease-in-out cursor-pointer", isOpen ? "opacity-0 pointer-events-none" : "pointer-events-auto opacity-0 group-hover/view:opacity-100")}
          onClick={() => setIsOpen(true)}
        />
      </motion.div>
      <div className={cn("z-99 fixed left-0 top-0 w-full h-full bg-black/80 ease-in-out duration-500", isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} onClick={() => { setIsOpen(false) }} />
      {
        isOpen &&
        <div className="opacity-0 -z-10">
          {children}
        </div>
      }
    </>

  );
};