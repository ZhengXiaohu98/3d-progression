"use client";
import Link from "next/link";
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
    }
  ],
  "Utils": [
    {
      "nav": "Capture",
      "url": "/ui/capture"
    }
  ]
}

export const SlideBar: React.FC<SlideBarProps> = () => {

  const pathname = usePathname();

  return (
    <div className="sm:hidden h-fit w-[252px] sticky top-36 shrink-0 lg:flex flex-col gap-8">
      {
        Object.entries(slideBarData).map(([navTitle, navs]) => (
          <div key={navTitle} className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-accent-dark dark:text-accent-white">{navTitle}</h2>
            <ul>
              {
                navs.sort((a, b) => a.nav.localeCompare(b.nav)).map((nav) => (
                  <Link key={nav.nav} href={nav.url}>
                    <li className={cn("overflow-hidden font-normal text-accent-300 dark:text-accent-aaa hover:font-semibold hover:text-accent-dark dark:hover:text-accent-white transition-all hover:translate-x-0.5 my-1", pathname === nav.url ? "font-medium text-accent-dark dark:text-accent-white" : "text-sm")}>
                      <div className={cn("flex items-center gap-2 transition", pathname === nav.url ? "" : "-translate-x-8")}>
                        <svg className="w-6 h-6 rotate-180 mt-px" fill="none" viewBox="0 0 24 24" >
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
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
  );
};
