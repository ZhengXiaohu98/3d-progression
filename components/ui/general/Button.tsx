"use client"
import React, { ButtonHTMLAttributes, FC, useState, useEffect } from 'react';
import { cn } from '@/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: number;
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  buttonStyle = 0,
  children,
  className = '',
  ...props
}) => {
  const [hoverState, setHoverState] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, opacity: number }>>([]);

  // Particle effect
  useEffect(() => {
    if (buttonStyle === 4 && hoverState) {
      const interval = setInterval(() => {
        setParticles(prev => {
          const newParticles = [...prev];

          // Add new particles
          if (newParticles.length < 50) {
            newParticles.push({
              id: Date.now(),
              x: Math.random() * 100,
              y: Math.random() * 100,
              size: Math.random() * 1.5 + 0.5,
              opacity: 1
            });
          }

          // Update existing particles
          return newParticles
            .map(p => ({
              ...p,
              y: p.y - Math.random() * 0.5 - 0.5,
              opacity: p.opacity - 0.03
            }))
            .filter(p => p.opacity > 0);
        });
      }, 50);

      return () => clearInterval(interval);
    } else if (buttonStyle === 4 && !hoverState) {
      // Clear all particles when mouse leaves
      setParticles([]);
    }
  }, [buttonStyle, hoverState]);

  // Mouse position tracking for glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonStyle === 6) {
      const rect = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    } else if (buttonStyle === 3) {
      // Track mouse position for gradient border effect
      const rect = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  const buttonStyles = [
    // 0: Basic style
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc transition-all duration-300 dark:hover:bg-gray-dark/50 hover:bg-accent-white/50",

    // 1: Underline effect
    "relative px-4 py-2 rounded-md border-0 overflow-hidden transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:bg-current after:transition-all after:duration-300 after:w-full",

    // 2: Shadow spread
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]",

    // 3: Gradient background with mouse tracking
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-transparent before:content-['']",

    // 4: Particle effect
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc transition-all duration-300 overflow-hidden",

    // 5: Pulse effect
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc transition-all duration-300 hover:animate-pulse",

    // 6: Glow follow
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc transition-all duration-300 overflow-hidden",

    // 7: Background spread
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:bg-current before:opacity-0 before:scale-0 hover:before:scale-100 hover:before:opacity-5 before:transition-all before:duration-300 before:content-['']",

    // 8: 3D press effect
    "relative px-4 py-2 rounded-md border dark:border-accent-300 border-accent-ccc transition-all duration-300 hover:translate-y-0.5 hover:shadow-inner"
  ];

  return (
    <button
      className={cn(
        "cursor-pointer relative z-10",
        buttonStyles[buttonStyle % buttonStyles.length],
        className
      )}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Particle effect */}
      {buttonStyle === 4 && hoverState && particles.map(p => (
        <span
          key={p.id}
          className="absolute bg-current rounded-full pointer-events-none shadow-[0_0_3px_currentColor]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity
          }}
        />
      ))}

      {/* Glow follow effect */}
      {buttonStyle === 6 && hoverState && (
        <span
          className="absolute w-20 h-20 rounded-full bg-current opacity-10 pointer-events-none transition-transform duration-100 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`
          }}
        />
      )}

      {/* Gradient border with mouse tracking */}
      {buttonStyle === 3 && hoverState && (
        <span
          className="absolute inset-0 rounded-md border border-transparent pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, currentColor 0%, transparent 70%)`,
            opacity: 0.3,
            mixBlendMode: 'overlay'
          }}
        />
      )}

      {children}
    </button>
  );
};