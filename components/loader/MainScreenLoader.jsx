"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useProgress } from "@react-three/drei";


export const MainScreenLoader = () => {

  const cloudContainerRef = useRef(null);
  const { progress } = useProgress();

  useGSAP(() => {
    const clouds = cloudContainerRef.current.children;
    const animateClouds = () => {
      const timeline = gsap.timeline({
        onComplete: animateClouds
      });

      timeline.fromTo(
        clouds,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: {
            amount: 1,
            from: "end"
          }
        }
      )
        .to(clouds, {
          x: 200,
          opacity: 0,
          duration: 1,
          stagger: {
            amount: 1,
            from: "end"
          }
        });
    };
    animateClouds();
  }, []);

  return (
    <div className="select-none w-screen h-screen overflow-hidden bg-gradient-to-tr from-[#9A9ADC] via-[#8BC6EC] to-[#97D9E1] flex flex-col justify-center items-center">
      <div ref={cloudContainerRef} className="flex flex-row gap-2">
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
      </div>
      <div className="lg:mt-6 sm:mt-4 font-bold lg:text-3xl md:text-2xl sm:text-xl text-emerald-50">Coming soon: {Math.trunc(progress)}%</div>
    </div>
  )
}
