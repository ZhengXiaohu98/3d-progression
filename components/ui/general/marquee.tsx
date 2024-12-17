"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/utils";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
};

export const Marquee: React.FC<MarqueeProps> = ({ children, speed = 50, reverse = false, direction = "horizontal", pauseOnHover = false, className }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const marqueeTweenRef = useRef<GSAPTween | null>(null);

  useEffect(() => {
    const updateMarquee = () => {
      if (!marqueeRef.current || !contentRef.current) return;

      // need to kill the last animation
      if (marqueeTweenRef.current) {
        marqueeTweenRef.current.kill();
      }

      const children = contentRef.current.children;
      let translateAmount = 0;
      Array.from(children).forEach(child => {
        gsap.set(child, {
          x: direction === "horizontal" ? translateAmount : 0,
          y: direction === "horizontal" ? 0 : translateAmount
        });
        translateAmount += (direction === "horizontal" ? child.clientWidth : child.clientHeight);
      });

      const contentLength = direction === "horizontal" ? contentRef.current.scrollWidth : contentRef.current.scrollHeight;
      const containerLength = direction === "horizontal" ? marqueeRef.current.clientWidth : marqueeRef.current.clientHeight;

      gsap.set(contentRef.current, {
        x: direction === "horizontal" ? `-${(contentLength - containerLength) / 2}px` : 0,
        y: direction === "horizontal" ? 0 : `-${(contentLength - containerLength) / 2}px`,
      });

      marqueeTweenRef.current = gsap.to(contentRef.current.querySelectorAll(".marquee-element"), {
        x: direction === "horizontal" ? `+=${contentLength * (reverse ? -1 : 1)}` : 0,
        y: direction === "horizontal" ? 0 : `+=${contentLength * (reverse ? -1 : 1)}`,
        duration: contentLength / speed,
        ease: "none",
        modifiers: {
          x: (x) => (direction === "horizontal" ? `${(parseFloat(x) + (reverse ? contentLength : 0)) % contentLength}px` : 0),
          y: (y) => (direction === "horizontal" ? 0 : `${(parseFloat(y) + (reverse ? contentLength : 0)) % contentLength}px`)
        },
        repeat: -1
      });
    };

    updateMarquee();

    const handleResize = () => {
      updateMarquee();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseEnter = () => {
      if (marqueeTweenRef.current) {
        marqueeTweenRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (marqueeTweenRef.current) {
        marqueeTweenRef.current.play();
      }
    };

    const marqueeElement = marqueeRef.current;

    if (pauseOnHover) {
      marqueeElement?.addEventListener("mouseenter", handleMouseEnter);
      marqueeElement?.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      marqueeElement?.removeEventListener("mouseenter", handleMouseEnter);
      marqueeElement?.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(".marquee-element");
    };
  }, [speed, reverse, direction, pauseOnHover]);

  return (
    <div
      ref={marqueeRef}
      className={cn("w-full h-full overflow-hidden whitespace-nowrap", className)}
    >
      <div ref={contentRef} className="relative w-full h-full">
        {Array.from({ length: 2 }, (_, repeatIndex) =>
          React.Children.map(children, (child, childIndex) => (
            <div
              key={`${repeatIndex}-${childIndex}`}
              className="marquee-element absolute left-0 top-0"
            >
              {child}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
