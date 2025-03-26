"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ThemeSwitch } from "../general";

export const Header: React.FC = () => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (checkboxRef.current && !checkboxRef.current.contains(event.target as Node)) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useGSAP(() => {
    gsap.from("#header", {
      filter: "blur(4px)",
      scale: 0.98,
      ease: "back",
      duration: 0.5,
    });
  });

  const navigations = [
    {
      nav: "Creation",
      url: "/creation",
    },
    {
      nav: "Blog",
      url: "/blog",
    },
    {
      nav: "UI",
      url: "/ui",
    },
  ];

  return (
    <>
      <div
        id="header-light"
        className="absolute left-0 top-0 w-full lg:h-[371px] md:h-[339px] h-[236px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 20% 50% at 40% -10%, #c2410c77, transparent), radial-gradient(ellipse 30% 60% at 45% -5%, #f472b655, transparent)",
        }}
      />
      <header
        id="header"
        className="transition-all fixed w-full left-1/2 -translate-x-1/2 z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md h-12 md:h-16 shadow-md shadow-black/10 dark:shadow-white/10"
      >
        <div className="container relative h-full flex items-center justify-between">
          <div className="flex items-center md:gap-10 lg:gap-20">
            <Link href="/" className="md:shadow-[0_7px_6px_-6px] shadow-accent-dark dark:shadow-accent-white ">
              <Image
                src="/logo_white.png"
                width={48}
                height={48}
                alt="logo_xh"
                className="dark:block hidden"
                priority
              />
              <Image
                src="/logo_black.png"
                width={48}
                height={48}
                alt="logo_xh"
                className="dark:hidden"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center dark:text-[#cccccc] text-accent-300 gap-6">
              {navigations.map((navigation) => (
                <Link
                  key={navigation.nav}
                  href={navigation.url}
                  className="relative inline-block px-6 py-3 text-base transition dark:hover:text-white hover:text-black group overflow-hidden tracking-wide"
                >
                  {navigation.nav}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            <div className="block md:hidden peer group overflow-hidden scale-125 mr-4 mt-px">
              <svg
                className="block lg:hidden w-6 h-6 text-dark-base"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" d="M5 6h24" />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.2"
                  d="M5 12h24"
                  className="group-has-checked:translate-x-[25%] transition"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.2"
                  d="M5 18h24"
                  className="group-has-checked:translate-x-[50%] transition"
                />
              </svg>
              <input
                ref={checkboxRef}
                type="checkbox"
                className="w-full h-full absolute left-0 top-0 opacity-0"
              />
            </div>
            <div className="duration-200 block lg:hidden absolute top-12 right-4 opacity-0 pointer-events-none -translate-x-1 peer-has-checked:pointer-events-auto peer-has-checked:translate-x-0 peer-has-checked:opacity-100 transition bg-white dark:bg-accent-dark py-1.5 rounded-lg dark:shadow-white/20 shadow-md shadow-black/[0.05]">
              <ul className="flex flex-col dark:text-accent-white text-accent-300">
                {navigations.map((navigation) => (
                  <Link
                    key={navigation.nav}
                    href={navigation.url}
                    className="relative inline-block px-5 py-1.5 text-base transition dark:hover:text-white hover:text-black group overflow-hidden tracking-wide"
                  >
                    {navigation.nav}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};
