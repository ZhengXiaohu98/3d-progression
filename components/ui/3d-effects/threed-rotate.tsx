"use client";
import React, { useRef } from "react";

interface ThreeDRotateProps {
  children: React.ReactNode;
  xAngle?: number;
  yAngle?: number;
  zAngle?: number;
}

export const ThreeDRotate: React.FC<ThreeDRotateProps> = ({
  children,
  xAngle = 15,
  yAngle = 15,
  zAngle = 10,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (event.clientX - left - width / 2) / 20;
    const y = (event.clientY - top - height / 2) / 20;

    const rotateX = (-y / (height / 2)) * xAngle;
    const rotateY = (x / (width / 2)) * yAngle;

    container.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      rotateZ(${zAngle}deg)
    `;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block transition-transform duration-200"
      >
        {children}
      </div>
    </div>

  );
};

