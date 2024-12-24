"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { cn } from "@/utils";

interface ParticlesProps {
  count?: number;
  colors?: string[];
  speed?: number;
  size?: [number, number];
  className?: string;
}

export const Particles: React.FC<ParticlesProps> = ({ count = 100, colors = ["#c084fc", "#e879f9"], speed = 1, size = [1, 1], className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<{ x: number; y: number; dx: number; dy: number; color: string; radius: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Initialize particles
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * speed,
      dy: (Math.random() - 0.5) * speed,
      color: colors[Math.floor(Math.random() * colors.length)],
      radius: Math.random() * (size[1] - size[0]) + size[0],
    }));
  }, [count, colors, speed, size]);

  useAnimationFrame(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle) => {
      particle.x += particle.dx * (Math.random() * 1.5);
      particle.y += particle.dy * (Math.random() * 1.5);

      // Bounce particles off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.dx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.dy *= -1;

      ctx.shadowBlur = 10;
      ctx.shadowColor = particle.color;

      // Draw particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
    });
  });

  return (
    <motion.canvas ref={canvasRef} className={cn("w-80 h-80 pointer-events-none", className)} />
  );
};
