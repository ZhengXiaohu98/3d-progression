"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/utils";

const navToAnchor = (nav: string) => {
  return nav.replace(/\s+/g, "-").toLowerCase();
};

interface NavigatorProps {
  className?: string;
  queryString?: "h2" | "h2, h3" | "h2, h3, h4",
  offset?: number;
}

export const Navigator: React.FC<NavigatorProps> = ({ className, queryString = "h2, h3, h4", offset = 100 }) => {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Define the structure for heading data
  interface Heading {
    title: string;
    level: number;
    id: string;
    children: Heading[];
  }

  const [headings, setHeadings] = useState<Heading[]>([]);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.0001
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (checkboxRef.current && !checkboxRef.current.contains(event.target as Node)) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    const headingElements = document.querySelectorAll(queryString);
    const headingArray: Heading[] = [];

    headingElements.forEach((heading) => {

      const level = parseInt(heading.tagName.charAt(1));
      const title = (heading as any).innerText.trim();
      const id = title.toLowerCase().replace(/\s+/g, "-");

      heading.id = id;

      const headingData: Heading = { title, level, id, children: [] };

      if (level === 2) {
        headingArray.push(headingData);
      } else if (level === 3) {
        // h3
        headingArray[headingArray.length - 1].children.push(headingData);
      } else {
        // h4
        headingArray[headingArray.length - 1].children[headingArray[headingArray.length - 1].children.length - 1].children.push(headingData);
      }

    });

    setHeadings(headingArray);

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [queryString]);

  const renderHeadings = (headings: Heading[]) => {
    return (
      <>
        {
          headings.map((cur) => (
            <li key={cur.title}>
              <span onClick={() => handleScroll(navToAnchor(cur.title))} className="cursor-pointer dark:hover:text-accent-white hover:text-accent-dark transition duration-150">{cur.title}</span>
              {
                cur.children.length > 0 &&
                <li className="mt-0.5 flex flex-col gap-1.5 pl-4">
                  {
                    cur.children.map((child) => (
                      <li key={child.title} className="text-sm">
                        <span onClick={() => handleScroll(navToAnchor(child.title))} className="cursor-pointer dark:hover:text-accent-white hover:text-accent-dark transition duration-150">{child.title}</span>
                        {
                          child.children.length > 0 &&
                          <ul className="mt-1 flex flex-col gap-1 pl-4">
                            {
                              child.children.map((subChild) => (
                                <li key={subChild.title}>
                                  <span onClick={() => handleScroll(navToAnchor(subChild.title))} className="cursor-pointer dark:hover:text-accent-white hover:text-accent-dark transition duration-150">{subChild.title}</span>
                                </li>
                              ))
                            }
                          </ul>
                        }
                      </li>
                    ))
                  }
                </li>
              }
            </li>
          ))
        }
      </>
    );
  };

  return (
    <>
      {/* large viewport */}
      <div className={cn("hidden lg:block w-[252px] sticky !top-36 shrink-0 pl-4 py-2 select-none", className)}>
        <p className="font-semibold text-lg dark:text-accent-white text-accent-dark">Table of Contents</p>
        <ul className="flex flex-col mt-3 gap-0.5 dark:text-accent-aaa text-accent-300">
          {renderHeadings(headings)}
        </ul>
        {/* scroll percentage */}
        <motion.div className="my-5 rounded-full w-full h-0.5 origin-left bg-accent-ccc dark:bg-accent-white z-10" style={{ scaleX }} />
        <button className="flex items-center gap-2 dark:text-accent-ccc text-accent-dark" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
          <svg className="w-6 h-6 -rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
          </svg>
          <p>Scroll to Top</p>
        </button>
      </div>
      {/* small viewport */}
      <div className="sm:block lg:hidden fixed bottom-8 right-6 peer group overflow-hidden scale-125">
        <svg className="sm:block lg:hidden w-6 h-6 text-dark-base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" d="M5 6h24" className="group-has-[:checked]:translate-x-[50%] transition" />
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" d="M5 12h24" className="group-has-[:checked]:translate-x-[25%] transition" />
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" d="M5 18h24" />
        </svg>
        <input ref={checkboxRef} type="checkbox" className="w-full h-full absolute left-0 top-0 opacity-0" />
      </div>
      <div className="duration-200 sm:block lg:hidden fixed bottom-16 right-5 opacity-0 pointer-events-none translate-y-1 peer-has-[:checked]:pointer-events-auto peer-has-[:checked]:translate-y-0 peer-has-[:checked]:opacity-100 transition bg-white dark:bg-accent-dark py-4 px-5 rounded-lg border dark:border-accent-300 border-accent-white dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05] z-[50]">
        <ul className="flex flex-col gap-1 dark:text-accent-aaa text-accent-300">
          {renderHeadings(headings)}
        </ul>
        <motion.div className="my-2 rounded-full w-full h-px origin-left bg-accent-ccc dark:bg-accent-white z-10" style={{ scaleX }} />

        <button className="dark:text-accent-ccc text-accent-dark" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
          <p>Scroll to Top</p>
        </button>
      </div>
    </>
  );
};
