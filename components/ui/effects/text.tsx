"use client";
import React from "react";
import { motion } from "framer-motion";

interface TextProps {
  className?: string;
  text?: string;
  breakWord?: string;
  effect?: "fadeIn" | "blurIn" | "slideIn" | "bounceIn";
  staggerTime?: number;
  duration?: number;
}

export const Text: React.FC<TextProps> = ({
  className,
  text = "",
  breakWord = "",
  effect = "fadeIn",
  staggerTime = 0.1,
  duration = 1,
}) => {
  const splitText = text.split(new RegExp(`(${breakWord})`)).filter(Boolean);

  const variants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { ease: "easeInOut", duration: duration } },
    },
    blurIn: {
      initial: { opacity: 0, filter: "blur(10px)" },
      animate: { opacity: 1, filter: "blur(0)", transition: { ease: "easeInOut", duration: duration } },
    },
    slideIn: {
      initial: { opacity: 0, x: 15 },
      animate: { opacity: 1, x: 0, transition: { ease: "backInOut", duration: duration } },
    },
    bounceIn: {
      initial: { opacity: 0, y: 15 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeOut",
          duration: duration,
          type: "spring",
          damping: 6,
          stiffness: 100,
        },
      },
    }
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerTime,
      },
    },
  };

  const itemVariants = {
    initial: variants[effect].initial,
    animate: {
      ...variants[effect].animate,
      transition: {
        ...variants[effect].animate.transition
      },
    },

  };

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      {splitText.map((word, index) => (
        <motion.span key={index} variants={itemVariants} className={word == " " ? "" : "inline-block"}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
