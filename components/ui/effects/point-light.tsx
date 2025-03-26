"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utils";

interface PointLightProps {
  angle?: number;
  intensity?: number;
  color?: string;
  className?: string;
}

export const PointLight: React.FC<PointLightProps> = ({
  angle = -30,
  intensity = 1,
  color = "white",
  className,
}) => {
  return (
    <motion.div
      className={cn(`absolute left-0 top-0 h-[150%] blur-xl origin-top-left ease-in-out duration-[2000ms]`, className)}
      style={{
        backgroundImage: `linear-gradient(${color}, transparent)`,
        width: `${intensity * 8}px`,
      }}
      initial={{ rotate: -angle }}
      animate={{ rotate: angle }}
    />
  );
};
