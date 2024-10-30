"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

const CupAnimation: React.FC = () => {
  useGSAP(() => {
    // Animation for the body
    gsap.fromTo(
      "#body",
      { rotate: "4deg" },
      {
        rotate: "-4deg",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    // Animation for the feet
    gsap.fromTo(
      "#feet",
      { skewX: 4 },
      {
        skewX: -4,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    // Animation for the left arm
    gsap.fromTo(
      "#left-arm",
      { rotate: 20, y: -4, x: -2 },
      {
        rotate: -24,
        y: -5,
        x: -2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    // Animation for the right arm
    gsap.fromTo(
      "#right-arm",
      { rotate: 32, y: -4 },
      {
        rotate: -30,
        y: -3,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  return null;
};

export default CupAnimation;
