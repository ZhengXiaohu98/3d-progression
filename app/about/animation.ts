"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutAnimations: React.FC = () => {
  useGSAP(() => {
    gsap.to(".hr", {
      strokeDashoffset: -10000,
      duration: 1000,
      repeat: -1,
    });
  }, []);

  return null;
};

export default AboutAnimations;
