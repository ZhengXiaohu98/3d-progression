"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';
import { cn } from "@/utils";

interface SlideBarProps {
}

const slideBarData = {
  "General": [
    {
      "nav": "Accordion",
      "url": "/ui/accordion",
    },
    {
      "nav": "Tabs",
      "url": "/ui/tabs",
    },
    {
      "nav": "Marquee",
      "url": "/ui/marquee"
    },
    {
      "nav": "Tooltip",
      "url": "/ui/tooltip"
    },
    {
      "nav": "World Map",
      "url": "/ui/world-map"
    }
  ],
  "Effects": [
    {
      "nav": "3D Rotate",
      "url": "/ui/3d-rotate",
    },
    {
      "nav": "Float",
      "url": "/ui/float"
    },
    {
      "nav": "Glow",
      "url": "/ui/glow"
    },
    {
      "nav": "Book",
      "url": "/ui/book"
    },
    {
      "nav": "Point Light",
      "url": "/ui/point-light"
    },
    {
      "nav": "Particles",
      "url": "/ui/particles",
    },
    {
      "nav": "Dual Compare",
      "url": "/ui/dual-compare"
    },
    {
      "nav": "Text",
      "url": "/ui/text"
    },
    {
      "nav": "3D Card",
      "url": "/ui/3d-card"
    },
    {
      "nav": "View",
      "url": "/ui/view"
    },
    {
      "nav": "Window",
      "url": "/ui/window"
    },
    {
      "nav": "Auto Switch",
      "url": "/ui/auto-switch"
    }
  ],
  "Utils": [
    {
      "nav": "Navigator",
      "url": "/ui/navigator"
    }
  ]
}

export const SlideBar: React.FC<SlideBarProps> = () => {

  const pathname = usePathname();
  const checkboxRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (checkboxRef.current && !checkboxRef.current.contains(event.target as Node)) {
        checkboxRef.current.checked = false;
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Large Viewport */}
      <div className="hidden h-fit w-[252px] sticky top-36 shrink-0 lg:flex flex-col gap-8">
        {
          Object.entries(slideBarData).map(([navTitle, navs]) => (
            <div key={navTitle} className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-accent-dark dark:text-accent-white">{navTitle}</p>
              <ul>
                {
                  navs.sort((a, b) => a.nav.localeCompare(b.nav)).map((nav) => (
                    <Link key={nav.nav} href={nav.url}>
                      <li className={cn("text-sm overflow-hidden font-normal transition-all duration-75 my-1", pathname === nav.url ? "text-lg font-medium text-pink-base" : "hover:translate-x-0.5 text-accent-300 dark:text-accent-aaa hover:text-accent-dark dark:hover:text-accent-white")}>
                        <div className={cn("flex items-center gap-2 transition", pathname === nav.url ? "" : "-translate-x-8")}>
                          <svg className="w-6 h-6 text-pink-base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z" />
                          </svg>
                          {nav.nav}
                        </div>
                      </li>
                    </Link>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      {/* Small ViewPort */}
      <div className="block lg:hidden fixed bottom-8 left-6 peer group overflow-hidden scale-125 z-50">
        <svg className="block lg:hidden w-6 h-6 text-dark-base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" d="M0 6h24" className="group-has-checked:translate-x-[-66%] transition" />
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" d="M0 12h24" className="group-has-checked:translate-x-[-33%] transition" />
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" d="M0 18h24" />
        </svg>
        <input ref={checkboxRef} type="checkbox" className="w-full h-full absolute left-0 top-0 opacity-0" />
      </div>
      <div className="max-h-[75vh] overflow-y-scroll scrollbar-hidden duration-200 block lg:hidden fixed bottom-16 left-5 opacity-0 pointer-events-none translate-y-1 peer-has-checked:pointer-events-auto peer-has-checked:translate-y-0 peer-has-checked:opacity-100 transition bg-white dark:bg-accent-dark py-4 px-5 rounded-lg border dark:border-accent-300 border-accent-white dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05] z-50">
        {
          Object.entries(slideBarData).map(([navTitle, navs]) => (
            <div key={navTitle} className="flex flex-col gap-1 mb-2 last:mb-0">
              <p className="font-semibold text-accent-dark dark:text-accent-white">{navTitle}</p>
              <ul>
                {
                  navs.sort((a, b) => a.nav.localeCompare(b.nav)).map((nav) => (
                    <Link key={nav.nav} href={nav.url}>
                      <li className={cn("text-xs overflow-hidden font-normal my-px", pathname === nav.url ? "text-base font-medium text-pink-base" : "text-accent-300 dark:text-accent-aaa")}>
                        <div className={cn("flex items-center gap-2 transition", pathname === nav.url ? "" : "-translate-x-8")}>
                          <svg className="w-6 h-6 text-pink-base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z" />
                          </svg>
                          {nav.nav}
                        </div>
                      </li>
                    </Link>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </>
  );
};
