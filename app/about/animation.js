"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, MotionPathPlugin, TextPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

const AboutAnimations = () => {
  useGSAP(() => {
    gsap.to(".hr", {
      strokeDashoffset: -10000,
      duration: 1000,
      repeat: -1,
    })
  }, []);

  return <></>;
};

export default AboutAnimations;
