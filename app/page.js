"use client";
import ProjectCard from "@/components/page/PorjectCard";
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee";
import { ScrollTrigger, MotionPathPlugin, TextPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

const convertToSpanText = (originalText, breakWord = "") => {
  return (
    <>
      {originalText.split(breakWord).map((ch, i) => (
        <span key={i} className={`inline-block`} style={{ transformStyle: "preserve-3d" }}>
          {breakWord === " " ? (ch + "\u00A0") : (ch === " " ? "\u00A0" : ch)}
        </span>
      ))}
    </>
  )
}

export default function Home() {

  const experience = [
    {
      "company": "Unadat - Software Engineering Intern",
      "timeline": "June 2021 - August 2021",
      "description": "Collaborated with the UI team to develop new features and resolve bugs, improving website performance and meeting customer needs."
    },
    {
      "company": "Google - SPS Program",
      "timeline": "June 2022 - August 2022",
      "description": "Developed a personal portfolio and completed team projects with Google mentors, gaining proficiency in Java backend, Git, and Google APIs like Maps, Translate, and CloudStore."
    },
    {
      "company": "Fanruan Software - Frontend Engineer",
      "timeline": "February 2023 - Current",
      "description": "Used Next.js to migrate and upgrade the official website, implementing internationalization, optimizing SEO, and enhancing performance."
    }
  ];

  const projectData = [
    {
      "name": "Book Gallery",
      "description": "A website featuring a 3D book that showcases images in an interactive and immersive way.",
      "img": "/images/home/3d-book-preview.webp",
      "url": "/project/book-gallery"
    },
    {
      "name": "Paper Plane",
      "description": "A website featuring a 3D paper airplane that glides along a custom path, and showing a dynamic introduction.",
      "img": "/images/home/3d-plane-preview.webp",
      "url": "/project/paper-plane"
    }
  ]

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

  }, []);

  return (
    <>
      {/* Home */}
      <section
        className="relative"
        style={{
          background:
            "radial-gradient(ellipse 20% 50% at 40% 10%, #c2410c77, transparent), radial-gradient(ellipse 30% 60% at 45% 0%, #7e22c755, transparent)"
        }}
      >
        <div className="container flex flex-col items-center sm:pt-24 md:pt-32 lg:pt-40" >
          <div className="flex justify-between lg:w-[1024px]">
            <div className="flex flex-col sm:gap-3 md:gap-4">
              <h1 className="intro-text font-semibold md:text-3xl md:leading-relaxed sm:text-2xl sm:leading-normal tracking-wider max-w-[500px] bg-clip-text text-transparent bg-gradient-to-b dark:from-white dark:to-white/80 from-black to-black/80">
                {"I'm Xiaohu, a Web Developer building "}
                <span className="dark:from-[#c2410c77] dark:via-[#7e22c755] dark:to-[#c2410c77] from-orange-base via-purple-base to-orange-base bg-clip-text text-transparent bg-gradient-to-l gradient-text bg-[length:200%_100%]">{"creative engaging 3D"}</span> {"websites."}
              </h1>
              <p className="intro-text text-smoke-base dark:text-accent-900 tracking-wide text-sm font-mono">{"Exploring the ocean of code"}</p>
            </div>
            <div className="sm:hidden md:flex flex-col items-center gap-10">
              <div id="logo" className="relative">
                <Image src="/logo_original_1024.png" width={100} height={100} alt="logo_xh" className="rounded-3xl" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-orange-base to-purple-base opacity-50 blur-xl" />
              </div>
              <div className="md:scale-100 sm:scale-75">
                <p id="focus-text" className="text-2xl font-bold tracking-widest italic h-8 font-afacad">
                  {convertToSpanText("Stay Focus!")}
                </p>
                <svg viewBox="0 0 140 7" width="140" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path id="wave-path" d="M0 3.5 C 10 0, 30 7, 40 3.5 S 70 0, 80 3.5 S 110 7, 120 3.5 S 140 0, 140 3.5" fill="none" stroke="currentColor" stroke-width="1" />
                </svg>
                <svg id="pen" class="w-8 h-8 dark:text-white rotate-[115deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section */}
      <section className="relative">
        <div className="container flex flex-col items-center sm:pt-12 md:pt-16 lg:pt-24">
          <h2 className="text-3xl tracking-wider text-center font-bold">Projects</h2>
          <div className="lg:w-[1024px] md:w-[500px] sm:w-full md:mt-10 sm:mt-6 flex lg:flex-row sm:flex-col transition-all justify-between gap-6">
            <ProjectCard data={projectData[0]} />
            <ProjectCard data={projectData[1]} />
          </div>
          <Link href="/projects">
            <div className="md:mt-10 sm:mt-6 text-sm px-4 py-2 rounded-lg border dark:border-accent-300 border-accent-white transition duration-150 relative overflow-hidden dark:hover:bg-gray-dark/50 hover:bg-accent-white/50">
              Explore more
            </div>
          </Link>
        </div>
      </section>
      {/* About me Section */}
      <section className="relative">
        <div className="container flex flex-col items-center sm:pt-12 md:pt-16 lg:pt-24">
          <h2 className="text-3xl tracking-wider text-center font-bold">About me</h2>
          <div className="flex lg:flex-row sm:flex-col transition-all justify-between gap-6 lg:w-[1024px] md:w-[500px] sm:w-full md:mt-10 sm:mt-6">
            {/* left */}
            <ul className="flex flex-col sm:gap-4 md:gap-8 flex-1 select-none">
              {experience.map((exp) => (
                <li key={exp.name} className="p-4 w-full flex flex-col gap-1.5 rounded-xl dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05]">
                  <div className="flex items-center gap-2 dark:text-accent-white text-accent-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <g clip-path="url(#clip0_429_11075)">
                        <path d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 11.9999L3 13.9999L5 11.9999" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 7.99994L11 12.9999L16 12.9999" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_429_11075">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm italic tracking-wide">{exp.timeline}</p>
                  </div>
                  <p className="text-xl font-bold dark:text-accent-white text-accent-300">{exp.company}</p>
                  <p className="dark:text-accent-900 text-smoke-base">{exp.description}</p>
                </li>
              ))}
            </ul>
            {/* right */}
            <div className="flex flex-col sm:gap-4 md:gap-8 flex-1 lg:w-1/2">
              <div className="relative p-4 grow flex flex-col gap-4 rounded-xl dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05] overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-10 top-0 pointer-events-none" viewBox="0 0 640 800">
                  <circle className="info-circle" r="24.5" cx="157" cy="39" stroke-width="2" stroke="#c2410c" fill="none" opacity="0.33"></circle>
                  <circle className="info-circle" r="22.5" cx="516" cy="48" stroke-width="2" stroke="#7e22c7" fill="none" opacity="0.39"></circle>
                  <circle className="info-circle" r="21" cx="46" cy="225" stroke-width="2" stroke="#c2410c" fill="none" opacity="0.23"></circle>
                  <circle className="info-circle" r="24.5" cx="259" cy="677" stroke-width="2" stroke="#7e22c7" fill="none" opacity="0.70"></circle>
                  <circle className="info-circle" r="22.5" cx="595" cy="297" stroke-width="2" stroke="#c2410c" fill="none" opacity="0.80"></circle>
                  <circle className="info-circle" r="32" cx="392" cy="316" stroke-width="2" stroke="#7e22c7" fill="none" opacity="0.65"></circle>
                  <circle className="info-circle" r="25" cx="575" cy="757" stroke-width="2" stroke="#c2410c" fill="none" opacity="0.86"></circle>
                  <circle className="info-circle" r="33.5" cx="379" cy="676" stroke-width="2" stroke="#7e22c7" fill="none" opacity="0.76"></circle>
                  <circle className="info-circle" r="31.5" cx="488" cy="507" stroke-width="2" stroke="#c2410c" fill="none" opacity="0.11"></circle>
                  <circle className="info-circle" r="21.5" cx="40" cy="135" stroke-width="2" stroke="#7e22c7" fill="none" opacity="0.10"></circle>
                  <circle className="info-circle" r="20" cx="431" cy="48" stroke-width="2" stroke="#c2410c" fill="none" opacity="0.76"></circle>
                  <circle className="info-circle" r="18.5" cx="128" cy="560" stroke-width="2" stroke="#7e22c7" fill="none" opacity="0.93"></circle>
                </svg>
                <div className="flex items-center gap-2 text-sm dark:text-accent-white text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mt-0.5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor" />
                    <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                  <p>Info</p>
                </div>
                <ul className="flex flex-col gap-2 dark:text-accent-white text-accent-300 text-base">
                  <li className="flex gap-2 items-center">
                    <svg className="w-4 h-4 -mt-0.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799">
                      <path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                    </svg>
                    <Link href="https://x.com/ZhengPercy">X</Link>
                  </li>
                  <li className="flex gap-2 items-center">
                    <svg className="w-4 h-4 -mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                    </svg>
                    <Link href="https://github.com/ZhengXiaohu98" >Github</Link>
                  </li >
                  <li className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 -mt-0.5" viewBox="0 0 32 32">
                      <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
                    </svg>
                    <Link href="https://leetcode.com/u/acehu/">
                      LeetCode
                    </Link>
                  </li>
                  <li className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="-51.45 -69.25 445.9 415.5">
                      <g fill="currentColor" fill-rule="evenodd">
                        <path d="M274 167c-7.778 0-14-6.222-14-14s6.222-14 14-14 14 6.222 14 14c0 7.389-6.222 14-14 14m-69 0c-7.778 0-14-6.222-14-14s6.222-14 14-14 14 6.222 14 14c0 7.389-6.222 14-14 14m102.39 78.581C329.216 229.871 343 206.5 343 180.827 343 133.316 297.052 95 240 95s-103 38.316-103 85.827c0 47.512 45.948 85.828 103 85.828 11.87 0 22.974-1.533 33.695-4.598.766-.383 1.915-.383 3.063-.383 1.915 0 3.83.766 5.361 1.532l22.591 13.028c.766.383 1.149.766 1.915.766a3.433 3.433 0 003.446-3.448c0-.767-.383-1.533-.383-2.683 0-.383-3.063-10.728-4.595-17.242-.383-.766-.383-1.532-.383-2.299-.383-2.682.766-4.597 2.68-5.747" />
                        <path d="M164 86c-8.93 0-16-7.07-16-16s7.07-16 16-16 16 7.07 16 16c0 8.558-7.07 16-16 16m-82 0c-8.93 0-16-7.07-16-16s7.07-16 16-16 16 7.07 16 16c0 8.558-7.07 16-16 16m41.96-86C55.646 0 0 45.895 0 102.88c0 30.98 16.502 58.899 42.983 77.64 1.919 1.53 3.454 3.824 3.454 6.884 0 .764-.384 1.912-.384 2.677-1.919 7.649-5.373 20.27-5.757 20.652-.383 1.148-.767 1.913-.767 3.06 0 2.295 1.919 4.207 4.221 4.207.768 0 1.535-.382 2.303-.765l27.248-15.68c1.919-1.148 4.222-1.913 6.524-1.913 1.152 0 2.303 0 3.454.383 12.665 3.442 26.48 5.736 40.297 5.736h6.908c-2.687-8.031-4.222-16.445-4.222-25.242 0-51.631 50.658-93.701 112.83-93.701H246C237.173 37.48 185.747 0 123.96 0" />
                      </g>
                    </svg>
                    <p>
                      wechat: zxh635148320
                    </p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083   h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92   c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87   C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024   c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674   l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469   c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599   C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92   c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92   C462.107,387.195,462.94,397.75,456.948,404.771z" />
                    </svg>
                    <Link href="mailto:zxh635148320@gmail.com">
                      zxh635148320@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="h-[164px] p-4 flex flex-col gap-4 rounded-xl dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05]">
                <div className="flex items-center gap-2 text-sm dark:text-accent-white text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66493 2.74199C5.99503 1.70455 6.95855 1 8.04724 1H13.1756C14.9704 1 16.1805 2.83513 15.4735 4.4848L13.967 8H18.2405C20.4882 8 21.5942 10.7352 19.978 12.2975L9.43055 22.4934C8.25327 23.6314 6.36431 22.329 7.0093 20.824L9.93388 14H5.50179C3.80978 14 2.60645 12.3544 3.11948 10.742L5.66493 2.74199ZM8.04724 3C7.82951 3 7.6368 3.14091 7.57078 3.3484L5.02533 11.3484C4.92272 11.6709 5.16339 12 5.50179 12H11.1471C12.0086 12 12.5894 12.8809 12.2501 13.6727L9.82561 19.3298L18.588 10.8595C18.9112 10.547 18.69 10 18.2405 10H12.7537C11.8922 10 11.3114 9.11914 11.6508 8.3273L13.6352 3.69696C13.7766 3.36703 13.5346 3 13.1756 3H8.04724Z" fill="currentColor" />
                  </svg>
                  <p>Stacks</p>
                </div>
                <div className="flex flex-col gap-4 dark:text-accent-white text-accent-300 ">
                  <Marquee speed={30} pauseOnHover={true} className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-3" viewBox="-1 0 20 20" >
                      <title>html</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="currentColor">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                      <title>css</title>
                      <g id="c133de6af664cd4f011a55de6b001b19">
                        <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302   H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606   l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062   l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z">
                        </path>
                      </g>
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 312.553 312.553">
                      <title>js</title>
                      <path d="M302.553,0H10C4.477,0,0,4.478,0,10v292.553c0,5.522,4.477,10,10,10h292.553c5.523,0,10-4.478,10-10V10  C312.553,4.478,308.076,0,302.553,0z M143.625,173.732c0,18.615-10.434,30.179-27.232,30.179c-10.55,0-19.978-5.292-26.547-14.901  c-2.905-4.251-1.815-10.053,2.436-12.959c4.252-2.906,10.055-1.814,12.959,2.436c3.074,4.498,6.826,6.778,11.152,6.778  c3.419,0,8.586,0,8.586-11.532v-47.467H99.504c-5.149,0-9.323-4.174-9.323-9.323c0-5.149,4.174-9.323,9.323-9.323h34.798  c5.149,0,9.323,4.174,9.323,9.323V173.732z M189.441,205.6c-12.499,0-25.251-5.27-33.279-13.753  c-3.54-3.74-3.377-9.642,0.362-13.181c3.741-3.54,9.644-3.377,13.181,0.362c4.486,4.74,12.417,7.925,19.736,7.925  c7.493,0,16.244-2.188,16.244-8.351c0.048-5.81-3.045-7.986-17.415-12.339c-12.677-3.839-31.835-9.642-31.835-31.725  c0-16.5,14.306-27.586,35.599-27.586c9.479,0,19.815,2.874,26.975,7.502c4.324,2.795,5.564,8.567,2.769,12.892  c-2.796,4.324-8.568,5.564-12.892,2.769c-4.112-2.658-11.042-4.516-16.852-4.516c-7.82,0-16.952,2.342-16.952,8.939  c0,7.165,4.189,9.516,18.594,13.879c12.277,3.718,30.83,9.337,30.656,30.262C224.331,194.75,210.31,205.6,189.441,205.6z" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <title>react</title>
                      <rect width="24" height="24" fill="none" />
                      <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <title>Next.js</title>
                      <g clip-path="url(#clip0)">
                        <path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <title>Vue.js</title>
                      <path fill-rule="nonzero" clip-rule="nonzero" d="M11.7527 1.00003H10.4167C10.1615 1.00003 9.92378 1.1298 9.78578 1.34446L8 4.12235L6.21422 1.34446C6.07622 1.1298 5.83853 1.00003 5.58333 1.00003H0.75C0.481089 1.00003 0.232759 1.144 0.0991399 1.37737C-0.0344791 1.61073 -0.0329346 1.89777 0.103188 2.12968L7.35319 14.4815C7.48785 14.711 7.73397 14.8519 8 14.8519C8.26603 14.8519 8.51215 14.711 8.64681 14.4815L15.8968 2.12968C16.0329 1.89777 16.0345 1.61073 15.9009 1.37737C15.7672 1.144 15.5189 1.00003 15.25 1.00003H11.7668C11.7621 0.999989 11.7574 0.999989 11.7527 1.00003ZM3.80997 2.50003L8.00001 9.68295L12.19 2.50003H13.9401L8 12.6203L2.05987 2.50003H3.80997Z" fill="currentColor" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <title>Tailwind CSS</title>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 312.553 312.553">
                      <title>C++</title>
                      <path d="M302.553,0H10C4.477,0,0,4.478,0,10v292.553c0,5.522,4.477,10,10,10h292.553c5.523,0,10-4.478,10-10V10  C312.553,4.478,308.076,0,302.553,0z M122.031,193.288c-9.481,8.296-21.592,12.865-34.102,12.865  c-28.108,0-50.976-22.4-50.976-49.934c0-27.47,22.868-49.818,50.976-49.818c12.527,0,24.597,4.53,33.987,12.756  c3.874,3.392,4.263,9.283,0.87,13.156c-3.393,3.874-9.283,4.263-13.157,0.869c-5.988-5.245-13.695-8.135-21.7-8.135  c-17.827,0-32.33,13.983-32.33,31.172c0,17.251,14.503,31.286,32.33,31.286c7.992,0,15.742-2.931,21.822-8.251  c3.875-3.393,9.765-2.998,13.156,0.877C126.298,184.007,125.906,189.898,122.031,193.288z M185.951,165.6h-18.789v18.79  c0,5.149-4.174,9.323-9.324,9.323s-9.324-4.174-9.324-9.323V165.6h-18.788c-5.149,0-9.324-4.174-9.324-9.323  s4.174-9.323,9.324-9.323h18.788v-18.789c0-5.149,4.174-9.323,9.324-9.323s9.324,4.174,9.324,9.323v18.789h18.789  c5.149,0,9.324,4.174,9.324,9.323S191.101,165.6,185.951,165.6z M266.276,165.6h-18.789v18.79c0,5.149-4.174,9.323-9.324,9.323  c-5.149,0-9.324-4.174-9.324-9.323V165.6h-18.788c-5.149,0-9.324-4.174-9.324-9.323s4.174-9.323,9.324-9.323h18.788v-18.789  c0-5.149,4.174-9.323,9.324-9.323c5.149,0,9.324,4.174,9.324,9.323v18.789h18.789c5.149,0,9.324,4.174,9.324,9.323  S271.426,165.6,266.276,165.6z" />
                    </svg>
                  </Marquee>
                  <Marquee direction="right" speed={30} pauseOnHover={true}>
                    <svg class="w-10 h-10 mx-3" fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                      <title>Three.js</title>
                      <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="currentColor" stroke-linecap="butt" stroke-linejoin="round" stroke-width="6">
                        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
                        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
                        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
                        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
                        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
                        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
                      </g>
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <title>Figma</title>
                      <path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                      <title>Node.js</title>
                      <g id="5151e0c8492e5103c096af88a51f17e3">
                        <path display="inline" d="M482.585,147.869v216.113c0,14.025-7.546,27.084-19.672,34.143L275.665,506.241   c-5.989,3.474-12.782,5.259-19.719,5.259c-6.838,0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128   c12.454-4.322,14.973-5.318,28.268-12.863c1.387-0.793,3.216-0.483,4.647,0.343l48.031,28.519c1.741,0.981,4.2,0.981,5.801,0   l187.263-108.086c1.744-0.996,2.862-2.983,2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874,34.716   c-1.726-1.01-4.03-1.01-5.768,0L65.962,142.736c-1.818,1.04-2.965,3.079-2.965,5.133v216.113c0,2.069,1.146,4.009,2.954,4.99   l51.299,29.654c27.829,13.903,44.875-2.485,44.875-18.956V166.309c0-3.017,2.423-5.396,5.439-5.396h23.747   c2.969,0,5.429,2.378,5.429,5.396v213.362c0,37.146-20.236,58.454-55.452,58.454c-10.816,0-19.347,0-43.138-11.713l-49.098-28.287   c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043,7.505-27.15,19.638-34.135L236.308,5.526   c11.85-6.701,27.608-6.701,39.357,0l187.248,108.208C475.039,120.748,482.585,133.826,482.585,147.869z M321.171,343.367   c-55.88,0-68.175-14.048-72.294-41.836c-0.477-2.966-3.018-5.175-6.063-5.175h-27.306c-3.382,0-6.096,2.703-6.096,6.104   c0,35.56,19.354,77.971,111.759,77.971c66.906,0,105.269-26.339,105.269-72.343c0-45.623-30.827-57.76-95.709-66.35   c-65.579-8.678-72.243-13.147-72.243-28.508c0-12.661,5.643-29.581,54.216-29.581c43.374,0,59.365,9.349,65.94,38.576   c0.579,2.755,3.083,4.765,5.923,4.765h27.409c1.7,0,3.315-0.73,4.47-1.943c1.158-1.28,1.773-2.947,1.611-4.695   c-4.241-50.377-37.713-73.844-105.354-73.844c-60.209,0-96.118,25.414-96.118,68.002c0,46.217,35.729,59,93.5,64.702   c69.138,6.782,74.504,16.883,74.504,30.488C384.589,333.299,365.655,343.367,321.171,343.367z">
                        </path>
                      </g>
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                      <title>mysql</title>
                      <path d="M8.785,6.865a3.055,3.055,0,0,0-.785.1V7h.038a6.461,6.461,0,0,0,.612.785c.154.306.288.611.441.917.019-.019.038-.039.038-.039a1.074,1.074,0,0,0,.4-.957,4.314,4.314,0,0,1-.23-.4c-.115-.191-.364-.287-.517-.44" fillRule="evenodd" />
                      <path d="M27.78,23.553a8.849,8.849,0,0,0-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467,4.467,0,0,0,.995,1.167c.4.306.8.611,1.225.879.745.461,1.588.728,2.314,1.187.422.268.842.612,1.264.9.21.153.343.4.611.5v-.058a3.844,3.844,0,0,0-.291-.613c-.191-.19-.383-.363-.575-.554a9.118,9.118,0,0,0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69,7.69,0,0,0,1.321-.308c.65-.172,1.243-.133,1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338,25.338,0,0,0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594,7.594,0,0,1-.776-1.457c-.548-1.04-1.079-2.193-1.551-3.293a20.236,20.236,0,0,0-.965-2.157A19.078,19.078,0,0,0,11.609,5a9.07,9.07,0,0,0-2.421-.776c-.474-.02-.946-.057-1.419-.075A7.55,7.55,0,0,1,6.9,3.485C5.818,2.8,3.038,1.328,2.242,3.277,1.732,4.508,3,5.718,3.435,6.343A8.866,8.866,0,0,1,4.4,7.762c.133.322.171.663.3,1A22.556,22.556,0,0,0,5.687,11.3a8.946,8.946,0,0,0,.7,1.172c.153.209.417.3.474.645a5.421,5.421,0,0,0-.436,1.419,8.336,8.336,0,0,0,.549,6.358c.3.473,1.022,1.514,1.987,1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53V19.3s.483,1.061.723,1.6a10.813,10.813,0,0,0,2.4,2.59A3.514,3.514,0,0,1,14,24.657V25h.427A1.054,1.054,0,0,0,14,24.212a9.4,9.4,0,0,1-.959-1.16,24.992,24.992,0,0,1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266,7.266,0,0,0-.884,1.313,11.419,11.419,0,0,0-.517,2.921c-.073.02-.037,0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756,8.756,0,0,1-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767,7.767,0,0,1-.663-1.237C5.912,9.5,5.69,8.3,5.212,7.216a10.4,10.4,0,0,0-.921-1.489A9.586,9.586,0,0,1,3.276,4.22c-.092-.213-.221-.561-.074-.793a.3.3,0,0,1,.259-.252c.238-.212.921.058,1.16.174a9.2,9.2,0,0,1,1.824.967c.258.194.866.685.866.685h.18c.612.133,1.3.037,1.876.21a12.247,12.247,0,0,1,2.755,1.32,16.981,16.981,0,0,1,5.969,6.545c.23.439.327.842.537,1.3.4.94.9,1.9,1.3,2.814a12.578,12.578,0,0,0,1.36,2.564c.286.4,1.435.612,1.952.822a13.7,13.7,0,0,1,1.32.535c.651.4,1.3.861,1.913,1.3.305.23,1.262.708,1.32,1.091" fillRule="evenodd" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                      <title>mongodb</title>
                      <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <title>Unreal engine</title>
                      <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm0 1.846c5.595.007 10.128 4.545 10.128 10.141 0 5.601-4.54 10.141-10.141 10.141s-10.141-4.54-10.141-10.141c0-2.8 1.135-5.335 2.97-7.17 1.837-1.835 4.374-2.97 7.176-2.97h.007zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23 2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519 1.67 2.485 5.539 2.77 5.539 2.77l1.846-1.846 1.846.923c2.914-1.334 4.615-4.19 4.615-4.615-.701.868-1.646 1.515-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462v-6.693c0-.581 1.342-2.354 1.846-3-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654c-.525.373-1.144.653-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                      <title>Blender</title>
                      <g id="2069a460dcf28295e231f3111e0426ac">
                        <path display="inline" d="M510.003,279.642c-2.998-21.097-10.305-41.104-21.724-59.459c-9.96-16.019-22.739-30.266-37.992-42.375   l0.041-0.038L290.133,54.731c-0.133-0.116-0.27-0.224-0.361-0.287c-5.327-4.08-12.538-6.325-20.298-6.325   c-7.769,0-15.262,2.25-21.088,6.337c-6.263,4.375-9.843,10.18-10.093,16.36c-0.229,5.764,2.521,11.311,7.764,15.636   c10.31,8.134,20.598,16.447,30.898,24.768c9.997,8.08,20.298,16.401,30.549,24.502l-196.213-0.133   c-22.439,0-37.718,10.537-40.861,28.178c-1.381,7.727,1.056,16.223,6.504,22.73c5.78,6.899,14.172,10.704,23.629,10.704   l14.958,0.009c20.664,0,41.419-0.05,62.146-0.1l19.766-0.046L19.354,328.812l-0.707,0.516C8.7,336.954,2.188,347.642,0.783,358.653   c-1.065,8.342,0.881,15.965,5.63,22.053c5.66,7.257,14.497,11.249,24.885,11.249c10.205,0,20.618-3.867,29.334-10.908l96.166-78.7   c-0.411,3.843-0.91,9.481-0.853,13.573c0.108,6.479,2.188,19.479,5.481,30.033c6.804,21.691,18.265,41.536,34.063,58.964   c16.438,18.131,36.458,32.508,59.5,42.721c24.361,10.774,50.547,16.243,77.836,16.243h0.253   c27.376-0.066,53.646-5.622,78.085-16.518c23.08-10.334,43.091-24.769,59.467-42.899c15.778-17.516,27.222-37.394,34.013-59.067   c3.356-10.721,5.519-21.82,6.417-33.003C511.899,301.565,511.538,290.545,510.003,279.642z M334.821,383.601   c-60.142,0-108.912-43.627-108.912-97.447c0-53.815,48.771-97.442,108.912-97.442c60.141,0,108.907,43.627,108.907,97.442   C443.729,339.974,394.962,383.601,334.821,383.601z M397.627,277.591c0.886,16.064-5.53,30.978-16.796,42.019   c-11.461,11.248-27.816,18.313-46.102,18.313c-18.281,0-34.637-7.065-46.102-18.313c-11.262-11.041-17.665-25.954-16.784-42.006   c0.865-15.603,8.476-29.376,19.94-39.128c11.273-9.589,26.411-15.44,42.945-15.44c16.538,0,31.671,5.852,42.945,15.44   C389.14,248.228,396.754,261.992,397.627,277.591z">
                        </path>
                      </g>
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <title>VS code</title>
                      <path d="M0.228341 8.36915C0.228341 8.36915 -0.356212 7.94324 0.345251 7.37453L1.97956 5.89736C1.97956 5.89736 2.44721 5.40004 2.94164 5.83334L18.0231 17.375V22.9094C18.0231 22.9094 18.0158 23.7785 16.9124 23.6825L0.228341 8.36915Z" fill="currentColor" />
                      <path d="M4.11555 11.9367L0.228273 15.5089C0.228273 15.5089 -0.171172 15.8093 0.228273 16.346L2.03308 18.0053C2.03308 18.0053 2.46175 18.4706 3.09502 17.9413L7.21611 14.7827L4.11555 11.9367Z" fill="currentColor" />
                      <path d="M10.94 11.9661L18.0691 6.46362L18.0228 0.95865C18.0228 0.95865 17.7183 -0.242793 16.7027 0.382548L7.21589 9.11025L10.94 11.9661Z" fill="currentColor" />
                      <path d="M16.9121 23.69C17.3261 24.1183 17.8279 23.978 17.8279 23.978L23.3838 21.2108C24.0951 20.7208 23.9952 20.1127 23.9952 20.1127V3.58803C23.9952 2.86175 23.2596 2.61063 23.2596 2.61063L18.4441 0.264377C17.3919 -0.392968 16.7027 0.382548 16.7027 0.382548C16.7027 0.382548 17.5892 -0.262484 18.0228 0.95865L18.0228 22.8086C18.0228 22.9588 17.9911 23.1065 17.9278 23.2394C17.8011 23.4979 17.5259 23.7392 16.8658 23.6383L16.9121 23.69Z" fill="currentColor" />
                    </svg>
                    <svg class="w-10 h-10 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <title>python</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="currentColor">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" id="python-[#127]">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
          <Link href="/about">
            <div className="md:mt-10 sm:mt-6 text-sm px-4 py-2 rounded-lg border dark:border-accent-300 border-accent-white transition duration-150 relative overflow-hidden dark:hover:bg-gray-dark/50 hover:bg-accent-white/50">
              Know more
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
