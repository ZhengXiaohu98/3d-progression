"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils";

interface ToolTipProps {
  text?: string;
  follow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ToolTip: React.FC<ToolTipProps> = ({ text, follow = false, children, className }) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (follow) {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [follow]);

  return (
    <div className="relative group/tooltip">
      {children}
      <div className={cn("absolute z-50 right-0 -top-16 overflow-hidden text-sm dark:text-accent-300 text-white", className)}>
        <div className="px-2 py-1 whitespace-nowrap opacity-0">{text}</div>
        <div
          className={cn("px-2 py-1 whitespace-nowrap transition dark:bg-white bg-accent-dark rounded-sm",
            follow ? cn("opacity-0 group-hover/tooltip:opacity-100 fixed z-50 top-5 left-4 ease-out", className) : "ease-in-out translate-y-full group-hover/tooltip:translate-y-0"
          )}
          style={{ transform: follow ? `translate(${mousePosition?.x || 0}px, ${mousePosition?.y || 0}px)` : "" }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
