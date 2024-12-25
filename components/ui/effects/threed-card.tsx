"use client";

import React, { useState } from "react";
import { cn } from "@/utils";

interface ThreeDCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({ className, children, hover = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className={cn(
          "transition-all duration-500 ease-in-out w-fit h-fit",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? "translate3d(0px, -16px, 0px) rotateX(51deg) rotateZ(43deg)"
            : "rotateX(51deg) rotateZ(43deg)",
          boxShadow: isHovered
            ? "-1px 0 28px 0 rgba(128, 128, 128, 0.01), 54px 54px 28px -10px rgba(128, 128, 128, 0.15)"
            : "-1px 0 28px 0 rgba(128, 128, 128, 0.01), 28px 28px 28px 0 rgba(128, 128, 128, 0.25)",
        }}
        onMouseEnter={() => setIsHovered(hover && true)}
        onMouseLeave={() => setIsHovered(hover && false)}
      >
        {children}
      </div>
    </div>
  );
};
