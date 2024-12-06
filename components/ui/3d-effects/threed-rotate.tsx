"use client";
import React, { useRef } from "react";

interface ThreeDRotateProps {
  children: React.ReactNode;
  maxXAngle?: number;
  maxYAngle?: number;
}

export const ThreeDRotate: React.FC<ThreeDRotateProps> = ({
  children,
  maxXAngle = 10,
  maxYAngle = 10,
  
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (event.clientX - left - width / 2);
    const y = (event.clientY - top - height / 2);

    const rotateX = (-y / (height / 2)) * maxXAngle;
    const rotateY = (x / (width / 2)) * maxYAngle;

    container.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-fit">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-200 ease-linear"
      >
        {children}
      </div>
    </div>

  );
};

