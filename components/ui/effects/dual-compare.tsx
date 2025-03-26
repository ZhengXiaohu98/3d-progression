"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "@/utils";

interface DualCompareProps {
  className?: string;
  children: React.ReactNode;
  resetOnLeave?: boolean;
  autoPlay?: boolean;
  duration?: number;
  delay?: number;
}

export const DualCompare: React.FC<DualCompareProps> = ({
  className,
  children,
  resetOnLeave = true,
  autoPlay = false,
  duration = 2,
  delay = 0.5
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const breakPoint = useMotionValue(50);
  const childArray = React.Children.toArray(children);

  if (childArray.length !== 2) {
    throw new Error("DualCompare only supports 2 elements.");
  }

  const clipPathLeft = useTransform(breakPoint, (value) => `inset(0 ${100 - value}% 0 0)`);
  const clipPathRight = useTransform(breakPoint, (value) => `inset(0 0 0 ${value}%)`);

  useEffect(() => {
    if (!autoPlay || isMouseEntered) return;

    const playAnimation = () => {
      animate(breakPoint, breakPoint.get() === 100 ? 0 : 100, {
        duration: duration,
        ease: "easeInOut",
      });
    };

    playAnimation();
    const interval = setInterval(playAnimation, (duration + delay) * 1000);

    return () => clearInterval(interval);
  }, [autoPlay, isMouseEntered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = (mouseX / rect.width) * 100;
    breakPoint.set(percentage > 50 ? Math.ceil(percentage) : Math.floor(percentage));
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsMouseEntered(true);
    breakPoint.stop();
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (resetOnLeave) {
      animate(breakPoint, 50, {
        duration: 0.3,
        ease: "easeInOut",
      });
    }
  };

  return (
    <div
      className={cn("relative overflow-hidden cursor-col-resize", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          clipPath: clipPathLeft,
        }}
      >
        {childArray[0]}
      </motion.div>
      <motion.div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          clipPath: clipPathRight,
        }}
      >
        {childArray[1]}
      </motion.div>
    </div>
  );
};
