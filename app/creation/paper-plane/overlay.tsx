import { Scroll, useScroll } from "@react-three/drei";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useFrame } from "@react-three/fiber";

interface SectionProps {
  right?: boolean;
  opacity?: number;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 items-center ${props.right ? "md:items-end" : "md:items-start"}`}
      style={{ opacity: props.opacity }}
    >
      <div className="w-[370px] md:w-1/2 flex items-center justify-center">
        <div className="max-w-[600px] w-full">
          <div className="rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay: React.FC = () => {
  const scroll = useScroll();
  const [logoOpacity, setLogoOpacity] = useState<number>(0);
  const [scrollOpacity, setScrollOpacity] = useState<number>(0);
  const [sectionOpacityArr, setSectionOpacityArr] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  useFrame(() => {
    setLogoOpacity(scroll.range(0.98, 0.02));
    setScrollOpacity(1 - scroll.range(0, 0.03));
    setSectionOpacityArr([
      scroll.curve(0.1, 0.1),
      scroll.curve(0.24, 0.1),
      scroll.curve(0.39, 0.1),
      scroll.curve(0.54, 0.1),
      scroll.curve(0.68, 0.1),
      scroll.curve(0.82, 0.1)
    ]);
  });

  return (
    <Scroll html>
      <div className="w-screen select-none" >
        <Section right opacity={scrollOpacity}>
          <div className="w-20 flex flex-col items-center">
            <svg className="w-24 h-24 animate-bounce text-accent-300 dark:text-accent-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10.8C5 8.18126 5 6.87188 5.58944 5.91001C5.91926 5.37178 6.37178 4.91926 6.91001 4.58944C7.87188 4 9.18126 4 11.8 4H12.2C14.8187 4 16.1281 4 17.09 4.58944C17.6282 4.91926 18.0807 5.37178 18.4106 5.91001C19 6.87188 19 8.18126 19 10.8V14C19 14.9288 19 15.3933 18.9487 15.7832C18.5942 18.4756 16.4756 20.5942 13.7832 20.9487C13.3933 21 12.9288 21 12 21V21C11.0712 21 10.6067 21 10.2168 20.9487C7.52444 20.5942 5.40579 18.4756 5.05133 15.7832C5 15.3933 5 14.9288 5 14V10.8Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
              <path d="M12 4V9" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-2xl font-semibold italic whitespace-nowrap">scroll down</p>
          </div>
        </Section>
        <Section right opacity={sectionOpacityArr[0]}>
          <h1 className="intro-text font-semibold md:text-3xl md:leading-relaxed text-2xl leading-normal tracking-wider bg-clip-text text-transparent bg-linear-to-b dark:from-white dark:to-white/80 from-black to-black/80">
            {"I'm Xiaohu, a Web Developer building "}
            <span className="dark:from-[#c2410c77] dark:via-[#7e22c755] dark:to-[#c2410c77] from-orange-base via-purple-base to-orange-base bg-clip-text text-transparent bg-linear-to-l gradient-text bg-[length:200%_100%]">{"creative engaging 3D"}</span> {"websites."}
          </h1>
          <p className="intro-text text-smoke-base dark:text-accent-900 tracking-wide text-sm font-mono">{"Exploring the ocean of code"}</p>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={sectionOpacityArr[1]}>
          <div className="p-4 w-full flex flex-col gap-1.5">
            <div className="flex items-center gap-2 dark:text-accent-white text-accent-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <g clipPath="url(#clip0_429_11075)">
                  <path d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 11.9999L3 13.9999L5 11.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 7.99994L11 12.9999L16 12.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_429_11075">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-base italic tracking-wide">{"June 2021 - August 2021"}</p>
            </div>
            <p className="text-2xl font-bold dark:text-accent-white text-accent-300">{"Unadat - Software Engineering Intern"}</p>
            <p className="dark:text-accent-900 text-smoke-base text-lg">{"Collaborated with the UI team to develop new features and resolve bugs, improving website performance and meeting customer needs."}</p>
            <p className="animate-bounce mt-6">↓</p>
          </div>
        </Section>
        <Section opacity={sectionOpacityArr[2]}>
          <div className="p-4 w-full flex flex-col gap-1.5">
            <div className="flex items-center gap-2 dark:text-accent-white text-accent-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <g clipPath="url(#clip0_429_11075)">
                  <path d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 11.9999L3 13.9999L5 11.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 7.99994L11 12.9999L16 12.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_429_11075">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-base italic tracking-wide">{"June 2022 - August 2022"}</p>
            </div>
            <p className="text-2xl font-bold dark:text-accent-white text-accent-300">{"Google - SPS Program"}</p>
            <p className="dark:text-accent-900 text-smoke-base text-lg">{"Developed a personal portfolio and completed team projects with Google mentors, gaining proficiency in Java backend, Git, and Google APIs like Maps, Translate, and CloudStore."}</p>
            <p className="animate-bounce mt-6">↓</p>
          </div>
        </Section>
        <Section opacity={sectionOpacityArr[3]}>
          <div className="p-4 w-full flex flex-col gap-1.5">
            <div className="flex items-center gap-2 dark:text-accent-white text-accent-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <g clipPath="url(#clip0_429_11075)">
                  <path d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 11.9999L3 13.9999L5 11.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 7.99994L11 12.9999L16 12.9999" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_429_11075">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-base italic tracking-wide">{"February 2023 - Current"}</p>
            </div>
            <p className="text-2xl font-bold dark:text-accent-white text-accent-300">{"Fanruan Software - Frontend Engineer"}</p>
            <p className="dark:text-accent-900 text-smoke-base text-lg">{"Used Next.js to migrate and upgrade the official website, implementing internationalization, optimizing SEO, and enhancing performance."}</p>
            <p className="animate-bounce mt-6">↓</p>
          </div>
        </Section>
        <Section right opacity={sectionOpacityArr[4]}>
          <h2 className="font-semibold font-serif text-2xl">
            My UI
          </h2>
          <div className="mt-6 flex flex-col gap-4 max-w-[460px]">
            <div className="relative w-full h-[200px] md:h-[300px]">
              <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M100,150 C200,50 300,250 400,150 C500,50 600,250 700,150"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300 dark:text-gray-700"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50,200 C150,100 250,300 350,200 C450,100 550,300 750,150"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 dark:text-gray-600"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M150,250 C250,150 350,350 450,250 C550,150 650,350 700,200"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-500 dark:text-gray-500"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                />

                {/* 沿路径移动的元素 */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="6"
                  fill="#c2410c"
                  initial={{ offsetDistance: "0%" }}
                  whileInView={{
                    offsetDistance: "100%",
                    transition: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }
                  }}
                  viewport={{ once: true }}
                  style={{ offsetPath: "path('M100,150 C200,50 300,250 400,150 C500,50 600,250 700,150')" }}
                />

                <motion.circle
                  cx="0"
                  cy="0"
                  r="4"
                  fill="#7e22c7"
                  initial={{ offsetDistance: "0%" }}
                  whileInView={{
                    offsetDistance: "100%",
                    transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }
                  }}
                  viewport={{ once: true }}
                  style={{ offsetPath: "path('M50,200 C150,100 250,300 350,200 C450,100 550,300 750,150')" }}
                />

                <motion.circle
                  cx="0"
                  cy="0"
                  r="8"
                  fill="#f472b6"
                  initial={{ offsetDistance: "0%" }}
                  whileInView={{
                    offsetDistance: "100%",
                    transition: { duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear" }
                  }}
                  viewport={{ once: true }}
                  style={{ offsetPath: "path('M150,250 C250,150 350,350 450,250 C550,150 650,350 700,200')" }}
                />

                {/* 汇聚点动画 */}
                <motion.circle
                  cx="400"
                  cy="150"
                  r="15"
                  className="fill-orange-base/30 dark:fill-purple-base/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                />

                <motion.circle
                  cx="400"
                  cy="150"
                  r="8"
                  className="fill-orange-base dark:fill-purple-base"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                />
              </svg>

              {/* 沿着线条的链接按钮 */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[30%] left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                  <Link href="/ui/accordion">
                    <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                      Accordion
                    </div>
                  </Link>
                </div>

                <div className="absolute top-[60%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                  <Link href="/ui/dual-compare">
                    <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                      Compare
                    </div>
                  </Link>
                </div>

                <div className="absolute top-[40%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
                  <Link href="/ui/float">
                    <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                      Float
                    </div>
                  </Link>
                </div>

                <div className="absolute top-[70%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                  <Link href="/ui/navigator">
                    <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                      Navigation
                    </div>
                  </Link>
                </div>

                <div className="absolute top-[30%] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
                  <Link href="/ui/glow">
                    <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                      Glow
                    </div>
                  </Link>
                </div>

                <div className="absolute top-[60%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
                  <Link href="/ui/text">
                    <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                      Text
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={sectionOpacityArr[5]}>
          <p className="font-semibold text-3xl">
            Reach out to me
          </p>
          <ul className="mt-6 flex flex-col gap-2 dark:text-accent-white text-accent-300 text-lg">
            <li className="flex gap-2 items-center">
              <svg className="w-5 h-5 -mt-0.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.799">
                <path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
              </svg>
              <Link href="https://x.com/ZhengPercy">X</Link>
            </li>
            <li className="flex gap-2 items-center">
              <svg className="w-5 h-5 -mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
              </svg>
              <Link href="https://github.com/ZhengXiaohu98" >Github</Link>
            </li >
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 -mt-0.5" viewBox="0 0 32 32">
                <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
              </svg>
              <Link href="https://leetcode.com/u/acehu/">
                LeetCode
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5" viewBox="-51.45 -69.25 445.9 415.5">
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M274 167c-7.778 0-14-6.222-14-14s6.222-14 14-14 14 6.222 14 14c0 7.389-6.222 14-14 14m-69 0c-7.778 0-14-6.222-14-14s6.222-14 14-14 14 6.222 14 14c0 7.389-6.222 14-14 14m102.39 78.581C329.216 229.871 343 206.5 343 180.827 343 133.316 297.052 95 240 95s-103 38.316-103 85.827c0 47.512 45.948 85.828 103 85.828 11.87 0 22.974-1.533 33.695-4.598.766-.383 1.915-.383 3.063-.383 1.915 0 3.83.766 5.361 1.532l22.591 13.028c.766.383 1.149.766 1.915.766a3.433 3.433 0 003.446-3.448c0-.767-.383-1.533-.383-2.683 0-.383-3.063-10.728-4.595-17.242-.383-.766-.383-1.532-.383-2.299-.383-2.682.766-4.597 2.68-5.747" />
                  <path d="M164 86c-8.93 0-16-7.07-16-16s7.07-16 16-16 16 7.07 16 16c0 8.558-7.07 16-16 16m-82 0c-8.93 0-16-7.07-16-16s7.07-16 16-16 16 7.07 16 16c0 8.558-7.07 16-16 16m41.96-86C55.646 0 0 45.895 0 102.88c0 30.98 16.502 58.899 42.983 77.64 1.919 1.53 3.454 3.824 3.454 6.884 0 .764-.384 1.912-.384 2.677-1.919 7.649-5.373 20.27-5.757 20.652-.383 1.148-.767 1.913-.767 3.06 0 2.295 1.919 4.207 4.221 4.207.768 0 1.535-.382 2.303-.765l27.248-15.68c1.919-1.148 4.222-1.913 6.524-1.913 1.152 0 2.303 0 3.454.383 12.665 3.442 26.48 5.736 40.297 5.736h6.908c-2.687-8.031-4.222-16.445-4.222-25.242 0-51.631 50.658-93.701 112.83-93.701H246C237.173 37.48 185.747 0 123.96 0" />
                </g>
              </svg>
              <p>
                wechat: zxh635148320
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512">
                <path fill="currentColor" d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083   h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92   c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87   C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024   c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674   l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469   c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599   C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92   c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92   C462.107,387.195,462.94,397.75,456.948,404.771z" />
              </svg>
              <Link href="mailto:zxh635148320@gmail.com">
                zxh635148320@gmail.com
              </Link>
            </li>
          </ul>
        </Section>
        <section className="w-full h-screen flex justify-center items-center" style={{ opacity: logoOpacity }}>
          <Link href="/">
            <div id="logo" className="relative mt-[-120px] w-[120px] h-[120px]">
              <Image src="/logo_original_1024.png" width={100} height={100} alt="logo_xh" className="rounded-3xl w-[120px] h-[120px]" />
              <div className="absolute inset-0 -z-10 bg-linear-to-bl from-orange-base to-purple-base opacity-50 blur-xl" />
            </div>
          </Link>
        </section>
      </div>
    </Scroll>
  );
};

