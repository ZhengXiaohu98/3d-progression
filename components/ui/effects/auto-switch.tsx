"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AutoSwitchProps {
  children: React.ReactNode[];
  animationDuration?: number;
  duration?: number;
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const AutoSwitch: React.FC<AutoSwitchProps> = ({ children, animationDuration = 0.4, duration = 2, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [children.length, duration]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: animationDuration, ease: "easeOut" }}
        className={className}
      >
        {children[currentIndex]}
      </motion.div>
    </AnimatePresence>
  );
};
