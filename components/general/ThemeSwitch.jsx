"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import gsap from "gsap";

const playThemeTransAnim = (id) => {
  gsap.killTweensOf(id);
  const tl = gsap.timeline();
  tl.set(id, {
    opacity: 1,
  }).to(id, {
    maskImage: "linear-gradient(to right, black 0%, black 0%, transparent 0%, transparent 100%, black 100%, black 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 0%, black 0%, transparent 0%, transparent 100%, black 100%, black 100%)",
    duration: 0.8,
    ease: "power1.inOut"
  }).set(id, {
    maskImage: "linear-gradient(to right, black 0%, black 47%, transparent 47%, transparent 53%, black 53%, black 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 0%, black 47%, transparent 47%, transparent 53%, black 53%, black 100%)",
    opacity: 0,
  });
}

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  return (
    <div className="w-8 h-8 relative flex items-center justify-center group transition dark:hover:bg-gray-dark/50 hover:bg-gray-light/20 rounded-lg cursor-pointer">
      <div
        id="black-trans-div"
        className="w-screen h-[120vh] fixed left-1/2 -top-10 -translate-x-1/2 bg-accent-dark pointer-events-none opacity-0"
        style={{
          maskImage: "linear-gradient(to right, black 0%, black 47%, transparent 47%, transparent 53%, black 53%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 47%, transparent 47%, transparent 53%, black 53%, black 100%)",
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskPosition: "0 0",
          WebkitMaskPosition: "0 0",
        }}
      />
      <div
        id="white-trans-div"
        className="w-screen h-[120vh] fixed left-1/2 -top-10 -translate-x-1/2 bg-white pointer-events-none opacity-0"
        style={{
          maskImage: "linear-gradient(to right, black 0%, black 47%, transparent 47%, transparent 53%, black 53%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 47%, transparent 47%, transparent 53%, black 53%, black 100%)",
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskPosition: "0 0",
          WebkitMaskPosition: "0 0",
        }}
      />
      {
        resolvedTheme === "dark" &&
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-[#333333]dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
          onClick={() => {
            setTheme("light");
            playThemeTransAnim("#black-trans-div");
          }}
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
        </svg>
      }
      {
        resolvedTheme === "light" &&
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-500 dark:text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
          onClick={() => {
            setTheme("dark");
            playThemeTransAnim("#white-trans-div");
          }}
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      }


    </div>
  )
}

export default ThemeSwitch;