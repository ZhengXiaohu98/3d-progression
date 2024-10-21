"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, MotionPathPlugin, TextPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

const HomeAnimations = () => {
  useGSAP(() => {

    // drawing anim (Stay Focus!)
    const drawingTl = gsap.timeline({ repeat: -1, repeatDelay: 2, ease: "power1.inOut" });
    const wavePath = document.getElementById("wave-path");
    const waveLength = wavePath.getTotalLength();

    drawingTl.fromTo(wavePath, {
      strokeDasharray: waveLength,
      strokeDashoffset: waveLength,
    }, {
      strokeDasharray: waveLength,
      strokeDashoffset: 0,
      duration: 4,
    })
      .to("#pen", {
        duration: 4,
        motionPath: {
          path: "#wave-path",
          align: "#wave-path",
          alignOrigin: [0, 0.95],
        }
      }, "<").
      from("#focus-text span", {
        duration: 4,
        opacity: 0,
        stagger: 0.2
      }, "<")
      .to("#pen", {
        opacity: 0,
        duration: 0.2
      });

    // gradient text anim
    gsap.to(".gradient-text", {
      backgroundPosition: "-200% 0%",
      duration: 2,
      ease: "linear",
      repeat: -1,
    });

    // intro anim
    gsap.from(".intro-text", {
      opacity: 0,
      duration: 0.8,
      y: 40,
      ease: "power1.inOut",
      stagger: 0.2
    });

    gsap.from("#logo", {
      filter: "blur(40px)",
      scale: 0,
      duration: 0.8,
      ease: "back",
    });


    gsap.utils.toArray(".info-circle").forEach((circle) => {
      gsap.to(circle, {
        x: gsap.utils.random(-150, 100),
        y: gsap.utils.random(-100, 100),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // animations when div enter

    gsap.utils.toArray(".enter-sec").forEach(sec => {
      gsap.from(sec, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "back",
        scrollTrigger: {
          trigger: sec,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      })
    })

  }, []);

  return <></>;
};

export default HomeAnimations;
