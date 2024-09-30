"use client";
import { Header } from "@/components/home/header";
import { Suspense } from "react";
import { experience } from "./data.json";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, MotionPathPlugin, TextPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

export default function Home() {

  useGSAP(() => {
    // drawing animation
    const drawingTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2, ease: "power1.inOut" });
    const wavePath = document.getElementById("wave-path");
    const waveLength = wavePath.getTotalLength();

    drawingTimeline.fromTo(wavePath, {
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
      to("#focus-text", {
        duration: 4,
        text: "Stay Focus!",
      }, "<")
      .to("#pen", {
        opacity: 0,
        duration: 0.2
      });

  })

  return (
    <Suspense>
      <Header />
      {/* Home */}
      <section className="relative">
        <div className="container flex flex-col items-center sm:pt-24 md:pt-32 lg:pt-40">
          <div className="transition-all relative sm:max-w-[360px] md:max-w-[700px] lg:max-w-[1100px] xl:max-w-[1200px] border border-[#333] rounded-md flex lg:flex-row md:flex-col items-center justify-between sm:p-4 md:p-10 lg:gap-20">
            <span className="absolute left-12 top-0 -translate-y-1/2 px-4 bg-black text-[#ededed] sm:text-xl md:text-3xl italic font-bold">About Me</span>
            <div className="flex flex-col items-end sm:gap-4 md:gap-8 lg:max-w-[750px]">
              <p className="sm:text-sm md:text-xl text-[#ededed] tracking-wide">
                <Image src="/images/home/xiaohu.jpg" width={1888} height={2165} alt="Xiaohu Zheng" className="h-auto sm:w-40 md:w-48 rounded-md lg:hidden sm:block float-left mr-4" />
                <span className="font-bold text-[#ededed]">{"Hi, my name is Xiaohu Zheng. "}</span>
                {"I am a web developer with a strong understanding of data structures and algorithms. During university, I worked on several projects with my classmates using React, where I primarily handled the front-end development. I also self-taught Vue.js. Currently, I focus on building apps with Next.js and have experience in web internationalization, responsive design, and enhancing user interactions. I'm currently learning 3D web development, so if you have any great ideas, feel free to reach out to me! "}
              </p>
              <div className="md:scale-100 sm:scale-75">
                <p id="focus-text" className="text-2xl font-bold tracking-widest italic h-8"></p>
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
      <section className="bg-gradient-to-b from-black to-[#111111]">
        <div className="container flex flex-col items-center lg:pt-20">
          <h2 className="text-3xl font-bold tracking-wide">Experience</h2>
          <div className="mt-16 w-full sm:max-w-[360px] md:max-w-[700px] lg:max-w-[1100px] xl:max-w-[1200px] flex justify-center gap-20 lg:h-[360px] ">
            {
              experience.map((info) => (
                <div key={info.company} className="w-[340px] even:mt-auto">
                  <p className="text-xl font-bold text-[#ededed]">{info.company}</p>
                  <p className="text-sm text-[#ededed] italic">{info.timeline}</p>
                  <p className="text-sm mt-2 text-[#ededed]">{info.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-black to-[#111111]">
        <div className="container flex flex-col items-center lg:pt-20">
          <h2 className="text-3xl font-bold tracking-wide">Project</h2>
          
        </div>
      </section>
    </Suspense>
  );
}
