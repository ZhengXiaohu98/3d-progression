"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

type FloatProps = {
  children: ReactNode;
  intensityY?: number;
  intensityX?: number;
  speed?: number;
  direction?: "vertical" | "horizontal" | "both";
};

export const Float = ({
  children,
  intensityY = 10,
  intensityX = 5,
  speed = 2.5,
  direction = "vertical",
}: FloatProps) => {
  const animation = {
    y:
      direction === "vertical" || direction === "both"
        ? Array.from({ length: 101 }, (_, i) =>
          Math.sin((i / 100) * 2 * Math.PI) * intensityY
        )
        : 0,
    x:
      direction === "horizontal" || direction === "both"
        ? Array.from({ length: 101 }, (_, i) =>
          Math.cos((i / 100) * 2 * Math.PI) * intensityX
        )
        : 0,
  };

  return (
    <motion.div
      className="inline-block"
      animate={animation}
      transition={{
        duration: 5 / speed,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};