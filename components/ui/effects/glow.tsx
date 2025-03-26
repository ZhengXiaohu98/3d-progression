"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utils";

interface GlowProps {
  color?: string | string[];
  children: React.ReactNode;
  className?: string;
  radius?: number;
  duration?: number;
}

export const Glow: React.FC<GlowProps> = ({
  color = "#fbcfe8",
  children,
  className,
  radius = 1,
  duration = 5
}) => {
  const blurValue = radius * 10;

  const generateGlowStyle = (color: string) => ({
    boxShadow: `0 0 ${blurValue}px ${color}, 0 0 ${blurValue + 10}px ${color}, 0 0 ${blurValue + 20}px ${color}`,
    WebkitBoxShadow: `0 0 ${blurValue}px ${color}, 0 0 ${blurValue + 10}px ${color}, 0 0 ${blurValue + 20}px ${color}`, // for safari
  });

  if (Array.isArray(color)) {
    return (
      <motion.div
        className={cn("inline-block", className)}
        animate={{
          boxShadow: color.map((col) =>
            `0 0 ${blurValue}px ${col}, 0 0 ${blurValue + 10}px ${col}, 0 0 ${blurValue + 20}px ${col}`
          ),
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: duration,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div style={generateGlowStyle(color)} className={cn("inline-block", className)}>
      {children}
    </div>
  );
};
