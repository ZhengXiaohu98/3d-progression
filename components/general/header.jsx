import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeSwitch from "./ThemeSwitch";

export const Header = () => {

  useGSAP(() => {
    gsap.from("#header", {
      opacity: 0,
      y: 30,
      ease: "power2.inOut",
      duration: 0.8
    })
  });

  const navigations = [
    {
      "nav": "Projects",
      "url": "/projects"
    },
    {
      "nav": "Blog",
      "url": "project"
    },
    {
      "nav": "About",
      "url": "#about"
    },
    {
      "nav": "Contact",
      "url": "#contact"
    }
  ]
  return (
    <header id="header" className="fixed container lg:max-w-[1060px] md:max-w-[680px] sm:max-w top-5 left-1/2 -translate-x-1/2 z-[50] bg-white/20 dark:bg-black/20 backdrop-blur-md h-16 flex items-center justify-between rounded-xl shadow-md shadow-black/10 dark:shadow-white/10">
      <div className="flex items-center md:gap-10 lg:gap-20">
        <Link href="/">
          <Image src="/logo_white.png" width={48} height={48} alt="logo_xh" className="dark:block hidden" />
          <Image src="/logo_black.png" width={48} height={48} alt="logo_xh" className="dark:hidden" />
        </Link>
        <div className="sm:hidden md:flex items-center dark:text-[#999] text-[#333] gap-6">
          {
            navigations.map((navigation) => (
              <Link key={navigation.nav} href={navigation.url} className="relative inline-block px-6 py-3 text-base transition dark:hover:text-white hover:text-black group overflow-hidden tracking-wide">
                {navigation.nav}
              </Link>
            ))
          }
        </div>
      </div>
      <ThemeSwitch />
    </header>
  )
}