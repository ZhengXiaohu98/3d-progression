"use client";
import { Header } from "@/components/home/header";
import React, { useEffect, useRef, useState } from 'react';
import { experience, projects } from "./data.json";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, MotionPathPlugin, TextPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

const convertToSpanText = (originalText, breakWord = "") => {
  return (
    <>
      {originalText.split(breakWord).map((ch, i) => (
        <span key={i} className="inline-block" style={{ transformStyle: "preserve-3d" }}>
          {breakWord === " " ? (ch + "\u00A0") : (ch === " " ? "\u00A0" : ch)}
        </span>
      ))}
    </>
  )
}

export default function Home() {

  useGSAP(() => {

    // entrance anim
    const entranceTl = gsap.timeline();
    entranceTl.from("#about-container", {
      duration: 1,
      opacity: 0,
      y: 40,
      ease: "power2.inOut"
    })
      .from(".career-div", {
        opacity: 0,
        y: 40,
        ease: "back",
        duration: 0.8,
        stagger: 0.2
      }, "-=0.2")

    // drawing anim
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

  }, []);

  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    // GSAP 动画，让山丘从左边移动到右边
    gsap.to(path, {
      duration: 3,
      attr: { d: "M 300,200 Q 400,100 500,200" }, // 目标曲线，右侧结束位置
      ease: "power1.inOut"
    });
  }, []);

  return (
    <>
      <Header />
      {/* Home */}
      <section className="relative">
        <div className="container flex flex-col items-center sm:pt-24 md:pt-32 lg:pt-40">
          <div id="about-container" className="relative sm:max-w-[360px] md:max-w-[700px] lg:max-w-[1100px] xl:max-w-[1200px] border border-[#333] rounded-md flex lg:flex-row md:flex-col items-center justify-between sm:p-4 md:p-10 lg:gap-20">
            <span className="absolute left-12 top-0 -translate-y-1/2 px-4 bg-black text-[#ededed] sm:text-xl md:text-3xl italic font-bold">About Me</span>
            <div className="flex flex-col items-end sm:gap-4 md:gap-8 lg:max-w-[750px]">
              <p className="sm:text-sm md:text-xl text-[#ededed] tracking-wide">
                <Image src="/images/home/xiaohu.jpg" width={1888} height={2165} alt="Xiaohu Zheng" className="h-auto sm:w-40 md:w-48 rounded-md lg:hidden sm:block float-left mr-4" />
                <span className="font-bold text-[#ededed]">{"Hi, my name is Xiaohu Zheng. "}</span>
                {"I am a web developer with a strong understanding of data structures and algorithms. During university, I worked on several projects with my classmates using React, where I primarily handled the front-end development. I also self-taught Vue.js. Currently, I focus on building apps with Next.js and have experience in web internationalization, responsive design, and enhancing user interactions. I'm currently learning 3D web development, so if you have any great ideas, feel free to reach out to me! "}
              </p>
              <div className="md:scale-100 sm:scale-75">
                <p id="focus-text" className="text-2xl font-bold tracking-widest italic h-8">
                  {convertToSpanText("Stay Focus!")}
                </p>
                <svg viewBox="0 0 140 7" width="140" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path id="wave-path" d="M0 3.5 C 10 0, 30 7, 40 3.5 S 70 0, 80 3.5 S 110 7, 120 3.5 S 140 0, 140 3.5" fill="none" stroke="#ffffff" stroke-width="1" />
                </svg>
                <svg id="pen" class="w-8 h-8 text-gray-800 dark:text-white rotate-[115deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                </svg>
              </div>
            </div>
            <Image src="/images/home/xiaohu.jpg" width={1888} height={2165} alt="Xiaohu Zheng" className="h-auto lg:w-72 rounded-md lg:block sm:hidden" />
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="career" className="bg-gradient-to-b from-black to-[#111111]">
        <div id="career-container" className="container flex flex-col items-center lg:pt-20 md:pt-12 sm:pt-8">
          <h2 className="career-div sm:text-2xl md:text-3xl font-bold tracking-wide">Experience</h2>
          <div className="sm:mt-6 md:mt-8 lg:mt-12 w-full flex flex-col">
            {
              experience.map((info) => (
                <div key={info.company} className={`career-div flex md:flex-row sm:flex-col`}>
                  <div className={`md:w-1/3 md:p-6 lg:p-12 my-auto`}>
                    <p className="career-tl text-[#ededed] italic md:text-center md:text-lg lg:text-xl sm:border-x md:border-none md:w-auto sm:w-fit px-2 rounded">{convertToSpanText(info.timeline)}</p>
                  </div>
                  <div className={`md:w-2/3 lg:w-7/12 sm:p-4 md:px-12 md:py-6`}>
                    <p className="career-title sm:text-lg md:text-xl font-bold text-[#ededed]" style={{ perspective: "1000px" }}>{convertToSpanText(info.company)}</p>
                    <p className="career-desc text-[#ededed] sm:mt-1.5 md:mt-2 sm:text-sm md:text-base">{convertToSpanText(info.description, " ")}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-black to-[#111111]">
        <div className="container flex flex-col items-center lg:py-20">
          <h2 className="sm:text-2xl md:text-3xl font-bold tracking-wide">Project</h2>
          <div className="relative w-full sm:mt-6 md:mt-8 lg:mt-12 w-fullflex flex-col h-20">

          </div>
        </div>
      </section>
    </>
  );
}
